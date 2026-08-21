import { SITE } from '../config.js'
import '../styles/Legalpage.css'

export default function PrivacyPolicy() {
  return (
    <section className="legal-page">
      <div className="container legal-page__inner">

        <a href="/" className="legal-page__back">← Back to Home</a>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: 21 August 2026</p>

        <p className="legal-page__intro">
          Bhadri's Academy ("we", "us", "our") operates a tuition and academic
          support service in Bengaluru for students from Pre-Nursery to Class 10.
          This Privacy Policy explains what information we collect when you visit
          our website or enquire about our programmes, how we use it, and the
          choices you have.
        </p>

        <h2>1. Information We Collect</h2>
        <p>When you fill out our demo booking or enquiry forms, we collect:</p>
        <ul>
          <li>Student's name and grade level</li>
          <li>Parent or guardian's name</li>
          <li>Contact number</li>
          <li>Academic board (State Board, CBSE, ICSE, IB, IGCSE)</li>
          <li>Any additional message or educational goals you share with us</li>
        </ul>
        <p>
          We do not collect payment details, government ID numbers, or any
          sensitive personal data through this website.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to your enquiry and schedule a free demo class</li>
          <li>To understand your child's academic needs and recommend the right programme</li>
          <li>To send you updates about admissions, batches, or scheduling via phone call or WhatsApp</li>
          <li>To improve our website and services</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>

        <h2>3. Children's Privacy</h2>
        <p>
          Our programmes serve students as young as Pre-Nursery age. All information
          about a student is submitted to us by a parent or guardian, not collected
          directly from a child. By submitting an enquiry, you confirm that you are
          the parent or legal guardian of the student and consent to us processing
          this information as described in this policy.
        </p>

        <h2>4. Communication via WhatsApp</h2>
        <p>
          We use WhatsApp to communicate with parents about demo classes, admissions,
          and general enquiries, using the contact number you provide. Messages sent
          through WhatsApp are subject to WhatsApp's own privacy policy in addition
          to this one.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Our website may use cookies or similar technologies to remember your
          preferences and understand how visitors use our site. You can disable
          cookies through your browser settings; this may affect some site
          functionality.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>We use trusted third-party services to run parts of our website, including:</p>
        <ul>
          <li>Cloudinary, for hosting images and video shown on our site</li>
          <li>Hosting and infrastructure providers to run and serve the website</li>
        </ul>
        <p>
          These providers may process technical data (such as IP address or device
          information) as part of delivering their service to us, under their own
          privacy policies.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain enquiry and admissions information for as long as necessary to
          respond to your enquiry, manage an ongoing enrolment, or as required by
          applicable law. You may request that we delete your information at any
          time (see Section 8).
        </p>

        <h2>8. Your Rights</h2>
        <p>You may contact us at any time to:</p>
        <ul>
          <li>Ask what information we hold about you or your child</li>
          <li>Correct inaccurate information</li>
          <li>Request that we delete your information</li>
          <li>Withdraw consent for future communication</li>
        </ul>

        <h2>9. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect the
          information you share with us from unauthorised access, loss, or misuse.
          However, no method of transmission over the internet is completely secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in
          our practices or for legal reasons. The "Last updated" date at the top of
          this page will reflect the most recent revision.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your
          information, please reach out:
        </p>
        <ul className="legal-page__contact">
          <li>Email: {SITE.email}</li>
          <li>Phone / WhatsApp: {SITE.phoneDisplay}</li>
          {SITE.address.map((line) => <li key={line}>{line}</li>)}
        </ul>

      </div>
    </section>
  )
}