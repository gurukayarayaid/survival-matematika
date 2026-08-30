# 🧮 Math Survival - Game Matematika Kelas 3 SD

Game survival pembelajaran Matematika untuk siswa Kelas 3 SD Semester 1, dibangun dengan HTML5, CSS3, JavaScript, dan Firebase Realtime Database.

![Math Survival](icons/icon-192.png)

## ✨ Fitur Utama

### 🎮 Gameplay
- **10 Level** dengan materi matematika kelas 3 SD semester 1
- **Sistem Survival** - 3 nyawa, jawab salah = nyawa berkurang!
- **Timer** - batas waktu menjawab setiap soal
- **Power-ups** - 50:50, Skip, Tambah Waktu, Tambah Nyawa
- **Sistem Kombo** - bonus poin untuk jawaban berturut-turut
- **Sistem Bintang** (⭐⭐⭐) untuk setiap level

### 📚 Materi Matematika (Kelas 3 SD Semester 1)
1. ➕ Penjumlahan Dasar (bilangan sampai 100)
2. ➖ Pengurangan Dasar (bilangan sampai 100)
3. 🔢 Penjumlahan Lanjut (bilangan sampai 500)
4. 🔻 Pengurangan Lanjut (bilangan sampai 500)
5. ✖️ Perkalian Dasar (1-10)
6. ➗ Pembagian Dasar
7. 📏 Pengukuran (panjang, berat, waktu)
8. 🥧 Pecahan Sederhana
9. 🎲 Campuran
10. 💀 Survival Mode (semua materi!)

### 👤 Pemain
- Input nama dan pilih avatar
- Progress tersimpan otomatis
- Bisa lanjut bermain kapan saja

### 🔐 Admin Panel
- Lihat score semua pemain
- Cari pemain berdasarkan nama
- Lihat statistik detail setiap pemain
- Hapus data pemain

### 🖨️ Fitur Cetak
- Cetak nilai individual pemain (raport lengkap)
- Cetak rekap nilai semua pemain
- Format laporan profesional untuk guru

### 📱 PWA & Android
- Install sebagai aplikasi di Android
- Bisa dimainkan offline (setelah load pertama)
- Responsive untuk semua ukuran layar
- Touch-friendly untuk perangkat mobile

### 🔥 Firebase Integration
- Data tersimpan di Firebase Realtime Database
- Sinkronisasi otomatis antar perangkat
- Bisa juga dijalankan tanpa Firebase (localStorage)

---

## 🚀 Cara Setup & Deploy

### Persiapan Firebase

#### 1. Buat Project Firebase
1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik **"Add Project"** / **"Tambah Project"**
3. Beri nama project (misal: `math-survival-game`)
4. Ikuti langkah-langkah setup

#### 2. Aktifkan Realtime Database
1. Di Firebase Console, pilih **"Build"** → **"Realtime Database"**
2. Klik **"Create Database"**
3. Pilih lokasi server (pilih yang terdekat, misal: `asia-southeast1`)
4. Pilih **"Start in test mode"**
5. Copy URL database (format: `https://your-project-default-rtdb.firebaseio.com`)

#### 3. Dapatkan Konfigurasi Firebase
1. Klik icon ⚙️ (gear) → **"Project Settings"**
2. Scroll ke bawah, di bagian **"Your apps"**, klik icon **Web** (`</>`)
3. Beri nama app (misal: `math-survival-web`)
4. Klik **"Register App"**
5. Copy konfigurasi yang muncul (akan seperti ini):
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXX",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};
```

#### 4. Update Konfigurasi di Code
Buka file `index.html` dan cari bagian:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    ...
};
```
Ganti dengan konfigurasi Firebase Anda.

#### 5. Setup Database Rules
1. Di Realtime Database, buka tab **"Rules"**
2. Ganti rules dengan:
```json
{
    "rules": {
        "players": {
            "$playerId": {
                ".read": true,
                ".write": true
            }
        }
    }
}
```
> ⚠️ **Catatan Keamanan**: Rules di atas memberikan akses baca/tulis penuh. Untuk production, gunakan rules yang lebih aman.

---

### Deploy ke Firebase Hosting

#### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
```

#### 2. Login ke Firebase
```bash
firebase login
```

#### 3. Inisialisasi Project
```bash
cd math-survival-game
firebase init hosting
```
- Pilih project yang sudah dibuat
- Public directory: `.` (titik)
- Single-page app: **Yes**
- Deploy to GitHub: **No** (kecuali ingin)
- Overwrite index.html: **No** (JANGAN overwrite!)

#### 4. Update `.firebaserc`
Pastikan file `.firebaserc` berisi:
```json
{
    "projects": {
        "default": "your-firebase-project-id"
    }
}
```

#### 5. Deploy!
```bash
firebase deploy --only hosting
```

Setelah selesai, aplikasi bisa diakses di URL: `https://your-project.web.app`

---

### Deploy ke Firestore (Hosting + Database Alternatif)

Jika ingin menggunakan Firestore Hosting saja (tanpa Realtime Database), data tetap tersimpan di **localStorage** browser. Untuk data multi-device, gunakan Realtime Database seperti di atas.

Namun jika tetap ingin deploy:
```bash
firebase deploy --only hosting
```

File `firebase.json` sudah dikonfigurasi untuk hosting.

---

## 📱 Install di Android

### Cara 1: Melalui Browser (PWA)
1. Buka URL game di **Chrome** di Android
2. Tunggu beberapa detik, akan muncul banner **"Add to Home Screen"**
3. Atau: Tap menu (⋮) → **"Install app"** / **"Add to Home Screen"**
4. Icon game akan muncul di home screen seperti aplikasi biasa

### Cara 2: Wrap dengan TWA (Trusted Web Activity)
Untuk distribusi via Play Store:
1. Gunakan [Bubblewrap](https://github.com/nicktomlin/nicktomlin.github.io) atau [PWABuilder](https://www.pwabuilder.com/)
2. Masukkan URL game yang sudah di-hosting
3. Generate APK/AAB
4. Upload ke Google Play Store

---

## 🎯 Cara Bermain

1. **Login**: Masukkan nama dan pilih avatar
2. **Pilih Level**: Mulai dari Level 1 (Penjumlahan Dasar)
3. **Jawab Soal**: Pilih jawaban yang benar dari 4 pilihan
4. **Gunakan Power-ups**: Bantu saat kesulitan
5. **Kumpulkan Score**: Untuk membuka level berikutnya
6. **Dapatkan Bintang**: ⭐⭐⭐ berdasarkan akurasi jawaban

### Sistem Unlock Level
| Level | Score Dibutuhkan |
|-------|-----------------|
| 1 | 0 (gratis) |
| 2 | 50 |
| 3 | 150 |
| 4 | 250 |
| 5 | 400 |
| 6 | 550 |
| 7 | 750 |
| 8 | 950 |
| 9 | 1200 |
| 10 | 1500 |

---

## 🔐 Admin Panel

### Akses Admin
1. Di halaman login, klik tombol **"🔐 Admin"**
2. Masukkan password: `admin123`
3. Anda akan masuk ke Admin Panel

### Fitur Admin
- 📊 Lihat semua pemain dan statistik
- 🔍 Cari pemain berdasarkan nama
- 🖨️ Cetak nilai individual pemain
- 🖨️ Cetak rekap semua pemain
- 🗑️ Hapus semua data (hati-hati!)

> ⚠️ **Ubah password admin** di file `index.html`, cari fungsi `verifyAdmin()`.

---

## 📁 Struktur File

```
math-survival-game/
├── index.html              # File utama (semua game logic)
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (offline support)
├── firebase.json           # Firebase Hosting config
├── .firebaserc             # Firebase project config
├── database.rules.json     # Realtime Database rules
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── README.md               # File ini
```

---

## 🛠️ Teknologi

- **HTML5** - Struktur aplikasi
- **CSS3** - Styling & animasi (tanpa framework)
- **JavaScript (Vanilla)** - Game logic & interaksi
- **Firebase Realtime Database** - Penyimpanan data online
- **PWA (Progressive Web App)** - Installable di Android
- **Web Audio API** - Efek suara
- **Service Worker** - Offline support & caching

---

## 📄 Lisensi

Game ini dibuat untuk tujuan pendidikan. Bebas digunakan untuk keperluan pembelajaran.

---

## 🐛 Troubleshooting

### Data tidak tersimpan di Firebase
- Pastikan konfigurasi Firebase sudah benar
- Cek Realtime Database rules sudah di-set
- Cek koneksi internet

### Game tidak bisa diinstall di Android
- Pastikan diakses via HTTPS (bukan HTTP)
- Pastikan `manifest.json` valid
- Cek Service Worker terdaftar (DevTools → Application)

### Suara tidak muncul
- Pastikan setting suara aktif (⚙️ Pengaturan)
- Beberapa browser memerlukan interaksi user dulu sebelum memutar suara
- Klik/tap layar terlebih dahulu

### Tampilan berantakan
- Clear cache browser
- Hard refresh (Ctrl+Shift+R)
- Update browser ke versi terbaru

---

Dibuat dengan ❤️ untuk siswa Indonesia 🇮🇩
