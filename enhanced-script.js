// Ghana Salon Booking System - Enhanced JavaScript v2.1 (FIXED)
// ========================================================

// BUSINESS DATA
const businesses = {
    barber_accra: {
        id: 'barber_accra', name: "Kofi's Classic Cuts", city: "accra", location: "Osu, Accra",
        ghanaPostGPS: "GA-123-4567", type: "Barbershop", rating: 4.9, totalBookings: 247,
        services: [
            {id:1,name:"Classic Haircut",price:50,duration:"45 min",points:5},
            {id:2,name:"Fade Cut",price:60,duration:"1 hour",points:6},
            {id:3,name:"Beard Trim",price:25,duration:"30 min",points:3},
            {id:4,name:"Hot Towel Shave",price:40,duration:"45 min",points:4},
            {id:5,name:"Haircut + Beard Combo",price:70,duration:"1.5 hours",points:7},
            {id:6,name:"Kids Haircut",price:35,duration:"30 min",points:4}
        ],
        staff: [
            {id:1,name:"Kofi Mensah",specialty:"Fades & Modern Cuts",rating:4.9,image:"👨🏿"},
            {id:2,name:"Kwame Asante",specialty:"Traditional Styles",rating:4.8,image:"👨🏾"},
            {id:3,name:"Yaw Boateng",specialty:"Beard Specialist",rating:4.7,image:"👨🏿‍🦱"}
        ],
        gallery: ["🪒 Professional fade cut","✂️ Classic gentleman style","💈 Hot towel shave service"],
        offPeakHours: ["09:00 AM","09:30 AM","10:00 AM","02:00 PM","02:30 PM","03:00 PM"]
    },
    salon_accra: {
        id: 'salon_accra', name: "Ama's Beauty Haven", city: "accra", location: "East Legon, Accra",
        ghanaPostGPS: "GA-456-7890", type: "Hair Salon", rating: 4.8, totalBookings: 389,
        services: [
            {id:1,name:"Box Braids",price:250,duration:"4 hours",points:25},
            {id:2,name:"Ghana Weaving",price:150,duration:"3 hours",points:15},
            {id:3,name:"Cornrows",price:80,duration:"2 hours",points:8},
            {id:4,name:"Hair Relaxing",price:120,duration:"2 hours",points:12},
            {id:5,name:"Natural Hair Care",price:100,duration:"1.5 hours",points:10},
            {id:6,name:"Hair Coloring",price:200,duration:"3 hours",points:20},
            {id:7,name:"Weave Installation",price:180,duration:"2.5 hours",points:18},
            {id:8,name:"Wash & Blow Dry",price:60,duration:"1 hour",points:6}
        ],
        staff: [
            {id:1,name:"Ama Owusu",specialty:"Braiding Expert",rating:4.9,image:"👩🏿"},
            {id:2,name:"Akua Darko",specialty:"Natural Hair",rating:4.8,image:"👩🏾"},
            {id:3,name:"Efua Osei",specialty:"Weaving & Color",rating:4.7,image:"👩🏿‍🦱"},
            {id:4,name:"Abena Mensah",specialty:"All Styles",rating:4.6,image:"👩🏾"}
        ],
        gallery: ["💁🏿‍♀️ Beautiful box braids","💇🏿‍♀️ Natural hair styling","🌟 Ghana weaving perfection"],
        offPeakHours: ["09:00 AM","09:30 AM","10:00 AM","03:00 PM","03:30 PM"]
    },
    barber_kumasi: {
        id: 'barber_kumasi', name: "Kwabena's Cuts", city: "kumasi", location: "Adum, Kumasi",
        ghanaPostGPS: "AK-234-5678", type: "Barbershop", rating: 4.7, totalBookings: 156,
        services: [
            {id:1,name:"Classic Haircut",price:45,duration:"45 min",points:5},
            {id:2,name:"Fade Cut",price:55,duration:"1 hour",points:6},
            {id:3,name:"Beard Trim",price:20,duration:"30 min",points:2},
            {id:4,name:"Haircut + Beard",price:65,duration:"1.5 hours",points:7}
        ],
        staff: [
            {id:1,name:"Kwabena Osei",specialty:"Modern Styles",rating:4.8,image:"👨🏿"},
            {id:2,name:"Kofi Agyeman",specialty:"Classic Cuts",rating:4.6,image:"👨🏾"}
        ],
        gallery: ["✂️ Fresh fade styles","🪒 Clean cuts for professionals"],
        offPeakHours: ["09:00 AM","10:00 AM","02:00 PM","03:00 PM"]
    },
    salon_kumasi: {
        id: 'salon_kumasi', name: "Yaa's Hair Studio", city: "kumasi", location: "Asokwa, Kumasi",
        ghanaPostGPS: "AK-567-8901", type: "Hair Salon", rating: 4.6, totalBookings: 201,
        services: [
            {id:1,name:"Box Braids",price:220,duration:"4 hours",points:22},
            {id:2,name:"Ghana Weaving",price:130,duration:"3 hours",points:13},
            {id:3,name:"Cornrows",price:70,duration:"2 hours",points:7},
            {id:4,name:"Natural Hair Care",price:90,duration:"1.5 hours",points:9}
        ],
        staff: [
            {id:1,name:"Yaa Asantewaa",specialty:"Braids & Weaves",rating:4.7,image:"👩🏿"},
            {id:2,name:"Adwoa Serwaa",specialty:"Natural Styles",rating:4.5,image:"👩🏾"}
        ],
        gallery: ["💁🏿‍♀️ Stunning braided styles","✨ Natural hair perfection"],
        offPeakHours: ["09:00 AM","10:00 AM","03:00 PM"]
    },
    barber_takoradi: {
        id: 'barber_takoradi', name: "Edem's Barber Shop", city: "takoradi", location: "Market Circle, Takoradi",
        ghanaPostGPS: "WS-345-6789", type: "Barbershop", rating: 4.5, totalBookings: 98,
        services: [
            {id:1,name:"Classic Haircut",price:40,duration:"45 min",points:4},
            {id:2,name:"Fade Cut",price:50,duration:"1 hour",points:5},
            {id:3,name:"Beard Trim",price:20,duration:"30 min",points:2}
        ],
        staff: [
            {id:1,name:"Edem Kwesi",specialty:"All Styles",rating:4.6,image:"👨🏿"},
            {id:2,name:"Kojo Mensah",specialty:"Quick Cuts",rating:4.4,image:"👨🏾"}
        ],
        gallery: ["🪒 Clean professional cuts"],
        offPeakHours: ["09:00 AM","10:00 AM","02:00 PM"]
    }
};

const timeSlots = ["09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM"];
const OFF_PEAK_DISCOUNT = 0.15;
const DEPOSIT_AMOUNT = 20;

// STORAGE FUNCTIONS
function saveAppointment(businessId, appointment) {
    const appointments = getAppointments(businessId);
    appointments.push(appointment);
    localStorage.setItem(`appointments_${businessId}`, JSON.stringify(appointments));
}
function getAppointments(businessId) {
    const data = localStorage.getItem(`appointments_${businessId}`);
    return data ? JSON.parse(data) : [];
}
function getAllAppointments() {
    const allAppointments = [];
    Object.keys(businesses).forEach(businessId => {
        const appts = getAppointments(businessId);
        allAppointments.push(...appts);
    });
    return allAppointments;
}
function getCustomerAppointments(phone) {
    return getAllAppointments().filter(apt => apt.customerPhone === phone);
}
function deleteAppointment(businessId, appointmentId) {
    const appointments = getAppointments(businessId).filter(apt => apt.id !== appointmentId);
    localStorage.setItem(`appointments_${businessId}`, JSON.stringify(appointments));
}
function clearAllAppointments() {
    if (confirm('Are you sure you want to delete ALL appointments? This cannot be undone.')) {
        const currentBusiness = sessionStorage.getItem('currentBusiness');
        if (currentBusiness) {
            localStorage.removeItem(`appointments_${currentBusiness}`);
            loadDashboard();
        }
    }
}
function getCustomerProfile(phone) {
    const data = localStorage.getItem(`customer_${phone}`);
    return data ? JSON.parse(data) : {phone,name:'',email:'',points:0,totalBookings:0,totalSpent:0,joinDate:new Date().toISOString()};
}
function updateCustomerProfile(phone, updates) {
    const profile = getCustomerProfile(phone);
    const updated = {...profile, ...updates};
    localStorage.setItem(`customer_${phone}`, JSON.stringify(updated));
    return updated;
}
function addLoyaltyPoints(phone, points) {
    const profile = getCustomerProfile(phone);
    profile.points += points;
    updateCustomerProfile(phone, profile);
    return profile.points;
}
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {weekday:'short',year:'numeric',month:'short',day:'numeric'});
}
function calculateDiscountedPrice(basePrice, isOffPeak) {
    if (isOffPeak) {
        const discount = basePrice * OFF_PEAK_DISCOUNT;
        return {finalPrice: basePrice - discount, discount, hasDiscount: true};
    }
    return {finalPrice: basePrice, discount: 0, hasDiscount: false};
}
function isOffPeakTime(business, time) {
    return business.offPeakHours.includes(time);
}

// HOME PAGE
function loadBusinessCards() {
    const grid = document.getElementById('businessGrid');
    if (!grid) return;
    grid.innerHTML = '';
    Object.values(businesses).forEach(business => {
        const card = document.createElement('div');
        card.className = 'business-card';
        card.setAttribute('data-city', business.city);
        const bgClass = business.type === 'Barbershop' ? 'barber-bg' : 'salon-bg';
        const icon = business.type === 'Barbershop' ? '✂️' : '💇‍♀️';
        card.innerHTML = `<div class="business-image ${bgClass}"><span class="business-icon">${icon}</span></div>
            <div class="business-info"><h3>${business.name}</h3><p class="location">📍 ${business.location}</p>
            <p class="description">${business.type} specializing in premium services</p>
            <div class="services-preview">${business.services.slice(0,3).map(s=>`<span class="tag">${s.name}</span>`).join('')}</div>
            <div class="business-stats"><div class="stat"><strong>⭐ ${business.rating}</strong><span>Rating</span></div>
            <div class="stat"><strong>${business.totalBookings}+</strong><span>Bookings</span></div></div>
            <button class="btn btn-primary" onclick="selectBusiness('${business.id}')"><span data-i18n="book_now">Book Appointment</span></button></div>`;
        grid.appendChild(card);
    });
}
function filterByLocation(city) {
    const cards = document.querySelectorAll('.business-card');
    const buttons = document.querySelectorAll('.location-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    cards.forEach(card => {
        card.style.display = (city === 'all' || card.getAttribute('data-city') === city) ? 'block' : 'none';
    });
}
function selectBusiness(businessId) {
    sessionStorage.setItem('selectedBusiness', businessId);
    window.location.href = 'booking.html';
}
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    if (chatWindow) chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBanner').style.display = 'block';
});
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') console.log('PWA installed');
            deferredPrompt = null;
            closeInstallBanner();
        });
    }
}
function closeInstallBanner() {
    document.getElementById('installBanner').style.display = 'none';
}
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', loadBusinessCards);
}

// BOOKING PAGE - DECLARE GLOBAL VARIABLES FIRST (FIX FOR THE ERROR)
let selectedStaffId = null;
let uploadedPhotoData = null;

if (window.location.pathname.includes('booking.html')) {
    const selectedBusiness = sessionStorage.getItem('selectedBusiness');
    if (!selectedBusiness || !businesses[selectedBusiness]) {
        alert('Please select a business first');
        window.location.href = 'index.html';
    } else {
        initBookingPage(selectedBusiness);
    }
}

function initBookingPage(businessId) {
    const business = businesses[businessId];
    const header = document.getElementById('businessHeader');
    header.innerHTML = `<h2>${business.name}</h2><p>📍 ${business.location}</p><p><small>GhanaPostGPS: ${business.ghanaPostGPS}</small></p>`;
    loadGallery(business);
    const locationSelect = document.getElementById('locationSelect');
    const option = document.createElement('option');
    option.value = business.location;
    option.textContent = business.location;
    locationSelect.appendChild(option);
    locationSelect.value = business.location;
    const serviceSelect = document.getElementById('serviceSelect');
    business.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = `${service.name} - GHS ${service.price} (${service.duration})`;
        serviceSelect.appendChild(option);
    });
    loadStaffCards(business);
    loadTimeSlots(business);
    const dateInput = document.getElementById('appointmentDate');
    dateInput.min = new Date().toISOString().split('T')[0];
    serviceSelect.addEventListener('change', function() { updatePricing(business); });
    document.getElementById('appointmentTime').addEventListener('change', function() { updatePricing(business); });
    document.getElementById('referencePhoto').addEventListener('change', handlePhotoUpload);
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleBookingSubmit(business);
    });
}
function loadGallery(business) {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    galleryGrid.innerHTML = business.gallery.map(item => `<div class="gallery-item">${item}</div>`).join('');
}
function loadStaffCards(business) {
    const staffGrid = document.getElementById('staffGrid');
    if (!staffGrid) return;
    // Build HTML manually to avoid template literal issues with selectedStaffId
    let cardsHTML = '';
    business.staff.forEach(staff => {
        const isSelected = (selectedStaffId === staff.id) ? 'selected' : '';
        cardsHTML += `<div class="staff-card ${isSelected}" onclick="selectStaff(${staff.id})">
            <div class="staff-avatar">${staff.image}</div>
            <div class="staff-info"><strong>${staff.name}</strong><small>${staff.specialty}</small><span class="staff-rating">⭐ ${staff.rating}</span></div>
        </div>`;
    });
    staffGrid.innerHTML = cardsHTML;
}
function selectStaff(staffId) {
    selectedStaffId = staffId;
    const cards = document.querySelectorAll('.staff-card');
    cards.forEach(card => card.classList.remove('selected'));
    event.target.closest('.staff-card').classList.add('selected');
}
function loadTimeSlots(business) {
    const timeSelect = document.getElementById('appointmentTime');
    timeSlots.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = isOffPeakTime(business, time) ? `${time} ⚡ (15% OFF)` : time;
        timeSelect.appendChild(option);
    });
}
function updatePricing(business) {
    const serviceId = parseInt(document.getElementById('serviceSelect').value);
    const time = document.getElementById('appointmentTime').value;
    if (!serviceId) return;
    const service = business.services.find(s => s.id === serviceId);
    if (!service) return;
    const isOffPeak = isOffPeakTime(business, time);
    const pricing = calculateDiscountedPrice(service.price, isOffPeak);
    document.getElementById('basePrice').textContent = `GHS ${service.price}`;
    document.getElementById('serviceDuration').textContent = service.duration;
    document.getElementById('pointsEarned').textContent = `${service.points} points`;
    const discountRow = document.getElementById('discountRow');
    if (pricing.hasDiscount) {
        discountRow.style.display = 'flex';
        document.getElementById('discountAmount').textContent = `- GHS ${pricing.discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }
    document.getElementById('totalPrice').textContent = `GHS ${pricing.finalPrice.toFixed(2)}`;
}
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedPhotoData = event.target.result;
            document.getElementById('photoPreview').innerHTML = `<img src="${uploadedPhotoData}" alt="Reference" style="max-width:200px;border-radius:10px;">
                <button type="button" class="btn btn-small" onclick="removePhoto()">Remove</button>`;
        };
        reader.readAsDataURL(file);
    }
}
function removePhoto() {
    uploadedPhotoData = null;
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('referencePhoto').value = '';
}
function handleBookingSubmit(business) {
    if (!selectedStaffId) { alert('Please select a stylist'); return; }
    const serviceId = parseInt(document.getElementById('serviceSelect').value);
    const service = business.services.find(s => s.id === serviceId);
    const staff = business.staff.find(s => s.id === selectedStaffId);
    const time = document.getElementById('appointmentTime').value;
    const phone = document.getElementById('customerPhone').value;
    const isOffPeak = isOffPeakTime(business, time);
    const pricing = calculateDiscountedPrice(service.price, isOffPeak);
    const appointment = {
        id: Date.now(), businessId: business.id, businessName: business.name,
        customerName: document.getElementById('customerName').value, customerPhone: phone,
        customerEmail: document.getElementById('customerEmail').value, service: service.name,
        servicePrice: service.price, finalPrice: pricing.finalPrice, discount: pricing.discount,
        staff: staff.name, staffId: staff.id, date: document.getElementById('appointmentDate').value,
        time: time, location: document.getElementById('locationSelect').value,
        ghanaPostGPS: document.getElementById('ghanaPostGPS').value,
        specialRequests: document.getElementById('specialRequests').value,
        referencePhoto: uploadedPhotoData,
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        pointsEarned: service.points, createdAt: new Date().toISOString()
    };
    saveAppointment(business.id, appointment);
    const profile = getCustomerProfile(phone);
    profile.name = appointment.customerName;
    profile.email = appointment.customerEmail;
    profile.totalBookings += 1;
    profile.totalSpent += pricing.finalPrice;
    addLoyaltyPoints(phone, service.points);
    showSuccessModal(appointment, business, service.points);
}
function showSuccessModal(appointment, business, points) {
    const modal = document.getElementById('successModal');
    const details = document.getElementById('bookingDetails');
    details.innerHTML = `<p><strong>Business:</strong> ${business.name}</p><p><strong>Staff:</strong> ${appointment.staff}</p>
        <p><strong>Service:</strong> ${appointment.service}</p><p><strong>Date:</strong> ${formatDate(appointment.date)}</p>
        <p><strong>Time:</strong> ${appointment.time}</p><p><strong>Location:</strong> ${appointment.location}</p>
        ${appointment.discount > 0 ? `<p class="discount-badge">✨ Off-Peak Discount: -GHS ${appointment.discount.toFixed(2)}</p>` : ''}
        <p><strong>Total Price:</strong> GHS ${appointment.finalPrice.toFixed(2)}</p><p><strong>Payment:</strong> ${appointment.paymentMethod}</p>`;
    document.getElementById('pointsAdded').textContent = `+${points}`;
    modal.classList.add('active');
}
function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    document.getElementById('bookingForm').reset();
    selectedStaffId = null;
    uploadedPhotoData = null;
    document.getElementById('photoPreview').innerHTML = '';
    document.getElementById('basePrice').textContent = 'GHS 0';
    document.getElementById('totalPrice').textContent = 'GHS 0';
    document.getElementById('serviceDuration').textContent = '-';
    document.getElementById('pointsEarned').textContent = '0 points';
}

// PROFILE PAGE
if (window.location.pathname.includes('profile.html')) {
    document.getElementById('profileLoginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        loginToProfile(document.getElementById('loginPhone').value);
    });
    const loggedInPhone = sessionStorage.getItem('customerPhone');
    if (loggedInPhone) loginToProfile(loggedInPhone);
}
function loginToProfile(phone) {
    sessionStorage.setItem('customerPhone', phone);
    document.getElementById('loginPrompt').style.display = 'none';
    document.getElementById('profileDashboard').style.display = 'block';
    loadProfileDashboard(phone);
}
function logoutProfile() {
    sessionStorage.removeItem('customerPhone');
    window.location.reload();
}
function loadProfileDashboard(phone) {
    const profile = getCustomerProfile(phone);
    const appointments = getCustomerAppointments(phone);
    const initials = profile.name ? profile.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'GH';
    document.getElementById('profileInitials').textContent = initials;
    document.getElementById('profileName').textContent = profile.name || 'Customer';
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('totalPoints').textContent = profile.points;
    let nextReward = 100;
    if (profile.points >= 500) nextReward = 1000;
    else if (profile.points >= 250) nextReward = 500;
    else if (profile.points >= 100) nextReward = 250;
    const pointsToReward = nextReward - profile.points;
    const progressPercent = (profile.points / nextReward) * 100;
    document.getElementById('pointsToReward').textContent = pointsToReward;
    document.getElementById('loyaltyProgress').style.width = `${Math.min(progressPercent, 100)}%`;
    document.getElementById('totalBookingsCount').textContent = appointments.length;
    document.getElementById('totalSpent').textContent = `GHS ${profile.totalSpent.toFixed(2)}`;
    const serviceCount = {};
    appointments.forEach(apt => {
        serviceCount[apt.service] = (serviceCount[apt.service] || 0) + 1;
    });
    const favoriteService = Object.keys(serviceCount).reduce((a, b) => serviceCount[a] > serviceCount[b] ? a : b, '-');
    document.getElementById('favoriteService').textContent = favoriteService;
    loadBookingHistory(appointments, 'all');
}
function filterHistory(filter) {
    const phone = sessionStorage.getItem('customerPhone');
    const appointments = getCustomerAppointments(phone);
    loadBookingHistory(appointments, filter);
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
function loadBookingHistory(appointments, filter) {
    const today = new Date().toISOString().split('T')[0];
    let filtered = appointments;
    if (filter === 'upcoming') filtered = appointments.filter(apt => apt.date >= today);
    else if (filter === 'past') filtered = appointments.filter(apt => apt.date < today);
    filtered.sort((a, b) => b.date.localeCompare(a.date));
    const historyList = document.getElementById('historyList');
    if (filtered.length === 0) {
        historyList.innerHTML = '<p class="no-data">No bookings found</p>';
        return;
    }
    historyList.innerHTML = filtered.map(apt => {
        const isPast = apt.date < today;
        return `<div class="history-card ${isPast ? 'past' : 'upcoming'}">
            <div class="history-date"><strong>${formatDate(apt.date)}</strong><span>${apt.time}</span></div>
            <div class="history-details"><h4>${apt.businessName}</h4><p><strong>Service:</strong> ${apt.service}</p>
            <p><strong>Staff:</strong> ${apt.staff}</p><p><strong>Price:</strong> GHS ${apt.finalPrice.toFixed(2)}</p>
            <p><strong>Points Earned:</strong> +${apt.pointsEarned}</p>${apt.referencePhoto ? '<p>📸 Reference photo attached</p>' : ''}</div>
            ${!isPast ? `<button class="btn btn-secondary btn-small" onclick="rebookAppointment('${apt.businessId}')">Rebook</button>` : ''}</div>`;
    }).join('');
}
function rebookAppointment(businessId) {
    sessionStorage.setItem('selectedBusiness', businessId);
    window.location.href = 'booking.html';
}

// ADMIN DASHBOARD
if (window.location.pathname.includes('admin.html')) {
    const businessSelect = document.getElementById('businessSelect');
    if (businessSelect) {
        Object.values(businesses).forEach(business => {
            const option = document.createElement('option');
            option.value = business.id;
            option.textContent = `${business.name} (${business.city})`;
            businessSelect.appendChild(option);
        });
    }
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const businessId = document.getElementById('businessSelect').value;
        const password = document.getElementById('adminPassword').value;
        if (password === 'admin123') {
            sessionStorage.setItem('currentBusiness', businessId);
            sessionStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Incorrect password. Demo password is: admin123');
        }
    });
    if (sessionStorage.getItem('adminLoggedIn') === 'true') showDashboard();
}
function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    loadDashboard();
}
function loadDashboard() {
    const businessId = sessionStorage.getItem('currentBusiness');
    if (!businessId) return;
    const business = businesses[businessId];
    const appointments = getAppointments(businessId);
    document.getElementById('businessName').textContent = business.name;
    document.getElementById('businessLocation').textContent = business.location;
    const today = new Date().toISOString().split('T')[0];
    const todayAppointments = appointments.filter(apt => apt.date === today);
    const upcomingAppointments = appointments.filter(apt => apt.date >= today);
    const totalRevenue = appointments.reduce((sum, apt) => sum + apt.finalPrice, 0);
    document.getElementById('totalBookings').textContent = appointments.length;
    document.getElementById('todayBookings').textContent = todayAppointments.length;
    document.getElementById('totalRevenue').textContent = `GHS ${totalRevenue.toFixed(2)}`;
    document.getElementById('upcomingCount').textContent = upcomingAppointments.length;
    loadAdvancedAnalytics(appointments, business);
    loadAppointmentsTable(appointments);
}
function loadAdvancedAnalytics(appointments, business) {
    if (appointments.length === 0) return;
    const serviceCount = {};
    appointments.forEach(apt => { serviceCount[apt.service] = (serviceCount[apt.service] || 0) + 1; });
    const popularServices = document.getElementById('popularServices');
    popularServices.innerHTML = Object.entries(serviceCount).sort(([,a], [,b]) => b - a).slice(0, 5).map(([service, count]) =>
        `<div class="chart-bar"><span class="bar-label">${service}</span><div class="bar-container">
        <div class="bar-fill" style="width: ${(count / appointments.length) * 100}%"></div></div>
        <span class="bar-value">${count}</span></div>`).join('');
    const hourCount = {};
    appointments.forEach(apt => { hourCount[apt.time] = (hourCount[apt.time] || 0) + 1; });
    const peakHours = document.getElementById('peakHours');
    peakHours.innerHTML = Object.entries(hourCount).sort(([,a], [,b]) => b - a).slice(0, 5).map(([time, count]) =>
        `<div class="chart-bar"><span class="bar-label">${time}</span><div class="bar-container">
        <div class="bar-fill" style="width: ${(count / appointments.length) * 100}%"></div></div>
        <span class="bar-value">${count}</span></div>`).join('');
    const staffCount = {};
    const staffRevenue = {};
    appointments.forEach(apt => {
        staffCount[apt.staff] = (staffCount[apt.staff] || 0) + 1;
        staffRevenue[apt.staff] = (staffRevenue[apt.staff] || 0) + apt.finalPrice;
    });
    const staffPerformance = document.getElementById('staffPerformance');
    staffPerformance.innerHTML = Object.entries(staffCount).sort(([,a], [,b]) => b - a).map(([staff, count]) =>
        `<div class="staff-stat"><strong>${staff}</strong><span>${count} bookings</span>
        <span class="revenue">GHS ${staffRevenue[staff].toFixed(2)}</span></div>`).join('');
    const uniqueCustomers = new Set(appointments.map(apt => apt.customerPhone));
    const returningCustomers = appointments.filter(apt => {
        const customerAppointments = appointments.filter(a => a.customerPhone === apt.customerPhone);
        return customerAppointments.length > 1;
    });
    const returningCount = new Set(returningCustomers.map(apt => apt.customerPhone)).size;
    const newCount = uniqueCustomers.size - returningCount;
    const retentionRate = uniqueCustomers.size > 0 ? (returningCount / uniqueCustomers.size) * 100 : 0;
    document.getElementById('newCustomers').textContent = newCount;
    document.getElementById('returningCustomers').textContent = returningCount;
    document.getElementById('retentionRate').textContent = `${retentionRate.toFixed(1)}%`;
}
function loadAppointmentsTable(appointments) {
    const tbody = document.getElementById('appointmentsTableBody');
    if (appointments.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="no-data">No appointments yet</td></tr>';
        return;
    }
    appointments.sort((a, b) => {
        if (a.date === b.date) return a.time.localeCompare(b.time);
        return b.date.localeCompare(a.date);
    });
    tbody.innerHTML = appointments.map(apt => `<tr>
        <td>${formatDate(apt.date)}</td><td>${apt.time}</td><td>${apt.customerName}</td><td>${apt.customerPhone}</td>
        <td>${apt.staff}</td><td>${apt.service}</td><td><strong>GHS ${apt.finalPrice.toFixed(2)}</strong></td>
        <td>${apt.paymentMethod}</td><td><button class="btn-delete" onclick="deleteAppointmentHandler('${apt.id}')">Delete</button></td>
        </tr>`).join('');
}
let appointmentToDelete = null;
function deleteAppointmentHandler(appointmentId) {
    appointmentToDelete = appointmentId;
    document.getElementById('deleteModal').classList.add('active');
}
function confirmDelete() {
    if (appointmentToDelete) {
        const businessId = sessionStorage.getItem('currentBusiness');
        deleteAppointment(businessId, parseInt(appointmentToDelete));
        loadDashboard();
        closeDeleteModal();
    }
}
function closeDeleteModal() {
    document.getElementById('deleteModal').classList.remove('active');
    appointmentToDelete = null;
}
function filterAppointments(filter) {
    const businessId = sessionStorage.getItem('currentBusiness');
    let appointments = getAppointments(businessId);
    const today = new Date().toISOString().split('T')[0];
    if (filter === 'today') appointments = appointments.filter(apt => apt.date === today);
    else if (filter === 'upcoming') appointments = appointments.filter(apt => apt.date >= today);
    loadAppointmentsTable(appointments);
}
function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('currentBusiness');
    window.location.reload();
}
console.log('🚀 Ghana Salon Booking System v2.1 Loaded - FIXED VERSION!');