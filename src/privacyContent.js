// Block types: h (section heading), sub (sub-heading), p (paragraph),
// ul (bullet list), ol (numbered list), contact (name + email link).
export const intro = [
  { p: 'Last Updated: 1 August 2026' },
]

export const sections = [
  {
    h: '1. Introduction and Consent',
    blocks: [
      {
        p: 'Fixxly Private Limited ("Company", "Fixxly", "we", "us", "our") is committed to protecting the privacy of individuals who use our mobile application (the "App"). "You" or "your" refers to users of the App. This Privacy Policy ("Policy") explains what personal information we collect through the App, why we collect it, how we use and protect it, and the rights available to you as a "Data Principal" under the Digital Personal Data Protection Act, 2023 ("DPDPA").',
      },
      {
        p: 'This Policy is an electronic record under the Information Technology Act, 2000 ("IT Act") and does not require any physical or digital signature. It should be read together with our Terms of Use. Capitalised terms not defined here have the meaning given in the Terms of Use.',
      },
      {
        p: 'This Policy describes the App in its current form, which allows you to sign in, browse products, and save optional profile and site details.',
      },
      {
        p: 'By using the App or providing your information to us, you consent to the collection, use, storage, and disclosure of your personal information as described in this Policy. Where we rely on your consent for a specific processing activity (for example, sending promotional communications), we will seek that consent separately and specifically, in line with DPDPA requirements for clear, informed, and purpose-specific consent.',
      },
    ],
  },
  {
    h: '2. Information We Collect',
    blocks: [
      {
        p: 'We collect only as much personal information as is reasonably necessary for the purposes described in this Policy ("data minimisation"):',
      },
      {
        ul: [
          'Account information. Your mobile number, which we collect when you sign in using an OTP. Where you choose to provide them, we also collect your name, email address, profile photo, and trade or business name, and your GST registration number where you use GST-related features.',
          'Device and technical information. When the App communicates with our servers, we automatically receive limited technical information such as your device model, operating system version, App version, and IP address, which we use to operate and secure the App.',
        ],
      },
      {
        p: "What we do not collect in this version. The App does not access your device's precise GPS location, camera, or microphone, and it does not request or process any payment information (such as card, UPI, or bank details), because the App does not currently support ordering or payments. The App does not use third-party advertising or analytics tracking.",
      },
      {
        p: 'If you choose not to provide optional information, you can still browse the App, though some optional features may not be available.',
      },
    ],
  },
  {
    h: '3. How We Use Your Information',
    blocks: [
      { p: 'We use the information we collect for the following purposes:' },
      {
        ul: [
          'Account and sign-in. Verifying your mobile number via OTP and maintaining your signed-in session.',
          'Providing the App. Showing you relevant categories and products, and saving your profile.',
          'Support. Responding to your queries and requests.',
          'Security and fraud prevention. Detecting and preventing unauthorised access, misuse, and policy violations.',
          'Legal compliance. Responding to lawful requests from courts, regulators, or law enforcement, and meeting our legal obligations.',
          'Marketing (opt-in only). Sending you offers and updates, only where you have consented, and which you can opt out of at any time.',
        ],
      },
      {
        p: "We will not use your personal information for a purpose materially different from those stated above without seeking your fresh consent, in line with the DPDPA's purpose-limitation principle.",
      },
    ],
  },
  {
    h: '4. Disclosure and Sharing',
    blocks: [
      { p: 'We share your information only to the extent necessary, with:' },
      {
        ul: [
          'Cloud hosting and infrastructure providers that operate our servers and store data on our behalf, under confidentiality obligations;',
          'Professional advisors such as auditors and legal counsel, as needed for legitimate business purposes;',
          'Law enforcement or government authorities, where required by law, a valid legal process, or to protect the rights, safety, or property of Fixxly, our users, or the public;',
          'A successor entity, in the event of a merger, acquisition, or restructuring, subject to that entity honouring this Policy.',
        ],
      },
      {
        p: 'What we do not do. In this version of the App, we do not share your personal information with sellers, logistics or delivery partners, payment gateways, or advertising or analytics networks. We do not sell your personal information to any third party.',
      },
    ],
  },
  {
    h: '5. Data Retention and Deletion',
    blocks: [
      {
        p: '5.1 We retain your personal information only for as long as reasonably necessary to fulfil the purposes described in this Policy, or as required to comply with applicable law, whichever is longer.',
      },
      {
        p: '5.2 Right to erasure. In line with the DPDPA, you may request deletion of your personal information at any time by writing to our Grievance Officer (Section 9) or through the "Delete my account" option in the App, where available. We will act on your request unless we are required to retain certain data (a) to comply with a legal or regulatory obligation, or (b) for the establishment, exercise, or defence of a legal claim.',
      },
      {
        p: '5.3 Upon account deletion, we will remove or anonymise your personal information within the timelines prescribed under applicable law, except for the retained categories described above.',
      },
      {
        p: '5.4 Account deletion requests. To request deletion of your Fixxly account, please contact us at care@fixxly.in. We will process your request in accordance with this Section 5.',
      },
    ],
  },
  {
    h: '6. Information Security',
    blocks: [
      {
        p: 'We implement reasonable managerial, technical, operational, and physical security safeguards appropriate to the sensitivity of the information we hold, including encryption in transit, access controls, and periodic security reviews, in line with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.',
      },
      {
        p: 'No method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security. In the event of a data breach that affects you, we will notify you and the relevant authorities as required under applicable law.',
      },
    ],
  },
  {
    h: '7. Your Rights and Withdrawal of Consent',
    blocks: [
      {
        p: '7.1 Your rights. Subject to applicable law, you may request access to, correction of, or erasure of your personal information, and you may withdraw any consent you have given. Withdrawal is configured to be as easy as giving consent.',
      },
      {
        p: '7.2 Direct controls. You can opt out of promotional messages via the option provided in the communication or in the App, or by writing to us.',
      },
      {
        p: '7.3 Consent Managers under DPDPA. In accordance with the DPDPA, you have the right to give, manage, review, or withdraw your consent through an independently registered Consent Manager as such platforms become operational under the Data Protection Board of India. Until then, you can manage your permissions in the App or by contacting our Grievance Officer.',
      },
      {
        p: '7.4 Right to nominate. You have the right to nominate, in the prescribed manner, another individual to exercise your rights as a Data Principal on your behalf in the event of your death or incapacity.',
      },
      {
        p: 'Withdrawing consent for certain information may limit or disable some features. Withdrawal will not affect the lawfulness of processing carried out before such withdrawal.',
      },
    ],
  },
  {
    h: '8. Minors',
    blocks: [
      {
        p: 'The App is intended solely for use by individuals who are 18 years of age or older. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a minor, we will delete such information and, where applicable, deactivate the associated account promptly. If you believe a minor has provided us with personal information, please contact our Grievance Officer immediately.',
      },
    ],
  },
  {
    h: '9. Grievance Officer',
    blocks: [
      {
        p: 'In accordance with the IT Act, 2000, the Intermediary Guidelines, 2021, and the DPDPA, 2023, you may direct any question, complaint, or request concerning your personal information (including requests to access, correct, or erase your data, or to withdraw consent) to our Grievance Officer:',
      },
      {
        ul: [
          'Name: Sarthak Patnaik',
          'Designation: Grievance Officer / Data Protection Contact',
          'Address: 4th Floor, Central Mall, 2nd Phase, JP Nagar, Bengaluru, Karnataka, 560041',
          'Email: appsupport@fixxly.in',
          'Phone: +91-9740833777',
          'Response Timeline: We acknowledge your complaint within 24 hours and endeavour to resolve it within 7 days from receipt, on Business Days.',
        ],
      },
      {
        p: 'If you are not satisfied with our resolution, you may also have the right to file a complaint with the Data Protection Board of India, once fully operative under the DPDPA.',
      },
    ],
  },
  {
    h: '10. Changes to This Policy',
    blocks: [
      {
        p: 'We may update this Policy from time to time to reflect changes in our practices or applicable law. The updated Policy will be posted with a revised "Last Updated" date, and your continued use of the App after such changes constitutes your acceptance of the updated Policy. For material changes affecting how we use your personal information, we will make reasonable efforts to notify you directly (for example, via in-app notice) before the change takes effect.',
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
