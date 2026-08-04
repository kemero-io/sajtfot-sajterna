import "./index.css";
import { KemeroCredit } from '@kemero/credit';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/index.tsx
function currentYear() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}
function SajtfotSajterna({
  caseUrl,
  className,
  forSale,
  legalName,
  legalSuffix,
  privacyHref = "/integritetspolicy",
  privacyLabel = "Integritetspolicy",
  reserveUrl
}) {
  return /* @__PURE__ */ jsxs("div", { className: className ? `sajtfot ${className}` : "sajtfot", children: [
    forSale ? /* @__PURE__ */ jsxs("p", { className: "sajtfot__sale", children: [
      "Den h\xE4r webbplatsen \xE4r till salu p\xE5",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "sajtfot__sale-link",
          href: reserveUrl,
          rel: "noopener",
          target: "_blank",
          children: "sajterna.se"
        }
      ),
      ". Designen kl\xE4s om till din verksamhet."
    ] }) : null,
    /* @__PURE__ */ jsxs("div", { className: "sajtfot__meta", children: [
      /* @__PURE__ */ jsxs("p", { className: "sajtfot__copyright", children: [
        "\xA9 ",
        currentYear(),
        " ",
        legalName,
        ".",
        legalSuffix ? ` ${legalSuffix}` : ""
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "sajtfot__links", children: [
        /* @__PURE__ */ jsx("a", { className: "sajtfot__privacy", href: privacyHref, children: privacyLabel }),
        /* @__PURE__ */ jsx(KemeroCredit, { caseUrl })
      ] })
    ] })
  ] });
}

export { SajtfotSajterna };
