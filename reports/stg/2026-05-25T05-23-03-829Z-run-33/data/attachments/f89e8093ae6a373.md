# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression/seo-meta/metadata.spec.ts >> SEO metadata >> audited pages >> should expose canonical and social metadata on solutions @allure.label.epic:Regression @allure.label.feature:SeoMeta @allure.label.story:MetadataContract @allure.label.severity:normal @regression
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
      - search [ref=e28]:
        - generic [ref=e29]:
          - searchbox "Search" [ref=e30]
          - generic [ref=e31]:
            - img
  - main [ref=e32]:
    - generic [ref=e33]:
      - generic [ref=e41]:
        - heading "Trusted Radiopharma Resources" [level=1] [ref=e42]
        - paragraph [ref=e43]: Safeguard quality, reduce risk and optimize outcomes across discovery, manufacturing and care.
      - generic [ref=e45]:
        - heading "Our Full Suite of Solutions" [level=2] [ref=e46]
        - paragraph [ref=e47]: From isotope purity to patient safety, Mirion offers connected tools and systems that solve radiopharma’s toughest challenges.
      - generic [ref=e50]:
        - link "Connected Ecosystem" [ref=e51] [cursor=pointer]:
          - /url: /connected-ecosystem
          - article "Connected Ecosystem" [ref=e52]:
            - heading "Connected Ecosystem" [level=3] [ref=e56]
            - generic [ref=e57]:
              - paragraph [ref=e59]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
              - generic [ref=e60]:
                - paragraph [ref=e61]: Explore Solution
                - img [ref=e62]
        - link "Precise Assays and Calibration" [ref=e64] [cursor=pointer]:
          - /url: /precise-assays-and-calibration
          - article "Precise Assays and Calibration" [ref=e65]:
            - heading "Precise Assays and Calibration" [level=3] [ref=e69]
            - generic [ref=e70]:
              - paragraph [ref=e72]: Ensure accuracy and compliance with assays and dose calibrators that safeguard quality at every step.
              - generic [ref=e73]:
                - paragraph [ref=e74]: Explore Solution
                - img [ref=e75]
        - link "Radiation Monitoring and Dosimetry" [ref=e77] [cursor=pointer]:
          - /url: /radiation-monitoring-and-dosimetry
          - article "Radiation Monitoring and Dosimetry" [ref=e78]:
            - heading "Radiation Monitoring and Dosimetry" [level=3] [ref=e82]
            - generic [ref=e83]:
              - paragraph [ref=e85]: Protect staff and patients with continuous radiation monitoring, dosimetry and contamination clearance tools.
              - generic [ref=e86]:
                - paragraph [ref=e87]: Explore Solution
                - img [ref=e88]
        - link "Integrated Manufacturing Compliance" [ref=e90] [cursor=pointer]:
          - /url: /manufacturing-compliance
          - article "Integrated Manufacturing Compliance" [ref=e91]:
            - heading "Integrated Manufacturing Compliance" [level=3] [ref=e95]
            - generic [ref=e96]:
              - paragraph [ref=e98]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
              - generic [ref=e99]:
                - paragraph [ref=e100]: Explore Solution
                - img [ref=e101]
        - link "Shipping and Inventory Control" [ref=e103] [cursor=pointer]:
          - /url: /end-to-end-shipping-inventory-control
          - article "Shipping and Inventory Control" [ref=e104]:
            - heading "Shipping and Inventory Control" [level=3] [ref=e108]
            - generic [ref=e109]:
              - paragraph [ref=e111]: Track inventory, shipments and waste in real time to ensure safe delivery, reduce delays and minimize loss.
              - generic [ref=e112]:
                - paragraph [ref=e113]: Explore Solution
                - img [ref=e114]
        - link "Pharmacy and Department Solutions" [ref=e116] [cursor=pointer]:
          - /url: /comprehensive-department-solutions
          - article "Pharmacy and Department Solutions" [ref=e117]:
            - heading "Pharmacy and Department Solutions" [level=3] [ref=e121]
            - generic [ref=e122]:
              - paragraph [ref=e124]: Launch or expand programs with complete systems that manage workflows, compliance and scheduling.
              - generic [ref=e125]:
                - paragraph [ref=e126]: Explore Solution
                - img [ref=e127]
        - link "Transparency and Data Visibility" [ref=e129] [cursor=pointer]:
          - /url: /transparency-data-visibility-platforms
          - article "Transparency and Data Visibility" [ref=e130]:
            - heading "Transparency and Data Visibility" [level=3] [ref=e134]
            - generic [ref=e135]:
              - paragraph [ref=e137]: Gain full visibility from order to cash with platforms that connect supply, manufacturing and clinical outcomes.
              - generic [ref=e138]:
                - paragraph [ref=e139]: Explore Solution
                - img [ref=e140]
        - link "Isotope Transport and Logistics" [ref=e142] [cursor=pointer]:
          - /url: /safe-isotope-shipping-class-7-transport
          - article "Isotope Transport and Logistics" [ref=e143]:
            - heading "Isotope Transport and Logistics" [level=3] [ref=e147]
            - generic [ref=e148]:
              - paragraph [ref=e150]: Meet DOT and IATA standards with packaging, tracking and monitoring solutions that ensure compliant delivery.
              - generic [ref=e151]:
                - paragraph [ref=e152]: Explore Solution
                - img [ref=e153]
        - link "Shielding and Safety Solutions" [ref=e155] [cursor=pointer]:
          - /url: /radiation-shielding-safety-systems
          - article "Shielding and Safety Solutions" [ref=e156]:
            - heading "Shielding and Safety Solutions" [level=3] [ref=e160]
            - generic [ref=e161]:
              - paragraph [ref=e163]: Reduce exposure risk with advanced shielding and protective systems for high-energy isotopes.
              - generic [ref=e164]:
                - paragraph [ref=e165]: Explore Solution
                - img [ref=e166]
        - link "Nuclear Medicine Management" [ref=e168] [cursor=pointer]:
          - /url: /nuclear-medicine-management
          - article "Nuclear Medicine Management" [ref=e169]:
            - heading "Nuclear Medicine Management" [level=3] [ref=e173]
            - generic [ref=e174]:
              - paragraph [ref=e176]: Manage nuclear medicine operations more efficiently with software that streamlines inventory, dosing and compliance.
              - generic [ref=e177]:
                - paragraph [ref=e178]: Explore Solution
                - img [ref=e179]
      - generic [ref=e182]:
        - heading "Solutions by Setting" [level=2] [ref=e183]
        - paragraph
      - navigation "Page section navigation" [ref=e184]:
        - generic [ref=e186]:
          - img "Mirion Logo" [ref=e188]
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link "For Supply Chain" [ref=e191] [cursor=pointer]:
                - /url: "#for-supply-chain"
                - generic [ref=e192]: For Supply Chain
            - listitem [ref=e193]:
              - link "Find the Right Fit" [ref=e194] [cursor=pointer]:
                - /url: "#find-the-right-fit"
                - generic [ref=e195]: Find the Right Fit
          - link "Request a Demo" [ref=e197] [cursor=pointer]:
            - /url: /contact-us
            - generic [ref=e198]: Request a Demo
      - generic [ref=e199]:
        - generic [ref=e201]:
          - heading "For Drug Owners and Developers" [level=2] [ref=e202]
          - paragraph [ref=e203]: From data gaps to trial delays, Mirion helps overcome the issues that slow you down.
        - generic [ref=e205]:
          - link "Unclear Manufacturing Flow" [ref=e206] [cursor=pointer]:
            - /url: /drug-owners-developers#ebf1d2da-4591-494a-bdc0-6a82b2b2c26b
            - article "Unclear Manufacturing Flow" [ref=e207]:
              - generic [ref=e212]: Key Challenge
              - heading "Unclear Manufacturing Flow" [level=3] [ref=e214]
              - generic [ref=e215]:
                - paragraph [ref=e217]: Batch-to-order visibility and audit-ready reporting for better clarity.
                - generic [ref=e218]:
                  - paragraph [ref=e219]: Explore More
                  - img [ref=e220]
          - link "Order-to-Cash Friction" [ref=e222] [cursor=pointer]:
            - /url: /drug-owners-developers#b750d4ab-ee5e-4a3b-879b-d6b19288d8f3
            - article "Order-to-Cash Friction" [ref=e223]:
              - generic [ref=e228]: Key Challenge
              - heading "Order-to-Cash Friction" [level=3] [ref=e230]
              - generic [ref=e231]:
                - paragraph [ref=e233]: Value tracking, reconciliation and recovery from fulfillment to outcome.
                - generic [ref=e234]:
                  - paragraph [ref=e235]: Explore Solutions
                  - img [ref=e236]
          - link "Trial Delays" [ref=e238] [cursor=pointer]:
            - /url: /drug-owners-developers#f9e7e57c-1452-4874-af25-fa7d7cab7fa4
            - article "Trial Delays" [ref=e239]:
              - generic [ref=e244]: Key Challenge
              - heading "Trial Delays" [level=3] [ref=e246]
              - generic [ref=e247]:
                - paragraph [ref=e249]: Unified data flows shorten cycles, limit errors and keep trials on schedule.
                - generic [ref=e250]:
                  - paragraph [ref=e251]: Explore Solutions
                  - img [ref=e252]
          - link [ref=e254] [cursor=pointer]:
            - /url: /drug-owners-developers
            - article [ref=e255]:
              - generic [ref=e259]:
                - paragraph [ref=e260]: Explore All Solutions for Drug Owners & Developers
                - img [ref=e261]
      - generic [ref=e263]:
        - generic [ref=e265]:
          - heading "For Isotope Producers and Radiopharmacies" [level=2] [ref=e266]
          - paragraph [ref=e267]: Drug manufacturers face strict compliance and production hurdles. Mirion helps ensure quality, scalability, and precise, on-time delivery.
        - generic [ref=e269]:
          - link "Isotope Purity Uncertainty" [ref=e270] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies#7b7d5a1c-51cc-4a7e-9571-8316c397b701
            - article "Isotope Purity Uncertainty" [ref=e271]:
              - generic [ref=e276]: Key Challenge
              - heading "Isotope Purity Uncertainty" [level=3] [ref=e278]
              - generic [ref=e279]:
                - paragraph [ref=e281]: Assay and QA systems that verify quality, safety and compliance.
                - generic [ref=e282]:
                  - paragraph [ref=e283]: Explore More
                  - img [ref=e284]
          - link "Radiolabelling Bottlenecks" [ref=e286] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies#7144602e-3c94-4d04-88f4-8a62e374494e
            - article "Radiolabelling Bottlenecks" [ref=e287]:
              - generic [ref=e292]: Key Challenge
              - heading "Radiolabelling Bottlenecks" [level=3] [ref=e294]
              - generic [ref=e295]:
                - paragraph [ref=e297]: Automation and QA to increase throughput, protect yield and meet demand.
                - generic [ref=e298]:
                  - paragraph [ref=e299]: Explore Solutions
                  - img [ref=e300]
          - link "Drug Owner Demands on Operations" [ref=e302] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies#00226e94-4eb4-4eab-a078-fc2ee98f8c73
            - article "Drug Owner Demands on Operations" [ref=e303]:
              - generic [ref=e308]: Key Challenge
              - heading "Drug Owner Demands on Operations" [level=3] [ref=e310]
              - generic [ref=e311]:
                - paragraph [ref=e313]: Compliance support, workflow and reporting automation for stronger GMP, quality management and scalability to meet sponsor expectations.
                - generic [ref=e314]:
                  - paragraph [ref=e315]: Explore Solutions
                  - img [ref=e316]
          - link [ref=e318] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies
            - article [ref=e319]:
              - generic [ref=e323]:
                - paragraph [ref=e324]: Explore All Solutions for Drug Manufacturers
                - img [ref=e325]
      - generic [ref=e327]:
        - generic [ref=e329]:
          - heading "For Clinical Sites" [level=2] [ref=e330]
          - paragraph [ref=e331]: Clinical sites must balance safety, workflows, and precision. Mirion helps protect staff, streamline operations, and boost accuracy.
        - generic [ref=e333]:
          - link "Exposure Risk to Staff and Patients" [ref=e334] [cursor=pointer]:
            - /url: /hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387
            - article "Exposure Risk to Staff and Patients" [ref=e335]:
              - generic [ref=e340]: Key Challenge
              - heading "Exposure Risk to Staff and Patients" [level=3] [ref=e342]
              - generic [ref=e343]:
                - paragraph [ref=e345]: Shielding, monitoring and dosimetry solutions for meeting ALARA every day.
                - generic [ref=e346]:
                  - paragraph [ref=e347]: Explore More
                  - img [ref=e348]
          - link "High-Energy Shielding Needs" [ref=e350] [cursor=pointer]:
            - /url: /hospitals-clinical-sites#c4f75155-8a7f-4336-b701-b1ee02c26b22
            - article "High-Energy Shielding Needs" [ref=e351]:
              - generic [ref=e356]: Key Challenge
              - heading "High-Energy Shielding Needs" [level=3] [ref=e358]
              - generic [ref=e359]:
                - paragraph [ref=e361]: Solutions built for F-18, Lu-177 and other high-energy isotopes.
                - generic [ref=e362]:
                  - paragraph [ref=e363]: Explore More
                  - img [ref=e364]
          - link "Missed Doses from Planning Gaps" [ref=e366] [cursor=pointer]:
            - /url: /hospitals-clinical-sites#9bb45bb3-6943-4074-b791-5835149a21e1
            - article "Missed Doses from Planning Gaps" [ref=e367]:
              - generic [ref=e372]: Key Challenge
              - heading "Missed Doses from Planning Gaps" [level=3] [ref=e374]
              - generic [ref=e375]:
                - paragraph [ref=e377]: Scheduling tools that align production, calibration and patient need.
                - generic [ref=e378]:
                  - paragraph [ref=e379]: Explore More
                  - img [ref=e380]
          - link [ref=e382] [cursor=pointer]:
            - /url: /hospitals-clinical-sites
            - article [ref=e383]:
              - generic [ref=e387]:
                - paragraph [ref=e388]: Explore All Solutions for Clinical Sites
                - img [ref=e389]
      - generic [ref=e392]:
        - heading "Solutions by Function" [level=2] [ref=e393]
        - paragraph
      - generic [ref=e394]:
        - generic [ref=e396]:
          - heading "For Radiation Safety and Health Physics" [level=2] [ref=e397]
          - paragraph [ref=e398]: Count on Mirion to help ensure staff safety, meet regulations, and manage radiation monitoring with confidence.
        - generic [ref=e400]:
          - link "Radiation Monitoring and Dosimetry" [ref=e401] [cursor=pointer]:
            - /url: /radiation-monitoring-and-dosimetry
            - article "Radiation Monitoring and Dosimetry" [ref=e402]:
              - heading "Radiation Monitoring and Dosimetry" [level=3] [ref=e406]
              - generic [ref=e407]:
                - paragraph [ref=e409]: Protect staff and patients with continuous radiation monitoring, dosimetry and contamination clearance tools.
                - generic [ref=e410]:
                  - paragraph [ref=e411]: Explore Solution
                  - img [ref=e412]
          - link "Shielding and Safety Solutions" [ref=e414] [cursor=pointer]:
            - /url: /radiation-shielding-safety-systems
            - article "Shielding and Safety Solutions" [ref=e415]:
              - heading "Shielding and Safety Solutions" [level=3] [ref=e419]
              - generic [ref=e420]:
                - paragraph [ref=e422]: Reduce exposure risk with advanced shielding and protective systems for high-energy isotopes.
                - generic [ref=e423]:
                  - paragraph [ref=e424]: Explore Solution
                  - img [ref=e425]
          - link "Isotope Transport and Logistics" [ref=e427] [cursor=pointer]:
            - /url: /safe-isotope-shipping-class-7-transport
            - article "Isotope Transport and Logistics" [ref=e428]:
              - heading "Isotope Transport and Logistics" [level=3] [ref=e432]
              - generic [ref=e433]:
                - paragraph [ref=e435]: Meet DOT and IATA standards with packaging, tracking and monitoring solutions that ensure compliant delivery.
                - generic [ref=e436]:
                  - paragraph [ref=e437]: Explore Solution
                  - img [ref=e438]
          - link "Nuclear Medicine Management" [ref=e440] [cursor=pointer]:
            - /url: /nuclear-medicine-management
            - article "Nuclear Medicine Management" [ref=e441]:
              - heading "Nuclear Medicine Management" [level=3] [ref=e445]
              - generic [ref=e446]:
                - paragraph [ref=e448]: Manage nuclear medicine operations more efficiently with software that streamlines inventory, dosing and compliance.
                - generic [ref=e449]:
                  - paragraph [ref=e450]: Explore Solution
                  - img [ref=e451]
      - generic [ref=e453]:
        - generic [ref=e455]:
          - heading "For Quality Assurance" [level=2] [ref=e456]
          - paragraph [ref=e457]: QA Managers use Mirion tools to simplify GMP, manage audits, and ensure every batch meets quality standards.
        - generic [ref=e459]:
          - link "Integrated Manufacturing Compliance" [ref=e460] [cursor=pointer]:
            - /url: /manufacturing-compliance
            - article "Integrated Manufacturing Compliance" [ref=e461]:
              - heading "Integrated Manufacturing Compliance" [level=3] [ref=e465]
              - generic [ref=e466]:
                - paragraph [ref=e468]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
                - generic [ref=e469]:
                  - paragraph [ref=e470]: Explore Solution
                  - img [ref=e471]
          - link "Precise Assays and Calibration" [ref=e473] [cursor=pointer]:
            - /url: /precise-assays-and-calibration
            - article "Precise Assays and Calibration" [ref=e474]:
              - heading "Precise Assays and Calibration" [level=3] [ref=e478]
              - generic [ref=e479]:
                - paragraph [ref=e481]: Ensure accuracy and compliance with assays and dose calibrators that safeguard quality at every step.
                - generic [ref=e482]:
                  - paragraph [ref=e483]: Explore Solution
                  - img [ref=e484]
          - link "Transparency and Data Visibility" [ref=e486] [cursor=pointer]:
            - /url: /transparency-data-visibility-platforms
            - article "Transparency and Data Visibility" [ref=e487]:
              - heading "Transparency and Data Visibility" [level=3] [ref=e491]
              - generic [ref=e492]:
                - paragraph [ref=e494]: Gain full visibility from order to cash with platforms that connect supply, manufacturing and clinical outcomes.
                - generic [ref=e495]:
                  - paragraph [ref=e496]: Explore Solution
                  - img [ref=e497]
          - link "Connected Ecosystem" [ref=e499] [cursor=pointer]:
            - /url: /connected-ecosystem
            - article "Connected Ecosystem" [ref=e500]:
              - heading "Connected Ecosystem" [level=3] [ref=e504]
              - generic [ref=e505]:
                - paragraph [ref=e507]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
                - generic [ref=e508]:
                  - paragraph [ref=e509]: Explore Solution
                  - img [ref=e510]
      - generic [ref=e512]:
        - generic [ref=e514]:
          - heading "For Supply Chain" [level=2] [ref=e515]
          - paragraph [ref=e516]: Track orders, ensure cold-chain integrity and prevent missed deliveries with an array of smart solutions from Mirion.
        - generic [ref=e518]:
          - link "Shipping and Inventory Control" [ref=e519] [cursor=pointer]:
            - /url: /end-to-end-shipping-inventory-control
            - article "Shipping and Inventory Control" [ref=e520]:
              - heading "Shipping and Inventory Control" [level=3] [ref=e524]
              - generic [ref=e525]:
                - paragraph [ref=e527]: Track inventory, shipments and waste in real time to ensure safe delivery, reduce delays and minimize loss.
                - generic [ref=e528]:
                  - paragraph [ref=e529]: Explore Solution
                  - img [ref=e530]
          - link "Connected Ecosystem" [ref=e532] [cursor=pointer]:
            - /url: /connected-ecosystem
            - article "Connected Ecosystem" [ref=e533]:
              - heading "Connected Ecosystem" [level=3] [ref=e537]
              - generic [ref=e538]:
                - paragraph [ref=e540]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
                - generic [ref=e541]:
                  - paragraph [ref=e542]: Explore Solution
                  - img [ref=e543]
          - link "Pharmacy and Department Solutions" [ref=e545] [cursor=pointer]:
            - /url: /comprehensive-department-solutions
            - article "Pharmacy and Department Solutions" [ref=e546]:
              - heading "Pharmacy and Department Solutions" [level=3] [ref=e550]
              - generic [ref=e551]:
                - paragraph [ref=e553]: Launch or expand programs with complete systems that manage workflows, compliance and scheduling.
                - generic [ref=e554]:
                  - paragraph [ref=e555]: Explore Solution
                  - img [ref=e556]
          - link "Nuclear Medicine Management" [ref=e558] [cursor=pointer]:
            - /url: /nuclear-medicine-management
            - article "Nuclear Medicine Management" [ref=e559]:
              - heading "Nuclear Medicine Management" [level=3] [ref=e563]
              - generic [ref=e564]:
                - paragraph [ref=e566]: Manage nuclear medicine operations more efficiently with software that streamlines inventory, dosing and compliance.
                - generic [ref=e567]:
                  - paragraph [ref=e568]: Explore Solution
                  - img [ref=e569]
      - generic [ref=e573]:
        - heading "Find the Right Fit" [level=2] [ref=e575]
        - generic [ref=e576]:
          - heading "Our team can help you identify solutions tailored to your unique challenge." [level=3] [ref=e577]
          - link "Request a Consultation" [ref=e578] [cursor=pointer]:
            - /url: /contact-us
            - generic [ref=e579]: Request a Consultation
  - contentinfo [ref=e580]:
    - generic [ref=e581]:
      - navigation "primary navigation" [ref=e582]:
        - generic [ref=e584]:
          - heading "Solutions" [level=2] [ref=e585]
          - list "Solutions" [ref=e586]:
            - listitem [ref=e587]:
              - link "For Drug Owners and Developers" [ref=e588] [cursor=pointer]:
                - /url: /drug-owners-developers
                - generic [ref=e589]: For Drug Owners and Developers
            - listitem [ref=e590]:
              - link "For Isotope Producers and Radiopharmacies" [ref=e591] [cursor=pointer]:
                - /url: /isotope-producers-radiopharmacies
                - generic [ref=e592]: For Isotope Producers and Radiopharmacies
            - listitem [ref=e593]:
              - link "For Hospitals & Clinical Sites" [ref=e594] [cursor=pointer]:
                - /url: /hospitals-clinical-sites
                - generic [ref=e595]: For Hospitals & Clinical Sites
        - generic [ref=e597]:
          - heading "Products" [level=2] [ref=e598]
          - list "Products" [ref=e599]:
            - listitem [ref=e600]:
              - link "Lab Equipment & Accessories" [ref=e601] [cursor=pointer]:
                - /url: /lab-equipment-accessories
                - generic [ref=e602]: Lab Equipment & Accessories
            - listitem [ref=e603]:
              - link "Health Physics & Radiation Protection" [ref=e604] [cursor=pointer]:
                - /url: /health-physics-radiation-protection
                - generic [ref=e605]: Health Physics & Radiation Protection
            - listitem [ref=e606]:
              - link "Spectroscopy & Scientific Analysis" [ref=e607] [cursor=pointer]:
                - /url: /spectroscopy-scientific-analysis
                - generic [ref=e608]: Spectroscopy & Scientific Analysis
            - listitem [ref=e609]:
              - link "Shielding, Shipping, and Waste Management" [ref=e610] [cursor=pointer]:
                - /url: /shielding-shipping-waste-management
                - generic [ref=e611]: Shielding, Shipping, and Waste Management
            - listitem [ref=e612]:
              - link "Management Platforms" [ref=e613] [cursor=pointer]:
                - /url: /management-platform
                - generic [ref=e614]: Management Platforms
            - listitem [ref=e615]:
              - link "Dose Preparation and Delivery" [ref=e616] [cursor=pointer]:
                - /url: /dose-preparation-delivery
                - generic [ref=e617]: Dose Preparation and Delivery
        - generic [ref=e619]:
          - heading "About" [level=2] [ref=e620]
          - list "About" [ref=e621]:
            - listitem [ref=e622]:
              - link "About Us" [ref=e623] [cursor=pointer]:
                - /url: /about-us
                - generic [ref=e624]: About Us
            - listitem [ref=e625]:
              - link "Mirion.com" [ref=e626] [cursor=pointer]:
                - /url: https://www.mirion.com/
                - generic [ref=e627]: Mirion.com
                - img [ref=e628]
            - listitem [ref=e630]:
              - link "Contact Us" [ref=e631] [cursor=pointer]:
                - /url: /contact-us
                - generic [ref=e632]: Contact Us
            - listitem [ref=e633]:
              - link "Careers" [ref=e634] [cursor=pointer]:
                - /url: https://www.mirion.com/careers
                - generic [ref=e635]: Careers
                - img [ref=e636]
        - generic [ref=e639]:
          - heading "Social" [level=2] [ref=e640]
          - list "Social" [ref=e641]:
            - listitem [ref=e642]:
              - link "Mirion Technologies LinkedIn" [ref=e643] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/miriontechnologies
                - generic [ref=e644]: Mirion Technologies LinkedIn
                - img [ref=e645]
            - listitem [ref=e647]:
              - link "Mirion Medical LinkedIn" [ref=e648] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/mirion-medical
                - generic [ref=e649]: Mirion Medical LinkedIn
                - img [ref=e650]
            - listitem [ref=e652]:
              - link "YouTube" [ref=e653] [cursor=pointer]:
                - /url: https://www.youtube.com/@mirionhq
                - generic [ref=e654]: YouTube
                - img [ref=e655]
      - navigation "legal links" [ref=e657]:
        - list [ref=e658]:
          - listitem [ref=e659]:
            - link "Legal" [ref=e660] [cursor=pointer]:
              - /url: https://www.mirion.com/legal
              - generic [ref=e661]: Legal
              - img [ref=e662]
          - listitem [ref=e664]:
            - link "Privacy Policies and Data Notices" [ref=e665] [cursor=pointer]:
              - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
              - generic [ref=e666]: Privacy Policies and Data Notices
              - img [ref=e667]
          - listitem [ref=e669]:
            - 'link "CCPA: Do not sell my personal information" [ref=e670] [cursor=pointer]':
              - /url: https://www.mirion.com/legal/california-consumer-privacy-act-opt-out-form
              - generic [ref=e671]: "CCPA: Do not sell my personal information"
              - img [ref=e672]
          - listitem [ref=e674]:
            - generic [ref=e676] [cursor=pointer]: Cookie Settings
      - separator [ref=e677]
      - generic [ref=e678]:
        - link [ref=e679] [cursor=pointer]:
          - /url: https://www.mirion.com/
          - img [ref=e681]
        - paragraph [ref=e682]: © 2025 Mirion Technologies, Inc. All Rights Reserved.
  - alert [ref=e683]
  - dialog "Privacy" [ref=e685]:
    - generic [ref=e686]:
      - button "Close" [ref=e688] [cursor=pointer]
      - generic [ref=e689]:
        - generic [ref=e692]:
          - text: By clicking “Accept All”, you agree to the storing of cookies on your device and Enhanced Conversions to enhance site navigation, analyze site usage, and assist in our marketing efforts.
          - link "More information about your privacy, opens in a new tab" [ref=e693] [cursor=pointer]:
            - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
            - text: See our Cookie Policy for more information
        - generic [ref=e695]:
          - button "Accept All" [ref=e697] [cursor=pointer]
          - button "Cookie Settings, Opens the preference center dialog" [ref=e699] [cursor=pointer]: Cookie Settings
  - iframe [ref=e700]:
    
  - button "Open Intercom Messenger" [ref=e701] [cursor=pointer]:
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