// Block types: h (section heading), sub (sub-heading), p (paragraph),
// ul (bullet list).
export const intro = [
  { p: 'Fixxly Picker Android application | Package: com.fixxly.pickerapp' },
  { p: 'Last Updated: 31 July, 2026' },
  { p: 'Applies to: Fixxly Picker Android application, package com.fixxly.pickerapp' },
]

export const sections = [
  {
    h: '1. Nature of This Application',
    blocks: [
      {
        p: '1.1 Fixxly Picker (the "App") is an internal operational tool provided by Fixxly Private Limited ("Fixxly", "Company", "we", "us") to authorised warehouse and fulfilment personnel for the purpose of executing warehouse tasks, including order picking, putaway, inventory movement, stock reconciliation, and goods receipt.',
      },
      {
        p: "1.2 The App is not a consumer application. It is not offered to the general public, sells nothing, processes no payments, and provides no service to customers. It is a workforce tool operating against Fixxly's inventory and order management systems.",
      },
      {
        p: '1.3 Access is granted only to individuals whom Fixxly or an authorised operating partner has expressly designated as an authorised user ("Authorised User", "you", "your") and to whom warehouse account credentials have been issued.',
      },
    ],
  },
  {
    h: '2. Eligibility & Authorisation',
    blocks: [
      {
        p: "2.1 You may use the App only if you are an employee, contractor, agency-supplied worker, or other personnel engaged by Fixxly or by a warehouse or fulfilment partner operating on Fixxly's behalf, and only for the duration of that engagement.",
      },
      { p: '2.2 You must be at least 18 years of age.' },
      {
        p: '2.3 Your right to use the App is personal and non-transferable. It terminates automatically on the conclusion of your engagement, on reassignment away from a warehouse role, or on withdrawal of authorisation by Fixxly, without further notice.',
      },
      {
        p: '2.4 You may use the App only in respect of the warehouse, store, or site to which you are assigned. The App validates your assigned warehouse and may restrict functions accordingly.',
      },
      {
        p: '2.5 Role-based access. Functions available to you are determined by the role assigned to your account. You shall not attempt to access any function, warehouse, order, or record outside the scope of your assigned role.',
      },
    ],
  },
  {
    h: '3. Credentials & Account Security',
    blocks: [
      {
        p: '3.1 Access requires the warehouse account credentials issued to you, together with a one-time password sent for verification. Credentials are issued to you individually.',
      },
      {
        p: '3.2 You shall not share, disclose, lend, or transfer your credentials or one-time password to any person, including a colleague, supervisor, or agency representative.',
      },
      {
        p: "3.3 You shall not operate the App using another person's credentials, nor permit any person to operate the App using yours.",
      },
      {
        p: "3.4 You are responsible for all activity recorded under your account. Every pick, putaway, inventory movement, reconciliation, and goods receipt you submit is attributed to you and forms part of Fixxly's inventory and audit records.",
      },
      {
        p: '3.5 You must notify your supervisor and Fixxly immediately at appsupport@fixxly.in if you know or suspect that your credentials have been compromised, or if you continue to have access after your engagement ends.',
      },
      {
        p: '3.6 You shall log out of the App at the end of each shift and on any shared or handover device.',
      },
    ],
  },
  {
    h: '4. Permitted Use',
    blocks: [
      {
        p: '4.1 You shall use the App solely to perform warehouse tasks assigned to you, and solely in the course of your engagement.',
      },
      {
        p: '4.2 Accuracy of records. You shall record quantities, batch numbers, expiry dates, item codes, bin and shelf locations, costs, damage reasons, rejection reasons, and resolution reasons accurately and truthfully, based on your actual physical observation of the goods.',
      },
      {
        p: '4.3 No falsification. You shall not knowingly enter false, estimated, guessed, or fabricated data. Specifically, you shall not confirm a pick, putaway, receipt, or count that you have not physically performed and verified; scan a barcode other than that of the item actually being handled; record a quantity you have not counted; declare an expiry date, batch number, or MRP you have not read from the goods or their packaging; or submit a photograph that does not depict the actual goods, invoice, or defect concerned. Falsification of inventory or goods-receipt records is a serious matter that may result in withdrawal of access, disciplinary action, termination of engagement, and civil or criminal liability.',
      },
      {
        p: "4.4 Working hours. The App may restrict access to designated operational hours for your site. You shall not attempt to circumvent this restriction, including by altering your device's date or time settings.",
      },
      { p: '4.5 Prohibited actions. You shall not:' },
      {
        ul: [
          'use the App for any purpose unrelated to your assigned duties;',
          'extract, copy, photograph, screenshot, export, or transmit any inventory data, order data, supplier data, pricing, cost, or MRP information from the App to any person or system not authorised to receive it;',
          'install the App on any device other than one you are authorised to use, or on a rooted, jailbroken, or otherwise compromised device;',
          'decompile, reverse-engineer, modify, tamper with, or attempt to bypass any authentication, authorisation, validation, or logging function of the App;',
          'use any automated tool, emulator, script, or modified client to interact with the App or its backend;',
          "attempt to access any development, diagnostic, or logging facility present in the App other than at the express direction of Fixxly's technical team.",
        ],
      },
    ],
  },
  {
    h: '5. Photographs',
    blocks: [
      {
        p: '5.1 Certain functions require you to capture photographs — for example, a supplier invoice, or items rejected on inspection. You shall capture only the goods, packaging, documents, or defects relevant to the task.',
      },
      {
        p: '5.2 You shall not capture any image of a person, of any personal document or identification, or of anything unrelated to the task. If a person appears incidentally in a required photograph, retake it.',
      },
      {
        p: "5.3 Photographs you capture through the App are uploaded to and stored in Fixxly's systems as part of the operational record and may be relied on for quality, supplier-dispute, audit, and compliance purposes.",
      },
      {
        p: "5.4 You shall not use the App's camera function for any personal purpose.",
      },
    ],
  },
  {
    h: '6. Confidentiality',
    blocks: [
      {
        p: '6.1 All information you access through the App — including inventory levels, bin and shelf layouts, order details, customer delivery references, supplier identities, purchase order details, costs, MRPs, freight rates, and discrepancy records — is confidential information of Fixxly or its suppliers.',
      },
      {
        p: '6.2 You shall keep such information confidential, use it only to perform your assigned duties, and not disclose it to any third party during or after your engagement.',
      },
      {
        p: '6.3 This obligation is in addition to, and does not replace, any confidentiality or non-disclosure obligation in your employment contract, engagement letter, or agency agreement.',
      },
      {
        p: '6.4 These obligations survive the end of your engagement and the termination of these Terms.',
      },
    ],
  },
  {
    h: '7. Device, Data, and Connectivity',
    blocks: [
      {
        p: '7.1 Where the App is used on a device provided by Fixxly or a warehouse partner, that device remains the property of its provider and must be returned on request or at the end of your engagement.',
      },
      {
        p: '7.2 Where you are permitted to use a personal device, you consent to the App being installed on it and acknowledge that the App will transmit operational records, notifications, and diagnostic information as described in the Fixxly Picker Workforce Privacy Notice. You remain responsible for the security of your device, including maintaining a screen lock.',
      },
      {
        p: '7.3 Fixxly is not responsible for mobile data charges, battery consumption, or device wear arising from your use of the App.',
      },
    ],
  },
  {
    h: '8. Monitoring & Audit',
    blocks: [
      {
        p: '8.1 You acknowledge that use of the App is logged. Actions recorded include the identity of the account performing each action, the date and time, the warehouse or bin location concerned, the items and quantities involved, and any photograph or reason code submitted.',
      },
      {
        p: '8.2 These logs are operational and audit records. Fixxly and its authorised operating partners may review them for inventory accuracy, stock-loss investigation, quality management, supplier disputes, performance management, statutory and audit compliance, and investigation of suspected misuse or falsification.',
      },
      {
        p: '8.3 This monitoring is limited to your activity within the App. The App does not track your geographic location, does not access your personal files, photos, contacts, messages, or call logs, and does not monitor your use of any other application on your device.',
      },
    ],
  },
  {
    h: '9. Availability & No Warranty',
    blocks: [
      {
        p: '9.1 The App is provided on an "as is" and "as available" basis. Fixxly does not warrant that it will be uninterrupted, error-free, or free from defect.',
      },
      {
        p: '9.2 The App may display cached or previously synchronised data. Where displayed data conflicts with the physical state of the goods in front of you, the physical goods prevail — record what you actually observe and escalate the discrepancy to your supervisor.',
      },
      {
        p: '9.3 Suggested bin locations, item details, MRPs, and freshness indications are system suggestions, not instructions to disregard your own physical verification.',
      },
      {
        p: '9.4 Fixxly may modify, suspend, or discontinue the App or any function at any time.',
      },
    ],
  },
  {
    h: '10. Consequences of Breach',
    blocks: [
      {
        p: '10.1 Fixxly may suspend or withdraw your access at any time, with or without notice, where it reasonably suspects a breach of these Terms.',
      },
      {
        p: '10.2 Breach may additionally result in disciplinary action under your employment or engagement terms, referral to your employing agency, termination of engagement, and civil or criminal proceedings.',
      },
      {
        p: '10.3 Nothing in these Terms limits any remedy available to Fixxly under your employment contract, engagement agreement, or applicable law.',
      },
    ],
  },
  {
    h: '11. Intellectual Property',
    blocks: [
      {
        p: '11.1 The App, including its software, source code, interface, design, and all content, is the exclusive property of Fixxly or its licensors.',
      },
      {
        p: '11.2 You are granted a limited, revocable, non-exclusive, non-transferable licence to use the App solely as an Authorised User for the duration of your authorisation. No other right is granted.',
      },
      {
        p: '11.3 You shall not copy, distribute, sublicense, or create derivative works from the App.',
      },
    ],
  },
  {
    h: '12. Limitation of Liability',
    blocks: [
      {
        p: 'To the maximum extent permitted by applicable law, Fixxly shall not be liable to you for any indirect, incidental, consequential, or punitive loss arising from your use of or inability to use the App. Nothing in these Terms limits liability that cannot be limited under applicable Indian law, or affects any right you have under applicable labour and employment legislation.',
      },
    ],
  },
  {
    h: '13. Governing Law & Jurisdiction',
    blocks: [
      {
        p: 'These Terms are governed by the laws of India. Courts at Bengaluru, Karnataka have exclusive jurisdiction, without prejudice to any statutory forum available to you under applicable labour legislation.',
      },
    ],
  },
  {
    h: '14. Contact',
    blocks: [
      {
        p: 'Questions about these Terms, access issues, or suspected misuse: appsupport@fixxly.in, +91-9740833777, Fixxly Private Limited, 4th Floor, Central Mall, 2nd Phase, JP Nagar, Bengaluru, Karnataka – 560041.',
      },
    ],
  },
  {
    h: '15. Changes',
    blocks: [
      {
        p: 'We may update these Terms. Material changes will be notified in-App or through your supervisor. Continued use after notification constitutes acceptance.',
      },
    ],
  },
]

export const contact = {
  company: 'Fixxly Private Limited',
  address: '4th Floor, Central Mall, 2nd Phase, JP Nagar, Bengaluru, Karnataka, 560041',
  email: 'appsupport@fixxly.in',
  website: 'https://www.fixxly.in',
}
