# @kemero/sajtfot-sajterna

Den låsta foten på en katalogsajt. Till salu-raden mot sajterna.se,
integritetspolicy-länken och kemero-krediten.

Katalogsajternas footer byggs om i varje designpass, och det är meningen.
Det som inte får byggas om bor här. Formulering, ordning och rytm är låsta i
paketet, precis som märket är låst i `@kemero/credit`.

## Användning

```bash
bun add @kemero/sajtfot-sajterna@github:kemero-io/sajtfot-sajterna
```

```tsx
import { SajtfotSajterna } from "@kemero/sajtfot-sajterna";

<SajtfotSajterna
  caseUrl={site.caseUrl}
  forSale={site.demoMode}
  legalName={business.legalName}
  legalSuffix={footer.legalSuffix}
  reserveUrl={site.reserveUrl}
/>;
```

Lägg den sist i footerns innehållsbehållare, efter sajtens egna kolumner.
Avståndet ovanför bandet äger footern, resten äger paketet.

## Vad komponenten renderar

I demoläge (`forSale`) en egen rad mellan två hårstreck, ordagrant:

> Den här webbplatsen är till salu på sajterna.se. Vi anpassar den till ditt
> företag med din logga, dina texter och dina bilder.

Under den en meta-rad med copyright till vänster och integritetspolicy plus
kemero-krediten till höger. `forSale` false tar bort till salu-raden och
pekar krediten på kundens case. Årtalet i copyrighten räknas ut vid render.

## Färg och tema

Ingen CSS att importera och inga variabler att sätta. Text ärver footerns
färg och hårstrecken ritas ur `currentColor`, så bandet följer sajtens palett
i både ljust och mörkt tema. En sajt som vill sätta exakt sin egen linjefärg
kan sätta `--sajtfot-line` på en förälder. Det är den enda escapen.

Bandet ärver också fontstorleken. Sätt den på footerns behållare.

## Props

| Prop | Krävs | Beskrivning |
|---|---|---|
| `forSale` | ja | `site.demoMode`. Visar till salu-raden och pekar krediten på reservationssidan |
| `reserveUrl` | ja | Sajtens reservationssida på sajterna.se |
| `caseUrl` | ja | Kundens case på kemero.io, används när `forSale` är false |
| `legalName` | ja | Fullständigt bolagsnamn, t.ex. "Exempelfirman AB" |
| `legalSuffix` | nej | Mening efter bolagsnamnet, t.ex. "Ledamöter av Sveriges advokatsamfund." |
| `privacyHref` | nej | Standard `/integritetspolicy` |
| `privacyLabel` | nej | Standard `Integritetspolicy` |
| `className` | nej | Endast placering. Använd inte för att tona om bandet |

Integritetspolicy-länken är en vanlig `<a>`, inte en router-länk. Paketet är
router-fritt med flit så det kan konsumeras av både TanStack Start och Astro.

## Utveckla

```bash
bun install
bun run build
```

`dist/` är committad så att paketet kan konsumeras direkt som git-beroende
utan lifecycle-scripts.

## Licens

Källkoden är synlig men inte licensierad för återanvändning.
Upphovsrätten tillhör kemero.
