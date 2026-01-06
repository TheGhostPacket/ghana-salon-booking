// Database Manager - Firebase Firestore Operations
// Phase 2 - Cloud Database Integration
// =================================================

// ============================================
// APPOINTMENT FUNCTIONS
// ============================================

async function saveAppointment(businessId, appointment) {
  try {
    // Add timestamp and business ID
    const appointmentData = {
      ...appointment,
      businessId: businessId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'confirmed'
    };

    // Save to Firestore
    const docRef = await appointmentsRef.add(appointmentData);

    console.log('✅ Appointment saved to cloud! ID:', docRef.id);
    return docRef.id;

  } catch (error) {
    console.error('❌ Error saving appointment:', error);
    alert('Error saving appointment. Please try again.');
    throw error;
  }
}

async function getAppointments(businessId) {
  try {
    const snapshot = await appointmentsRef
      .where('businessId', '==', businessId)
      .orderBy('date', 'desc')
      .orderBy('createdAt', 'desc')
      .get();

    const appointments = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      appointments.push({ 
        id: doc.id, 
        ...data,
        // Convert Firestore timestamp to ISO string if needed
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
      });
    });

    console.log(`📊 Loaded ${appointments.length} appointments for ${businessId}`);
    return appointments;

  } catch (error) {
    console.error('❌ Error getting appointments:', error);
    return [];
  }
}

async function getAllAppointments() {
  try {
    const snapshot = await appointmentsRef
      .orderBy('date', 'desc')
      .orderBy('createdAt', 'desc')
      .limit(500) // Limit to recent 500 for performance
      .get();

    const appointments = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      appointments.push({ 
        id: doc.id, 
        ...data,
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
      });
    });

    console.log(`📊 Loaded ${appointments.length} total appointments`);
    return appointments;

  } catch (error) {
    console.error('❌ Error getting all appointments:', error);
    return [];
  }
}

async function getCustomerAppointments(phone) {
  try {
    const snapshot = await appointmentsRef
      .where('customerPhone', '==', phone)
      .orderBy('date', 'desc')
      .orderBy('createdAt', 'desc')
      .get();

    const appointments = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      appointments.push({ 
        id: doc.id, 
        ...data,
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
      });
    });

    console.log(`📊 Loaded ${appointments.length} appointments for customer ${phone}`);
    return appointments;

  } catch (error) {
    console.error('❌ Error getting customer appointments:', error);
    return [];
  }
}

async function deleteAppointment(businessId, appointmentId) {
  try {
    await appointmentsRef.doc(appointmentId).delete();
    console.log('✅ Appointment deleted:', appointmentId);
    return true;

  } catch (error) {
    console.error('❌ Error deleting appointment:', error);
    alert('Error deleting appointment. Please try again.');
    return false;
  }
}

async function clearAllAppointments(businessId) {
  if (!confirm('⚠️ Are you sure you want to delete ALL appointments for this business? This cannot be undone!')) {
    return false;
  }

  try {
    const snapshot = await appointmentsRef
      .where('businessId', '==', businessId)
      .get();

    // Use batch delete for better performance
    const batch = db.batch();
    snapshot.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    console.log(`✅ Cleared ${snapshot.size} appointments for ${businessId}`);
    return true;

  } catch (error) {
    console.error('❌ Error clearing appointments:', error);
    alert('Error clearing appointments. Please try again.');
    return false;
  }
}

// ============================================
// CUSTOMER PROFILE FUNCTIONS
// ============================================

async function getCustomerProfile(phone) {
  try {
    const doc = await customersRef.doc(phone).get();

    if (doc.exists) {
      const data = doc.data();
      return { 
        id: doc.id, 
        ...data,
        joinDate: data.joinDate ? data.joinDate.toDate().toISOString() : new Date().toISOString()
      };
    } else {
      // Create new customer profile
      const newProfile = {
        phone: phone,
        name: '',
        email: '',
        points: 0,
        totalBookings: 0,
        totalSpent: 0,
        joinDate: firebase.firestore.FieldValue.serverTimestamp()
      };

      await customersRef.doc(phone).set(newProfile);
      console.log('✅ New customer profile created:', phone);
      return { ...newProfile, id: phone, joinDate: new Date().toISOString() };
    }

  } catch (error) {
    console.error('❌ Error getting customer profile:', error);
    return null;
  }
}

async function updateCustomerProfile(phone, updates) {
  try {
    await customersRef.doc(phone).update(updates);
    console.log('✅ Customer profile updated:', phone);
    return await getCustomerProfile(phone);

  } catch (error) {
    console.error('❌ Error updating customer profile:', error);
    return null;
  }
}

async function addLoyaltyPoints(phone, points) {
  try {
    const profile = await getCustomerProfile(phone);
    const newPoints = (profile.points || 0) + points;

    await customersRef.doc(phone).update({
      points: firebase.firestore.FieldValue.increment(points)
    });

    console.log(`✅ Added ${points} loyalty points to ${phone}. New total: ${newPoints}`);
    return newPoints;

  } catch (error) {
    console.error('❌ Error adding loyalty points:', error);
    return 0;
  }
}

// ============================================
// REAL-TIME LISTENERS (BONUS FEATURE!)
// ============================================

function listenToAppointments(businessId, callback) {
  console.log('🔄 Setting up real-time listener for:', businessId);

  return appointmentsRef
    .where('businessId', '==', businessId)
    .orderBy('date', 'desc')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const appointments = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        appointments.push({ 
          id: doc.id, 
          ...data,
          createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
        });
      });

      console.log(`🔄 Real-time update: ${appointments.length} appointments`);
      callback(appointments);
    }, error => {
      console.error('❌ Real-time listener error:', error);
    });
}

function listenToAllAppointments(callback) {
  console.log('🔄 Setting up real-time listener for all appointments');

  return appointmentsRef
    .orderBy('date', 'desc')
    .orderBy('createdAt', 'desc')
    .limit(500)
    .onSnapshot(snapshot => {
      const appointments = [];
      snapshot.forEach(doc => {
        const data = doc.data();
        appointments.push({ 
          id: doc.id, 
          ...data,
          createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
        });
      });

      console.log(`🔄 Real-time update: ${appointments.length} total appointments`);
      callback(appointments);
    }, error => {
      console.error('❌ Real-time listener error:', error);
    });
}

console.log('📊 Database Manager loaded and ready!');
console.log('✅ All functions use Firebase Firestore');
console.log('🔄 Real-time sync enabled!');
