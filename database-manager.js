// Database Manager - Firebase Firestore Operations
// ================================================

// Initialize Firestore references
let appointmentsRef, customersRef;

if (typeof db !== 'undefined') {
    appointmentsRef = db.collection('appointments');
    customersRef = db.collection('customers');
    console.log('✅ Database collections initialized');
} else {
    console.warn('⚠️ Firebase not initialized, will use localStorage fallback');
}

// Export for use in enhanced-script.js
window.appointmentsRef = appointmentsRef;
window.customersRef = customersRef;

console.log('📊 Database Manager loaded');
