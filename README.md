# FreelancerPro - Sistema de Gestión Completo

¡Aplicación web funcional desplegada en GitHub Pages!

🚀 **Acceso directo**: [https://zylarion.github.io/freelancer/](https://zylarion.github.io/freelancer/)

## Funcionalidades Implementadas:
- ✅ Sistema de autenticación completo
- ✅ Dashboard con métricas en tiempo real  
- ✅ Gestión de proyectos y tareas
- ✅ CRM de clientes
- ✅ Generador de cotizaciones
- ✅ Gestión de contratos
- ✅ Panel de equipo
- ✅ Datos de demostración incluidos

**¡Haz clic en 'Cargar Datos de Demostración' para probar todas las funcionalidades!**

## Desarrollo

Requiere Node 22 (`.nvmrc`).

```bash
npm ci
cp .env.example .env.local   # solo si vas a usar Prisma en local
npm run dev                  # http://localhost:3000
npm run ci                   # lint + build estático (lo mismo que corre el CI)
npm run typecheck            # tipos (hay deuda previa; no agregues errores nuevos)
```

Cómo se trabaja (ramas, PRs, commits): [CONTRIBUTING.md](CONTRIBUTING.md). Seguridad: [SECURITY.md](SECURITY.md).
