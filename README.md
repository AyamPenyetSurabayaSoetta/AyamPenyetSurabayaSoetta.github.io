# Menu Online APSMJ-SOETTA - Aplikasi Pemesanan Pelanggan

## Deskripsi Singkat

Aplikasi ini adalah sistem pemesanan untuk pelanggan (customer-facing) berbasis web yang dirancang untuk membantu operasional bisnis "Ayam Penyet Surabaya Soekarno-Hatta". Aplikasi ini dibuat dengan fokus pada kemudahan penggunaan, memungkinkan pelanggan untuk melihat menu, memilih pesanan, dan mengirimkannya langsung ke admin melalui WhatsApp, baik untuk pemilik usaha dalam mengelola daftar menu maupun untuk pelanggan saat melakukan pemesanan.

## Fitur Utama

Aplikasi ini memiliki serangkaian fitur lengkap untuk memudahkan pelanggan dalam setiap tahap pemesanan:

* **Penjelajahan & Pemilihan Menu**:
    * **Tampilan Menu Dinamis**: Menampilkan seluruh daftar menu dalam bentuk kartu (card) yang menarik, lengkap dengan gambar, deskripsi, dan harga.
    * **Pengelompokan Menu**: Varian menu yang sejenis (misal: Ayam Penyet Paha/Dada) dikelompokkan dalam satu kartu untuk mempermudah pemilihan.
    * **Fitur Pencarian**: Terdapat kolom pencarian untuk membantu pelanggan menemukan menu yang diinginkan secara cepat berdasarkan nama.
    * **Filter Kategori**: Pelanggan dapat menyaring menu berdasarkan kategori yang tersedia (contoh: Paket, Mie Jogja, Minuman, Gorengan).

* **Manajemen Keranjang Belanja**:
    * **Keranjang Interaktif**: Pelanggan dapat dengan mudah menambah, mengurangi jumlah (quantity), atau menghapus item langsung dari keranjang.
    * **Perhitungan Otomatis**: Total harga pesanan dihitung secara otomatis dan diperbarui secara *real-time* setiap ada perubahan di keranjang.
    * **Kosongkan Keranjang**: Terdapat tombol untuk menghapus semua item di keranjang dengan sekali klik.

* **Proses Pemesanan & Pengiriman**:
    * **Formulir Pelanggan**: Menyediakan formulir untuk data penting seperti Nama, Alamat/Nomor Meja, Tanggal, dan Jam Pengiriman.
    * **Catatan Tambahan**: Pelanggan dapat menambahkan permintaan khusus (misal: "request pedas" atau "tanpa sayur") pada pesanannya.
    * **Pengiriman via WhatsApp**: Setelah data lengkap, pesanan akan diformat menjadi pesan teks dan dikirimkan ke nomor WhatsApp admin yang telah dipilih.

* **Pengalaman Pengguna & Aksesibilitas**:
    * **Desain Responsif**: Tampilan aplikasi telah dioptimalkan untuk berbagai ukuran perangkat, mulai dari layar ponsel, tablet, hingga desktop.
    * **PWA (Progressive Web App)**: Dikonfigurasi agar dapat di-"install" ke layar utama ponsel, memberikan akses cepat layaknya aplikasi native.

## Teknologi & Struktur Proyek

* **Teknologi yang Digunakan**:
    * **HTML5**: Sebagai struktur dasar halaman web.
    * **Tailwind CSS**: Untuk styling dan layout yang cepat serta responsif.
    * **JavaScript (ES Modules)**: Untuk semua logika interaktif, dengan kode yang dipecah menjadi modul-modul agar rapi dan mudah dikelola.

* **Struktur File**:
    ```
    .
    ├── js/
    │   ├── config.js     # Menyimpan konfigurasi (nomor WhatsApp).
    │   ├── data.js       # Menyimpan semua data menu.
    │   ├── ui.js         # Berisi fungsi-fungsi untuk merender tampilan.
    │   └── main.js       # File utama yang mengatur logika aplikasi.
    ├── index.html        # File HTML utama.
    ├── /style.css         # Gaya CSS tambahan.
    └── README.md         # File dokumentasi ini.
    ```

## Instalasi & Konfigurasi

* **Cara Menjalankan**:
    Karena ini adalah proyek web statis, cukup buka file `index.html` di browser. Untuk fungsionalitas penuh (terutama JavaScript Modules), disarankan menjalankannya menggunakan *local server* seperti ekstensi **Live Server** di Visual Studio Code.

* **Konfigurasi**:
    * **Mengubah Nomor WhatsApp**: Buka file `js/config.js` dan ubah nomor di dalam array `WHATSAPP_NUMBERS`.
    * **Mengelola Menu**: Buka file `js/data.js` untuk menambah, mengubah, atau menghapus item menu di dalam array `allMenuData`.