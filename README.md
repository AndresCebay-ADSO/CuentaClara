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
