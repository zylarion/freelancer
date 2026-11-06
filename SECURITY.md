# Seguridad

## Reportar una vulnerabilidad

Escribe a **security@zylarion.io**. No abras issues públicos. Respondemos en máximo 3 días hábiles.

## Modelo (resumen)

- Sitio estático en GitHub Pages: sin backend, sin secretos en el cliente.
- Contraseñas (cuando haya backend): bcrypt, nunca en texto plano.
- Nada de `dangerouslySetInnerHTML` con datos del usuario.

## En el repositorio

- `security.yml`: gitleaks, `npm audit` y Semgrep en cada PR, en `main` y cada lunes.
- Actions fijadas por SHA; Dependabot con espera de 7 días para versiones nuevas.
