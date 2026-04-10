# CuentaClara 💰

Sistema de gestión de préstamos para prestamistas independientes. Permite registrar préstamos, llevar control de cuotas y abonos, calcular intereses y visualizar el estado de cada deudor en tiempo real.

## Estructura del proyecto

```
cuentaclara/
├── frontend/   # React — interfaz de usuario
└── backend/    # Express + PostgreSQL — API REST
```

## Módulos principales

- **Préstamos** — Registro y seguimiento de cada préstamo
- **Deudores** — Gestión de clientes/deudores
- **Cuotas y abonos** — Control de pagos y saldos pendientes
- **Intereses** — Cálculo automático según tasa y modalidad
- **Alertas** — Notificaciones de vencimientos próximos
- **Reportes** — Resúmenes financieros y estado de cartera

## Stack

| Capa | Tecnología |
|------|-----------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Base de datos | PostgreSQL + Prisma ORM |
| Autenticación | JWT |

## Inicio rápido

### Backend
```bash
cd backend
npm install
cp .env.example .env   # configurar variables
npx prisma migrate dev
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Equipo

- **Backend** — [@AndresCebay-ADSO](https://github.com/AndresCebay-ADSO)
- **Frontend** — [@32131233211](https://github.com/32131233211)

## Flujo de trabajo con Git (OBLIGATORIO)

⚠️ Importante: No trabajamos directamente sobre `main`.

---

### 📌 Ramas principales

- `main` → código estable (NO tocar directamente)
- `develop` → integración de features

---
## 🌱 Flujo de trabajo con Git (OBLIGATORIO)

⚠️ Importante: No trabajamos directamente sobre `main`.

---

### 📌 Ramas principales

- `main` → código estable (NO tocar directamente)
- `develop` → integración de features

---

### 🧠 Flujo de trabajo

1. Siempre actualizar antes de empezar:

```bash
git checkout develop
git pull origin develop
```

2. Crear una nueva rama:

```bash
git checkout -b feature/nombre-de-tu-feature
```

Ejemplos:

```
feature/login
feature/registro-deudor
feature/vista-dashboard
```

---

3. Trabajar normalmente y guardar cambios:

```bash
git add .
git commit -m "feat: agrega formulario de login"
```

---

4. Subir tu rama:

```bash
git push origin feature/nombre-de-tu-feature
```

---

5. Crear Pull Request (PR) en GitHub hacia `develop`

👉 NUNCA hacer push directo a `main`

---

## 🧾 Convención de commits

Usamos este formato:

```
tipo: descripción
```

### Tipos:

- `feat:` nueva funcionalidad  
- `fix:` corrección de errores  
- `refactor:` mejora de código  
- `docs:` documentación  
- `style:` cambios visuales (CSS)  

Ejemplo:

```bash
feat: agrega cálculo de intereses
fix: corrige error en login
```

---

## 📌 Funcionalidades

- Registro de préstamos  
- Gestión de deudores  
- Control de cuotas y pagos  
- Cálculo de intereses  
- Alertas de vencimiento  
- Reportes  

---

## 🚫 Reglas del proyecto

- ❌ No subir `.env`  
- ❌ No hacer push a `main`  
- ❌ No romper el código de otro  
- ✅ Probar antes de hacer commit  
- ✅ Escribir commits claros  

---

## Brando (importante)

Si eres nuevo en Git:

- Siempre haz `git pull` antes de trabajar  
- Trabaja en tu propia rama  
- No tengas miedo de preguntar  
- Si algo se rompe → NO hagas push 

---

## 🧠 Notas finales

- Si no defines reglas → el proyecto se desordena  
- Usa Pull Requests siempre  
- Mantén el código limpio y organizado  
- La comunicación entre frontend y backend es clave  