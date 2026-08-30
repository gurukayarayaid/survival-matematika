# 🧮 Math Survival - Game Matematika Kelas 3 SD

Game survival pembelajaran Matematika untuk siswa Kelas 3 SD Semester 1, dibangun dengan HTML5, CSS3, JavaScript, dan Firebase Realtime Database.

## ✨ Fitur Utama

### 🎮 Gameplay
- **10 Level** materi matematika kelas 3 SD semester 1
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
- Progress tersimpan otomatis di Firebase Realtime Database
- Bisa lanjut bermain kapan saja dari device manapun

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

---

## 🚀 Cara Setup & Deploy

### Persiapan Firebase

#### 1. Buat Project Firebase
1. Buka [Firebase Console](https://console.firebase.google.com/)
2. Klik **"Add Project"** / **"Tambah Project"**
3. Beri nama project (misal: `survival-matematika`)
4. Ikuti langkah-langkah setup

#### 2. Aktifkan Realtime Database
1. Di Firebase Console, pilih **"Build"** → **"Realtime Database"**
2. Klik **"Create Database"**
3. Pilih lokasi server: **`asia-southeast1`** (Singapore)
4. Pilih **"Start in test mode"**
5. Copy URL database (format: `https://your-project-default-rtdb.firebaseio.com`)

#### 3. Dapatkan Konfigurasi Firebase
1. Klik icon ⚙️ (gear) → **"Project Settings"**
2. Scroll ke bawah, di bagian **"Your apps"**, klik icon **Web** (`</>`)
3. Beri nama app (misal: `math-survival-web`)
4. Klik **"Register App"**
5. Copy konfigurasi yang muncul

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
2. Ganti rules dengan isi file `database.rules.json`:
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

### Deploy ke Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
cd survival-matematika
firebase init hosting
# Pilih project → public dir: . → SPA: Yes → JANGAN overwrite index.html
firebase deploy
```

---

## 📱 Install di Android

1. Buka URL game di **Chrome** di Android
2. Tunggu banner **"Add to Home Screen"** atau tap menu (⋮) → **"Install app"**
3. Icon game muncul di home screen seperti aplikasi biasa

---

## 🔐 Admin Panel

- Di halaman login, klik **"🔐 Admin"**
- Password: `admin123`

---

## 📁 Struktur File

```
survival-matematika/
├── index.html              # File utama (game + admin + cetak)
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (offline support)
├── firebase.json           # Firebase Hosting config
├── .firebaserc             # Firebase project config
├── database.rules.json     # Realtime Database rules
├── icons/                  # Icon PWA (8 ukuran)
└── README.md
```

---

Dibuat dengan ❤️ untuk siswa Indonesia 🇮🇩
