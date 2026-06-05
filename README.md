# Күүл Кино — Тохируулах заавар

## Файлын бүтэц

```
coolkino/
├── index.html          ← Нүүр хуудас (кино жагсаалт)
├── watch.html          ← Нэвтрэх + үзэх хуудас
├── admin.html          ← Админ самбар
├── css/
│   └── main.css        ← Ерөнхий загвар
├── js/
│   └── config.js       ← Supabase тохиргоо
└── supabase_setup.sql  ← Хүснэгт үүсгэх SQL
```

---

## 1. Supabase тохируулах

1. [supabase.com](https://supabase.com) дээр шинэ project үүсгэнэ
2. SQL Editor дээр `supabase_setup.sql` файлын агуулгыг ажиллуулна
3. Project Settings > API дээрээс **URL** болон **anon key** хуулна

---

## 2. config.js тохируулах

`js/config.js` файлыг нээж:

```js
const SUPABASE_URL = 'https://XXXXXX.supabase.co';   // ← өөрийнхөө URL
const SUPABASE_KEY = 'eyJhbGc...';                    // ← anon key
```

---

## 3. Admin нууц үг өөрчлөх

`admin.html` файл дотор:

```js
const ADMIN_PW = 'coolkino2024';  // ← өөрийн нууц үг болгоно
```

---

## 4. GitHub Pages-д оруулах

```bash
git init
git add .
git commit -m "Күүл Кино эхний хувилбар"
git remote add origin https://github.com/таны-нэр/cool-kino.git
git push -u origin main
```

GitHub repo Settings > Pages > Source: `main` branch → Save

Сайт: `https://таны-нэр.github.io/cool-kino/`

---

## 5. Хэрхэн ажилладаг вэ

### Нэг кино линк:
1. Admin → Линк үүсгэх → Нэг кино → кино сонгох → Үүсгэх
2. Линкийг хуулж Messenger-т илгээнэ
3. Хэрэглэгч линкийг нээхэд **зөвхөн тэр кино** харагдана
4. Линк нэг л удаа ажилладаг — хуваалцсан ч нөгөө хүн үзэж болохгүй

### Багц линк:
1. Admin → Линк үүсгэх → Бүх кино (багц) → Үүсгэх
2. Хэрэглэгч энэ линкээр **бүх кино** үзэж болно
3. Мөн адил нэг л хүн, нэг л төхөөрөмж

### Хамгаалалтын механизм:
- Browser fingerprint хадгалагдана
- Өөр browser/device-ээс нэвтрэхэд "Хандалт хориглогдлоо" гарна

---

## Анхаарах зүйл

- YouTube видеонуудыг **Unlisted** болгосон байх шаардлагатай
- `youtube-nocookie.com` embed ашиглаж байгаа тул tracking бага
- Admin хуудас нийтийн URL-д байна — нууц үгийг хүчтэй болгоно
