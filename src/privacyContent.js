// Block types: h (section heading), sub (sub-heading), p (paragraph),
// ul (bullet list), ol (numbered list), contact (name + email link).
export const intro = [
  {
    p: 'FIXXLY PRIVATE LIMITED ("Fixxly", "Company", "we", "our", or "us") is committed to protecting your personal data in accordance with:',
  },
  {
    ul: [
      'The Information Technology Act, 2000',
      'The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011',
      'The Digital Personal Data Protection Act, 2023 ("DPDP Act")',
    ],
  },
  {
    p: 'By accessing the Fixxly mobile application, our website, our WhatsApp channel, or by placing an order through any of these interfaces, you agree to this Privacy Policy.',
  },
  {
    p: 'Fixxly is a B2B quick-commerce platform built exclusively for trade professionals in India — plumbers, electricians, carpenters, painters, tilers, and general contractors — delivering trade essentials to job sites in 30 minutes.',
  },
]

export const sections = [
  {
    h: '1. Role of the Company',
    blocks: [
      {
        p: 'Under the DPDP Act, Fixxly acts as a Data Fiduciary, meaning we determine the purpose and means of processing your personal data.',
      },
    ],
  },
  {
    h: '2. Personal Data We Collect',
    blocks: [
      {
        p: 'We collect only data necessary for lawful purposes tied to running the Fixxly service.',
      },
      { sub: 'A. Identity & Contact Data' },
      { ul: ['Full name', 'Mobile number (registered)', 'Trade / profession selected at onboarding'] },
      { sub: 'B. Business & Site Data' },
      {
        ul: [
          'Project or site details (site name, address, pincode, delivery instructions)',
          'Site contact details (contact name, additional phone numbers per site)',
          'GSTIN and billing address (if provided by the user for GST-compliant invoicing)',
        ],
      },
      { sub: 'C. Transaction Data' },
      {
        ul: [
          'Order history',
          'Payment transaction reference details (payments are processed through third-party payment gateways; we do not store card or UPI credentials)',
          'Refund information',
          'Fixxly Coins / wallet balance and redemption history',
        ],
      },
      { sub: 'D. Account Data' },
      { ul: ['User account identifier', 'Authentication tokens for the app and WhatsApp channel'] },
      { sub: 'E. Location Data' },
      {
        ul: [
          'Approximate and precise device location (with user permission), used for pinpointing job-site delivery and mapping the user to the nearest fulfilment hub',
        ],
      },
      { sub: 'F. Technical Data' },
      {
        ul: [
          'IP address',
          'Device information (model, OS version, app version)',
          'Browser type (for web access)',
          'Cookies and usage analytics',
          'Crash logs and diagnostic data',
        ],
      },
      { sub: 'G. Voice & Media Data (WhatsApp channel)' },
      {
        ul: [
          'Voice notes shared by the user for quick ordering are transcribed for the purpose of order placement',
          'Images or PDFs shared by the user (e.g. site photos, warranty documents) for support and order handling',
        ],
      },
      {
        p: 'Fixxly is intended for use by trade professionals aged 18 years and above. We do not intentionally collect data from individuals below 18 years of age.',
      },
    ],
  },
  {
    h: '3. Purpose of Processing (Lawful Use)',
    blocks: [
      { p: 'We process personal data only for:' },
      {
        ul: [
          'Order placement, fulfilment, and delivery to your job site',
          'Account and project management',
          'Customer support and grievance resolution',
          'Processing payments and refunds',
          'GST-compliant invoicing and tax compliance',
          'Wallet and cashback management',
          'Delivery routing and hub allocation',
          'Communicating order status updates, delivery ETAs, and shipment milestones (via SMS, WhatsApp, in-app notifications, email)',
          'Marketing communications (with your consent)',
          'Fraud detection and prevention',
          'Legal and regulatory compliance',
          'Improving user experience through analytics',
        ],
      },
      {
        p: 'Personal data will not be processed for purposes other than those stated above unless explicit consent is obtained from the user or where such processing is required under applicable law.',
      },
    ],
  },
  {
    h: '4. Consent (Core DPDP Requirement)',
    blocks: [
      { p: 'Consent under the DPDP Act must be:' },
      { ul: ['Free', 'Specific', 'Informed', 'Unconditional', 'Unambiguous', 'Given through clear affirmative action'] },
      {
        p: 'By clicking "I Agree", creating an account, placing an order, or initiating a conversation with Fixxly on WhatsApp, you provide consent for processing your data for the purposes specified above.',
      },
      { p: 'You have the right to:' },
      {
        ul: [
          'Withdraw consent at any time',
          'Request correction of your data',
          'Request erasure of your data',
          'Access information about how your data is processed',
        ],
      },
      { p: 'To exercise these rights, contact: appsupport@fixxly.in' },
      { p: 'Withdrawal of consent will not affect lawful processing done prior to withdrawal.' },
    ],
  },
  {
    h: '5. Data Principal Rights (DPDP Compliance)',
    blocks: [
      { p: 'Under the DPDP Act, you have the following rights:' },
      { sub: '1. Right to Access Information' },
      { p: 'You are entitled to:' },
      {
        ul: [
          'A summary of the data we hold about you',
          'A summary of the processing activities we carry out on your data',
          'The identities of any data processors with whom your data is shared',
        ],
      },
      { sub: '2. Right to Correction and Erasure' },
      {
        p: 'You may request correction of inaccurate or incomplete personal data, or request deletion of your personal data.',
      },
      { p: 'Process to exercise this right:' },
      {
        ul: [
          'Submit a Request: Email appsupport@fixxly.in with your name, registered mobile number, and a clear description of the data you want corrected or erased.',
          'Verification: We may verify your identity before processing the request.',
          'Processing: On successful verification, we will review and take appropriate action.',
          'Timeline: We will respond within 15 working days of receiving the request.',
          'Exceptions: Certain data may be retained where required under applicable law (tax records, audit trails, dispute-related records) or for legitimate business purposes.',
        ],
      },
      {
        p: 'In-app deletion: You can also initiate account deletion directly from the app via Account → Settings → Delete Account.',
      },
      { sub: '3. Right to Grievance Redressal' },
      {
        p: 'You have the right to raise grievances regarding the collection, use, or processing of your personal data.',
      },
      { p: 'Grievance Redressal Process:' },
      {
        ul: [
          'Filing: Submit your grievance via appsupport@fixxly.in or the in-app support form.',
          'Details: Include your name, registered contact, and a brief description of the issue.',
          'Acknowledgement: We will acknowledge within 3–5 working days.',
          'Resolution: We aim to resolve grievances within 15 working days from receipt.',
        ],
      },
      { sub: '4. Right to Nominate' },
      {
        p: 'You may nominate another individual to exercise your rights in the event of your death or incapacity. Requests are addressed within prescribed timelines.',
      },
    ],
  },
  {
    h: "6. Children's Data",
    blocks: [
      {
        p: 'Fixxly is a B2B platform intended for trade professionals aged 18 years and above. We do not knowingly process personal data of children (below 18 years). If discovered, such data will be deleted promptly. No behavioural tracking or targeted advertising is conducted for minors.',
      },
    ],
  },
  {
    h: '7. Data Security Safeguards',
    blocks: [
      { p: 'We implement reasonable technical and organisational safeguards, including:' },
      {
        ul: [
          'SSL / TLS encryption for all data in transit',
          'Secure integration with third-party payment gateways (Fixxly does not store card or UPI credentials)',
          'Access control and role-based permissions on internal systems',
          'Vendor confidentiality and data-processing agreements',
          'Periodic security audits and monitoring',
        ],
      },
      {
        p: 'In the event of a data breach, we will notify the Data Protection Board of India and affected users as required under the DPDP Act.',
      },
    ],
  },
  {
    h: '8. Data Retention',
    blocks: [
      { p: 'We retain personal data only as long as necessary for:' },
      {
        ul: [
          'Fulfilling active orders and delivering services',
          'Legal and regulatory compliance (GST, tax, audit, accounting — as required under Indian law)',
          'Dispute resolution and grievance handling',
        ],
      },
      {
        p: 'When data is no longer required, it is securely deleted or anonymised. Transactional records required by law (e.g. GST invoices, financial records) are retained for the periods prescribed by applicable statutes.',
      },
    ],
  },
  {
    h: '9. Disclosure of Data to Third Parties',
    blocks: [
      {
        p: 'To provide our services effectively, we may share limited personal data with trusted third-party service providers, including:',
      },
      {
        ul: [
          'Payment gateway providers — for processing online payments and refunds',
          'Logistics and delivery partners — for order fulfilment, dispatch, and last-mile delivery to your job site',
          'Cloud hosting and infrastructure providers — for hosting the Fixxly app and backend systems',
          'ERP and commerce platform providers — for order management, catalogue, and inventory operations',
          'Conversational AI / WhatsApp Business Solution Providers — for enabling ordering, tracking, and support on WhatsApp',
          'Search and recommendation service providers — for catalogue discovery',
          'Communication service providers — for SMS, WhatsApp, email, and push notifications',
          'Analytics providers — for measuring app performance and user experience',
          'Auditors, legal advisors, and regulatory authorities — where required by law',
        ],
      },
      {
        p: 'Sharing takes place only with your consent, or where it is necessary for the performance of a contract or compliance with legal obligations.',
      },
      {
        p: 'All third parties with whom personal data is shared are contractually obligated to maintain strict confidentiality, implement appropriate security measures, and process personal data only for the specified purpose in accordance with applicable data protection laws.',
      },
    ],
  },
  {
    h: '10. Cross-Border Data Transfers',
    blocks: [
      {
        p: 'Certain personal data may be processed outside India by our cloud service providers or third-party service partners. Such transfers will comply with the restrictions notified by the Government of India under the DPDP Act.',
      },
    ],
  },
  {
    h: '11. Non-Personally Identifiable Information',
    blocks: [
      {
        p: 'We may also collect aggregated information about the use of our service — such as the extent to which certain features are used, popular categories, average order values, and delivery patterns. Aggregated information is anonymous and statistical in nature, reflecting the scope of our user base and customer patterns. We use this information to better understand how Fixxly is used and to improve the user experience. This information is not used in a way that will personally identify you.',
      },
    ],
  },
  {
    h: '12. Cookies & Similar Technologies',
    blocks: [
      {
        p: 'We may use cookies, device identifiers, and similar technologies (on our website and app) to recognise you across sessions, understand traffic patterns, and personalise your experience. Cookies may collect information such as the domain and host from which you access the internet, your IP address, the date and time of access, and the source URL from which you were referred. We use this information to better understand our users and customise the service to your preferences.',
      },
      { p: 'You can manage cookie preferences through your device or browser settings.' },
    ],
  },
  {
    h: '13. Deletion of E-commerce Transaction Data',
    blocks: [
      {
        p: 'For users who have placed orders through Fixxly, certain transactional data (order history, invoices, GST records) may be retained for accounting, audit, and legal compliance purposes as required under Indian law. Any unnecessary personal information will be securely deleted upon request.',
      },
    ],
  },
  {
    h: '14. Confirmation of Data Deletion',
    blocks: [
      {
        p: 'Upon successful deletion of user data, Fixxly will provide confirmation via email or another agreed communication method (WhatsApp, in-app notification).',
      },
    ],
  },
  {
    h: '15. Data Backup and Deletion',
    blocks: [
      {
        p: 'We regularly back up our systems for security and disaster recovery. Deleted user data is removed from active systems, but may be retained in backup archives for a limited period. Backups are securely stored and will be overwritten or deleted in due course as per our retention policy.',
      },
    ],
  },
  {
    h: '16. Grievance Officer',
    blocks: [
      { p: 'In compliance with applicable law:' },
      {
        ul: [
          'Name: Sarthak Patnayak',
          'Designation: Founding Member',
          'Email: appsupport@fixxly.in',
          'Address: 4th floor, Central Mall, 2nd Phase, JP Nagar, Bengaluru, Karnataka - 560041',
        ],
      },
      { p: 'Complaints will be acknowledged within 36 hours and resolved within one month.' },
    ],
  },
  {
    h: '17. Changes to this Policy',
    blocks: [
      {
        p: 'Fixxly reserves the right to update or modify this Privacy Policy at any time. Users will be notified of material changes via the app, website, WhatsApp, email, or other communication channels. The "Last updated" date at the top of this policy indicates the most recent revision.',
      },
      {
        p: 'For any inquiries or concerns regarding your data or this policy, please contact appsupport@fixxly.in.',
      },
    ],
  },
]

export const contact = {
  company: 'Fixxly Private Limited',
  address: '4th floor, Central Mall, 2nd Phase, JP Nagar, Bengaluru, Karnataka - 560041',
  email: 'appsupport@fixxly.in',
  website: 'https://www.fixxly.in',
}
