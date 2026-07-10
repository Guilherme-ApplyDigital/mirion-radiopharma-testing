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
        - generic [ref=e30]:
          - searchbox "Search" [ref=e31]
          - generic [ref=e32]:
            - img
  - main [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e42]:
        - heading "Trusted Radiopharma Resources" [level=1] [ref=e43]
        - paragraph [ref=e44]: Safeguard quality, reduce risk and optimize outcomes across discovery, manufacturing and care.
      - generic [ref=e46]:
        - heading "Our Full Suite of Solutions" [level=2] [ref=e47]
        - paragraph [ref=e48]: From isotope purity to patient safety, Mirion offers connected tools and systems that solve radiopharma’s toughest challenges.
      - generic [ref=e51]:
        - link "Connected Ecosystem" [ref=e52] [cursor=pointer]:
          - /url: /connected-ecosystem
          - article "Connected Ecosystem" [ref=e53]:
            - heading "Connected Ecosystem" [level=3] [ref=e57]
            - generic [ref=e58]:
              - paragraph [ref=e60]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
              - generic [ref=e61]:
                - paragraph [ref=e62]: Explore Solution
                - img [ref=e63]
        - link "Precise Assays and Calibration" [ref=e65] [cursor=pointer]:
          - /url: /precise-assays-and-calibration
          - article "Precise Assays and Calibration" [ref=e66]:
            - heading "Precise Assays and Calibration" [level=3] [ref=e70]
            - generic [ref=e71]:
              - paragraph [ref=e73]: Ensure accuracy and compliance with assays and dose calibrators that safeguard quality at every step.
              - generic [ref=e74]:
                - paragraph [ref=e75]: Explore Solution
                - img [ref=e76]
        - link "Radiation Monitoring and Dosimetry" [ref=e78] [cursor=pointer]:
          - /url: /radiation-monitoring-and-dosimetry
          - article "Radiation Monitoring and Dosimetry" [ref=e79]:
            - heading "Radiation Monitoring and Dosimetry" [level=3] [ref=e83]
            - generic [ref=e84]:
              - paragraph [ref=e86]: Protect staff and patients with continuous radiation monitoring, dosimetry and contamination clearance tools.
              - generic [ref=e87]:
                - paragraph [ref=e88]: Explore Solution
                - img [ref=e89]
        - link "Integrated Manufacturing Compliance" [ref=e91] [cursor=pointer]:
          - /url: /manufacturing-compliance
          - article "Integrated Manufacturing Compliance" [ref=e92]:
            - heading "Integrated Manufacturing Compliance" [level=3] [ref=e96]
            - generic [ref=e97]:
              - paragraph [ref=e99]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
              - generic [ref=e100]:
                - paragraph [ref=e101]: Explore Solution
                - img [ref=e102]
        - link "Shipping and Inventory Control" [ref=e104] [cursor=pointer]:
          - /url: /end-to-end-shipping-inventory-control
          - article "Shipping and Inventory Control" [ref=e105]:
            - heading "Shipping and Inventory Control" [level=3] [ref=e109]
            - generic [ref=e110]:
              - paragraph [ref=e112]: Track inventory, shipments and waste in real time to ensure safe delivery, reduce delays and minimize loss.
              - generic [ref=e113]:
                - paragraph [ref=e114]: Explore Solution
                - img [ref=e115]
        - link "Pharmacy and Department Solutions" [ref=e117] [cursor=pointer]:
          - /url: /comprehensive-department-solutions
          - article "Pharmacy and Department Solutions" [ref=e118]:
            - heading "Pharmacy and Department Solutions" [level=3] [ref=e122]
            - generic [ref=e123]:
              - paragraph [ref=e125]: Launch or expand programs with complete systems that manage workflows, compliance and scheduling.
              - generic [ref=e126]:
                - paragraph [ref=e127]: Explore Solution
                - img [ref=e128]
        - link "Transparency and Data Visibility" [ref=e130] [cursor=pointer]:
          - /url: /transparency-data-visibility-platforms
          - article "Transparency and Data Visibility" [ref=e131]:
            - heading "Transparency and Data Visibility" [level=3] [ref=e135]
            - generic [ref=e136]:
              - paragraph [ref=e138]: Gain full visibility from order to cash with platforms that connect supply, manufacturing and clinical outcomes.
              - generic [ref=e139]:
                - paragraph [ref=e140]: Explore Solution
                - img [ref=e141]
        - link "Isotope Transport and Logistics" [ref=e143] [cursor=pointer]:
          - /url: /safe-isotope-shipping-class-7-transport
          - article "Isotope Transport and Logistics" [ref=e144]:
            - heading "Isotope Transport and Logistics" [level=3] [ref=e148]
            - generic [ref=e149]:
              - paragraph [ref=e151]: Meet DOT and IATA standards with packaging, tracking and monitoring solutions that ensure compliant delivery.
              - generic [ref=e152]:
                - paragraph [ref=e153]: Explore Solution
                - img [ref=e154]
        - link "Shielding and Safety Solutions" [ref=e156] [cursor=pointer]:
          - /url: /radiation-shielding-safety-systems
          - article "Shielding and Safety Solutions" [ref=e157]:
            - heading "Shielding and Safety Solutions" [level=3] [ref=e161]
            - generic [ref=e162]:
              - paragraph [ref=e164]: Reduce exposure risk with advanced shielding and protective systems for high-energy isotopes.
              - generic [ref=e165]:
                - paragraph [ref=e166]: Explore Solution
                - img [ref=e167]
        - link "Nuclear Medicine Management" [ref=e169] [cursor=pointer]:
          - /url: /nuclear-medicine-management
          - article "Nuclear Medicine Management" [ref=e170]:
            - heading "Nuclear Medicine Management" [level=3] [ref=e174]
            - generic [ref=e175]:
              - paragraph [ref=e177]: Manage nuclear medicine operations more efficiently with software that streamlines inventory, dosing and compliance.
              - generic [ref=e178]:
                - paragraph [ref=e179]: Explore Solution
                - img [ref=e180]
      - generic [ref=e183]:
        - heading "Solutions by Setting" [level=2] [ref=e184]
        - paragraph
      - navigation "Page section navigation" [ref=e185]:
        - generic [ref=e187]:
          - img "Mirion Logo" [ref=e189]
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "For Supply Chain" [ref=e192] [cursor=pointer]:
                - /url: "#for-supply-chain"
                - generic [ref=e193]: For Supply Chain
            - listitem [ref=e194]:
              - link "Find the Right Fit" [ref=e195] [cursor=pointer]:
                - /url: "#find-the-right-fit"
                - generic [ref=e196]: Find the Right Fit
          - link "Request a Demo" [ref=e198] [cursor=pointer]:
            - /url: /contact-us
            - generic [ref=e199]: Request a Demo
      - generic [ref=e200]:
        - generic [ref=e202]:
          - heading "For Drug Owners and Developers" [level=2] [ref=e203]
          - paragraph [ref=e204]: From data gaps to trial delays, Mirion helps overcome the issues that slow you down.
        - generic [ref=e206]:
          - link "Unclear Manufacturing Flow" [ref=e207] [cursor=pointer]:
            - /url: /drug-owners-developers#ebf1d2da-4591-494a-bdc0-6a82b2b2c26b
            - article "Unclear Manufacturing Flow" [ref=e208]:
              - generic [ref=e213]: Key Challenge
              - heading "Unclear Manufacturing Flow" [level=3] [ref=e215]
              - generic [ref=e216]:
                - paragraph [ref=e218]: Batch-to-order visibility and audit-ready reporting for better clarity.
                - generic [ref=e219]:
                  - paragraph [ref=e220]: Explore More
                  - img [ref=e221]
          - link "Order-to-Cash Friction" [ref=e223] [cursor=pointer]:
            - /url: /drug-owners-developers#b750d4ab-ee5e-4a3b-879b-d6b19288d8f3
            - article "Order-to-Cash Friction" [ref=e224]:
              - generic [ref=e229]: Key Challenge
              - heading "Order-to-Cash Friction" [level=3] [ref=e231]
              - generic [ref=e232]:
                - paragraph [ref=e234]: Value tracking, reconciliation and recovery from fulfillment to outcome.
                - generic [ref=e235]:
                  - paragraph [ref=e236]: Explore Solutions
                  - img [ref=e237]
          - link "Trial Delays" [ref=e239] [cursor=pointer]:
            - /url: /drug-owners-developers#f9e7e57c-1452-4874-af25-fa7d7cab7fa4
            - article "Trial Delays" [ref=e240]:
              - generic [ref=e245]: Key Challenge
              - heading "Trial Delays" [level=3] [ref=e247]
              - generic [ref=e248]:
                - paragraph [ref=e250]: Unified data flows shorten cycles, limit errors and keep trials on schedule.
                - generic [ref=e251]:
                  - paragraph [ref=e252]: Explore Solutions
                  - img [ref=e253]
          - link [ref=e255] [cursor=pointer]:
            - /url: /drug-owners-developers
            - article [ref=e256]:
              - generic [ref=e260]:
                - paragraph [ref=e261]: Explore All Solutions for Drug Owners & Developers
                - img [ref=e262]
      - generic [ref=e264]:
        - generic [ref=e266]:
          - heading "For Isotope Producers and Radiopharmacies" [level=2] [ref=e267]
          - paragraph [ref=e268]: Drug manufacturers face strict compliance and production hurdles. Mirion helps ensure quality, scalability, and precise, on-time delivery.
        - generic [ref=e270]:
          - link "Isotope Purity Uncertainty" [ref=e271] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies#7b7d5a1c-51cc-4a7e-9571-8316c397b701
            - article "Isotope Purity Uncertainty" [ref=e272]:
              - generic [ref=e277]: Key Challenge
              - heading "Isotope Purity Uncertainty" [level=3] [ref=e279]
              - generic [ref=e280]:
                - paragraph [ref=e282]: Assay and QA systems that verify quality, safety and compliance.
                - generic [ref=e283]:
                  - paragraph [ref=e284]: Explore More
                  - img [ref=e285]
          - link "Radiolabelling Bottlenecks" [ref=e287] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies#7144602e-3c94-4d04-88f4-8a62e374494e
            - article "Radiolabelling Bottlenecks" [ref=e288]:
              - generic [ref=e293]: Key Challenge
              - heading "Radiolabelling Bottlenecks" [level=3] [ref=e295]
              - generic [ref=e296]:
                - paragraph [ref=e298]: Automation and QA to increase throughput, protect yield and meet demand.
                - generic [ref=e299]:
                  - paragraph [ref=e300]: Explore Solutions
                  - img [ref=e301]
          - link "Drug Owner Demands on Operations" [ref=e303] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies#00226e94-4eb4-4eab-a078-fc2ee98f8c73
            - article "Drug Owner Demands on Operations" [ref=e304]:
              - generic [ref=e309]: Key Challenge
              - heading "Drug Owner Demands on Operations" [level=3] [ref=e311]
              - generic [ref=e312]:
                - paragraph [ref=e314]: Compliance support, workflow and reporting automation for stronger GMP, quality management and scalability to meet sponsor expectations.
                - generic [ref=e315]:
                  - paragraph [ref=e316]: Explore Solutions
                  - img [ref=e317]
          - link [ref=e319] [cursor=pointer]:
            - /url: /isotope-producers-radiopharmacies
            - article [ref=e320]:
              - generic [ref=e324]:
                - paragraph [ref=e325]: Explore All Solutions for Drug Manufacturers
                - img [ref=e326]
      - generic [ref=e328]:
        - generic [ref=e330]:
          - heading "For Clinical Sites" [level=2] [ref=e331]
          - paragraph [ref=e332]: Clinical sites must balance safety, workflows, and precision. Mirion helps protect staff, streamline operations, and boost accuracy.
        - generic [ref=e334]:
          - link "Exposure Risk to Staff and Patients" [ref=e335] [cursor=pointer]:
            - /url: /hospitals-clinical-sites#12e79609-2e70-4e51-ae7b-ab759f23d387
            - article "Exposure Risk to Staff and Patients" [ref=e336]:
              - generic [ref=e341]: Key Challenge
              - heading "Exposure Risk to Staff and Patients" [level=3] [ref=e343]
              - generic [ref=e344]:
                - paragraph [ref=e346]: Shielding, monitoring and dosimetry solutions for meeting ALARA every day.
                - generic [ref=e347]:
                  - paragraph [ref=e348]: Explore More
                  - img [ref=e349]
          - link "High-Energy Shielding Needs" [ref=e351] [cursor=pointer]:
            - /url: /hospitals-clinical-sites#c4f75155-8a7f-4336-b701-b1ee02c26b22
            - article "High-Energy Shielding Needs" [ref=e352]:
              - generic [ref=e357]: Key Challenge
              - heading "High-Energy Shielding Needs" [level=3] [ref=e359]
              - generic [ref=e360]:
                - paragraph [ref=e362]: Solutions built for F-18, Lu-177 and other high-energy isotopes.
                - generic [ref=e363]:
                  - paragraph [ref=e364]: Explore More
                  - img [ref=e365]
          - link "Missed Doses from Planning Gaps" [ref=e367] [cursor=pointer]:
            - /url: /hospitals-clinical-sites#9bb45bb3-6943-4074-b791-5835149a21e1
            - article "Missed Doses from Planning Gaps" [ref=e368]:
              - generic [ref=e373]: Key Challenge
              - heading "Missed Doses from Planning Gaps" [level=3] [ref=e375]
              - generic [ref=e376]:
                - paragraph [ref=e378]: Scheduling tools that align production, calibration and patient need.
                - generic [ref=e379]:
                  - paragraph [ref=e380]: Explore More
                  - img [ref=e381]
          - link [ref=e383] [cursor=pointer]:
            - /url: /hospitals-clinical-sites
            - article [ref=e384]:
              - generic [ref=e388]:
                - paragraph [ref=e389]: Explore All Solutions for Clinical Sites
                - img [ref=e390]
      - generic [ref=e393]:
        - heading "Solutions by Function" [level=2] [ref=e394]
        - paragraph
      - generic [ref=e395]:
        - generic [ref=e397]:
          - heading "For Radiation Safety and Health Physics" [level=2] [ref=e398]
          - paragraph [ref=e399]: Count on Mirion to help ensure staff safety, meet regulations, and manage radiation monitoring with confidence.
        - generic [ref=e401]:
          - link "Radiation Monitoring and Dosimetry" [ref=e402] [cursor=pointer]:
            - /url: /radiation-monitoring-and-dosimetry
            - article "Radiation Monitoring and Dosimetry" [ref=e403]:
              - heading "Radiation Monitoring and Dosimetry" [level=3] [ref=e407]
              - generic [ref=e408]:
                - paragraph [ref=e410]: Protect staff and patients with continuous radiation monitoring, dosimetry and contamination clearance tools.
                - generic [ref=e411]:
                  - paragraph [ref=e412]: Explore Solution
                  - img [ref=e413]
          - link "Shielding and Safety Solutions" [ref=e415] [cursor=pointer]:
            - /url: /radiation-shielding-safety-systems
            - article "Shielding and Safety Solutions" [ref=e416]:
              - heading "Shielding and Safety Solutions" [level=3] [ref=e420]
              - generic [ref=e421]:
                - paragraph [ref=e423]: Reduce exposure risk with advanced shielding and protective systems for high-energy isotopes.
                - generic [ref=e424]:
                  - paragraph [ref=e425]: Explore Solution
                  - img [ref=e426]
          - link "Isotope Transport and Logistics" [ref=e428] [cursor=pointer]:
            - /url: /safe-isotope-shipping-class-7-transport
            - article "Isotope Transport and Logistics" [ref=e429]:
              - heading "Isotope Transport and Logistics" [level=3] [ref=e433]
              - generic [ref=e434]:
                - paragraph [ref=e436]: Meet DOT and IATA standards with packaging, tracking and monitoring solutions that ensure compliant delivery.
                - generic [ref=e437]:
                  - paragraph [ref=e438]: Explore Solution
                  - img [ref=e439]
          - link "Nuclear Medicine Management" [ref=e441] [cursor=pointer]:
            - /url: /nuclear-medicine-management
            - article "Nuclear Medicine Management" [ref=e442]:
              - heading "Nuclear Medicine Management" [level=3] [ref=e446]
              - generic [ref=e447]:
                - paragraph [ref=e449]: Manage nuclear medicine operations more efficiently with software that streamlines inventory, dosing and compliance.
                - generic [ref=e450]:
                  - paragraph [ref=e451]: Explore Solution
                  - img [ref=e452]
      - generic [ref=e454]:
        - generic [ref=e456]:
          - heading "For Quality Assurance" [level=2] [ref=e457]
          - paragraph [ref=e458]: QA Managers use Mirion tools to simplify GMP, manage audits, and ensure every batch meets quality standards.
        - generic [ref=e460]:
          - link "Integrated Manufacturing Compliance" [ref=e461] [cursor=pointer]:
            - /url: /manufacturing-compliance
            - article "Integrated Manufacturing Compliance" [ref=e462]:
              - heading "Integrated Manufacturing Compliance" [level=3] [ref=e466]
              - generic [ref=e467]:
                - paragraph [ref=e469]: Simplify GMP and QMS compliance with automated workflows, electronic reporting and built-in error reduction.
                - generic [ref=e470]:
                  - paragraph [ref=e471]: Explore Solution
                  - img [ref=e472]
          - link "Precise Assays and Calibration" [ref=e474] [cursor=pointer]:
            - /url: /precise-assays-and-calibration
            - article "Precise Assays and Calibration" [ref=e475]:
              - heading "Precise Assays and Calibration" [level=3] [ref=e479]
              - generic [ref=e480]:
                - paragraph [ref=e482]: Ensure accuracy and compliance with assays and dose calibrators that safeguard quality at every step.
                - generic [ref=e483]:
                  - paragraph [ref=e484]: Explore Solution
                  - img [ref=e485]
          - link "Transparency and Data Visibility" [ref=e487] [cursor=pointer]:
            - /url: /transparency-data-visibility-platforms
            - article "Transparency and Data Visibility" [ref=e488]:
              - heading "Transparency and Data Visibility" [level=3] [ref=e492]
              - generic [ref=e493]:
                - paragraph [ref=e495]: Gain full visibility from order to cash with platforms that connect supply, manufacturing and clinical outcomes.
                - generic [ref=e496]:
                  - paragraph [ref=e497]: Explore Solution
                  - img [ref=e498]
          - link "Connected Ecosystem" [ref=e500] [cursor=pointer]:
            - /url: /connected-ecosystem
            - article "Connected Ecosystem" [ref=e501]:
              - heading "Connected Ecosystem" [level=3] [ref=e505]
              - generic [ref=e506]:
                - paragraph [ref=e508]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
                - generic [ref=e509]:
                  - paragraph [ref=e510]: Explore Solution
                  - img [ref=e511]
      - generic [ref=e513]:
        - generic [ref=e515]:
          - heading "For Supply Chain" [level=2] [ref=e516]
          - paragraph [ref=e517]: Track orders, ensure cold-chain integrity and prevent missed deliveries with an array of smart solutions from Mirion.
        - generic [ref=e519]:
          - link "Shipping and Inventory Control" [ref=e520] [cursor=pointer]:
            - /url: /end-to-end-shipping-inventory-control
            - article "Shipping and Inventory Control" [ref=e521]:
              - heading "Shipping and Inventory Control" [level=3] [ref=e525]
              - generic [ref=e526]:
                - paragraph [ref=e528]: Track inventory, shipments and waste in real time to ensure safe delivery, reduce delays and minimize loss.
                - generic [ref=e529]:
                  - paragraph [ref=e530]: Explore Solution
                  - img [ref=e531]
          - link "Connected Ecosystem" [ref=e533] [cursor=pointer]:
            - /url: /connected-ecosystem
            - article "Connected Ecosystem" [ref=e534]:
              - heading "Connected Ecosystem" [level=3] [ref=e538]
              - generic [ref=e539]:
                - paragraph [ref=e541]: Unify data across production, distribution and care to reduce errors, increase efficiency and improve decision-making.
                - generic [ref=e542]:
                  - paragraph [ref=e543]: Explore Solution
                  - img [ref=e544]
          - link "Pharmacy and Department Solutions" [ref=e546] [cursor=pointer]:
            - /url: /comprehensive-department-solutions
            - article "Pharmacy and Department Solutions" [ref=e547]:
              - heading "Pharmacy and Department Solutions" [level=3] [ref=e551]
              - generic [ref=e552]:
                - paragraph [ref=e554]: Launch or expand programs with complete systems that manage workflows, compliance and scheduling.
                - generic [ref=e555]:
                  - paragraph [ref=e556]: Explore Solution
                  - img [ref=e557]
          - link "Nuclear Medicine Management" [ref=e559] [cursor=pointer]:
            - /url: /nuclear-medicine-management
            - article "Nuclear Medicine Management" [ref=e560]:
              - heading "Nuclear Medicine Management" [level=3] [ref=e564]
              - generic [ref=e565]:
                - paragraph [ref=e567]: Manage nuclear medicine operations more efficiently with software that streamlines inventory, dosing and compliance.
                - generic [ref=e568]:
                  - paragraph [ref=e569]: Explore Solution
                  - img [ref=e570]
      - generic [ref=e574]:
        - heading "Find the Right Fit" [level=2] [ref=e576]
        - generic [ref=e577]:
          - heading "Our team can help you identify solutions tailored to your unique challenge." [level=3] [ref=e578]
          - link "Request a Consultation" [ref=e579] [cursor=pointer]:
            - /url: /contact-us
            - generic [ref=e580]: Request a Consultation
  - contentinfo [ref=e581]:
    - generic [ref=e582]:
      - navigation "primary navigation" [ref=e583]:
        - generic [ref=e585]:
          - heading "Solutions" [level=2] [ref=e586]
          - list "Solutions" [ref=e587]:
            - listitem [ref=e588]:
              - link "For Drug Owners and Developers" [ref=e589] [cursor=pointer]:
                - /url: /drug-owners-developers
                - generic [ref=e590]: For Drug Owners and Developers
            - listitem [ref=e591]:
              - link "For Isotope Producers and Radiopharmacies" [ref=e592] [cursor=pointer]:
                - /url: /isotope-producers-radiopharmacies
                - generic [ref=e593]: For Isotope Producers and Radiopharmacies
            - listitem [ref=e594]:
              - link "For Hospitals & Clinical Sites" [ref=e595] [cursor=pointer]:
                - /url: /hospitals-clinical-sites
                - generic [ref=e596]: For Hospitals & Clinical Sites
        - generic [ref=e598]:
          - heading "Products" [level=2] [ref=e599]
          - list "Products" [ref=e600]:
            - listitem [ref=e601]:
              - link "Lab Equipment & Accessories" [ref=e602] [cursor=pointer]:
                - /url: /lab-equipment-accessories
                - generic [ref=e603]: Lab Equipment & Accessories
            - listitem [ref=e604]:
              - link "Health Physics & Radiation Protection" [ref=e605] [cursor=pointer]:
                - /url: /health-physics-radiation-protection
                - generic [ref=e606]: Health Physics & Radiation Protection
            - listitem [ref=e607]:
              - link "Spectroscopy & Scientific Analysis" [ref=e608] [cursor=pointer]:
                - /url: /spectroscopy-scientific-analysis
                - generic [ref=e609]: Spectroscopy & Scientific Analysis
            - listitem [ref=e610]:
              - link "Shielding, Shipping, and Waste Management" [ref=e611] [cursor=pointer]:
                - /url: /shielding-shipping-waste-management
                - generic [ref=e612]: Shielding, Shipping, and Waste Management
            - listitem [ref=e613]:
              - link "Management Platforms" [ref=e614] [cursor=pointer]:
                - /url: /management-platform
                - generic [ref=e615]: Management Platforms
            - listitem [ref=e616]:
              - link "Dose Preparation and Delivery" [ref=e617] [cursor=pointer]:
                - /url: /dose-preparation-delivery
                - generic [ref=e618]: Dose Preparation and Delivery
        - generic [ref=e620]:
          - heading "About" [level=2] [ref=e621]
          - list "About" [ref=e622]:
            - listitem [ref=e623]:
              - link "About Us" [ref=e624] [cursor=pointer]:
                - /url: /about-us
                - generic [ref=e625]: About Us
            - listitem [ref=e626]:
              - link "Mirion.com" [ref=e627] [cursor=pointer]:
                - /url: https://www.mirion.com/
                - generic [ref=e628]: Mirion.com
                - img [ref=e629]
            - listitem [ref=e631]:
              - link "Contact Us" [ref=e632] [cursor=pointer]:
                - /url: /contact-us
                - generic [ref=e633]: Contact Us
            - listitem [ref=e634]:
              - link "Careers" [ref=e635] [cursor=pointer]:
                - /url: https://www.mirion.com/careers
                - generic [ref=e636]: Careers
                - img [ref=e637]
        - generic [ref=e640]:
          - heading "Social" [level=2] [ref=e641]
          - list "Social" [ref=e642]:
            - listitem [ref=e643]:
              - link "Mirion Technologies LinkedIn" [ref=e644] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/miriontechnologies
                - generic [ref=e645]: Mirion Technologies LinkedIn
                - img [ref=e646]
            - listitem [ref=e648]:
              - link "Mirion Medical LinkedIn" [ref=e649] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/mirion-medical
                - generic [ref=e650]: Mirion Medical LinkedIn
                - img [ref=e651]
            - listitem [ref=e653]:
              - link "YouTube" [ref=e654] [cursor=pointer]:
                - /url: https://www.youtube.com/@mirionhq
                - generic [ref=e655]: YouTube
                - img [ref=e656]
      - navigation "legal links" [ref=e658]:
        - list [ref=e659]:
          - listitem [ref=e660]:
            - link "Legal" [ref=e661] [cursor=pointer]:
              - /url: https://www.mirion.com/legal
              - generic [ref=e662]: Legal
              - img [ref=e663]
          - listitem [ref=e665]:
            - link "Privacy Policies and Data Notices" [ref=e666] [cursor=pointer]:
              - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
              - generic [ref=e667]: Privacy Policies and Data Notices
              - img [ref=e668]
          - listitem [ref=e670]:
            - 'link "CCPA: Do not sell my personal information" [ref=e671] [cursor=pointer]':
              - /url: https://www.mirion.com/legal/california-consumer-privacy-act-opt-out-form
              - generic [ref=e672]: "CCPA: Do not sell my personal information"
              - img [ref=e673]
          - listitem [ref=e675]:
            - generic [ref=e677] [cursor=pointer]: Cookie Settings
      - separator [ref=e678]
      - generic [ref=e679]:
        - link [ref=e680] [cursor=pointer]:
          - /url: https://www.mirion.com/
          - img [ref=e682]
        - paragraph [ref=e683]: © 2025 Mirion Technologies, Inc. All Rights Reserved.
  - alert [ref=e684]
  - iframe [ref=e685]:
    
  - dialog "Privacy" [ref=e687]:
    - generic [ref=e688]:
      - button "Close" [ref=e690] [cursor=pointer]
      - generic [ref=e691]:
        - generic [ref=e694]:
          - text: By clicking “Accept All”, you agree to the storing of cookies on your device and Enhanced Conversions to enhance site navigation, analyze site usage, and assist in our marketing efforts.
          - link "More information about your privacy, opens in a new tab" [ref=e695] [cursor=pointer]:
            - /url: https://www.mirion.com/legal/privacy-policy-and-data-privacy-notices
            - text: See our Cookie Policy for more information
        - generic [ref=e697]:
          - button "Accept All" [ref=e699] [cursor=pointer]
          - button "Cookie Settings, Opens the preference center dialog" [ref=e701] [cursor=pointer]: Cookie Settings
  - button "Open Intercom Messenger" [ref=e702] [cursor=pointer]:
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