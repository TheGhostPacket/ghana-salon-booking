// Salon services configuration
const salonServices = {
    "Kofi's Barbershop": [
        "Regular Haircut - GH₵20",
        "Premium Haircut - GH₵35",
        "Shaving - GH₵15",
        "Beard Styling - GH₵25",
        "Hair & Beard Combo - GH₵50"
    ],
    "Ama's Hair Salon": [
        "Box Braids - GH₵150",
        "Cornrows - GH₵80",
        "Weaving - GH₵200",
        "Hair Treatment - GH₵60",
        "Natural Hair Styling - GH₵100",
        "Relaxer Service - GH₵70"
    ]
};

let currentSalon = '';

// Open booking form
function openBookingForm(salonName) {
    currentSalon = salonName;
    document.getElementById('salonName').value = salonName;
    document.getElementById('bookingModal').style.display = 'block';

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').setAttribute('min', today);

    // Load services for selected salon
    loadServices(salonName);

    // Reset form
    document.getElementById('bookingForm').reset();
    document.getElementById('salonName').value = salonName;
}

// Close booking form
function closeBookingForm() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Load services for salon
function loadServices(salonName) {
    const serviceSelect = document.getElementById('service');
    serviceSelect.innerHTML = '<option value="">Select Service</option>';

    const services = salonServices[salonName] || [];
    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
    });
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const appointment = {
                id: Date.now(),
                salon: document.getElementById('salonName').value,
                customerName: document.getElementById('customerName').value,
                phone: document.getElementById('customerPhone').value,
                email: document.getElementById('customerEmail').value,
                service: document.getElementById('service').value,
                date: document.getElementById('appointmentDate').value,
                time: document.getElementById('appointmentTime').value,
                notes: document.getElementById('notes').value,
                bookingDate: new Date().toLocaleString(),
                status: 'Pending'
            };

            // Save to localStorage
            saveAppointment(appointment);

            // Close booking form
            closeBookingForm();

            // Show success message
            document.getElementById('successModal').style.display = 'block';
        });
    }
});

// Save appointment to localStorage
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('salonAppointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('salonAppointments', JSON.stringify(appointments));
}

// Close success message
function closeSuccessMessage() {
    document.getElementById('successModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const bookingModal = document.getElementById('bookingModal');
    const successModal = document.getElementById('successModal');

    if (event.target == bookingModal) {
        closeBookingForm();
    }
    if (event.target == successModal) {
        closeSuccessMessage();
    }
}

// ADMIN FUNCTIONS
let currentAdminSalon = '';

// Show appointments for selected salon
function showSalon(salonName) {
    currentAdminSalon = salonName;

    // Update active tab
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === salonName) {
            tab.classList.add('active');
        }
    });

    // Load appointments
    loadAppointments(salonName);
}

// Load appointments for admin dashboard
function loadAppointments(salonName) {
    const appointments = JSON.parse(localStorage.getItem('salonAppointments')) || [];
    const salonAppointments = appointments.filter(apt => apt.salon === salonName);

    const container = document.getElementById('appointmentsList');

    if (salonAppointments.length === 0) {
        container.innerHTML = '<div class="no-appointments">📅 No appointments yet for ' + salonName + '</div>';
        return;
    }

    // Sort by date
    salonAppointments.sort((a, b) => new Date(a.date) - new Date(b.date));

    let html = '<h2 style="color: #667eea; margin-bottom: 20px;">' + salonName + ' Appointments (' + salonAppointments.length + ')</h2>';

    salonAppointments.forEach(apt => {
        html += `
            <div class="appointment-card">
                <h3>👤 ${apt.customerName}</h3>
                <div class="appointment-info">
                    <p><strong>📞 Phone:</strong> ${apt.phone}</p>
                    <p><strong>📧 Email:</strong> ${apt.email || 'N/A'}</p>
                    <p><strong>💇 Service:</strong> ${apt.service}</p>
                    <p><strong>📅 Date:</strong> ${apt.date}</p>
                    <p><strong>🕐 Time:</strong> ${apt.time}</p>
                    <p><strong>📝 Status:</strong> <span style="color: orange;">${apt.status}</span></p>
                </div>
                ${apt.notes ? '<p><strong>Notes:</strong> ' + apt.notes + '</p>' : ''}
                <p style="color: #999; font-size: 0.9em; margin-top: 10px;">Booked on: ${apt.bookingDate}</p>
                <button class="btn-danger" onclick="deleteAppointment(${apt.id})">Delete Appointment</button>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Delete single appointment
function deleteAppointment(id) {
    if (confirm('Are you sure you want to delete this appointment?')) {
        let appointments = JSON.parse(localStorage.getItem('salonAppointments')) || [];
        appointments = appointments.filter(apt => apt.id !== id);
        localStorage.setItem('salonAppointments', JSON.stringify(appointments));
        loadAppointments(currentAdminSalon);
    }
}

// Clear all appointments
function clearAllAppointments() {
    if (confirm('Are you sure you want to delete ALL appointments from ALL salons? This cannot be undone!')) {
        localStorage.removeItem('salonAppointments');
        if (currentAdminSalon) {
            loadAppointments(currentAdminSalon);
        }
        alert('All appointments have been cleared!');
    }
}