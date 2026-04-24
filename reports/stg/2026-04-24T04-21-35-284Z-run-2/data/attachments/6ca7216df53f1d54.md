# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/seo-meta/metadata.spec.ts >> SEO metadata >> audited pages >> should expose canonical and social metadata on isotope-producers-radiopharmacies @allure.label.epic:Regression @allure.label.feature:SeoMeta @allure.label.story:MetadataContract @allure.label.severity:normal @regression
- Location: tests/regression/seo-meta/metadata.spec.ts:7:11

# Error details

```
Error: expect(received).not.toEqual(expected) // deep equality

Expected: not ""

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
        - button "Resources" [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Resources
          - img [ref=e29]
      - search [ref=e33]:
        - generic [ref=e34]:
          - searchbox "Search" [ref=e35]
          - generic [ref=e36]:
            - img
  - main [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - heading "Integrated Radiopharma Manufacturing Solutions" [level=1] [ref=e47]
          - paragraph [ref=e48]: Mirion empowers isotope producers, CDMOs and radiopharmacies with tools for purity, labeling and GMP compliance.
        - link "Connect with a Radiopharma Expert" [ref=e50] [cursor=pointer]:
          - /url: /contact-us
          - generic [ref=e51]: Connect with a Radiopharma Expert
      - generic [ref=e53]:
        - heading "Trusted Tools for Smarter Production" [level=2] [ref=e54]
        - generic [ref=e55]:
          - generic [ref=e57]:
            - figure [ref=e58]:
              - img [ref=e59]
            - generic [ref=e61]:
              - heading "Isotope Purity" [level=3] [ref=e62]
              - generic [ref=e63]: Protect product integrity with precise assays, spectroscopy and defensible impurity analysis for radiopharma GMP.
          - generic [ref=e65]:
            - figure [ref=e66]:
              - img [ref=e67]
            - generic [ref=e69]:
              - heading "Production Efficiency" [level=3] [ref=e70]
              - generic [ref=e71]: Eliminate labeling bottlenecks with automation and connected platforms to increase radiopharmaceutical throughput.
          - generic [ref=e73]:
            - figure [ref=e74]:
              - img [ref=e75]
            - generic [ref=e77]:
              - heading "GMP/QMS Compliance" [level=3] [ref=e78]
              - generic [ref=e79]: Meet regulatory and sponsor demands with audit-ready QMS, secure reporting and FDA 21 CFR Part 11 compliance.
      - generic [ref=e80]:
        - article [ref=e81]:
          - heading "For Isotope Producers and Radiopharmacies" [level=2] [ref=e82]
          - paragraph [ref=e83]: Radiopharma teams trust Mirion to help safeguard isotope purity, streamline workflows and ensure GMP/QMS compliance.
        - generic [ref=e86]:
          - article [ref=e87]:
            - strong
            - generic [ref=e88]:
              - heading "Production" [level=3] [ref=e89]
              - paragraph [ref=e90]: Increase uptime and yield while reducing bottlenecks with GMP-ready, audit-proof systems.
          - article [ref=e91]:
            - strong
            - generic [ref=e92]:
              - heading "QA Manager" [level=3] [ref=e93]
              - paragraph [ref=e94]: Ensure compliance with defensible impurity analysis, audit trails and secure reporting.
          - article [ref=e95]:
            - strong
            - generic [ref=e96]:
              - heading "QA Chemist" [level=3] [ref=e97]
              - paragraph [ref=e98]: Simplify QC workflows with spectroscopy, dual-date reporting and automated assays.
          - article [ref=e99]:
            - strong
            - generic [ref=e100]:
              - heading "Health Physicist" [level=3] [ref=e101]
              - paragraph [ref=e102]: Protect staff and maintain ALARA with radiation monitoring and dosimetry solutions.
      - generic [ref=e104]:
        - heading "How We Help Address Challenges" [level=2] [ref=e105]
        - paragraph [ref=e106]: Short half-lives. Strict compliance. Unique pressures abound in radiopharma manufacturing. We help keep purity and efficiency in focus.
      - generic [ref=e110]:
        - paragraph [ref=e111]: Key Challenge
        - generic [ref=e112]:
          - heading "Isotope Purity Uncertainty" [level=2] [ref=e113]
          - paragraph [ref=e114]: Contaminants threaten labeling, safety and efficacy. Defensible impurity analysis safeguards quality and GMP compliance.
      - generic [ref=e116]:
        - generic [ref=e118]:
          - heading "Safeguarding Purity with Defensible Data" [level=2] [ref=e119]
          - paragraph [ref=e120]: Solutions to Address Isotope Purity Gaps and Keep Staff Safe
        - generic [ref=e122]:
          - link "Precise Assays and Calibration" [ref=e123] [cursor=pointer]:
            - /url: /precise-assays-and-calibration
            - article "Precise Assays and Calibration" [ref=e124]:
              - heading "Precise Assays and Calibration" [level=3] [ref=e128]
              - generic [ref=e129]:
                - paragraph [ref=e131]: Ensure accuracy and compliance with assays and dose calibrators that safeguard quality at every step.
                - generic [ref=e132]:
                  - paragraph [ref=e133]: Explore Solution
                  - img [ref=e134]
          - link "Integrated Manufacturing Compliance" [ref=e136] [cursor=pointer]:
            - /url: /manufacturing-compliance
            - article "Integrated Manufacturing Compliance" [ref=e137]:
              - heading "Integrated Manufacturing Compliance" [level=3] [ref=e141]
              - generic [ref=e142]:
                - paragraph [ref=e144]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
                - generic [ref=e145]:
                  - paragraph [ref=e146]: Explore Solution
                  - img [ref=e147]
      - article [ref=e149]:
        - generic [ref=e150]:
          - heading "Assay and Spectroscopy Tools for Reliable Results" [level=2] [ref=e151]
          - paragraph [ref=e152]: Featured Products
        - generic [ref=e153]:
          - link "Apex-Guard™ Canberra Apex-Guard™ Confident Radionuclide Purity Reporting View Product" [ref=e154] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/APEXGUARD-647
            - img "Apex-Guard™" [ref=e156]
            - generic [ref=e157]:
              - paragraph [ref=e158]: Canberra
              - generic [ref=e159]:
                - heading "Apex-Guard™" [level=3] [ref=e160]
                - paragraph [ref=e161]: Confident Radionuclide Purity Reporting
            - paragraph [ref=e163]:
              - text: View Product
              - img [ref=e164]
          - link "Genie™ Canberra Genie™ Comprehensive Software for Gamma and Alpha Spectroscopy View Product" [ref=e166] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/GENIE-647
            - img "Genie™" [ref=e168]
            - generic [ref=e169]:
              - paragraph [ref=e170]: Canberra
              - generic [ref=e171]:
                - heading "Genie™" [level=3] [ref=e172]
                - paragraph [ref=e173]: Comprehensive Software for Gamma and Alpha Spectroscopy
            - paragraph [ref=e175]:
              - text: View Product
              - img [ref=e176]
          - link "Data Analyst™ System Canberra Data Analyst™ System Continuous Monitoring, Confident Decisions, Safer Staff View Product" [ref=e178] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/DA-647
            - img "Data Analyst™ System" [ref=e180]
            - generic [ref=e181]:
              - paragraph [ref=e182]: Canberra
              - generic [ref=e183]:
                - heading "Data Analyst™ System" [level=3] [ref=e184]
                - paragraph [ref=e185]: Continuous Monitoring, Confident Decisions, Safer Staff
            - paragraph [ref=e187]:
              - text: View Product
              - img [ref=e188]
          - link "Aegis™ Canberra Aegis™ High-Resolution Spectroscopy in the Lab View Product" [ref=e190] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/AEGIS-647
            - img "Aegis™" [ref=e192]
            - generic [ref=e193]:
              - paragraph [ref=e194]: Canberra
              - generic [ref=e195]:
                - heading "Aegis™" [level=3] [ref=e196]
                - paragraph [ref=e197]: High-Resolution Spectroscopy in the Lab
            - paragraph [ref=e199]:
              - text: View Product
              - img [ref=e200]
      - generic [ref=e205]:
        - paragraph [ref=e206]: Key Challenge
        - generic [ref=e207]:
          - heading "Radiolabelling Bottlenecks" [level=2] [ref=e208]
          - paragraph [ref=e209]: Manual fixes and labeling delay batch release. Optimizing throughput is crucial with short half-lives and urgent supply windows.
      - generic [ref=e211]:
        - generic [ref=e213]:
          - heading "Streamlining Labeling and Batch Release" [level=2] [ref=e214]
          - paragraph [ref=e215]: Solutions to Address Production Bottlenecks
        - generic [ref=e217]:
          - link "Integrated Manufacturing Compliance" [ref=e218] [cursor=pointer]:
            - /url: /manufacturing-compliance
            - article "Integrated Manufacturing Compliance" [ref=e219]:
              - heading "Integrated Manufacturing Compliance" [level=3] [ref=e223]
              - generic [ref=e224]:
                - paragraph [ref=e226]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
                - generic [ref=e227]:
                  - paragraph [ref=e228]: Explore Solution
                  - img [ref=e229]
          - link "Connected Ecosystem" [ref=e231] [cursor=pointer]:
            - /url: /connected-ecosystem
            - article "Connected Ecosystem" [ref=e232]:
              - heading "Connected Ecosystem" [level=3] [ref=e236]
              - generic [ref=e237]:
                - paragraph [ref=e239]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
                - generic [ref=e240]:
                  - paragraph [ref=e241]: Explore Solution
                  - img [ref=e242]
          - link "Precise Assays and Calibration" [ref=e244] [cursor=pointer]:
            - /url: /precise-assays-and-calibration
            - article "Precise Assays and Calibration" [ref=e245]:
              - heading "Precise Assays and Calibration" [level=3] [ref=e249]
              - generic [ref=e250]:
                - paragraph [ref=e252]: Ensure accuracy and compliance with assays and dose calibrators that safeguard quality at every step.
                - generic [ref=e253]:
                  - paragraph [ref=e254]: Explore Solution
                  - img [ref=e255]
      - article [ref=e257]:
        - generic [ref=e258]:
          - heading "Platforms for Enhancing Throughput" [level=2] [ref=e259]
          - paragraph [ref=e260]: Featured Products
        - generic [ref=e261]:
          - link "BioTrax QMS Ec2 Software BioTrax QMS Quality Management for Radiopharmaceutical Production View Product" [ref=e262] [cursor=pointer]:
            - /url: /products/management-platform/BIOTRAX-647
            - img "BioTrax QMS" [ref=e264]
            - generic [ref=e265]:
              - paragraph [ref=e266]: Ec2 Software
              - generic [ref=e267]:
                - heading "BioTrax QMS" [level=3] [ref=e268]
                - paragraph [ref=e269]: Quality Management for Radiopharmaceutical Production
            - paragraph [ref=e271]:
              - text: View Product
              - img [ref=e272]
          - link "Data Analyst™ System Canberra Data Analyst™ System Continuous Monitoring, Confident Decisions, Safer Staff View Product" [ref=e274] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/DA-647
            - img "Data Analyst™ System" [ref=e276]
            - generic [ref=e277]:
              - paragraph [ref=e278]: Canberra
              - generic [ref=e279]:
                - heading "Data Analyst™ System" [level=3] [ref=e280]
                - paragraph [ref=e281]: Continuous Monitoring, Confident Decisions, Safer Staff
            - paragraph [ref=e283]:
              - text: View Product
              - img [ref=e284]
          - link "BioRx/RMIS Ec2 Software BioRx/RMIS Simplified Radiopharmaceutical Inventory and Dispensing View Product" [ref=e286] [cursor=pointer]:
            - /url: /products/management-platform/BIORX-647
            - img "BioRx/RMIS" [ref=e288]
            - generic [ref=e289]:
              - paragraph [ref=e290]: Ec2 Software
              - generic [ref=e291]:
                - heading "BioRx/RMIS" [level=3] [ref=e292]
                - paragraph [ref=e293]: Simplified Radiopharmaceutical Inventory and Dispensing
            - paragraph [ref=e295]:
              - text: View Product
              - img [ref=e296]
          - link "Apex-Guard™ Canberra Apex-Guard™ Confident Radionuclide Purity Reporting View Product" [ref=e298] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/APEXGUARD-647
            - img "Apex-Guard™" [ref=e300]
            - generic [ref=e301]:
              - paragraph [ref=e302]: Canberra
              - generic [ref=e303]:
                - heading "Apex-Guard™" [level=3] [ref=e304]
                - paragraph [ref=e305]: Confident Radionuclide Purity Reporting
            - paragraph [ref=e307]:
              - text: View Product
              - img [ref=e308]
      - generic [ref=e313]:
        - paragraph [ref=e314]: Key Challenge
        - generic [ref=e315]:
          - heading "Drug Owner Demands on Operations" [level=2] [ref=e316]
          - paragraph [ref=e317]: Sponsors and regulators demand audit-ready records, secure data, and Part 11 compliance to ensure scalability.
      - generic [ref=e319]:
        - generic [ref=e321]:
          - heading "Ensuring Audit-Ready Compliance at Scale" [level=2] [ref=e322]
          - paragraph [ref=e323]: Solutions for GMP/QMS Compliance
        - generic [ref=e325]:
          - link "Integrated Manufacturing Compliance" [ref=e326] [cursor=pointer]:
            - /url: /manufacturing-compliance
            - article "Integrated Manufacturing Compliance" [ref=e327]:
              - heading "Integrated Manufacturing Compliance" [level=3] [ref=e331]
              - generic [ref=e332]:
                - paragraph [ref=e334]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
                - generic [ref=e335]:
                  - paragraph [ref=e336]: Explore Solution
                  - img [ref=e337]
          - link "Transparency and Data Visibility" [ref=e339] [cursor=pointer]:
            - /url: /transparency-data-visibility-platforms
            - article "Transparency and Data Visibility" [ref=e340]:
              - heading "Transparency and Data Visibility" [level=3] [ref=e344]
              - generic [ref=e345]:
                - paragraph [ref=e347]: Gain full visibility from order to cash with platforms that connect supply, manufacturing and clinical outcomes.
                - generic [ref=e348]:
                  - paragraph [ref=e349]: Explore Solution
                  - img [ref=e350]
          - link "Connected Ecosystem" [ref=e352] [cursor=pointer]:
            - /url: /connected-ecosystem
            - article "Connected Ecosystem" [ref=e353]:
              - heading "Connected Ecosystem" [level=3] [ref=e357]
              - generic [ref=e358]:
                - paragraph [ref=e360]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
                - generic [ref=e361]:
                  - paragraph [ref=e362]: Explore Solution
                  - img [ref=e363]
      - article [ref=e365]:
        - generic [ref=e366]:
          - heading "Quality Systems that Simplify Compliance" [level=2] [ref=e367]
          - paragraph [ref=e368]: Featured Products
        - generic [ref=e369]:
          - link "Apex-Guard™ Canberra Apex-Guard™ Confident Radionuclide Purity Reporting View Product" [ref=e370] [cursor=pointer]:
            - /url: /products/spectroscopy-scientific-analysis/APEXGUARD-647
            - img "Apex-Guard™" [ref=e372]
            - generic [ref=e373]:
              - paragraph [ref=e374]: Canberra
              - generic [ref=e375]:
                - heading "Apex-Guard™" [level=3] [ref=e376]
                - paragraph [ref=e377]: Confident Radionuclide Purity Reporting
            - paragraph [ref=e379]:
              - text: View Product
              - img [ref=e380]
          - link "BioTrax QMS Ec2 Software BioTrax QMS Quality Management for Radiopharmaceutical Production View Product" [ref=e382] [cursor=pointer]:
            - /url: /products/management-platform/BIOTRAX-647
            - img "BioTrax QMS" [ref=e384]
            - generic [ref=e385]:
              - paragraph [ref=e386]: Ec2 Software
              - generic [ref=e387]:
                - heading "BioTrax QMS" [level=3] [ref=e388]
                - paragraph [ref=e389]: Quality Management for Radiopharmaceutical Production
            - paragraph [ref=e391]:
              - text: View Product
              - img [ref=e392]
          - link "Lisbon Ec2 Software Lisbon Simplify Ordering and Study Management View Product" [ref=e394] [cursor=pointer]:
            - /url: /products/management-platform/LIS-647
            - img "Lisbon" [ref=e396]
            - generic [ref=e397]:
              - paragraph [ref=e398]: Ec2 Software
              - generic [ref=e399]:
                - heading "Lisbon" [level=3] [ref=e400]
                - paragraph [ref=e401]: Simplify Ordering and Study Management
            - paragraph [ref=e403]:
              - text: View Product
              - img [ref=e404]
          - link "BioRx/RMIS Ec2 Software BioRx/RMIS Simplified Radiopharmaceutical Inventory and Dispensing View Product" [ref=e406] [cursor=pointer]:
            - /url: /products/management-platform/BIORX-647
            - img "BioRx/RMIS" [ref=e408]
            - generic [ref=e409]:
              - paragraph [ref=e410]: Ec2 Software
              - generic [ref=e411]:
                - heading "BioRx/RMIS" [level=3] [ref=e412]
                - paragraph [ref=e413]: Simplified Radiopharmaceutical Inventory and Dispensing
            - paragraph [ref=e415]:
              - text: View Product
              - img [ref=e416]
      - generic [ref=e420]:
        - heading "Let's Work Together" [level=2] [ref=e422]
        - generic [ref=e423]:
          - heading "Scale safely and efficiently with Mirion solutions for purity and compliance." [level=3] [ref=e424]
          - link "Connect with a Radiopharma Expert" [ref=e425] [cursor=pointer]:
            - /url: /contact-us
            - generic [ref=e426]: Connect with a Radiopharma Expert
  - contentinfo [ref=e427]:
    - generic [ref=e428]:
      - navigation "primary navigation" [ref=e429]:
        - generic [ref=e431]:
          - heading "Solutions" [level=2] [ref=e432]
          - list "Solutions" [ref=e433]:
            - listitem [ref=e434]:
              - link "For Drug Owners and Developers" [ref=e435] [cursor=pointer]:
                - /url: /drug-owners-developers
                - generic [ref=e436]: For Drug Owners and Developers
            - listitem [ref=e437]:
              - link "For Isotope Producers and Radiopharmacies" [ref=e438] [cursor=pointer]:
                - /url: /isotope-producers-radiopharmacies
                - generic [ref=e439]: For Isotope Producers and Radiopharmacies
            - listitem [ref=e440]:
              - link "For Hospitals & Clinical Sites" [ref=e441] [cursor=pointer]:
                - /url: /hospitals-clinical-sites
                - generic [ref=e442]: For Hospitals & Clinical Sites
        - generic [ref=e444]:
          - heading "Products" [level=2] [ref=e445]
          - list "Products" [ref=e446]:
            - listitem [ref=e447]:
              - link "Lab Equipment & Accessories" [ref=e448] [cursor=pointer]:
                - /url: /lab-equipment-accessories
                - generic [ref=e449]: Lab Equipment & Accessories
            - listitem [ref=e450]:
              - link "Health Physics & Radiation Protection" [ref=e451] [cursor=pointer]:
                - /url: /health-physics-radiation-protection
                - generic [ref=e452]: Health Physics & Radiation Protection
            - listitem [ref=e453]:
              - link "Spectroscopy & Scientific Analysis" [ref=e454] [cursor=pointer]:
                - /url: /spectroscopy-scientific-analysis
                - generic [ref=e455]: Spectroscopy & Scientific Analysis
            - listitem [ref=e456]:
              - link "Shielding, Shipping, and Waste Management" [ref=e457] [cursor=pointer]:
                - /url: /shielding-shipping-waste-management
                - generic [ref=e458]: Shielding, Shipping, and Waste Management
            - listitem [ref=e459]:
              - link "Management Platforms" [ref=e460] [cursor=pointer]:
                - /url: /management-platform
                - generic [ref=e461]: Management Platforms
            - listitem [ref=e462]:
              - link "Dose Preparation and Delivery" [ref=e463] [cursor=pointer]:
                - /url: /dose-preparation-delivery
                - generic [ref=e464]: Dose Preparation and Delivery
        - generic [ref=e466]:
          - heading "About" [level=2] [ref=e467]
          - list "About" [ref=e468]:
            - listitem [ref=e469]:
              - link "About Us" [ref=e470] [cursor=pointer]:
                - /url: /about-us
                - generic [ref=e471]: About Us
            - listitem [ref=e472]:
              - link "Mirion.com" [ref=e473] [cursor=pointer]:
                - /url: https://www.mirion.com/
                - generic [ref=e474]: Mirion.com
                - img [ref=e475]
            - listitem [ref=e477]:
              - link "Contact Us" [ref=e478] [cursor=pointer]:
                - /url: /contact-us
                - generic [ref=e479]: Contact Us
            - listitem [ref=e480]:
              - link "Careers" [ref=e481] [cursor=pointer]:
                - /url: https://www.mirion.com/careers
                - generic [ref=e482]: Careers
                - img [ref=e483]
        - generic [ref=e486]:
          - heading "Social" [level=2] [ref=e487]
          - list "Social" [ref=e488]:
            - listitem [ref=e489]:
              - link "Mirion Technologies LinkedIn" [ref=e490] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/miriontechnologies
                - generic [ref=e491]: Mirion Technologies LinkedIn
                - img [ref=e492]
            - listitem [ref=e494]:
              - link "Mirion Medical LinkedIn" [ref=e495] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/mirion-medical
                - generic [ref=e496]: Mirion Medical LinkedIn
                - img [ref=e497]
            - listitem [ref=e499]:
              - link "YouTube" [ref=e500] [cursor=pointer]:
                - /url: https://www.youtube.com/@mirionhq
                - generic [ref=e501]: YouTube
                - img [ref=e502]
      - navigation "legal links" [ref=e504]:
        - list [ref=e505]:
          - listitem [ref=e506]:
            - link "Legal" [ref=e507] [cursor=pointer]:
              - /url: https://www.mirion.com/legal
              - generic [ref=e508]: Legal
              - img [ref=e509]
          - listitem [ref=e511]:
            - link "Privacy Policies and Data Notices" [ref=e512] [cursor=pointer]:
              - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
              - generic [ref=e513]: Privacy Policies and Data Notices
              - img [ref=e514]
          - listitem [ref=e516]:
            - 'link "CCPA: Do not sell my personal information" [ref=e517] [cursor=pointer]':
              - /url: https://www.mirion.com/legal/california-consumer-privacy-act-opt-out-form
              - generic [ref=e518]: "CCPA: Do not sell my personal information"
              - img [ref=e519]
          - listitem [ref=e521]:
            - generic [ref=e523] [cursor=pointer]: Cookie Settings
      - separator [ref=e524]
      - generic [ref=e525]:
        - link [ref=e526] [cursor=pointer]:
          - /url: https://www.mirion.com/
          - img [ref=e528]
        - paragraph [ref=e529]: © 2025 Mirion Technologies, Inc. All Rights Reserved.
  - alert [ref=e530]
  - iframe [ref=e531]:
    
  - dialog "Privacy" [ref=e533]:
    - generic [ref=e534]:
      - button "Close" [ref=e536] [cursor=pointer]
      - generic [ref=e537]:
        - generic [ref=e540]:
          - text: This website uses cookies and other tracking technologies to enhance user experience and to analyze performance and traffic on our website. We also share information about your use of our site with our social media, advertising and analytics partners. If we have detected an opt-out preference signal then it will be honored.
          - link "More information about your privacy, opens in a new tab" [ref=e541] [cursor=pointer]:
            - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
            - text: See our Cookie Policy for more information
        - generic [ref=e543]:
          - button "Accept Cookies" [ref=e545] [cursor=pointer]
          - button "Do Not Sell or Share My Personal Information, Opens the preference center dialog" [ref=e547] [cursor=pointer]: Do Not Sell or Share My Personal Information
  - button "Open Intercom Messenger" [ref=e548] [cursor=pointer]:
    - generic:
      - img
```

# Test source

```ts
  1  | import { test, expect } from '../../../src/fixtures/test-fixtures';
  2  | import { AUDITED_PAGES } from '../../../src/data/routes';
  3  | 
  4  | test.describe('SEO metadata', () => {
  5  |   test.describe.parallel('audited pages', () => {
  6  |     for (const auditedPage of AUDITED_PAGES) {
  7  |       test(
  8  |         `should expose canonical and social metadata on ${auditedPage.key} `
  9  |           + '@allure.label.epic:Regression '
  10 |           + '@allure.label.feature:SeoMeta '
  11 |           + '@allure.label.story:MetadataContract '
  12 |           + '@allure.label.severity:normal '
  13 |           + '@regression',
  14 |         async ({ page, baseURL }) => {
  15 |           if (!baseURL) {
  16 |             throw new Error('BASE_URL is required for regression tests.');
  17 |           }
  18 | 
  19 |           await page.goto(auditedPage.route, { waitUntil: 'networkidle' });
  20 |           await expect(page).toHaveTitle(auditedPage.titlePattern);
  21 | 
  22 |           const metadata = await page.evaluate(() => {
  23 |             const byName = (name: string) =>
  24 |               document.querySelector(`meta[name="${name}"]`)?.getAttribute('content') ?? '';
  25 |             const byProperty = (property: string) =>
  26 |               document.querySelector(`meta[property="${property}"]`)?.getAttribute('content') ?? '';
  27 |             const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '';
  28 | 
  29 |             return {
  30 |               description: byName('description'),
  31 |               canonical,
  32 |               ogTitle: byProperty('og:title'),
  33 |               ogDescription: byProperty('og:description'),
  34 |               ogType: byProperty('og:type'),
  35 |             };
  36 |           });
  37 | 
  38 |           expect(metadata.description).not.toEqual('');
> 39 |           expect(metadata.canonical).not.toEqual('');
     |                                          ^ Error: expect(received).not.toEqual(expected) // deep equality
  40 |           expect(metadata.canonical.startsWith(baseURL)).toBeTruthy();
  41 |           expect(metadata.ogTitle).not.toEqual('');
  42 |           expect(metadata.ogDescription).not.toEqual('');
  43 |           expect(metadata.ogType).not.toEqual('');
  44 |         },
  45 |       );
  46 |     }
  47 |   });
  48 | });
  49 | 
```