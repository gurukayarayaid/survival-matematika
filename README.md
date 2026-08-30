# 🧮 Math Survival - Game Matematika Kelas 3 SD

Game survival pembelajaran Matematika untuk siswa Kelas 3 SD Semester 1.
Data tersimpan di browser (localStorage), tanpa perlu database.

## ✨ Fitur

- **10 Level** materi matematika kelas 3 SD semester 1
- **Sistem Survival** - nyawa, timer, power-ups, kombo
- **Admin Panel** - lihat & cetak nilai semua pemain
- **Cetak Nilai** - raport individual & rekap semua pemain
- **PWA** - install di Android seperti app biasa
- **Offline** - bisa dimainkan tanpa internet (setelah load pertama)

## 📚 Materi

1. ➕ Penjumlahan Dasar (sampai 100)
2. ➖ Pengurangan Dasar (sampai 100)
3. 🔢 Penjumlahan Lanjut (sampai 500)
4. 🔻 Pengurangan Lanjut (sampai 500)
5. ✖️ Perkalian Dasar (1-10)
6. ➗ Pembagian Dasar
7. 📏 Pengukuran (panjang, berat, waktu)
8. 🥧 Pecahan Sederhana
9. 🎲 Campuran
10. 💀 Survival Mode

## 🚀 Deploy ke Firebase Hosting

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Login & Init
```bash
firebase login
cd survival-matematika
firebase init hosting
# Pilih project → public dir: . → SPA: Yes → jangan overwrite index.html
```

### 3. Deploy
```bash
firebase deploy --only hosting
```

## 📱 Install di Android

1. Buka URL game di Chrome Android
2. Tap menu (⋮) → "Install app" / "Add to Home Screen"
3. Icon game muncul di home screen!

## 🔐 Admin

- Klik tombol **Admin** di halaman login
- Password default: `admin123`

## 🛠️ Teknologi

- HTML5 + CSS3 + Vanilla JavaScript
- localStorage untuk data pemain
- PWA (Service Worker + Manifest)
- Web Audio API untuk efek suara
- Firebase Hosting (opsional, untuk deploy online)
