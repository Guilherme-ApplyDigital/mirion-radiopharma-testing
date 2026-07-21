# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/content/accessibility-basics.spec.ts >> Accessibility basics >> semantic contracts >> should satisfy baseline accessibility checks on about-us @allure.label.epic:Regression @allure.label.feature:Accessibility @allure.label.story:BaselineA11y @allure.label.severity:normal @regression @content
- Location: tests/regression/content/accessibility-basics.spec.ts:9:11

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://stg.radiopharma.miriontest.net/about-us", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - link "Mirion Logo" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Mirion Logo" [ref=e8]
      - navigation "Global Navigation" [ref=e9]:
        - button "Solutions" [ref=e11] [cursor=pointer]:
          - generic [ref=e12]: Solutions
          - img [ref=e13]
        - button "Products" [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: Products
          - img [ref=e18]
        - link "About Us" [ref=e21] [cursor=pointer]:
          - /url: /about-us
          - generic [ref=e22]: About Us
        - link "Contact Us" [ref=e24] [cursor=pointer]:
          - /url: /contact-us
          - generic [ref=e25]: Contact Us
      - search [ref=e28]:
        - generic [ref=e30]:
          - searchbox "Search" [ref=e31]
          - generic [ref=e32]:
            - img
  - main [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e42]:
        - heading "Inspired by the Promise of Precision Medicine" [level=1] [ref=e43]
        - paragraph [ref=e44]: With deep knowledge, proven tools and a partnership focus, we are committed to advancing the radiopharmaceutical field.
      - generic [ref=e46]:
        - heading "Empowering Radiopharma Teams with Complete Solutions" [level=2] [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e50]:
            - figure [ref=e51]:
              - img [ref=e52]
            - generic [ref=e54]:
              - heading "Transparency and Compliance" [level=3] [ref=e55]
              - generic [ref=e56]: Our tools give researchers and CROs visibility to streamline trials, speed development and meet regulatory standards.
          - generic [ref=e58]:
            - figure [ref=e59]:
              - img [ref=e60]
            - generic [ref=e62]:
              - heading "Integrity from the Start" [level=3] [ref=e63]
              - generic [ref=e64]: We provide spectroscopy, shielding and waste solutions that safeguard isotope quality and enable safe manufacturing.
          - generic [ref=e66]:
            - figure [ref=e67]:
              - img [ref=e68]
            - generic [ref=e70]:
              - heading "Safe Treatment Delivery" [level=3] [ref=e71]
              - generic [ref=e72]: With calibrators, workflow software and dosimetry, we help radiopharmacies and care teams protect staff and patients.
      - generic [ref=e73]:
        - article [ref=e74]:
          - heading "Trusted at Scale" [level=2] [ref=e75]
          - paragraph [ref=e76]: Mirion delivers proven performance across sites, teams and patient doses — powering safety, compliance and operational reliability.
        - generic [ref=e77]:
          - img "The Standard for Safety & Trust" [ref=e79]
          - generic [ref=e80]:
            - article [ref=e81]:
              - strong [ref=e82]: 60+
              - generic [ref=e83]:
                - heading "years of expertise" [level=3] [ref=e84]
                - paragraph [ref=e85]: in radiation safety and measurement
            - article [ref=e86]:
              - strong [ref=e87]: 6,000+
              - generic [ref=e88]:
                - heading "cancer centers" [level=3] [ref=e89]
                - paragraph [ref=e90]: supported by our solutions
            - article [ref=e91]:
              - strong [ref=e92]: 1M+
              - generic [ref=e93]:
                - heading "people safeguarded" [level=3] [ref=e94]
                - paragraph [ref=e95]: with our dosimetry solutions
            - article [ref=e96]:
              - strong [ref=e97]: 370+
              - generic [ref=e98]:
                - heading "service experts" [level=3] [ref=e99]
                - paragraph [ref=e100]: delivering on-the-ground support
      - generic [ref=e102]:
        - generic [ref=e104]:
          - paragraph [ref=e105]: Our Mission
          - generic [ref=e106]:
            - heading "Harnessing Knowledge for the Greater Good" [level=2] [ref=e107]
            - paragraph [ref=e108]: For radiopharma and beyond, our radiation safety expertise enables smart processes and efficient workflows that drive progress.
            - link "Learn More" [ref=e110] [cursor=pointer]:
              - /url: https://www.mirion.com/about
              - generic [ref=e111]: Learn More
        - img "Our mission is to harness our unparalleled knowledge of ionizing radiation to advance the field of radiopharmaceuticals and contribute." [ref=e113]
      - generic [ref=e115]:
        - heading "The Trusted Brands Behind the Solutions" [level=2] [ref=e116]
        - paragraph [ref=e117]: Each brand within Mirion Radiopharma brings expertise and innovation, united to deliver the complete solutions customers count on.
      - generic [ref=e120]:
        - link [ref=e121] [cursor=pointer]:
          - /url: https://www.mirion.com/about/medical/capintec
          - article [ref=e122]
        - link [ref=e125] [cursor=pointer]:
          - /url: https://www.ec2software.com
          - article [ref=e126]
        - link [ref=e129] [cursor=pointer]:
          - /url: https://www.mirion.com/about/medical/dosimetry-services
          - article [ref=e130]
        - link [ref=e133] [cursor=pointer]:
          - /url: https://www.mirion.com/about/medical
          - article [ref=e134]
        - link [ref=e137] [cursor=pointer]:
          - /url: https://www.mirion.com/about/mirion-technologies
          - article [ref=e138]
        - link [ref=e141] [cursor=pointer]:
          - /url: https://www.sunnuclear.com/
          - article [ref=e142]
      - generic [ref=e145]:
        - 'heading "Meet Mirion: Powering Radiopharma Progress" [level=2] [ref=e146]'
        - paragraph [ref=e147]: See how Mirion enables confident radiopharma management from lab to clinic, safeguarding every step.
        - button "play-v2 button" [ref=e153]:
          - img [ref=e154]
        - paragraph [ref=e156]: This video, from the 2025 SNMMI Annual Meeting, highlights Mirion’s radiopharma solutions — from shielding and logistics to monitoring and compliance — to empower workflows.
      - article [ref=e158]:
        - blockquote [ref=e159]:
          - paragraph [ref=e161]: "\"Mirion is a great partner that allows us to operate efficiently and focus on patient care — and know that we're doing it in the safest way possible.\""
          - generic [ref=e163]:
            - strong [ref=e164]: Matt DeLong
            - generic [ref=e165]: VP, Radiopharmacy, BAMF Health
      - generic [ref=e167]:
        - generic [ref=e169]:
          - paragraph [ref=e170]: Careers
          - generic [ref=e171]:
            - heading "Join Us in Harnessing Radiation for Good" [level=2] [ref=e172]
            - paragraph [ref=e173]: We create solutions that protect what matters most and open the door to a safer, brighter future.
            - link "Explore Careers" [ref=e175] [cursor=pointer]:
              - /url: https://www.mirion.com/careers
              - generic [ref=e176]: Explore Careers
        - img "We are a team of innovators and problem-solvers" [ref=e178]
      - generic [ref=e181]:
        - heading "Let's Map Your Workflow" [level=2] [ref=e183]
        - generic [ref=e184]:
          - heading "Our team can help identify solutions tailored to your challenges." [level=3] [ref=e185]
          - link "Get in Touch" [ref=e186] [cursor=pointer]:
            - /url: /contact-us
            - generic [ref=e187]: Get in Touch
  - contentinfo [ref=e188]:
    - generic [ref=e189]:
      - navigation "primary navigation" [ref=e190]:
        - generic [ref=e192]:
          - heading "Solutions" [level=2] [ref=e193]
          - list "Solutions" [ref=e194]:
            - listitem [ref=e195]:
              - link "For Drug Owners and Developers" [ref=e196] [cursor=pointer]:
                - /url: /drug-owners-developers
                - generic [ref=e197]: For Drug Owners and Developers
            - listitem [ref=e198]:
              - link "For Isotope Producers and Radiopharmacies" [ref=e199] [cursor=pointer]:
                - /url: /isotope-producers-radiopharmacies
                - generic [ref=e200]: For Isotope Producers and Radiopharmacies
            - listitem [ref=e201]:
              - link "For Hospitals & Clinical Sites" [ref=e202] [cursor=pointer]:
                - /url: /hospitals-clinical-sites
                - generic [ref=e203]: For Hospitals & Clinical Sites
        - generic [ref=e205]:
          - heading "Products" [level=2] [ref=e206]
          - list "Products" [ref=e207]:
            - listitem [ref=e208]:
              - link "Lab Equipment & Accessories" [ref=e209] [cursor=pointer]:
                - /url: /lab-equipment-accessories
                - generic [ref=e210]: Lab Equipment & Accessories
            - listitem [ref=e211]:
              - link "Health Physics & Radiation Protection" [ref=e212] [cursor=pointer]:
                - /url: /health-physics-radiation-protection
                - generic [ref=e213]: Health Physics & Radiation Protection
            - listitem [ref=e214]:
              - link "Spectroscopy & Scientific Analysis" [ref=e215] [cursor=pointer]:
                - /url: /spectroscopy-scientific-analysis
                - generic [ref=e216]: Spectroscopy & Scientific Analysis
            - listitem [ref=e217]:
              - link "Shielding, Shipping, and Waste Management" [ref=e218] [cursor=pointer]:
                - /url: /shielding-shipping-waste-management
                - generic [ref=e219]: Shielding, Shipping, and Waste Management
            - listitem [ref=e220]:
              - link "Management Platforms" [ref=e221] [cursor=pointer]:
                - /url: /management-platform
                - generic [ref=e222]: Management Platforms
            - listitem [ref=e223]:
              - link "Dose Preparation and Delivery" [ref=e224] [cursor=pointer]:
                - /url: /dose-preparation-delivery
                - generic [ref=e225]: Dose Preparation and Delivery
        - generic [ref=e227]:
          - heading "About" [level=2] [ref=e228]
          - list "About" [ref=e229]:
            - listitem [ref=e230]:
              - link "About Us" [ref=e231] [cursor=pointer]:
                - /url: /about-us
                - generic [ref=e232]: About Us
            - listitem [ref=e233]:
              - link "Mirion.com" [ref=e234] [cursor=pointer]:
                - /url: https://www.mirion.com/
                - generic [ref=e235]: Mirion.com
                - img [ref=e236]
            - listitem [ref=e238]:
              - link "Contact Us" [ref=e239] [cursor=pointer]:
                - /url: /contact-us
                - generic [ref=e240]: Contact Us
            - listitem [ref=e241]:
              - link "Careers" [ref=e242] [cursor=pointer]:
                - /url: https://www.mirion.com/careers
                - generic [ref=e243]: Careers
                - img [ref=e244]
        - generic [ref=e247]:
          - heading "Social" [level=2] [ref=e248]
          - list "Social" [ref=e249]:
            - listitem [ref=e250]:
              - link "Mirion Technologies LinkedIn" [ref=e251] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/miriontechnologies
                - generic [ref=e252]: Mirion Technologies LinkedIn
                - img [ref=e253]
            - listitem [ref=e255]:
              - link "Mirion Medical LinkedIn" [ref=e256] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/mirion-medical
                - generic [ref=e257]: Mirion Medical LinkedIn
                - img [ref=e258]
            - listitem [ref=e260]:
              - link "YouTube" [ref=e261] [cursor=pointer]:
                - /url: https://www.youtube.com/@mirionhq
                - generic [ref=e262]: YouTube
                - img [ref=e263]
      - navigation "legal links" [ref=e265]:
        - list [ref=e266]:
          - listitem [ref=e267]:
            - link "Legal" [ref=e268] [cursor=pointer]:
              - /url: https://www.mirion.com/legal
              - generic [ref=e269]: Legal
              - img [ref=e270]
          - listitem [ref=e272]:
            - link "Privacy Policies and Data Notices" [ref=e273] [cursor=pointer]:
              - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
              - generic [ref=e274]: Privacy Policies and Data Notices
              - img [ref=e275]
          - listitem [ref=e277]:
            - 'link "CCPA: Do not sell my personal information" [ref=e278] [cursor=pointer]':
              - /url: https://www.mirion.com/legal/california-consumer-privacy-act-opt-out-form
              - generic [ref=e279]: "CCPA: Do not sell my personal information"
              - img [ref=e280]
          - listitem [ref=e282]:
            - generic [ref=e284] [cursor=pointer]: Cookie Settings
      - separator [ref=e285]
      - generic [ref=e286]:
        - link [ref=e287] [cursor=pointer]:
          - /url: https://www.mirion.com/
          - img [ref=e289]
        - paragraph [ref=e290]: © 2025 Mirion Technologies, Inc. All Rights Reserved.
  - alert [ref=e291]
  - iframe [ref=e292]:
    
  - dialog "Privacy" [ref=e294]:
    - generic [ref=e295]:
      - button "Close" [ref=e297] [cursor=pointer]
      - generic [ref=e298]:
        - generic [ref=e301]:
          - text: This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored.
          - link "More information about your privacy, opens in a new tab" [ref=e302] [cursor=pointer]:
            - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
            - text: See our Cookie Policy for more information
        - generic [ref=e304]:
          - button "Accept Cookies" [ref=e306] [cursor=pointer]
          - button "Do Not Sell or Share My Personal Information, Opens the preference center dialog" [ref=e308] [cursor=pointer]: Do Not Sell or Share My Personal Information
  - button "Open Intercom Messenger" [ref=e309] [cursor=pointer]:
    - generic:
      - img
```

# Test source

```ts
  1  | import AxeBuilder from '@axe-core/playwright';
  2  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  3  | import { AUDITED_PAGES } from '../../../src/data/routes';
  4  | import { collectMissingInputLabels } from '../support/telemetry';
  5  | 
  6  | test.describe('Accessibility basics', () => {
  7  |   test.describe.parallel('semantic contracts', () => {
  8  |     for (const auditedPage of AUDITED_PAGES) {
  9  |       test(
  10 |         `should satisfy baseline accessibility checks on ${auditedPage.key} `
  11 |           + '@allure.label.epic:Regression '
  12 |           + '@allure.label.feature:Accessibility '
  13 |           + '@allure.label.story:BaselineA11y '
  14 |           + '@allure.label.severity:normal '
  15 |           + '@regression @content',
  16 |         async ({ page }) => {
> 17 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
     |                      ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  18 | 
  19 |           await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  20 |           await expect(page.getByRole('banner')).toBeVisible();
  21 |           await expect(page.locator('main')).toBeVisible();
  22 |           await expect(page.getByRole('contentinfo')).toBeVisible();
  23 |           await expect(page.locator('nav').first()).toBeVisible();
  24 | 
  25 |           const missingImageAltCount = await page.locator('img:not([alt])').count();
  26 |           expect(missingImageAltCount).toBe(0);
  27 | 
  28 |           const missingLabels = await collectMissingInputLabels(page);
  29 |           expect(missingLabels, `Missing input labels on ${auditedPage.route}: ${missingLabels.join(', ')}`).toEqual([]);
  30 | 
  31 |           const axeResult = await new AxeBuilder({ page })
  32 |             .withRules(['image-alt', 'label', 'region', 'page-has-heading-one'])
  33 |             .analyze();
  34 | 
  35 |           expect(
  36 |             axeResult.violations,
  37 |             `Axe violations on ${auditedPage.route}: ${axeResult.violations
  38 |               .map((violation) => `${violation.id} (${violation.impact})`)
  39 |               .join(', ')}`,
  40 |           ).toEqual([]);
  41 |         },
  42 |       );
  43 |     }
  44 |   });
  45 | });
  46 | 
```