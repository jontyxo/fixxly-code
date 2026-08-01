// Block types: h (section heading), sub (sub-heading), p (paragraph),
// ul (bullet list).
export const intro = [
  { p: 'Fixxly Picker Android application | Package: com.fixxly.pickerapp' },
  { p: 'Last Updated: 31 July, 2026' },
  { p: 'Applies to: Fixxly Picker Android application, package com.fixxly.pickerapp' },
]

export const sections = [
  {
    h: '1. Purpose & Scope',
    blocks: [
      {
        p: 'This Notice explains how Fixxly Private Limited ("Fixxly", "we", "us") handles personal data of authorised users of the Fixxly Picker application (the "App") — our warehouse and fulfilment personnel. It should be read with the Fixxly Picker Authorised User Terms and with any privacy notice provided to you under your employment or engagement.',
      },
      {
        p: 'This is a workforce application, not a consumer one. This Notice does not apply to customers of Fixxly.',
      },
      {
        p: 'Legal basis. Most processing described here is carried out for purposes connected with your employment or engagement, and to safeguard Fixxly from loss and liability. Under Section 7(i) of the Digital Personal Data Protection Act, 2023 ("DPDPA"), such processing is a legitimate use and does not depend on your consent. Where we do rely on consent — device notification permission and camera access, both requested at the operating-system level — you may decline or revoke it in your device settings, though doing so will prevent you from performing tasks that require those functions.',
      },
    ],
  },
  {
    h: '2. Personal Data We Process',
    blocks: [
      {
        p: '(a) Identity & account data. The name and email address associated with your warehouse account, the account identifier itself, your mobile number where used for one-time password verification, and the role and warehouse, store, or site assigned to you.',
      },
      {
        p: '(b) Authentication data. Sign-in and sign-out events, one-time password verification events, session and refresh tokens, and failed sign-in attempts. Your password is handled by our authentication provider and is not visible to us in readable form.',
      },
      {
        p: '(c) Activity and productivity records. Every operational action you perform in the App, attributed to your account and timestamped. This includes picks recorded and delivery notes submitted; putaway confirmations; inventory movements between bin locations; stock counts and reconciliations, including discrepancies identified and how they were resolved; goods receipts and goods receipt notes created, including gate-entry time; barcodes scanned; and reason codes you select for damage, rejection, or resolution.',
      },
      {
        p: 'Because each action is attributed to you and timestamped, these records inherently reveal information about your work — including task volumes, timings, and error or discrepancy rates. They may be used for performance management as described in Section 3.',
      },
      {
        p: "(d) Photographs you capture. Images of supplier invoices, of items rejected on inspection, and of products, captured through the App's camera or selected from your device's photo picker, and uploaded to our systems. These are intended to depict goods, packaging, and documents only. We do not use the App's camera for facial recognition, identity verification, biometric processing, or attendance monitoring of any kind.",
      },
      {
        p: '(e) Device and technical data. Device model, operating system version, app version and build, network connection state, IP address, a Firebase Cloud Messaging registration token used to deliver notifications to your device, crash reports and stack traces, and app usage and performance analytics collected through Firebase Analytics and Firebase Crashlytics.',
      },
      {
        p: '(f) Support communications. Records of issues you report and our responses.',
      },
    ],
  },
  {
    h: '3. Purposes of Processing',
    blocks: [
      {
        p: 'The purposes for which we process your personal data, and the legal basis for each under the DPDPA, are:',
      },
      {
        ul: [
          'Authenticating you and enforcing role- and warehouse-based access — Employment purposes; safeguarding against loss (s.7(i)).',
          'Enabling you to perform assigned warehouse tasks — Employment purposes (s.7(i)).',
          'Maintaining accurate inventory, stock, and goods-receipt records — Employment purposes; legal obligation (s.7(i), s.7(b)).',
          'Audit trail and attribution of operational actions — Safeguarding against loss; legal obligation.',
          'Investigating stock loss, shrinkage, discrepancy, or suspected falsification — Safeguarding against loss (s.7(i)).',
          'Quality management and supplier disputes (including invoice and rejection photographs) — Employment purposes; legitimate business need.',
          'Performance management, workload allocation, and shift planning — Employment purposes (s.7(i)).',
          'Statutory, tax, and audit compliance — Legal obligation (s.7(b)).',
          'Delivering operational notifications, announcements, and task alerts — Employment purposes; device permission consent.',
          'Diagnosing crashes and improving app reliability — Legitimate business need.',
          'Information security and prevention of unauthorised access — Safeguarding against loss.',
        ],
      },
      {
        p: 'We do not use your personal data for advertising, marketing, or profiling unrelated to your role. We do not sell it.',
      },
    ],
  },
  {
    h: '4. What We Do Not Collect',
    blocks: [
      {
        p: 'We want to be explicit, because a warehouse app can reasonably raise these concerns:',
      },
      {
        ul: [
          'We do not collect your geographic location. The App requests no location permission and cannot access your device\'s GPS, either while in use or in the background. Where the App refers to a "location", it means a warehouse bin, shelf, or storage position — never your physical whereabouts.',
          "We do not access your personal photos or files. Where you attach an image, you select it through your device's system photo picker, which discloses only the specific image you choose.",
          'We do not access your contacts, SMS messages, call logs, calendar, or microphone.',
          'We do not collect biometric data, and we do not use the camera for facial recognition or attendance.',
          'We do not monitor your use of other applications on your device, or your activity outside the App.',
          'We do not process payment or financial account data. The App handles no payments.',
        ],
      },
    ],
  },
  {
    h: '5. Sharing & Disclosure',
    blocks: [
      { p: 'We share your personal data only as necessary, with:' },
      {
        ul: [
          'Fixxly personnel with a legitimate operational need — warehouse management, inventory control, quality, finance, audit, and technical support;',
          'Warehouse or fulfilment partners, and staffing agencies, where you are engaged through them, limited to what is necessary for supervision, performance management, payroll or billing verification, and investigation of discrepancies;',
          'Google LLC / Firebase, which provides authentication, push notification delivery, crash reporting, and analytics infrastructure, as our processor;',
          'Cloud hosting and infrastructure providers hosting our inventory and order systems;',
          'Suppliers, limited to invoice and rejection photographs and associated goods-receipt details where necessary to resolve a supply or quality dispute — we do not disclose your name to a supplier unless necessary for the dispute;',
          'Auditors, tax advisors, and legal counsel, where required for statutory compliance or legal advice;',
          'Law enforcement, courts, or regulators, where required by law or valid legal process, or to establish, exercise, or defend a legal claim;',
          'A successor entity, in a merger, acquisition, or restructuring.',
        ],
      },
      {
        p: 'Some of these providers may process data on infrastructure located outside India. Where that occurs, we do so in accordance with the DPDPA and any restrictions notified by the Central Government.',
      },
    ],
  },
  {
    h: '6. Retention',
    blocks: [
      {
        p: 'Operational, inventory, and goods-receipt records — including your attribution to them — are retained as business and financial records for the period required under applicable tax, company, and audit law, and for as long as needed to establish, exercise, or defend a legal claim. These records cannot be deleted at your request, because they are financial and inventory records of the Company rather than data held solely about you.',
      },
      {
        p: 'Account and authentication data is retained for the duration of your engagement and for a reasonable period afterwards for audit and security purposes. Your device notification token is deleted when you sign out. Crash and analytics data is retained on the retention schedule of the relevant Firebase service.',
      },
    ],
  },
  {
    h: '7. Security',
    blocks: [
      {
        p: 'We protect your data using encryption in transit, role-based access controls, individual credentials with one-time password verification, session expiry and token refresh, and audit logging of access. Access to activity records is limited to personnel with a legitimate need.',
      },
    ],
  },
  {
    h: '8. Your Rights',
    blocks: [
      {
        p: 'Under the DPDPA you have the right to obtain a summary of the personal data we process about you and the processing activities undertaken; to seek correction of inaccurate or incomplete personal data, and completion or updating where appropriate; to seek erasure, where we are not required to retain the data by law or for a legal claim; to nominate another person to exercise your rights in the event of your death or incapacity; and to a readily available grievance-redressal mechanism.',
      },
      {
        p: 'Practical limits, stated honestly. You cannot require erasure of operational, inventory, or goods-receipt records attributed to you — these are the Company\'s financial and audit records and we are required to keep them. If you believe a record attributed to you is factually wrong, raise it as a correction request with your supervisor or our Grievance Officer; it will be investigated and, where substantiated, corrected with the correction itself logged.',
      },
      {
        p: 'To exercise a right, contact our Grievance Officer (Section 10).',
      },
    ],
  },
  {
    h: '9. Notifications',
    blocks: [
      {
        p: 'The App sends operational notifications — task assignments, announcements, and alerts. On Android 13 and above, your device will ask for notification permission. You may decline or later revoke it in your device settings; if you do, you will not receive task alerts, which may affect your ability to perform your role. Notifications are configured to conceal their content on the lock screen.',
      },
    ],
  },
  {
    h: '10. Grievance Officer',
    blocks: [
      {
        ul: [
          'Name: Sarthak Patnaik',
          'Designation: Grievance Officer / Data Protection Contact',
          'Address: 4th Floor, Central Mall, 2nd Phase, JP Nagar, Bengaluru, Karnataka – 560041',
          'Email: appsupport@fixxly.in',
          'Phone: +91-9740833777',
          'Response timeline: Acknowledgement within 24 hours; resolution within 7 days.',
        ],
      },
      {
        p: 'If unsatisfied with our resolution, you may complain to the Data Protection Board of India once it is fully operative. Nothing in this Notice limits any right or forum available to you under applicable labour legislation.',
      },
    ],
  },
  {
    h: '11. Account Deletion',
    blocks: [
      {
        p: 'If you wish to delete your Fixxly account and associated personal information, please contact our support team at care@fixxly.in.',
      },
    ],
  },
  {
    h: '12. Changes',
    blocks: [
      {
        p: 'We will update this Notice when our processing changes — in particular before introducing any new device permission, any location-based function, or any new category of monitoring. Material changes will be notified in-App or through your supervisor before taking effect.',
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
