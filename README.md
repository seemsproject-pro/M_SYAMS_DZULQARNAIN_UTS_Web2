# 💻 Anamac Komputer - Premium Hardware Store
**Projek UTS Pemrograman Web 2** *Fullstack JavaScript (Frontend-driven) with Tailwind CSS & LocalStorage*

---

## 📝 Deskripsi Projek
**Anamac Komputer** adalah platform e-commerce hardware premium yang dirancang untuk memberikan pengalaman belanja kelas dunia. Aplikasi ini mengusung konsep **Single Page Interaction (SPI)** yang meminimalkan reload halaman dengan memanfaatkan **LocalStorage** sebagai engine database client-side. UI dibangun dengan estetika **Glassmorphism**, tipografi modern (**Syne & DM Sans**), dan sistem navigasi yang sangat responsif.

---

## 🚀 Fitur Unggulan (Premium Features)

### 1. 📑 Sistem Dual-Sidebar (Advanced UX)
Berbeda dengan web e-commerce standar, Anamac menggunakan sistem dua laci (drawer):
* **Wishlist Sidebar (Kiri):** Diakses via ikon ❤️ di navbar, memungkinkan user memantau barang impian tanpa berpindah halaman.
* **Product Detail Sidebar (Kanan):** Muncul saat produk diklik, menyajikan spesifikasi lengkap, gambar resolusi tinggi, dan fitur ulasan pelanggan dalam satu tampilan terpadu.

### 2. 🛡️ Autentikasi & Proteksi Akun
* **Secure Session:** Dilengkapi sistem Register dan Login yang menyimpan data secara lokal.
* **Logout System:** Fitur keluar akun yang aman dengan konfirmasi user dan pembersihan session data.
* **Action Protection:** Fitur "Tambah ke Keranjang" dan "Tulis Ulasan" terkunci secara otomatis (Proteksi Login) untuk menjaga integritas data transaksi.

### 3. 📱 Mobile-First & Responsive Fix
* **Image Auto-Scaling:** Perbaikan logika koding pada `app.js` memastikan gambar produk tetap muncul sempurna di layar smartphone (fix min-height & aspect ratio).
* **Touch-Friendly UI:** Tombol navigasi dan filter dirancang luas agar mudah diakses oleh jempol pengguna mobile.

### 4. ⭐ Sistem Rating & Ulasan Real-time
* **Dynamic Averaging:** Bintang rating di halaman depan dihitung secara otomatis berdasarkan ulasan asli yang masuk di database LocalStorage.
* **User Feedback:** Pelanggan yang login dapat memberikan ulasan teks dan rating bintang 1-5.

### 5. 🛒 Transaksi & Riwayat Invoice
* **Tax & Shipping Logic:** Perhitungan otomatis PPN 11% dan ongkos kirim flat di halaman Cart.
* **Visual History:** Halaman riwayat pesanan yang mewah dengan thumbnail produk, status pengiriman, dan fitur **Cetak Invoice**.

### 6. ⚙️ Admin Command Center
* **Dashboard Stats:** Menampilkan statistik total inventori dan jumlah pesanan masuk secara real-time.
* **Full CRUD:** Admin dapat menambah, mengedit, dan menghapus produk katalog.
* **Order Monitoring:** Pantau dan kelola data transaksi pelanggan dari satu pintu masuk (Gateway Admin).

---

## 🛠️ Teknologi yang Digunakan
* **HTML5 & CSS3:** Struktur semantik dan custom styling.
* **Tailwind CSS:** Framework CSS utility-first untuk desain modern dan responsif.
* **Vanilla JavaScript (ES6+):** Logika core, state management, dan DOM manipulation.
* **LocalStorage API:** Database persistensi untuk produk, user, dan transaksi.
* **Google Fonts:** Syne (Display) & DM Sans (Body) untuk tipografi premium.

---

## 📂 Struktur Folder
```text
anamac-komputer/
├── data/
│   └── products.json      # Database awal (Initial Data)
├── js/                    # Folder Script (Case-Sensitive Fix)
│   ├── app.js             # Logic: Grid, Dual-Sidebar, Grid, UI
│   └── auth.js            # Logic: Login, Register, & Logout
├── index.html             # Storefront / Catalog
├── login.html             # Gateway Masuk
├── register.html          # Pendaftaran User
├── cart.html              # Management Keranjang
├── checkout.html          # Form Pengiriman & Pembayaran
├── history.html           # Riwayat Pesanan & Invoice
├── admin.html             # Command Center (Admin Only)
└── README.md              # Dokumentasi Projek

https://seemsproject-pro.github.io/M_SYAMS_DZULQARNAIN_UTS_Web2/index.html
