# SocialMark - Plataforma SaaS de Marketing en Redes Sociales

Una plataforma moderna de gestión de redes sociales construida con Next.js 14, TypeScript, Tailwind CSS y Prisma.

## 🚀 Características

### Autenticación & Onboarding
- ✅ Registro e inicio de sesión con email/contraseña
- ✅ NextAuth.js para gestión de sesiones segura
- ✅ Onboarding de 3 pasos (Rol → Casos de Uso → Tamaño de Empresa)

### Conexión de Redes Sociales
- ✅ Soporte para 6 plataformas: Facebook, Instagram, Twitter/X, LinkedIn, TikTok, YouTube
- ✅ Modal de requisitos previos para cada plataforma
- ✅ Mock OAuth flow
- ✅ Almacenamiento seguro de tokens (encriptado)
- ✅ Gestión de cuentas conectadas

### Dashboard Completo
- ✅ Interfaz de chat con asistente de IA
- ✅ Tarjetas de agentes para acciones rápidas
- ✅ Dashboard de analítica con gráficos interactivos
- ✅ Gestor de campañas
- ✅ Programador de publicaciones
- ✅ Estudio de contenido con plantillas
- ✅ Generador de reportes con exportación

### Diseño & UX
- ✅ Diseño responsivo (móvil, tablet, escritorio)
- ✅ Modo oscuro/claro
- ✅ Interfaz completamente en español
- ✅ Componentes shadcn/ui de alta calidad
- ✅ Animaciones suaves y transiciones

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Base de Datos**: SQLite con Prisma ORM
- **Autenticación**: NextAuth.js v5
- **Validación**: Zod + React Hook Form
- **Gráficos**: Recharts
- **Notificaciones**: Sonner
- **Icons**: Lucide React
- **Encriptación**: Node.js crypto

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Git

## ⚙️ Instalación

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd protocol/sandbox
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
El archivo `.env` ya está configurado con valores por defecto. Para desarrollo, puedes usarlo tal como está.

Para producción, actualiza estos valores en `.env`:

```env
# Base de Datos
DATABASE_URL="file:./prisma/dev.db"

# NextAuth
NEXTAUTH_SECRET="tu-secret-key-aqui"
NEXTAUTH_URL="http://localhost:3000"

# Encriptación
ENCRYPTION_KEY="tu-encryption-key-aqui"
```

### 4. Inicializar base de datos
```bash
# Crear base de datos y tablas
npm run db:push

# Sembrar datos de prueba
npm run db:seed
```

### 5. Ejecutar servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔐 Credenciales de Demo

Después de ejecutar `npm run db:seed`, puedes iniciar sesión con:

**Email:** `demo@example.com`  
**Contraseña:** `demo123456`

## 📁 Estructura del Proyecto

```
src/
├── app/                       # App Router (Next.js 14)
│   ├── api/                  # API routes
│   │   ├── auth/            # Autenticación
│   │   ├── onboarding/      # Datos de onboarding
│   │   └── social/          # Conexiones sociales
│   ├── dashboard/           # Rutas autenticadas
│   │   ├── accounts/        # Gestión de cuentas
│   │   ├── analytics/       # Dashboard de analítica
│   │   ├── campaigns/       # Gestión de campañas
│   │   ├── content-studio/  # Estudio de contenido
│   │   ├── reports/         # Reportes
│   │   ├── scheduler/       # Programador
│   │   └── settings/        # Configuración
│   ├── auth/                # Rutas públicas de auth
│   ├── onboarding/          # Flujo de onboarding
│   ├── page.tsx             # Landing page
│   └── layout.tsx           # Root layout
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   ├── dashboard/           # Componentes del dashboard
│   ├── onboarding/          # Componentes del onboarding
│   └── social/              # Componentes de redes sociales
├── lib/
│   ├── services/            # Lógica de negocio
│   ├── schemas/             # Esquemas Zod
│   ├── auth.ts              # Configuración de NextAuth
│   ├── db.ts                # Cliente de Prisma
│   ├── crypto.ts            # Utilidades de encriptación
│   └── utils.ts             # Utilidades generales
├── hooks/                   # React hooks personalizados
└── prisma/
    ├── schema.prisma        # Esquema de base de datos
    └── seed.ts              # Script de semilla
```

## 📊 Scripts Disponibles

```bash
# Desarrollo
npm run dev                 # Inicia servidor de desarrollo

# Producción
npm run build             # Construir para producción
npm start                 # Inicia servidor de producción

# Base de datos
npm run db:push           # Sincronizar schema con BD
npm run db:migrate        # Crear nueva migración
npm run db:seed           # Sembrar datos de prueba

# Linting
npm run lint              # Ejecutar ESLint
```

## 🔒 Seguridad

- ✅ Contraseñas hasheadas con bcryptjs
- ✅ Tokens encriptados con AES-256-GCM
- ✅ Sesiones seguras con NextAuth.js
- ✅ CSRF protection integrado
- ✅ Variables de entorno para secretos
- ✅ Validación de entrada con Zod

## 🚀 Deployment en Vercel

### 1. Conectar repositorio a Vercel
```bash
vercel --prod
```

### 2. Configurar variables de entorno
En Vercel Dashboard:
- Ir a Project Settings → Environment Variables
- Añadir todas las variables de `.env`

### 3. Base de datos en producción
Para producción, considera usar PostgreSQL o MongoDB.

## 🧪 Testing de Características

### Registrar nuevo usuario
1. Ve a [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup)
2. Rellena el formulario
3. Completa el onboarding de 3 pasos
4. Explora el dashboard

### Conectar cuenta social
1. Ve a Dashboard → Cuentas Sociales
2. Haz clic en "Conectar Cuenta"
3. Selecciona una plataforma
4. Revisa los requisitos previos
5. Completa el flujo de conexión

### Ver analítica
1. Ve a Dashboard → Analítica
2. Visualiza los gráficos interactivos
3. Experimenta con diferentes filtros

## 📚 Documentación de Tecnologías

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Licencia MIT

---

**Hecho con ❤️ usando Next.js, TypeScript y Tailwind CSS**
