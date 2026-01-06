// Multi-Language Translation System
const translations = {
    en: {
        nav_home: "Home", nav_profile: "My Profile", nav_admin: "Admin Login", nav_dashboard: "Dashboard", nav_logout: "Logout",
        hero_title: "Book Your Perfect Look", hero_subtitle: "Professional barbers and hairstylists across Ghana at your service",
        select_city: "Select Your City", all_cities: "All Cities", choose_salon: "Choose Your Salon", book_now: "Book Appointment",
        rating: "Rating", bookings_count: "Bookings", why_book: "Why Book With Us?",
        feature_realtime: "Real-Time Booking", feature_realtime_desc: "Instant confirmation with available time slots",
        feature_payment: "Secure Payment", feature_payment_desc: "Mobile Money, Card, or Pay at salon",
        feature_loyalty: "Loyalty Rewards", feature_loyalty_desc: "Earn points with every booking",
        feature_staff: "Choose Your Stylist", feature_staff_desc: "Book with your favorite professional",
        book_appointment: "Book Your Appointment", customer_info: "Customer Information", full_name: "Full Name",
        phone: "Phone Number", email: "Email (Optional)", select_location: "Select Location", branch: "Branch",
        gps_address: "GhanaPostGPS Address (Optional)", gps_help: "Your digital address for better directions",
        select_service: "Select Service & Stylist", service: "Service", choose_stylist: "Choose Your Stylist",
        select_datetime: "Select Date & Time", date: "Date", time: "Time",
        offpeak_hint: "⚡ Off-peak hours get 15% discount!", upload_reference: "Upload Reference Photo (Optional)",
        choose_photo: "Choose Photo", special_requests: "Special Requests (Optional)",
        service_price: "Service Price:", offpeak_discount: "Off-Peak Discount (15%):",
        deposit_required: "Deposit Required:", total_price: "Total Price:", duration: "Duration:", points_earn: "You'll earn:",
        payment_method: "Payment Method", mobile_money: "Mobile Money", momo_networks: "MTN, Vodafone, AirtelTigo",
        card: "Card Payment", card_types: "Visa, Mastercard", pay_salon: "Pay at Salon",
        pay_salon_note: "Full payment on arrival", confirm_booking: "Confirm Booking",
        booking_confirmed: "Booking Confirmed!", booking_success_msg: "Your appointment has been successfully booked.",
        points_added: "Points Added:", done: "Done", book_another: "Book Another",
        profile_login_title: "Welcome Back!", profile_login_subtitle: "Enter your phone number to view your profile",
        view_profile: "View My Profile", logout: "Logout", loyalty_points: "Loyalty Points", points: "points",
        points_to_reward: "points to next reward", available_rewards: "Available Rewards",
        reward_10off: "10% Off Next Booking", reward_free: "Free Service (up to GHS 50)", reward_vip: "VIP Status + 20% Off",
        total_bookings: "Total Bookings", total_spent: "Total Spent", favorite_service: "Favorite Service",
        booking_history: "Booking History", all: "All", upcoming: "Upcoming", past: "Past",
        admin_login: "Admin Login", admin_login_subtitle: "Please select your business to view appointments",
        select_business: "Select Your Business", password: "Password", demo_password: "Demo password: admin123",
        login: "Login", today: "Today", clear_all: "Clear All", today_appointments: "Today's Appointments",
        total_revenue: "Total Revenue", advanced_analytics: "Advanced Analytics", popular_services: "Popular Services",
        peak_hours: "Peak Booking Hours", staff_performance: "Staff Performance", customer_retention: "Customer Retention",
        new_customers: "New Customers:", returning_customers: "Returning Customers:", retention_rate: "Retention Rate:",
        monthly_revenue: "Monthly Revenue Trend", appointments: "Appointments", customer: "Customer", staff: "Staff",
        price: "Price", payment: "Payment", actions: "Actions", no_appointments: "No appointments yet",
        confirm_delete: "Confirm Delete", delete_message: "Are you sure you want to delete this appointment?",
        delete: "Delete", cancel: "Cancel", footer_rights: "All rights reserved.", footer_serving: "Serving Ghana nationwide",
        chat_title: "Chat Support", chat_message: "Connect your preferred chat service (Tawk.to, Crisp, WhatsApp)",
        install_app: "Install Our App", install_subtitle: "Quick access from your home screen", install_now: "Install",
        our_work: "Our Work"
    },
    tw: { // Twi translations
        nav_home: "Fie", nav_profile: "Me Profile", nav_admin: "Admin Kɔ Mu", hero_title: "Book Wo Perfect Look",
        hero_subtitle: "Professional barbers ne hairstylists wɔ Ghana nyinaa", select_city: "Paw Wo Kurow",
        all_cities: "Nkurow Nyinaa", choose_salon: "Paw Wo Salon", book_now: "Book Appointment",
        full_name: "Din Mũ", phone: "Phone Nɔma", service: "Service", date: "Date", time: "Time",
        confirm_booking: "Confirm Booking", done: "Awie", all: "Nyinaa", upcoming: "Ɛreba", past: "Akan"
    },
    ga: { // Ga translations
        nav_home: "Efie", nav_profile: "Mi Profile", nav_admin: "Admin Kɔ Nɔɔ", hero_title: "Book Wo Perfect Look",
        hero_subtitle: "Professional barbers ni hairstylists wɔ Ghana gbiɛɛ", select_city: "Paa Wo Man",
        all_cities: "Mantsɛ Gbiɛɛ", choose_salon: "Paa Wo Salon", full_name: "Yoo Mli", phone: "Phone Namɔɔ",
        all: "Gbiɛɛ", upcoming: "Ɛba", past: "Kan"
    },
    ee: { // Ewe translations
        nav_home: "Aƒe", nav_profile: "Nye Profile", nav_admin: "Admin Ge Eme", hero_title: "Book Wò Perfect Look",
        hero_subtitle: "Professional barbers kple hairstylists le Ghana katã", select_city: "Tia Wò Du",
        all_cities: "Duwo Katã", choose_salon: "Tia Wò Salon", full_name: "Ŋkɔ Bliboa", phone: "Phone Nɔmɛ",
        all: "Katã", upcoming: "Egbɔna", past: "Vayi"
    }
};

function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const selector = document.getElementById('languageSelector');
    if (selector) {
        selector.value = savedLang;
        translatePage(savedLang);
        selector.addEventListener('change', function() {
            translatePage(this.value);
        });
    }
});