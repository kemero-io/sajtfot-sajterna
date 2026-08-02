import { KemeroCredit } from "@kemero/credit";
import "./sajtfot.css";

/*
  Den låsta foten på en katalogsajt.

  Katalogsajternas footer byggs om i varje designpass. Det som INTE får byggas
  om bor här: till salu-raden mot sajterna.se, integritetspolicy-länken och
  kemero-krediten. Formulering, ordning och rytm är låsta i paketet, precis
  som märket är låst i @kemero/credit.

  Komponenten sätter ingen egen färg. Text ärver footerns färg och hårstrecken
  ritas ur currentColor, så bandet följer sajtens palett i både ljust och
  mörkt tema utan en enda variabel att komma ihåg. Vill en sajt sätta en exakt
  linjefärg ur sin egen palett finns --sajtfot-line som enda escape.

  Rent presentationell utan hooks och utan router-beroende, så den kan renderas
  statiskt utan klient-JavaScript.
*/

export type SajtfotSajternaProps = {
  /** Kundens case på kemero.io. Krediten pekar hit när sajten är såld. */
  caseUrl: string;
  /** Endast för placering i footern. Använd inte för att tona om bandet. */
  className?: string;
  /** true i demoläge (site.demoMode). Visar till salu-raden och pekar krediten på reservationssidan. */
  forSale: boolean;
  /** Verksamhetens fullständiga bolagsnamn, t.ex. "Exempelfirman AB". */
  legalName: string;
  /** Frivillig mening efter bolagsnamnet, t.ex. "Ledamöter av Sveriges advokatsamfund." */
  legalSuffix?: string;
  /** Sökvägen till integritetspolicyn. Sidan ska finnas från dag ett. */
  privacyHref?: string;
  privacyLabel?: string;
  /** Sajtens reservationssida på sajterna.se. */
  reserveUrl: string;
};

/*
  Årtalet räknas ut vid render i stället för att skrivas in per sajt. En
  hårdkodad siffra i en footer blir fel den 1 januari och ingen upptäcker det.
*/
function currentYear() {
  return new Date().getFullYear();
}

export function SajtfotSajterna({
  caseUrl,
  className,
  forSale,
  legalName,
  legalSuffix,
  privacyHref = "/integritetspolicy",
  privacyLabel = "Integritetspolicy",
  reserveUrl,
}: SajtfotSajternaProps) {
  return (
    <div className={className ? `sajtfot ${className}` : "sajtfot"}>
      {/*
        Besökaren som hittat hit direkt får veta att sajten går att köpa, och
        sajterna.se får en länk med riktig ankartext från en publicerad
        webbplats. Varken demo-panelen eller krediten gör det jobbet.
      */}
      {forSale ? (
        <p className="sajtfot__sale">
          Den här webbplatsen är till salu på{" "}
          <a
            className="sajtfot__sale-link"
            href={reserveUrl}
            rel="noopener"
            target="_blank"
          >
            sajterna.se
          </a>
          . Designen kläs om till din verksamhet.
        </p>
      ) : null}

      <div className="sajtfot__meta">
        <p className="sajtfot__copyright">
          © {currentYear()} {legalName}.{legalSuffix ? ` ${legalSuffix}` : ""}
        </p>
        <div className="sajtfot__links">
          <a className="sajtfot__privacy" href={privacyHref}>
            {privacyLabel}
          </a>
          {/*
            På en demo pekar krediten på reservationssidan. Den som klickar
            undrar "kan jag få den här?", inte "vem var kunden?".
          */}
          <KemeroCredit caseUrl={forSale ? reserveUrl : caseUrl} />
        </div>
      </div>
    </div>
  );
}
