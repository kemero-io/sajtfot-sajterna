import * as react from 'react';

type SajtfotSajternaProps = {
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
declare function SajtfotSajterna({ caseUrl, className, forSale, legalName, legalSuffix, privacyHref, privacyLabel, reserveUrl, }: SajtfotSajternaProps): react.JSX.Element;

export { SajtfotSajterna, type SajtfotSajternaProps };
