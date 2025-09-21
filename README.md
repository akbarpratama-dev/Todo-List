# Aplikasi Todo List 📝

Aplikasi todo list modern dan responsif yang dibangun dengan HTML, CSS, dan JavaScript. Aplikasi ini membantu Anda mengatur tugas-tugas dalam berbagai kategori dengan antarmuka yang bersih dan intuitif.

## Fitur ✨

- **Berbagai Kategori**: Atur tugas dalam 8 kategori berbeda:
  - Personal (Pribadi)
  - Work (Pekerjaan)
  - Shopping (Belanja)
  - Coding (Pemrograman)
  - Health (Kesehatan)
  - Fitness (Kebugaran)
  - Education (Pendidikan)
  - Finance (Keuangan)

- **Manajemen Tugas**:
  - Tambah tugas baru ke kategori manapun
  - Tandai tugas sebagai selesai/belum selesai
  - Hapus tugas yang tidak diinginkan
  - Lihat jumlah tugas per kategori

- **Desain Responsif**: 
  - Desain mobile-first
  - Bekerja di desktop dan perangkat mobile
  - Animasi dan transisi yang halus

- **Penyimpanan Data**: Tugas disimpan di localStorage browser

## Demo 🎮

[Live Demo](https://akbarpratama-dev.github.io/Todo-List/) *(Perbarui link ini setelah deploy)*

## Screenshot 📱

*Tambahkan screenshot aplikasi Anda di sini*

## Instalasi 🚀

1. Clone repository ini:
   ```bash
   git clone https://github.com/akbarpratama-dev/Todo-List.git
   ```

2. Masuk ke direktori proyek:
   ```bash
   cd Todo-List
   ```

3. Buka `index.html` di browser atau gunakan live server.

## Cara Penggunaan 💡

1. **Lihat Kategori**: Layar utama menampilkan semua kategori dengan jumlah tugas
2. **Pilih Kategori**: Klik kategori manapun untuk melihat tugas-tugasnya
3. **Tambah Tugas**: Klik tombol "+" untuk menambah tugas baru
4. **Selesaikan Tugas**: Klik checkbox untuk menandai tugas sebagai selesai
5. **Hapus Tugas**: Hover pada tugas dan klik tombol hapus
6. **Navigasi**: Gunakan tombol kembali untuk kembali ke daftar kategori

## Struktur File 📁

```
todo-list/
├── index.html          # File HTML utama
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Ikon kategori
│   ├── boy.png
│   ├── briefcase.png
│   ├── shopping.png
│   ├── web-design.png
│   ├── healthcare.png
│   ├── dumbbell.png
│   ├── education.png
│   └── saving.png
└── README.md
```

## Teknologi yang Digunakan 🛠️

- **HTML5**: Struktur dan markup
- **CSS3**: Styling dan desain responsif
- **JavaScript (ES6+)**: Fungsionalitas dan interaktivitas
- **LocalStorage**: Penyimpanan data persisten

## Implementasi Fitur Utama

### Sistem Kategori
Aplikasi menggunakan kategori yang telah ditentukan dengan ikon terkait. Setiap kategori menampilkan jumlah tugas yang ada di dalamnya.

### Operasi Tugas
- **Create**: Tambah tugas dengan pemilihan kategori
- **Read**: Tampilkan tugas yang difilter berdasarkan kategori
- **Update**: Tandai tugas sebagai selesai/belum selesai
- **Delete**: Hapus tugas dari daftar

### Desain Responsif
- Pendekatan mobile-first dengan CSS media queries
- Transisi dan animasi yang halus
- Antarmuka yang ramah sentuh

## Dukungan Browser 🌐

- Chrome (direkomendasikan)
- Firefox
- Safari
- Edge

## Kontribusi 🤝

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/FiturKeren`)
3. Commit perubahan (`git commit -m 'Tambah FiturKeren'`)
4. Push ke branch (`git push origin feature/FiturKeren`)
5. Buat Pull Request

## Pengembangan Mendatang 🚀

- [ ] Tambah tanggal jatuh tempo untuk tugas
- [ ] Level prioritas (tinggi, sedang, rendah)
- [ ] Pencarian dan filter tugas
- [ ] Tema mode gelap
- [ ] Export tugas ke CSV/JSON
- [ ] Sinkronisasi cloud
- [ ] Pengingat/notifikasi tugas

## Lisensi 📄

Proyek ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## Penulis 👨‍💻

**Muhammad Akbar Pratama**
- GitHub: [@akbarpratama-dev](https://github.com/akbarpratama-dev)
- Email: your-email@example.com

## Contoh Tugas Default 📋

Aplikasi ini dilengkapi dengan 25 contoh tugas yang terdistribusi di semua kategori:

### Personal (Pribadi)
- Baca satu bab buku
- Menulis di jurnal
- Meditasi selama 10 menit

### Work (Pekerjaan)  
- Siapkan presentasi untuk meeting
- Kirim email follow-up
- Siapkan agenda rapat tim

### Shopping (Belanja)
- Pergi ke pasar
- Beli bahan makanan untuk seminggu
- Beli pakaian baru

### Coding (Pemrograman)
- Selesaikan coding challenge
- Kerjakan proyek coding sampingan
- Debug masalah software

### Dan kategori lainnya dengan tugas-tugas relevan!

## Terima Kasih 🙏

- Ikon dari berbagai sumber
- Font: Inter dari Google Fonts
- Inspirasi dari aplikasi todo modern

---

⭐ Beri bintang pada repository ini jika menurut Anda bermanfaat!

## Tips Penggunaan 💡

1. **Organize by Priority**: Gunakan kategori yang berbeda untuk mengatur prioritas tugas
2. **Regular Review**: Tinjau dan perbarui tugas secara berkala
3. **Small Tasks**: Pecah tugas besar menjadi tugas-tugas kecil yang lebih mudah dikelola
4. **Completion Habit**: Biasakan menandai tugas sebagai selesai untuk motivasi

## FAQ ❓

**Q: Apakah data tugas saya aman?**
A: Ya, semua data disimpan secara lokal di browser Anda menggunakan localStorage.

**Q: Bisakah saya menggunakan aplikasi ini offline?**  
A: Ya, setelah dimuat pertama kali, aplikasi dapat berfungsi tanpa koneksi internet.

**Q: Bagaimana cara backup tugas saya?**
A: Saat ini belum ada fitur backup otomatis, namun data tersimpan di localStorage browser.
