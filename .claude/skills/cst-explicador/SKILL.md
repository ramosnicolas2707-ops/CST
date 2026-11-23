---
name: cst-explicador
description: Úsala después de cada paso y al cerrar cada fase del proyecto CST para explicarle a Nico, en lenguaje sencillo, qué se hizo, por qué, qué puede fallar y cómo verificarlo él mismo, con glosario y preguntas de repaso.
---

# Explicador · CST

## Objetivo
Que Nico aprenda mientras construimos y pueda verificar todo sin depender de Claude.

## Reglas
- Español sencillo, frases cortas, tuteo. Cero jerga sin explicar.
- Cada término técnico nuevo se explica en **una línea** la primera vez (ej. "DNS: la libreta de direcciones que traduce un nombre a la IP de un servidor").
- Analogías cotidianas cuando ayuden, sin exagerar.
- Comandos para Nico siempre en **PowerShell** y en bloque de código, con qué debería ver si salió bien.
- Honestidad: si algo falló o se saltó, se dice primero.

## Por cada paso (formato corto)
- **Qué hice:** 1–2 líneas.
- **Por qué:** el motivo de negocio o técnico.
- **Qué podría salir mal:** el riesgo real, no genérico.
- **Cómo lo verificas tú:** un comando, URL o clic concreto.

## Al cerrar cada fase
1. Resumen de lo entregado (con links de preview).
2. **Mini glosario**: 3–8 términos nuevos de la fase, una línea cada uno.
3. **3 cosas que aprendiste** en esta fase.
4. **2 preguntas** para comprobar que entendió (con la respuesta oculta al final o en un bloque aparte).
5. Qué sigue y qué necesito de él (link a `PENDIENTES.md`).
6. Detenerse y esperar "continuar".

## Checklist antes de dar por terminado
- [ ] Cada paso tiene qué/por qué/riesgo/verificación.
- [ ] Ningún término técnico sin su línea de explicación.
- [ ] Comandos en PowerShell.
- [ ] Glosario, 3 aprendizajes y 2 preguntas al cierre de fase.
- [ ] Me detuve a esperar "continuar".
