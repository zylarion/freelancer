// eslint-config-next 16 publica configuraciones planas (flat config) directamente.
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    // Deuda conocida: reglas nuevas de React 19 / React Compiler (eslint-config-next 16). Quedan
    // como advertencias hasta refactorizar los efectos de las páginas (issue de deuda técnica).
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
