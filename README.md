# Website YAPU — Yayasan Amanah Peduli Umat

Website resmi Yayasan Amanah Peduli Umat — full-stack dinamis dengan **Next.js 14** (frontend) + **Django 5** (backend).

## Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript + Tailwind CSS |
| Backend | Django 5 + Django REST Framework |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Auth | JWT (djangorestframework-simplejwt) |
| Media | Cloudinary |
| Map | React Leaflet |
| Deploy | Vercel (FE) + Railway/Render (BE) |

## Struktur Folder

```
Yapu/
├── frontend/     # Next.js 14
└── backend/      # Django 5
```

## Menjalankan Secara Lokal

### Backend (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_yapu_data
# Buat superuser admin
python manage.py createsuperuser
python manage.py runserver
```

Backend berjalan di: http://localhost:8000
Django Admin: http://localhost:8000/admin/ (user: admin, pass: yapu@admin2026)

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di: http://localhost:3000

> **Catatan:** Pastikan backend sudah berjalan sebelum menjalankan frontend.

## Environment Variables

### Backend (`backend/.env`)
```
SECRET_KEY=...
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
CLOUDINARY_CLOUD_NAME=drturcggf
CLOUDINARY_API_KEY=675396752893639
CLOUDINARY_API_SECRET=...
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend (`frontend/.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=drturcggf
```

## API Endpoints

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | /api/programs/ | List program |
| GET | /api/programs/{slug}/ | Detail program |
| GET | /api/articles/ | List artikel |
| GET | /api/articles/{slug}/ | Detail artikel |
| GET | /api/impact/stats/ | Statistik dampak |
| GET | /api/impact/locations/ | Lokasi peta |
| POST | /api/volunteers/ | Daftar relawan |
| POST | /api/contacts/ | Pesan kontak |
| POST | /api/contacts/partnership/ | Pengajuan kemitraan |
| GET | /api/partners/ | List mitra |
| GET | /api/gallery/ | Galeri foto |

## Halaman Website

| Halaman | URL |
|---|---|
| Beranda | / |
| Tentang Kami | /tentang-kami |
| Program | /program |
| Kabar Terbaru | /kabar-terbaru |
| Dampak | /dampak |
| Mari Beraksi | /mari-beraksi |
| Kontak | /kontak |

## Deployment

### Frontend → Vercel
1. Connect GitHub repo folder `/frontend`
2. Set environment variables di Vercel dashboard
3. Deploy otomatis setiap push ke `main`

### Backend → Railway / Render
1. Connect GitHub repo folder `/backend`
2. Set environment variables (DATABASE_URL PostgreSQL, dll)
3. Run commands: `python manage.py migrate && python manage.py seed_yapu_data`

---

© 2026 Yayasan Amanah Peduli Umat — Amanah dalam Melayani, Peduli dalam Memberi.
