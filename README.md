# 💻 Anamac Komputer - Premium Hardware Store
**Projek UTS Pemrograman Web 2** *Fullstack JavaScript (Frontend-driven) with Tailwind CSS & LocalStorage*

---

## 🌐 Live Demo
Akses aplikasi secara langsung melalui tautan berikut:  
👉 **[https://seemsproject-pro.github.io/M_SYAMS_DZULQARNAIN_UTS_Web2/index.html](https://seemsproject-pro.github.io/M_SYAMS_DZULQARNAIN_UTS_Web2/index.html)**

---

## 📝 Deskripsi Projek
**Anamac Komputer** adalah platform e-commerce hardware premium yang dirancang untuk memberikan pengalaman belanja modern. Aplikasi ini mengusung konsep **Single Page Interaction (SPI)** yang meminimalkan reload halaman dengan memanfaatkan **LocalStorage** sebagai database client-side. UI dibangun dengan estetika **Glassmorphism**, tipografi kontemporer (**Syne & DM Sans**), dan sistem navigasi yang sangat responsif.

---

## 🚀 Fitur Unggulan (Premium Features)

### 1. 📑 Sistem Dual-Sidebar (Advanced UX)
Menggunakan dua laci (drawer) interaktif:
* **Wishlist Sidebar (Kiri):** Memungkinkan user memantau barang impian tanpa berpindah halaman.
* **Product Detail Sidebar (Kanan):** Menyajikan spesifikasi lengkap, gambar resolusi tinggi, dan fitur ulasan pelanggan dalam satu tampilan terpadu.

### 2. 🛡️ Autentikasi & Proteksi Akun
* **Secure Session:** Sistem Register dan Login berbasis LocalStorage.
* **Logout System:** Fitur keluar akun yang aman dengan konfirmasi user.
* **Action Protection:** Fitur "Tambah ke Keranjang" dan "Tulis Ulasan" terkunci secara otomatis jika user belum login.

### 3. 📱 Mobile-First & Responsive Fix
* **Image Auto-Scaling:** Logika koding khusus pada `app.js` memastikan gambar produk tetap muncul proporsional di layar smartphone (fix min-height & aspect ratio).
* **Touch-Friendly UI:** Navigasi dirancang luas untuk memudahkan akses pengguna mobile.

### 4. ⭐ Rating & Ulasan Real-time
* **Dynamic Averaging:** Bintang rating di halaman depan dihitung secara otomatis berdasarkan ulasan asli yang tersimpan.
* **User Feedback:** Pelanggan dapat memberikan ulasan teks dan rating bintang 1-5.

### 5. 🛒 Transaksi & Riwayat Invoice
* **Tax & Shipping Logic:** Perhitungan otomatis PPN 11% dan ongkos kirim flat.
* **Visual History:** Halaman riwayat pesanan mewah lengkap dengan thumbnail produk dan fitur **Cetak Invoice**.

### 6. ⚙️ Admin Command Center
* **Dashboard Stats:** Menampilkan statistik total produk dan pesanan masuk.
* **Full CRUD:** Admin memiliki akses penuh untuk menambah, mengedit, dan menghapus produk.

---

## 🛠️ Teknologi yang Digunakan
* **HTML5 & CSS3:** Struktur semantik dan custom styling.
* **Tailwind CSS:** Framework CSS utility-first untuk desain modern.
* **Vanilla JavaScript (ES6+):** Logika core, state management, dan manipulasi DOM.
* **LocalStorage API:** Database persistensi client-side.
* **Google Fonts:** Syne (Display) & DM Sans (Body).

---

## 📂 Struktur Folder
```text
anamac-komputer/
├── data/
│   └── products.json      # Database awal (Initial Data)
├── js/                    # Folder Script (Case-Sensitive Fix)
│   ├── app.js             # Logic: Grid, Dual-Sidebar, UI
│   └── auth.js            # Logic: Login, Register, & Logout
├── index.html             # Storefront / Catalog
├── login.html             # Gateway Masuk
├── register.html          # Pendaftaran User
├── cart.html              # Management Keranjang
├── checkout.html          # Form Pengiriman & Pembayaran
├── history.html           # Riwayat Pesanan & Invoice
├── admin.html             # Command Center (Admin Only)
└── README.md              # Dokumentasi Projek
