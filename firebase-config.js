// Firebase Configuration - Ghana Salon Booking
// ============================================

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqWR7hLBPyxVW7UzNUId40BNj9mUxBd34",
  authDomain: "ghana-salon-booking.firebaseapp.com",
  projectId: "ghana-salon-booking",
  storageBucket: "ghana-salon-booking.firebasestorage.app",
  messagingSenderId: "764407059314",
  appId: "1:764407059314:web:38b94b7e1e4a975afec3eb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Collection references
const appointmentsRef = db.collection('appointments');
const customersRef = db.collection('customers');
const businessesRef = db.collection('businesses');

console.log('🔥 Firebase initialized successfully!');
console.log('📊 Connected to:', firebaseConfig.projectId);
