// Ghana Salon Booking System - Complete JavaScript

// Business Data
const businesses = {
    barber: {
        id: 'barber',
        name: "Kofi's Classic Cuts",
        location: "Osu, Accra",
        type: "Barbershop",
        services: [
            { id: 1, name: "Classic Haircut", price: 50, duration: "45 min" },
            { id: 2, name: "Fade Cut", price: 60, duration: "1 hour" },
            { id: 3, name: "Beard Trim", price: 25, duration: "30 min" },
            { id: 4, name: "Hot Towel Shave", price: 40, duration: "45 min" },
            { id: 5, name: "Haircut + Beard Combo", price: 70, duration: "1.5 hours" },
            { id: 6, name: "Kids Haircut", price: 35, duration: "30 min" }
        ]
    },
    salon: {
        id: 'salon',
        name: "Ama's Beauty Haven",
        location: "East Legon, Accra",
        type: "Hair Salon",
        services: [
            { id: 1, name: "Box Braids", price: 250, duration: "4 hours" },
            { id: 2, name: "Ghana Weaving", price: 150, duration: "3 hours" },
            { id: 3, name: "Cornrows", price: 80, duration: "2 hours" },
            { id: 4, name: "Hair Relaxing", price: 120, duration: "2 hours" },
            { id: 5, name: "Natural Hair Care", price: 100, duration: "1.5 hours" },
            { id: 6, name: "Hair Coloring", price: 200, duration: "3 hours" },
            { id: 7, name: "Weave Installation", price: 180, duration: "2.5 hours" },
            { id: 8, name: "Wash & Blow Dry", price: 60, duration: "1 hour" }
        ]
    }
};

// Available time slots (9 AM - 6 PM)
const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM"
];

// Storage functions
function saveAppointment(businessId, appointment) {
    const appointments = getAppointments(businessId);
    appointments.push(appointment);
    localStorage.setItem(`appointments_${businessId}`, JSON.stringify(appointments));
}

function getAppointments(businessId) {
    const data = localStorage.getItem(`appointments_${businessId}`);
    return data ? JSON.parse(data) : [];
}

function deleteAppointment(businessId, appointmentId) {
    const appointments = getAppointments(businessId);
    const filtered = appointments.filter(apt => apt.id !== appointmentId);
    localStorage.setItem(`appointments_${businessId}`, JSON.stringify(filtered));
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

// === HOME PAGE (index.html) ===
function selectBusiness(businessId) {
    sessionStorage.setItem('selectedBusiness', businessId);
    window.location.href = 'booking.html';
}

// === BOOKING PAGE (booking.html) ===
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

    // Display business header
    const header = document.getElementById('businessHeader');
    header.innerHTML = `
        <h2>${business.name}</h2>
        <p>📍 ${business.location}</p>
    `;

    // Populate services
    const serviceSelect = document.getElementById('serviceSelect');
    business.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = `${service.name} - GHS ${service.price} (${service.duration})`;
        serviceSelect.appendChild(option);
    });

    // Populate time slots
    const timeSelect = document.getElementById('appointmentTime');
    timeSlots.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    // Set minimum date to today
    const dateInput = document.getElementById('appointmentDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    // Update price when service changes
    serviceSelect.addEventListener('change', function() {
        const serviceId = parseInt(this.value);
        const service = business.services.find(s => s.id === serviceId);
        if (service) {
            document.getElementById('servicePrice').textContent = `GHS ${service.price}`;
            document.getElementById('serviceDuration').textContent = service.duration;
        }
    });

    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const serviceId = parseInt(document.getElementById('serviceSelect').value);
        const service = business.services.find(s => s.id === serviceId);

        const appointment = {
            id: Date.now(),
            businessId: businessId,
            customerName: document.getElementById('customerName').value,
            customerPhone: document.getElementById('customerPhone').value,
            customerEmail: document.getElementById('customerEmail').value,
            service: service.name,
            servicePrice: service.price,
            date: document.getElementById('appointmentDate').value,
            time: document.getElementById('appointmentTime').value,
            specialRequests: document.getElementById('specialRequests').value,
            createdAt: new Date().toISOString()
        };

        saveAppointment(businessId, appointment);

        // Show success modal
        showSuccessModal(appointment, business);
    });
}

function showSuccessModal(appointment, business) {
    const modal = document.getElementById('successModal');
    const details = document.getElementById('bookingDetails');

    details.innerHTML = `
        <p><strong>Business:</strong> ${business.name}</p>
        <p><strong>Service:</strong> ${appointment.service}</p>
        <p><strong>Date:</strong> ${formatDate(appointment.date)}</p>
        <p><strong>Time:</strong> ${appointment.time}</p>
        <p><strong>Price:</strong> GHS ${appointment.servicePrice}</p>
        <p><strong>Customer:</strong> ${appointment.customerName}</p>
        <p><strong>Phone:</strong> ${appointment.customerPhone}</p>
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    document.getElementById('bookingForm').reset();
    document.getElementById('servicePrice').textContent = 'GHS 0';
    document.getElementById('serviceDuration').textContent = '-';
}

// === ADMIN PAGE (admin.html) ===
if (window.location.pathname.includes('admin.html')) {
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();

        const businessId = document.getElementById('businessSelect').value;
        const password = document.getElementById('adminPassword').value;

        // Simple password check (in real app, use proper authentication)
        if (password === 'admin123') {
            sessionStorage.setItem('currentBusiness', businessId);
            sessionStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Incorrect password. Demo password is: admin123');
        }
    });

    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        showDashboard();
    }
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

    // Update business name
    document.getElementById('businessName').textContent = business.name;

    // Calculate stats
    const today = new Date().toISOString().split('T')[0];
    const todayAppointments = appointments.filter(apt => apt.date === today);
    const upcomingAppointments = appointments.filter(apt => apt.date >= today);
    const totalRevenue = appointments.reduce((sum, apt) => sum + apt.servicePrice, 0);

    // Update stat cards
    document.getElementById('totalBookings').textContent = appointments.length;
    document.getElementById('todayBookings').textContent = todayAppointments.length;
    document.getElementById('totalRevenue').textContent = `GHS ${totalRevenue}`;
    document.getElementById('upcomingCount').textContent = upcomingAppointments.length;

    // Load appointments table
    loadAppointmentsTable(appointments);
}

function loadAppointmentsTable(appointments) {
    const tbody = document.getElementById('appointmentsTableBody');

    if (appointments.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="no-data">No appointments yet</td></tr>';
        return;
    }

    // Sort by date and time (most recent first)
    appointments.sort((a, b) => {
        if (a.date === b.date) {
            return a.time.localeCompare(b.time);
        }
        return b.date.localeCompare(a.date);
    });

    tbody.innerHTML = appointments.map(apt => `
        <tr>
            <td>${formatDate(apt.date)}</td>
            <td>${apt.time}</td>
            <td>${apt.customerName}</td>
            <td>${apt.customerPhone}</td>
            <td>${apt.service}</td>
            <td><strong>GHS ${apt.servicePrice}</strong></td>
            <td>${apt.specialRequests || '-'}</td>
            <td>
                <button class="btn-delete" onclick="deleteAppointmentHandler('${apt.id}')">
                    Delete
                </button>
            </td>
        </tr>
    `).join('');
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

    if (filter === 'today') {
        appointments = appointments.filter(apt => apt.date === today);
    } else if (filter === 'upcoming') {
        appointments = appointments.filter(apt => apt.date >= today);
    }

    loadAppointmentsTable(appointments);
}

function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('currentBusiness');
    window.location.reload();
}

// Utility function to format date
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ghana Salon Booking System Loaded');
});