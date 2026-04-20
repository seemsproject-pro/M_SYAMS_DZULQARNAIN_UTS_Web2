// ==========================================
// 1. DATABASE USERS LOKAL
// ==========================================
// Mengambil data semua user yang terdaftar
let users = JSON.parse(localStorage.getItem('users')) || [];

// ==========================================
// 2. FUNGSI REGISTRASI
// ==========================================
function register(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Proteksi: Nama jangan kosong
    if (!name || name.trim() === "") {
        alert("Nama tidak boleh kosong, Bos!");
        return;
    }

    // Validasi Password: Minimal 6 Karakter
    if (password.length < 6) {
        alert("Password minimal harus 6 karakter demi keamanan!");
        return;
    }

    // Validasi Email Unik: Biar gak ada akun ganda
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("Email sudah terdaftar! Gunakan email lain atau silakan login.");
        return;
    }

    // Simpan User Baru
    const newUser = { 
        id: Date.now(), 
        name: name, 
        email: email, 
        password: password 
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert("Registrasi Berhasil! Selamat bergabung di komunitas Anamac.");
    window.location.href = 'login.html';
}

// ==========================================
// 3. FUNGSI LOGIN
// ==========================================
function login(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Tarik data terbaru dari LocalStorage (biar sinkron)
    users = JSON.parse(localStorage.getItem('users')) || [];

    // Cari User yang cocok
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Buat Sesi Aktif (currentUser)
        // Data ini yang akan dibaca oleh app.js untuk update Navbar
        localStorage.setItem('currentUser', JSON.stringify({ 
            id: user.id, 
            name: user.name, 
            email: user.email 
        }));

        alert(`Selamat datang kembali, ${user.name}!`);
        window.location.href = 'index.html';
    } else {
        alert("Email atau password salah! Cek lagi ya, Bos.");
    }
}

// ==========================================
// 4. FUNGSI LOGOUT (UTILITY)
// ==========================================
// Fungsi ini juga bisa dipanggil dari tombol logout manapun
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// ==========================================
// 5. PROTEKSI HALAMAN (MIDDLEWARE)
// ==========================================
// Jika butuh halaman yang HANYA bisa dibuka setelah login (misal: cart.html)
function protectPage() {
    const session = localStorage.getItem('currentUser');
    if (!session) {
        alert("Akses ditolak! Kamu harus login dulu.");
        window.location.href = 'login.html';
    }
}
