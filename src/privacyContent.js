// Block types: h (section heading), sub (sub-heading), p (paragraph),
// ul (bullet list), table (head + rows), contact (name + email link).
export const intro = [
  { p: 'Last Updated: 17-08-2026' },
]

export const sections = [
  {
    h: '1. Introduction & Consent',
    blocks: [
      {
        p: 'Fixxly Private Limited ("Company", "Fixxly", "we", "us", "our") is committed to protecting the privacy of individuals who access or use our mobile application and website (together, the "Platform"). The term "you" or "your" refer to the users of this Platform. This Privacy Policy ("Policy") explains what personal information we collect, why we collect it, how we use and protect it, and the rights available to you as a "Data Principal" under the Digital Personal Data Protection Act, 2023 ("DPDPA").',
      },
      {
        p: "Separately, Velobrix Retail Private Limited (\"Velobrix\"), an independent Indian company registered under GSTIN 29AAMCV4271F1ZY, having its registered office at Bay 4, 4th Floor, Nos. 45/1 and 45/2, Mantri Junction, 45th Cross, JP Nagar Phase 2, Bengaluru, Bengaluru Urban, Karnataka 560078, is the seller of record for products purchased through the Platform and receives certain personal information from us in that capacity, as described in Section 4 below. This Policy governs Fixxly's collection and processing of your personal information as the Platform operator; Velobrix's own handling of information it receives is subject to Velobrix's obligations under applicable law.",
      },
      {
        p: 'This Policy is an electronic record under the Information Technology Act, 2000 ("IT Act") and does not require any physical or digital signature. It should be read together with our Terms of Use. Capitalized terms not defined here have the meaning given in the Terms of Use.',
      },
      {
        p: 'By accessing or using the Platform, registering an account, or providing your information to us, you consent to the collection, transfer, use, storage, sharing, and disclosure of your personal information as described in this Policy. If you do not agree with this Policy, please do not use or access the Platform. Where we rely on your consent for a specific processing activity (e.g., sending promotional communications, background location tracking), we will seek that consent separately and specifically, in line with DPDPA requirements for clear, informed, and purpose-specific consent.',
      },
      {
        p: 'If you are providing personal information about another individual (e.g., a colleague, or a recipient at your delivery site), you confirm that you have their permission to share such information with us for the purposes described in this Policy.',
      },
    ],
  },
  {
    h: '2. Information We Collect',
    blocks: [
      {
        p: 'We collect only as much personal information as is reasonably necessary for the purposes described in this Policy ("data minimization"). This may include:',
      },
      {
        ul: [
          'Personal Information: Name, mobile number, email address, business/trade name, and profile photo (optional); government-issued identification or KYC details, where required for onboarding or fraud checks; GST registration number, where you access GST-linked features or prompts.',
          'Transactional Data: Order history, product preferences, delivery addresses, payment method (we do not store full card numbers — these are processed by our PCI-DSS compliant payment partners), invoices, and communications with customer support.',
          'Precise & Background Location Data: With your permission, we collect precise GPS location to determine Velobrix-to-site delivery routing, show real-time order tracking, and estimate delivery time. Where you enable background location access, we may continue to receive location updates while the app is not in active use, solely to improve dispatch accuracy and delivery estimated time of arrival ("ETA") for an active order. Background tracking is not used outside the context of an active or recent order, and you can disable it at any time from your device settings (see Section 7).',
          'Device & Usage Data: Device model, operating system, IP address, browser type, app version, crash logs, and general usage patterns (pages/screens viewed, session duration).',
          'Cookies & Similar Technologies: On our website, we use cookies and similar tracking technologies as described in Section 8.',
        ],
      },
      {
        p: 'If you choose not to provide certain information (e.g., precise location or KYC details), we may not be able to complete your registration or fulfil certain orders.',
      },
    ],
  },
  {
    h: '3. Purpose of Collection (Use of Data)',
    blocks: [
      { p: 'We use the information collected for the following purposes:' },
      {
        table: {
          head: ['Purpose', 'Examples'],
          rows: [
            [
              'Identity & Account Verification',
              'Confirming your mobile number via OTP, verifying KYC/business details through GST database verification loops.',
            ],
            [
              'Service Fulfilment',
              'Processing orders, routing coordinates to Velobrix, real-time tracking, delivery confirmation.',
            ],
            [
              'Communication & Notifications',
              'Order updates, delivery ETAs, service alerts, responses to support queries.',
            ],
            [
              'Payments & Invoicing',
              'Processing payments, generating GST-compliant business or consumer retail invoices, tax compliance.',
            ],
            [
              'Fraud Prevention & Security',
              'Detecting suspicious activity, preventing unauthorized account access, investigating policy violations.',
            ],
            [
              'Platform Improvement',
              'Analytics, diagnosing technical issues, improving dispatch efficiency.',
            ],
            [
              'Marketing (opt-in only)',
              'Sending offers, new-category launches, and promotions — only where you have consented.',
            ],
            [
              'Legal Compliance',
              'Responding to lawful requests from courts, regulators, or law enforcement.',
            ],
          ],
        },
      },
      {
        p: 'We will not use your personal information for a purpose materially different from those stated above without seeking your fresh consent, in line with the DPDPA purpose-limitation principle.',
      },
    ],
  },
  {
    h: '4. Disclosure & Sharing',
    blocks: [
      { p: 'We may share your information, only to the extent necessary, with:' },
      {
        ul: [
          'Group companies & affiliates, for internal administration and service improvement, subject to this Policy;',
          'Velobrix and Logistics Partners, limited to the details necessary to fulfil your order (name, contact number, curbside or site delivery address, order details), as Velobrix is the seller of record for your purchase;',
          'Our payment aggregator (a Reserve Bank of India authorised entity engaged by Velobrix from time to time), to process payments and refunds securely to and from Velobrix, the beneficiary of such payments;',
          'Third-party service providers, such as cloud hosting, validation vendors (GSTIN API validation loops), analytics, SMS/WhatsApp/notification providers, and customer support tools, who are contractually bound to use your information only for the purpose we specify and to maintain confidentiality;',
          'Law enforcement or government authorities, where required by law, a valid legal process, or to protect the rights, safety, or property of Fixxly, our Users, or the public;',
          'Professional advisors (auditors, legal counsel) as needed for legitimate business purposes;',
          'A successor entity, in the event of a merger, acquisition, or restructuring, subject to that entity honouring this Policy.',
        ],
      },
      {
        p: 'We do not sell your personal information to third parties for their independent marketing use. Your personal information may be stored, processed, or accessed from servers located outside India. In accordance with Section 16 of the DPDPA, we may transfer personal information outside India, except to countries or territories restricted by the Central Government by notification.',
      },
    ],
  },
  {
    h: '5. Data Retention & Deletion',
    blocks: [
      {
        p: 'We retain your personal information only for as long as reasonably necessary to fulfil the purposes described in this Policy, or as required to comply with applicable law (including tax and accounting record-keeping requirements), whichever is longer.',
      },
      {
        p: 'Right to Erasure: In line with the DPDPA, you may request deletion of your personal information at any time by writing to our Grievance Officer (Section 10) or through the "Delete my account" option in the app, where available. We will act on your request unless we are required to retain certain data:',
      },
      {
        ul: [
          'to complete a transaction already in progress;',
          'to comply with a legal or regulatory obligation (e.g., invoicing/tax records);',
          'for the establishment, exercise, or defence of a legal claim.',
        ],
      },
      {
        p: 'Upon account deletion, we will remove or anonymize your personal information within the timelines prescribed under applicable law, except for the retained categories described above.',
      },
    ],
  },
  {
    h: '6. Information Security',
    blocks: [
      {
        p: 'We implement reasonable managerial, technical, operational, and electronic security safeguards appropriate to the sensitivity of the information we hold, including encryption in transit, access controls, and regular security reviews, in line with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.',
      },
      {
        p: 'No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security. In the unlikely event of a data breach that affects you, we will notify you and the relevant authorities as required under applicable law.',
      },
    ],
  },
  {
    h: '7. Right to Withdraw Consent & Statutory Data Rights',
    blocks: [
      {
        p: 'You may withdraw your consent to any processing activity that relies on consent (such as background location tracking or marketing communications) at any time. Withdrawal is configured to be as easy as giving consent.',
      },
      {
        ul: [
          'Direct Controls: You can disable location/notification permissions from your device settings, or opt out of promotional messages via the link/option provided in the communication, or by writing to us.',
          'General Withdrawal: You can request withdrawal of consent generally by contacting our Grievance Officer (Section 10) on a standard Business Day. Please note that withdrawing consent for certain data (e.g., precise location) may limit or disable core features such as live order tracking or delivery dispatch. Withdrawal will not affect the lawfulness of processing carried out before such withdrawal, and we may continue to retain and use information as permitted under Section 5 (Data Retention) or as required by law.',
          'Consent Managers under DPDPA: In accordance with the DPDPA, you have the statutory right to give, manage, review, or completely withdraw your consent through an independently registered "Consent Manager". Fixxly is deploying the technical framework and APIs needed to integrate with authorized Consent Manager platforms as they become operationalized by the Data Protection Board of India (DPBI). Until Consent Manager platforms are broadly available, you can manage your active data permissions via your Fixxly Account Privacy Dashboard or by issuing a direct request to our Grievance Officer.',
          'Right to Access: In accordance with Section 11 of the DPDPA, you have the right to obtain from us, on request to our Grievance Officer, a summary of the personal information we are processing about you and of the processing activities undertaken in respect of such information;',
          'Right to Nominate: You have the right to nominate, in a prescribed manner, any other individual to exercise your data principal rights (including the right to access, correct, complete, or erase your digital personal data) on your behalf, in the event of your death or incapacity.',
        ],
      },
      {
        p: 'You may register, modify, or update your nominee details via the "Nomination and Authorization" form available within your profile settings or by contacting the Grievance Officer.',
      },
    ],
  },
  {
    h: '8. Cookies & Tracking Policy',
    blocks: [
      { p: 'Our website uses cookies, web beacons, and similar analytical tools to:' },
      {
        ul: [
          'Remember your preferences and login state;',
          'Understand usage patterns and improve site performance;',
          'Measure the effectiveness of promotional campaigns.',
        ],
      },
      {
        p: 'You can control or disable cookies through your browser settings. Disabling cookies may affect certain website functionality. We do not use cookies to collect sensitive personal data without your consent.',
      },
    ],
  },
  {
    h: '9. Minors Policy',
    blocks: [
      {
        p: 'The Platform is intended solely for use by individuals who are 18 years of age or older. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a minor, we will delete such information and, where applicable, deactivate the associated account promptly. If you believe a minor has provided us with personal information, please contact our Grievance Officer immediately.',
      },
    ],
  },
  {
    h: '10. Grievance Officer',
    blocks: [
      {
        p: 'In accordance with the IT Act, 2000, the Intermediary Guidelines, 2021, and the DPDPA, 2023, you may direct any questions, complaints, or requests concerning your personal information (including requests to access, correct, or erase your data, or to withdraw consent) to our Grievance Officer:',
      },
      {
        table: {
          head: ['Particular', 'Detail'],
          rows: [
            ['Name', 'Sarthak Patnaik'],
            ['Designation', 'Grievance Officer / Data Protection Contact'],
            ['Address', '4th floor, Central Mall. 2nd Phase, JP Nagar, Bengaluru, Karnataka - 560041'],
            ['Email', 'appsupport@fixxly.in'],
            ['Phone', '+91-9740833777'],
            [
              'Response Timeline',
              'We will acknowledge your request within 24 hours and resolve it within 7 days on Business Days.',
            ],
          ],
        },
      },
      {
        p: 'If you are not satisfied with our resolution, you may also have the right to file a complaint with the Data Protection Board of India, once fully operative under the DPDPA.',
      },
    ],
  },
  {
    h: '11. Changes to This Policy',
    blocks: [
      {
        p: 'We may update this Policy from time to time to reflect changes in our practices or applicable law. The updated Policy will be posted on the Platform with a revised "Last Updated" date, and your continued use of the Platform after such changes constitutes your consent and acceptance of the updated Policy. For material changes affecting how we use your personal information, we will make reasonable efforts to notify you directly (e.g., via in-app notice or email) before the change takes effect.',
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
