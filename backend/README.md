# CuentaClara — Backend

API REST construida con Express + PostgreSQL (Prisma ORM).

## Setup

```bash
npm install
cp .env.example .env
# Edita .env con tus datos de PostgreSQL
npx prisma migrate dev --name init
npm run dev
```

## Endpoints

### Auth
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| POST | `/api/auth/registro` | Registrar usuario |
| POST | `/api/auth/login` | Login, retorna JWT |

### Deudores (requiere JWT)
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/api/deudores` | Listar todos |
| GET | `/api/deudores/:id` | Ver uno con prestamos |
| POST | `/api/deudores` | Crear |
| PUT | `/api/deudores/:id` | Actualizar |
| DELETE | `/api/deudores/:id` | Eliminar |

### Prestamos (requiere JWT)
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/api/prestamos` | Listar todos |
| GET | `/api/prestamos/vencidos` | Solo vencidos |
| GET | `/api/prestamos/:id` | Ver con pagos |
| POST | `/api/prestamos` | Crear (calcula cuota automaticamente) |

### Pagos (requiere JWT)
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/api/pagos/prestamo/:id` | Historial de pagos |
| POST | `/api/pagos` | Registrar abono (actualiza saldo) |

### Reportes (requiere JWT)
| Metodo | Ruta | Descripcion |
|--------|------|-------------|
| GET | `/api/reportes/resumen` | Totales del dashboard |
| GET | `/api/reportes/cartera` | Estado completo de cartera |
