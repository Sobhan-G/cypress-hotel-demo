# Cypress Hotel Demo

Detta projekt är ett övningsprojekt där jag testat en hotellbokningsapplikation med hjälp av Cypress – 
emett populärt verktyg för frontend-testautomatisering.

Innehåll
- End-to-end tester av hotellbokningsflöde
- Validering av formulär och bokningsbekräftelse
- Test av felhantering och edge cases

Tekniker & verktyg
- Cypress
- JavaScript
- Node.js
- Mocha (inbyggt i Cypress)

 Kom igång
1. Klona detta repo:
bash
git clone https://github.com/Sobhan-G/cypress-hotel-demo.git
cd cypress-hotel-demo
Perfekt! Här är förbättrade README-förslag för de tre projekten.
Du kan enkelt kopiera in dem i dina projekt och anpassa smådetaljer om det behövs:



2. Installera beroenden:
bash
npm install


3. Starta tester:
```bash
npx cypress open

## Exempel på testfall
- Boka ett rum med korrekt inmatning – kontrollera bekräftelse.
- Försök boka med ogiltiga datum – valideringsfel ska visas.
- Säkerställ att användaren inte kan lämna obligatoriska fält tomma.

## Syfte & lärdomar
Syftet med projektet var att utveckla mina kunskaper i Cypress och testautomatisering av webbapplikationer.
Jag fokuserade på realistiska testscenarier och att skriva läsbar och återanvändbar kod.

