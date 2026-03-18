import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#3C2970] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <Link to="/" className="mb-8 inline-block">
          <img src="/logo-header.png" alt="Disaresta" className="h-16" />
        </Link>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy - Disaresta, LLC</h1>
        <p className="italic text-white/60 mb-12">Effective Date: 3/17/2026</p>

        <Section title="1. Introduction">
          <p>
            This Privacy Policy describes how Disaresta, LLC ("we," "us," or "our") collects, uses, and discloses your personal information when you use our software as a service (the "Service").
          </p>
          <p>
            We are committed to protecting your personal information and your right to privacy. When you visit our software as a service and use our products, you trust us with your personal information. We take your privacy very seriously. In this Privacy Policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
          </p>
          <p>
            This Privacy Policy applies to all information collected through our software as a service, as well as any related services, sales, marketing, or events.
          </p>
          <p>
            Please read this Privacy Policy carefully as it will help you understand what we do with the information we collect.
          </p>
        </Section>

        <Section title="2. Definitions">
          <p>
            To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, they are strictly defined as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookie</strong>: a small file placed on your device to enable certain features and functionality.</li>
            <li><strong>Company</strong>: when this policy mentions "Company," "we," "us," or "our," it refers to Disaresta, LLC.</li>
            <li><strong>Country</strong>: where Disaresta, LLC or the owners/founders of Disaresta, LLC are based, in this case United States.</li>
            <li><strong>Customer</strong>: refers to the company, organization, or person that signs up to use the Disaresta, LLC Service.</li>
            <li><strong>Device</strong>: any internet-connected device such as a phone, tablet, computer, or any other device that can be used to visit Disaresta, LLC and use the services.</li>
            <li><strong>Personal Data</strong>: any information that directly, indirectly, or in connection with other information allows for the identification of a natural person.</li>
            <li><strong>Service</strong>: refers to the software as a service provided by Disaresta, LLC as described in the relative terms and on this platform.</li>
            <li><strong>Third-party service</strong>: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</li>
            <li><strong>Website</strong>: Disaresta, LLC's site, which can be accessed via <a href="https://disaresta.com" className="text-white/80 hover:text-white underline">https://disaresta.com</a>.</li>
            <li><strong>You</strong>: a person or entity that is registered with Disaresta, LLC to use the Services.</li>
          </ul>
        </Section>

        <Section title="3. Information We Collect">
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">3.1 Personal Data</h3>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">3.2 Usage Data</h3>
          <p>
            We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">3.3 Location Data</h3>
          <p>
            We may use and store information about your location if you give us permission to do so ("Location Data"). We use this data to provide features of our Service, to improve and customize our Service.
          </p>
          <p>
            You can enable or disable location services when you use our Service at any time, through your device settings.
          </p>
        </Section>

        <Section title="4. How We Use Your Information">
          <p>Disaresta, LLC uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To fulfill any other purpose for which you provide it</li>
            <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
            <li>In any other way we may describe when you provide the information</li>
            <li>For any other purpose with your consent</li>
          </ul>
        </Section>

        <Section title="5. Retention of Your Personal Data">
          <p>
            Disaresta, LLC will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
          </p>
          <p>
            Disaresta, LLC will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">5.1 Data Retention for Physical Goods</h3>
          <p>
            For orders involving physical goods, we retain your shipping and billing information, including your name, address, and contact details, as necessary to fulfill your order, process returns, manage warranty claims, and comply with tax, legal, and regulatory obligations. This information may be retained for a longer period than other personal data to ensure proper delivery of goods and to handle any post-purchase issues that may arise.
          </p>
        </Section>

        <Section title="6. Transfer of Your Personal Data">
          <p>
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
          </p>
          <p>
            If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there.
          </p>
          <p>
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </p>
          <p>
            Disaresta, LLC will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
          </p>
        </Section>

        <Section title="7. Disclosure of Your Personal Data">
          <h3 className="text-lg font-semibold mt-4 mb-2">Business Transactions</h3>
          <p>
            If Disaresta, LLC is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Disclosure for Law Enforcement</h3>
          <p>
            Under certain circumstances, Disaresta, LLC may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Legal Requirements</h3>
          <p>
            Disaresta, LLC may disclose your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of Disaresta, LLC</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
        </Section>

        <Section title="8. Third-Party Disclosure">
          <h3 className="text-lg font-semibold mt-4 mb-2">8.1 Analytics</h3>
          <p>
            We may use third-party Service Providers to monitor and analyze the use of our Service.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics</strong>: Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" className="text-white/80 hover:text-white underline">https://policies.google.com/privacy</a>
            </li>
          </ul>
        </Section>

        <Section title="9. Security of Your Personal Data">
          <p>
            The security of your Personal Data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </Section>

        <Section title="10. Children's Privacy">
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from anyone under the age of 13 without verification of parental consent, we take steps to remove that information from our servers.
          </p>
          <p>
            If we need to rely on consent as a legal basis for processing your information and your country requires consent from a parent, we may require your parent's consent before we collect and use that information.
          </p>
        </Section>

        <Section title="11. Your Data Protection Rights">
          <p>
            Depending on your location and applicable laws, you may have certain rights regarding your personal information, including rights to access, correct, delete, or restrict use of your information. We honor these rights regardless of your location and are committed to providing reasonable access to the information that you have shared with us.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">11.1 General Data Access & Deletion Rights</h3>
          <p>
            Regardless of your location, you can make the following requests regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access Your Data</strong>: You can request a copy of the personal information we have about you. We will provide this information in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Delete Your Data</strong>: You can request that we delete your personal information from our systems. We will comply with this request unless there is a legal requirement for us to keep certain information.</li>
          </ul>
          <p>
            To submit a data access or deletion request, please contact us using the contact information provided at the end of this Privacy Policy. We will respond to your request within 30 days. We may need to verify your identity before processing your request.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">11.2 CCPA Privacy Rights (California Residents)</h3>
          <p>
            If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>What personal information we have about you.</strong> If you make this request, we will return to you:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>The categories of personal information we have collected about you</li>
                <li>The categories of sources from which we collect your personal information</li>
                <li>The business or commercial purpose for collecting or selling your personal information</li>
                <li>The categories of third parties with whom we share personal information</li>
                <li>The specific pieces of personal information we have collected about you</li>
                <li>A list of categories of personal information that we have sold, along with the category of any other company we sold it to</li>
                <li>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with</li>
              </ul>
            </li>
            <li>
              <strong>To delete your personal information.</strong> If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.
            </li>
            <li>
              <strong>To stop selling your personal information.</strong> We don't sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some state laws, sharing your data through certain targeted advertisements may be considered a "sale" of information. You are the only owner of your Personal Data and can request disclosure or deletion at any time.
            </li>
          </ul>
          <p>
            We will respond to verified requests within 45 days as required by the CCPA. If we need more time, we will inform you of the reason and extension period in writing.
          </p>
          <p>
            Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.
          </p>
          <p>
            To exercise your California data protection rights described above, please send your request(s) by email: <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a>.
          </p>
          <p>
            Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.
          </p>
        </Section>

        <Section title="12. Service Providers">
          <p>
            We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          </p>
          <p>
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </Section>

        <Section title="13. Links to Other Sites">
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>
        </Section>

        <Section title="14. Changes to This Privacy Policy">
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </Section>

        <Section title="15. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>By email: <a href="mailto:info@disaresta.com" className="text-white/80 hover:text-white underline">info@disaresta.com</a></li>
            <li>By phone: +1-650-226-9008</li>
            <li>By mail: 2108 N ST, STE N, Sacramento, CA 95816</li>
          </ul>
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
