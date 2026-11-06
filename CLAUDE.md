# Instrucciones para agentes en este repo (Freelancer)

- Idioma del código y docs: español (identificadores en inglés).
- Nunca push directo a `main`: rama de trabajo + PR (ver CONTRIBUTING.md). Merge a `main` = publicación en GitHub Pages (`nextjs.yml`).
- Commits en Conventional Commits. **No** agregues líneas `Co-Authored-By` ni `Claude-Session` a los commits.
- Antes de abrir un PR: `npm run ci` debe pasar.
- No pongas secretos ni datos personales en código, pruebas o logs. Los secretos van en variables de entorno o en el gestor de la plataforma, nunca en el repo.
- Next.js con `output: "export"` (sitio estático): no hay servidor ni rutas API en producción.
- Deuda conocida: `npm run typecheck` tiene errores previos (el build los ignora con `ignoreBuildErrors`); no agregues nuevos y baja el número cuando toques un archivo.
- `.env` no va al repo: copia `.env.example` a `.env.local`.
