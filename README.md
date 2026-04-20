# 💻 Anamac Komputer - Premium Hardware Store
**Projek UTS Pemrograman Web 2** *Fullstack JavaScript (Frontend-driven) with Tailwind CSS & LocalStorage*

---

## 📝 Deskripsi Projek
**Anamac Komputer** adalah aplikasi e-commerce modern yang berfokus pada penjualan perangkat keras (hardware) komputer premium. Aplikasi ini dibangun menggunakan arsitektur **Single Page Interaction** dengan pemanfaatan **LocalStorage** sebagai database sementara. UI dirancang dengan pendekatan **Mobile-First** dan estetika **Glassmorphism** untuk memberikan pengalaman pengguna kelas dunia.

---

## 🚀 Fitur Unggulan (Premium Features)

### 1. 🛡️ Sistem Autentikasi (Auth)
* **Register & Login:** Pelanggan dapat membuat akun dan masuk ke sistem.
* **Login Protection:** Fitur "Tambah ke Keranjang" dan "Memberi Ulasan" dikunci secara otomatis jika pelanggan belum melakukan login.
* **Dynamic Auth UI:** Navbar akan berubah menampilkan inisial profil user setelah login berhasil.

### 2. 🛍️ Katalog Produk Interaktif
* **Real-time Search:** Mencari hardware berdasarkan nama produk tanpa reload halaman.
* **Category Filter:** Memfilter produk berdasarkan kategori (Laptop, Tablet, Aksesoris).
* **Smart Pagination:** Navigasi halaman otomatis jika jumlah produk melebihi batas tampilan (8 produk per halaman).

### 3. 📑 Sistem Dual-Sidebar (Premium UX)
* **Left Sidebar (Wishlist):** Mengelola daftar keinginan pelanggan yang muncul elegan dari sisi kiri.
* **Right Sidebar (Detail & Review):** Menampilkan detail spesifikasi produk dan ulasan pembeli yang muncul dari sisi kanan.

### 4. ⭐ Rating & Ulasan Dinamis
* **Star Rating System:** Pelanggan bisa memberikan rating 1-5 bintang beserta ulasan teks.
* **Real-time Average Rating:** Rating bintang di halaman depan dihitung secara otomatis berdasarkan rata-rata ulasan asli yang tersimpan di database.

### 5. 🛒 Alur Transaksi Lengkap
* **Shopping Cart:** Kelola kuantitas barang, hitung subtotal, dan pajak (PPN 11%) secara otomatis.
* **Secure Checkout:** Form pengiriman barang dengan validasi data pelanggan.
* **Order History:** Pelanggan dapat melihat riwayat invoice dan status pesanan yang pernah dilakukan.

### 6. ⚙️ Dashboard Admin (Management)
* **Product CRUD:** Admin dapat menambah, mengedit, dan menghapus produk di katalog.
* **Transaction Monitoring:** Melihat seluruh data transaksi/pesanan yang masuk dari semua pelanggan.

### 7. 🌓 Dark & Light Mode
* Mendukung tema gelap dan terang dengan transisi halus yang tersimpan di sistem browser (Persistence Theme).

---

## 🛠️ Teknologi yang Digunakan
* **HTML5:** Struktur semantik aplikasi.
* **Tailwind CSS:** Styling modern dengan metode Utility-first.
* **Vanilla JavaScript (ES6+):** Logika inti aplikasi, manipulasi DOM, dan State Management.
* **LocalStorage API:** Database sisi klien untuk menyimpan data produk, user, keranjang, dan transaksi.
* **Plus Jakarta Sans:** Google Fonts untuk tipografi premium.

---

## 📂 Struktur Folder
```text
anamac-komputer/
├── data/
│   └── products.json      # Database awal produk
├── js/
│   ├── app.js            # Logika utama (Grid, Sidebar, Grid, UI)
│   └── auth.js           # Logika Login, Register, & Session
├── index.html            # Halaman Utama
├── login.html            # Halaman Masuk
├── register.html         # Halaman Daftar Akun
├── cart.html             # Halaman Keranjang Belanja
├── checkout.html         # Halaman Proses Pembayaran
├── history.html          # Halaman Riwayat Pesanan
├── admin.html            # Dashboard Manajemen Admin
└── README.md             # Dokumentasi Projek