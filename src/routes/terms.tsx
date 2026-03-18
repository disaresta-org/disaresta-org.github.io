import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#3C2970] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <Link to="/" className="mb-8 inline-block">
          <img src="/logo-header.png" alt="Disaresta" className="h-16" />
        </Link>

        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="italic text-white/60 mb-12">Last Updated: 3/17/2026</p>

        <Section title="1. Introduction">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the Disaresta, LLC mobile application and related services (collectively, the "App"). These Terms constitute a legally binding agreement between you and Disaresta, LLC ("we," "us," or "our"). By downloading, installing, accessing, or using our App, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </Section>

        <Section title="2. Definitions">
          <p>"User," "you," and "your" refer to the individual accessing or using the App.</p>
          <p>"Content" refers to any text, images, videos, audio, or other material that appears on or through the App.</p>
          <p>"User Content" refers to any Content that users submit, upload, or transmit to or through the App.</p>
          <p>"Intellectual Property Rights" means all patent rights, copyright rights, moral rights, rights of publicity, trademark rights, trade dress and service mark rights, goodwill, trade secret rights, and other intellectual property rights.</p>
        </Section>

        <Section title="3. Acceptance of Terms">
          <p>
            By downloading, installing, accessing, or using our App, you agree to be bound by these Terms and our <Link to="/privacy" className="text-white/80 hover:text-white underline">Privacy Policy</Link>, which is incorporated by reference. If you do not agree to these Terms, you may not download, install, access, or use our App.
          </p>
        </Section>

        <Section title="4. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms within the App or by other reasonable means. Your continued use of the App after any such changes constitutes your acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the App and uninstall it from your device.
          </p>
        </Section>

        <Section title="5. Eligibility">
          <p>
            To use our App, you must be at least 13 years old. If you are under 18 years old, you must have permission from your parent or legal guardian to use the App, and they must agree to these Terms on your behalf. By using the App, you represent and warrant that you meet these eligibility requirements.
          </p>
        </Section>

        <Section title="6. License to Use the App">
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App for your personal, non-commercial purposes on a mobile device that you own or control. This license does not include any right to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Modify, disassemble, decompile or reverse engineer the App</li>
            <li>Rent, lease, loan, sell, sublicense, distribute, transmit, or otherwise transfer the App</li>
            <li>Copy or store the App other than as allowed by these Terms or as specifically authorized under applicable mandatory laws</li>
            <li>Remove, circumvent, disable, damage or otherwise interfere with security-related features of the App</li>
            <li>Use the App in a way that violates applicable laws or regulations</li>
          </ul>
        </Section>

        <Section title="7. App Store Additional Terms">
          <p>
            Where the App is made available to you through an app store (such as Apple's App Store or Google Play), you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>These Terms are between you and Disaresta, LLC, not with the app store</li>
            <li>The app store has no obligation to furnish any maintenance and support services with respect to the App</li>
            <li>In the event of any failure of the App to conform to any applicable warranty, you may notify the app store, and the app store may refund the purchase price for the App (if applicable)</li>
            <li>To the maximum extent permitted by applicable law, the app store will have no other warranty obligation with respect to the App</li>
            <li>The app store is not responsible for addressing any claims you have or any claims of any third party relating to the App</li>
            <li>You must comply with the app store's terms of service when using the App</li>
          </ul>
        </Section>

        <Section title="8. User Accounts">
          <p>
            You may be required to create an account to access certain features of our App. You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Providing accurate, current, and complete information</li>
            <li>Maintaining the confidentiality of your password and account</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your account at our discretion if we believe you have violated these Terms or if we believe your account may pose a risk to our App or other users.
          </p>
        </Section>

        <Section title="9. In-App Purchases and Subscriptions">
          <p>
            The App may offer in-app purchases or subscription services. All purchases and subscriptions are subject to the following terms:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prices for in-app purchases and subscriptions are displayed in the App and are subject to change at any time</li>
            <li>Payment will be charged to your app store account at confirmation of purchase</li>
            <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
            <li>You can manage and cancel your subscriptions by going to your account settings in the app store</li>
            <li>No refunds will be provided for any unused portion of a subscription period</li>
          </ul>
        </Section>

        <Section title="10. User Content">
          <p>
            The App may allow you to submit User Content. You retain ownership of any User Content you submit, but you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such User Content in any media or distribution methods. This license authorizes us to make your User Content available to other users of the App or the public.
          </p>
          <p>
            You represent and warrant that you have all necessary rights to grant us this license and that your User Content does not violate any third-party rights or applicable laws.
          </p>
          <p>
            We reserve the right to remove any User Content at our discretion.
          </p>
        </Section>

        <Section title="11. Prohibited Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Violate any applicable law or regulation</li>
            <li>Infringe the rights of others, including intellectual property rights</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Interfere with the proper functioning of our App</li>
            <li>Attempt to breach any security or authentication measures</li>
            <li>Use our App for any illegal or unauthorized purpose</li>
            <li>Post or transmit malicious code or other harmful computer code</li>
            <li>Impersonate others or misrepresent your affiliation with any person or entity</li>
            <li>Use any device, software, or routine that interferes with the proper working of our App</li>
            <li>Attempt to gain unauthorized access to the App, other users' accounts, or computer systems or networks connected to the App</li>
          </ul>
        </Section>

        <Section title="12. Privacy and Permissions">
          <p>
            Our <Link to="/privacy" className="text-white/80 hover:text-white underline">Privacy Policy</Link> describes how we collect, use, and share information about you. By using the App, you consent to our collection and use of information as described in our Privacy Policy.
          </p>
          <p>
            The App may request certain permissions to access features on your device, such as camera, location, contacts, or storage. You can manage these permissions through your device settings. Denying certain permissions may limit the functionality of the App.
          </p>
        </Section>

        <Section title="13. Intellectual Property">
          <p>
            All content provided by Disaresta, LLC, including but not limited to the App design, text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Disaresta, LLC or its content suppliers and is protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Disaresta, LLC.
          </p>
        </Section>

        <Section title="14. DMCA Copyright Policy">
          <p>
            We respect the intellectual property rights of others and expect our users to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law. If you believe any materials accessible on or from our App infringe your copyright, you may request removal of those materials by submitting written notification to our copyright agent:
          </p>
          <p>
            Disaresta, LLC<br />
            Attn: Copyright Agent<br />
            2108 N ST, STE N<br />
            Sacramento, CA 95816<br />
            Email: <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a>
          </p>
        </Section>

        <Section title="15. Third-Party Links and Services">
          <p>
            Our App may contain links to third-party websites or services that are not owned or controlled by Disaresta, LLC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Disaresta, LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
        </Section>

        <Section title="16. Disclaimer of Warranties">
          <p className="uppercase">
            The App is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. Disaresta, LLC does not warrant that the App is accurate, complete, reliable, current, or error-free, or that the App will be uninterrupted, free of viruses or other harmful components, or that any defects will be corrected. Disaresta, LLC disclaims all liability for any errors, omissions, or inaccuracies in the content provided through the App.
          </p>
        </Section>

        <Section title="17. Limitation of Liability">
          <p className="uppercase">
            To the maximum extent permitted by applicable law, in no event shall Disaresta, LLC be liable for any special, incidental, indirect, or consequential damages whatsoever. Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation may not apply to you.
          </p>
        </Section>

        <Section title="18. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Disaresta, LLC, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms, your User Content, or your use of the App. Disaresta, LLC reserves the right to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with Disaresta, LLC in asserting any available defenses.
          </p>
        </Section>

        <Section title="19. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </Section>

        <Section title="20. Dispute Resolution">
          <p>
            Any disputes arising from these Terms will be resolved through binding arbitration in accordance with the American Arbitration Association rules. The arbitration shall take place in Sacramento, California. You agree to waive any right to a jury trial.
          </p>
        </Section>

        <Section title="21. Entire Agreement">
          <p>
            These Terms, including our Privacy Policy, constitute the entire agreement between you and Disaresta, LLC regarding your use of our App and supersede any prior agreements between you and Disaresta, LLC relating to your use of our App.
          </p>
        </Section>

        <Section title="22. Waiver and Severability">
          <p>
            The failure of Disaresta, LLC to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
          </p>
        </Section>

        <Section title="23. Termination">
          <p>
            We reserve the right to suspend or terminate your access to our App at our sole discretion, with or without notice, for conduct that we believe violates these Terms or is harmful to other users of our App, us, or third parties, or for any other reason. Upon termination, your license to use our App will immediately cease.
          </p>
        </Section>

        <Section title="24. Contact Information">
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>By email: <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a></li>
            <li>By phone: +1-650-226-9008</li>
            <li>By mail: 2108 N ST, STE N, Sacramento, CA 95816</li>
          </ul>
        </Section>

        <h2 className="text-3xl font-bold mt-16 mb-8 pt-8 border-t border-white/20">Regulatory Compliance</h2>

        <Section title="General Data Protection Regulation (GDPR) Compliance">
          <p className="italic text-white/60 mb-4">The following provisions apply to users protected by European Union regulations.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Data Collection Under GDPR</h3>
          <p>
            In compliance with the General Data Protection Regulation (GDPR), we collect and process your personal data only when we have a lawful basis to do so. This includes processing based on your consent, to fulfill a contract with you, to comply with a legal obligation, to protect your vital interests, to perform a task in the public interest, or for our legitimate interests where those don't override your fundamental rights and freedoms.
          </p>
          <p>
            We collect only the minimum data necessary for the purposes specified in this policy. When we request your consent to process your data, you have the right to withdraw that consent at any time.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Data Processing Under GDPR</h3>
          <p>We process personal data in accordance with the principles outlined in the GDPR:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lawfulness, fairness, and transparency</strong>: We process data lawfully, fairly, and in a transparent manner.</li>
            <li><strong>Purpose limitation</strong>: We collect data for specified, explicit, and legitimate purposes and do not process it in a manner incompatible with those purposes.</li>
            <li><strong>Data minimization</strong>: We limit data collection to what is necessary for the purposes for which it is processed.</li>
            <li><strong>Accuracy</strong>: We take reasonable steps to ensure personal data is accurate and kept up to date.</li>
            <li><strong>Storage limitation</strong>: We keep data in a form that permits identification only as long as necessary for the purposes of processing.</li>
            <li><strong>Integrity and confidentiality</strong>: We process data in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage.</li>
          </ul>
          <p>
            We maintain records of our data processing activities and conduct data protection impact assessments where required by law.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Your Rights Under GDPR</h3>
          <p>
            If you are located in the European Economic Area (EEA), you have the following rights with respect to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to access</strong>: You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification</strong>: You can request that we correct inaccurate or incomplete data about you.</li>
            <li><strong>Right to erasure</strong>: You can request that we delete your personal data in certain circumstances.</li>
            <li><strong>Right to restrict processing</strong>: You can request that we restrict the processing of your data in certain circumstances.</li>
            <li><strong>Right to data portability</strong>: You can request to receive your data in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Right to object</strong>: You can object to our processing of your personal data in certain circumstances.</li>
            <li><strong>Rights related to automated decision-making</strong>: You can request human intervention in automated decisions that significantly affect you.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a>. We will respond to your request within 30 days.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">International Data Transfers</h3>
          <p>
            If we transfer your personal data outside the European Economic Area (EEA), we will ensure that appropriate safeguards are in place to protect your data, such as:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Transferring to countries deemed by the European Commission to provide adequate protection</li>
            <li>Using Standard Contractual Clauses approved by the European Commission</li>
            <li>Adopting Binding Corporate Rules for transfers within our corporate group</li>
            <li>Where applicable, relying on derogations for specific situations such as your explicit consent or the necessity to perform a contract with you</li>
          </ul>
          <p>
            You have the right to obtain information about the safeguards we use to transfer your personal data outside the EEA by contacting us at <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a>.
          </p>
        </Section>

        <Section title="California Consumer Privacy Act (CCPA) Compliance">
          <p className="italic text-white/60 mb-4">The following provisions apply to users protected by California, United States regulations.</p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Information Collection Notice for California Residents</h3>
          <p>
            Under the California Consumer Privacy Act (CCPA), we are required to inform California residents about the categories of personal information we collect and the purposes for which we use this information.
          </p>
          <p>In the past 12 months, we have collected the following categories of personal information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Identifiers (such as name, email address, IP address)</li>
            <li>Commercial information (such as products purchased or considered)</li>
            <li>Internet or other electronic network activity (such as browsing history)</li>
            <li>Geolocation data</li>
            <li>Inferences drawn from other personal information</li>
          </ul>
          <p>
            We use this information for the business and commercial purposes described in our <Link to="/privacy" className="text-white/80 hover:text-white underline">Privacy Policy</Link>.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">California Privacy Rights</h3>
          <p>
            If you are a California resident, you have the following rights under the CCPA:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to know</strong>: You can request information about the personal information we have collected about you and how we have used and disclosed it.</li>
            <li><strong>Right to delete</strong>: You can request the deletion of your personal information, subject to certain exceptions.</li>
            <li><strong>Right to opt-out</strong>: You can opt out of the sale of your personal information, if applicable.</li>
            <li><strong>Right to non-discrimination</strong>: We will not discriminate against you for exercising any of your CCPA rights.</li>
          </ul>
          <p>
            To exercise your rights, you can submit a verifiable consumer request by contacting us at <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a> or through the methods described in our Privacy Policy. You may make a request up to twice within a 12-month period. We will respond to your request within 45 days, with a possible extension of up to 45 additional days when reasonably necessary.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">California Do Not Sell My Personal Information</h3>
          <p>
            Under the CCPA, California residents have the right to opt-out of the sale of their personal information. Disaresta, LLC does not sell personal information as defined by the CCPA.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}
