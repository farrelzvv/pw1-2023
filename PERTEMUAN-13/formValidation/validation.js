function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var departureTime = document.getElementById('departureTime').value;
    var numTickets = document.getElementById('numTickets').value;

    var error = '';

    // Validasi Nama (required, maksimum 30 karakter)
    if (name.trim() === '' || name.length > 30) {
        error += 'Nama harus diisi (maksimum 30 karakter).\n';
    }

    // Validasi Email (required, format email)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error += 'Email harus diisi dengan format yang benar.\n';
    }

    // Validasi Waktu Keberangkatan (required, format 24 jam)
    var timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(departureTime)) {
        error += 'Waktu keberangkatan harus diisi dengan format 24 jam (HH:mm).\n';
    }

    // Validasi Jumlah Tiket (required, integer antara 1-10)
    if (isNaN(numTickets) || numTickets < 1 || numTickets > 10) {
        error += 'Jumlah tiket harus diisi dengan angka antara 1-10.\n';
    }

    // Tampilkan pesan kesalahan atau hasil jika tidak ada kesalahan
    if (error !== '') {
        alert(error);
    } else {
        displayResult(name, email, departureTime, numTickets);
    }
}

function displayResult(name, email, departureTime, numTickets) {
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h2>Informasi Pemesanan:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Waktu Keberangkatan:</strong> ${departureTime}</p>
        <p><strong>Jumlah Tiket:</strong> ${numTickets}</p>
    `;
}
