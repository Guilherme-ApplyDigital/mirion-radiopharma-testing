export type AuditedPage = {
  key: string;
  route: string;
  titlePattern: RegExp;
  heading: string;
};

export const AUDITED_PAGES: AuditedPage[] = [
  {
    key: 'home',
    route: '/',
    titlePattern: /Mirion Radiopharma Solutions \| Home/i,
    heading: 'Clarity and Control for Radiopharma',
  },
  {
    key: 'about-us',
    route: '/about-us',
    titlePattern: /Mirion Radiopharma \| About Mirion/i,
    heading: 'Inspired by the Promise of Precision Medicine',
  },
  {
    key: 'contact-us',
    route: '/contact-us',
    titlePattern: /Mirion Radiopharma \| Contact Us/i,
    heading: 'Contact Us',
  },
  {
    key: 'solutions',
    route: '/solutions',
    titlePattern: /Mirion Radiopharma \| Explore Solutions/i,
    heading: 'Trusted Radiopharma Resources',
  },
  {
    key: 'drug-owners-developers',
    route: '/drug-owners-developers',
    titlePattern: /Solutions for Drug Owners and Developers \| Mirion Radiopharma/i,
    heading: 'From Trial Design to Market Impact',
  },
  {
    key: 'isotope-producers-radiopharmacies',
    route: '/isotope-producers-radiopharmacies',
    titlePattern: /Isotope Producers & Radiopharmacies \| Mirion Radiopharma/i,
    heading: 'Integrated Radiopharma Manufacturing Solutions',
  },
  {
    key: 'hospitals-clinical-sites',
    route: '/hospitals-clinical-sites',
    titlePattern: /Radiopharma Solutions for Clinical Sites \| Mirion Radiopharma/i,
    heading: 'Protecting People and Enabling Precision Medicine',
  },
];

export const HEADER_LINKS = [
  { label: 'About Us', route: '/about-us' },
  { label: 'Contact Us', route: '/contact-us' },
  { label: 'Solutions', route: '/solutions' },
];

export const FOOTER_INTERNAL_LINKS = [
  { label: 'About Us', route: '/about-us' },
  { label: 'Contact Us', route: '/contact-us' },
];

export const DISCOVERED_INTERNAL_ROUTES = [
  '/',
  '/about-us',
  '/contact-us',
  '/solutions',
  '/drug-owners-developers',
  '/isotope-producers-radiopharmacies',
  '/hospitals-clinical-sites',
  '/lab-equipment-accessories',
  '/health-physics-radiation-protection',
  '/spectroscopy-scientific-analysis',
  '/shielding-shipping-waste-management',
  '/management-platform',
  '/dose-preparation-delivery',
  '/precise-assays-and-calibration',
  '/manufacturing-compliance',
  '/connected-ecosystem',
  '/transparency-data-visibility-platforms',
  '/radiation-monitoring-and-dosimetry',
  '/safe-isotope-shipping-class-7-transport',
  '/radiation-shielding-safety-systems',
  '/comprehensive-department-solutions',
  '/nuclear-medicine-management',
  '/products/management-platform/BIONMIS-647',
  '/products/management-platform/LIS-647',
  '/products/management-platform/BIOTRAX-647',
  '/products/management-platform/BIORX-647',
  '/products/management-platform/webOLO-647',
  '/products/spectroscopy-scientific-analysis/APEXGUARD-647',
  '/products/spectroscopy-scientific-analysis/GENIE-647',
  '/products/spectroscopy-scientific-analysis/DA-647',
  '/products/spectroscopy-scientific-analysis/AEGIS-647',
  '/products/shielding-shipping-waste-management/BIOCAB-647',
  '/products/shielding-shipping-waste-management/LLPET-647',
];

export const KNOWN_ANCHOR_LINKS = [
  '/hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387',
  '/isotope-producers-radiopharmacies#7b7d5a1c-51cc-4a7e-9571-8316c397b701',
  '/hospitals-clinical-sites#9bb45bb3-6943-4074-b791-5835149a21e1',
  '/drug-owners-developers#ebf1d2da-4591-494a-bdc0-6a82b2b2c26b',
  '/hospitals-clinical-sites#c4f75155-8a7f-4336-b701-b1ee02c26b22',
  '/drug-owners-developers#b750d4ab-ee5e-4a3b-879b-d6b19288d8f3',
];

export type ExternalLinkExpectation = {
  url: string;
  allowedStatuses: number[];
  botBlocked: boolean;
};

export const EXTERNAL_LINK_EXPECTATIONS: ExternalLinkExpectation[] = [
  { url: 'https://www.mirion.com/', allowedStatuses: [200, 301, 302, 403], botBlocked: true },
  { url: 'https://www.mirion.com/careers', allowedStatuses: [200, 301, 302, 403], botBlocked: true },
  { url: 'https://www.mirion.com/legal', allowedStatuses: [200, 301, 302, 403], botBlocked: true },
  {
    url: 'https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices',
    allowedStatuses: [200, 301, 302, 403],
    botBlocked: true,
  },
  {
    url: 'https://www.mirion.com/legal/california-consumer-privacy-act-opt-out-form',
    allowedStatuses: [200, 301, 302, 403],
    botBlocked: true,
  },
  { url: 'https://www.linkedin.com/company/miriontechnologies', allowedStatuses: [200, 999], botBlocked: true },
  { url: 'https://www.linkedin.com/company/mirion-medical', allowedStatuses: [200, 999], botBlocked: true },
  { url: 'https://www.youtube.com/@mirionhq', allowedStatuses: [200], botBlocked: false },
  { url: 'https://www.onetrust.com/products/cookie-consent/', allowedStatuses: [200], botBlocked: false },
];
