import { Text, Title } from "@/components/atoms";

export default function page() {
  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto w-full px-4 py-16 lg:p-16">
      <Title type="h1" variant="default" className="text-base font-semibold">
        EUROPEAN DATA PROTECTION RIGHTS
      </Title>
      <Text variant="paragraph">
        If you are a person located in the European Economic Area (EEA),
        Switzerland and the UK, you have additional rights under the General
        Data Protection Regulation (GDPR).
      </Text>
      <Text variant="paragraph" className="font-semibold underline">
        Controller
      </Text>
      <Text variant="paragraph">
        LifeDNA Inc. is the controller and responsible for your personal data.
      </Text>
      <Text variant="paragraph">
        We have appointed a data protection officer (DPO) who is responsible for
        overseeing questions in relation to our privacy policy. If you have any
        questions about this privacy policy, including any requests to exercise
        your legal rights, please contact the DPO using the details set out
        below.
      </Text>
      <Text variant="paragraph" className="font-semibold underline">
        Lawful Basis
      </Text>
      <Text variant="paragraph">
        Legitimate Interest means the interest of our business in conducting and
        managing our business to enable us to provide you products and services
        and in a secure environment. We make sure we consider and balance any
        potential impact on you (both positive and negative) and your rights
        before we process your personal data for our legitimate interests. We do
        not use your personal data for activities where our interests are
        overridden by the impact on you (unless we have your consent or are
        otherwise required or permitted to by law). You can obtain further
        information about how we assess our legitimate interests against any
        potential impact on you in respect of specific activities by{" "}
        <span className="text-[#41c752] underline">contacting us.</span>{" "}
        Performance of contract means processing your data where it is necessary
        for the performance of a contract to which you are a party or to take
        steps at your request before entering into such a contract. Comply with
        a legal obligation means processing your personal data where it is
        necessary for compliance with a legal obligation.
      </Text>
      <Text variant="paragraph">
        Pursuant to the GDPR, we will use your personal information in one or
        more of the following circumstances:
      </Text>
      <div className="overflow-x-auto max-md:max-w-[600px]">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="text-base lg:text-lg">
            <tr>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Purpose
              </th>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Type of data
              </th>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Lawful Basis for Processing
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">
                To register for account
              </td>
              <td className="border border-gray-300 p-2  py-5">Identity</td>
              <td className="border border-gray-300 p-2  py-5">
                Performance of contract
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2  py-5">
                To process payment
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Identity, Contact, Financial, Marketing and communications
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Performance of contract, Necessary for legitimate interests
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To manage our relationship with you which will include:
                Notifying you about changes to our terms or privacy policy
                Asking you to leave a review or take a survey
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Identity Contact Profile Marketing and Communications
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Performance of a contract with you Necessary to comply with a
                legal obligation Necessary for our legitimate interests (to keep
                our records updated and to study how customers use our
                products/services)
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To enable you to partake in a prize draw, competition or
                complete a survey
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Identity Contact Profile Usage Marketing and Communications
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Performance of a contract with you Necessary for our legitimate
                interests (to study how customers use our products/services, to
                develop them and grow our business)
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To administer and protect our business and this website
                (including troubleshooting, data analysis, testing, system
                maintenance, support, reporting and hosting of data)
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Identity Contact Technical
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Necessary for our legitimate interests (for running our
                business, provision of administration and IT services, network
                security, to prevent fraud and in the context of a business
                reorganization or group restructuring exercise) Necessary to
                comply with a legal obligation
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To deliver relevant website content and advertisements to you
                and measure or understand the effectiveness of the advertising
                we serve to you
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Identity Contact Profile Usage Marketing and Communications
                Technical
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Necessary for our legitimate interests (to study how customers
                use our products/services, to develop them, to grow our business
                and to inform our marketing strategy)
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To use data analytics to improve our website, products/services,
                marketing, customer relationships and experiences
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Technical Usage
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Necessary for our legitimate interests (to define types of
                customers for our products and services, to keep our website
                updated and relevant, to develop our business and to inform our
                marketing strategy)
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To make suggestions and recommendations to you about goods or
                services that may be of interest to you
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Identity Contact Technical Usage Profile Marketing and
                Communications
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Necessary for our legitimate interests (to develop our
                products/services and grow our business)
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To perform research
              </td>
              <td className="border border-gray-300 p-2  py-5">Usage</td>
              <td className="border border-gray-300 p-2  py-5">
                To comply with legal obligation With consent
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To process genetic information
              </td>
              <td className="border border-gray-300 p-2  py-5">Usage</td>
              <td className="border border-gray-300 p-2  py-5">
                To comply with legal obligation With consent
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2  py-5">
                To transfer information
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Usage Identity
              </td>
              <td className="border border-gray-300 p-2  py-5">
                To comply with legal obligation With consent
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Text variant="paragraph" className="font-semibold underline">
        Opting out
      </Text>
      <Text variant="paragraph">
        You can ask us or third parties to stop sending you marketing messages
        at any time by following these opt-out steps in our communications.
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          For email:
          <span>
            Open any email that you have received from LifeDNA. At the bottom of
            the email, click on ‘Unsubscribe’ in order to be removed from our
            email list. Please note that by doing this, you will no longer be
            able to receive important updates and announcements pertaining to
            your reports, orders, exclusive discounts, upcoming features, and
            other personalized DNA services.
          </span>
        </li>
        <li className="ml-6 lg:ml-8">
          For SMS:
          <span>
            Send STOP to +1 (910) 415-1846 in order to opt-out. Please be
            reminded that by doing so, you will no longer receive notifications
            on exclusive offers and discounts available to SMS subscribers.
          </span>
        </li>
      </ul>
      <Text variant="paragraph">
        If you’re having issues, please contact us at aloha@lifedna.com anytime.
      </Text>
      <Text variant="paragraph" className="font-semibold underline">
        Your Legal Rights
      </Text>
      <Text variant="paragraph" className="font-semibold underline">
        You have the right to:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold"> Request access</span> to your
          personal data (commonly known as a “data subject access request”).
          This enables you to receive a copy of the personal data we hold about
          you and to check that we are lawfully processing it.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">Request correction</span> of the
          personal data that we hold about you. This enables you to have any
          incomplete or inaccurate data we hold about you corrected, though we
          may need to verify the accuracy of the new data you provide to us.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">Request erasure</span> of your
          personal data. This enables you to ask us to delete or remove personal
          data where there is no good reason for us continuing to process it.
          You also have the right to ask us to delete or remove your personal
          data where you have successfully exercised your right to object to
          processing (see below), where we may have processed your information
          unlawfully or where we are required to erase your personal data to
          comply with local law. Note, however, that we may not always be able
          to comply with your request of erasure for specific legal reasons
          which will be notified to you, if applicable, at the time of your
          request.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold"> Object to processing</span> of your
          personal data where we are relying on a legitimate interest (or those
          of a third party) and there is something about your particular
          situation which makes you want to object to processing on this ground
          as you feel it impacts on your fundamental rights and freedoms. You
          also have the right to object where we are processing your personal
          data for direct marketing purposes. In some cases, we may demonstrate
          that we have compelling legitimate grounds to process your information
          which override your rights and freedoms.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold"> Request restriction</span> of
          processing of your personal data. This enables you to ask us to
          suspend the processing of your personal data in the following
          scenarios:
          <ul className="list-disc text-sm font-normal flex flex-col gap-6 my-6">
            <li className="ml-6 lg:ml-8">
              If you want us to establish the data’s accuracy.
            </li>
            <li className="ml-6 lg:ml-8">
              Where our use of the data is unlawful but you do not want us to
              erase it.
            </li>
            <li className="ml-6 lg:ml-8">
              Where you need us to hold the data even if we no longer require it
              as you need it to establish, exercise or defend legal claims.
            </li>
            <li className="ml-6 lg:ml-8">
              You have objected to our use of your data but we need to verify
              whether we have overriding legitimate grounds to use it.
            </li>
          </ul>
        </li>
        <li className="ml-6 lg:ml-8">
          Request the transfer of your personal data to you or to a third party.
          We will provide to you, or a third party you have chosen, your
          personal data in a structured, commonly used, machine-readable format.
          Note that this right only applies to automated information which you
          initially provided consent for us to use or where we used the
          information to perform a contract with you.
        </li>
        <li className="ml-6 lg:ml-8">
          Withdraw consent at any time where we are relying on consent to
          process your personal data. However, this will not affect the
          lawfulness of any processing carried out before you withdraw your
          consent. If you withdraw your consent, we may not be able to provide
          certain products or services to you. We will advise you if this is the
          case at the time you withdraw your consent.
        </li>
      </ul>
      <Text variant="paragraph" className="font-semibold underline">
        Change of purpose
      </Text>
      <Text variant="paragraph">
        We will only use your personal data for the purposes for which we
        collected it, unless we reasonably consider that we need to use it for
        another reason and that reason is compatible with the original purpose.
        If you wish to get an explanation as to how the processing for the new
        purpose is compatible with the original purpose, please contact us.
      </Text>
      <Text variant="paragraph">
        If we need to use your personal data for an unrelated purpose, we will
        notify you and we will explain the legal basis which allows us to do so.
      </Text>
      <Text variant="paragraph">
        Please note that we may process your personal data without your
        knowledge or consent, in compliance with the above rules, where this is
        required or permitted by law.
      </Text>
      <Text variant="paragraph" className="font-semibold underline">
        Contact details
      </Text>
      <Text variant="paragraph">
        If you have any questions about this privacy policy or our privacy
        practices, please contact us:
      </Text>
      <div className="ml-6 lg:ml-8">
        <Text variant="paragraph">Full name of legal entity: LifeDNA Inc.</Text>
        <Text variant="paragraph">Email address: privacy@lifedna.com</Text>
        <Text variant="paragraph">
          Postal address: 1050 Queen St. 100, Honolulu, HI 96814
        </Text>
        <Text variant="paragraph">Telephone number: +1 877-543-3362</Text>
      </div>
      <Text variant="paragraph">
        You have the right to make a complaint at any time to the Information
        Commissioner’s Office (ICO), the UK supervisory authority for data
        protection issues (www.ico.org.uk). We would, however, appreciate the
        chance to deal with your concerns before you approach the ICO so please
        contact us in the first instance.
      </Text>
      <Text variant="paragraph">
        You are not required to pay any charge for exercising your rights.
        However, we may charge a reasonable fee if your request is clearly
        unfounded, repetitive, or excessive. We have 30 days to respond to you.
      </Text>
      <Text variant="paragraph">
        For residents of France, you can send us specific instructions regarding
        the use of your data after your death.
      </Text>
      <Text variant="paragraph">
        You will not have to pay a fee to access your Personal Information (or
        to exercise any of the other rights described above).
      </Text>
      <Text variant="paragraph">
        We may need to request specific information from you to help us confirm
        your identity and ensure your right to access your Personal Information
        (or to exercise any of your other rights). This is a security measure to
        ensure that your Personal Information is not disclosed to any person who
        has no right to receive it.
      </Text>
      <Text variant="paragraph" className="font-semibold">
        Controller of your Personal Information
      </Text>
      <Text variant="paragraph">
        We have appointed EU Business Partners as our representatives in the EU
        for the purposes of Article 27 of the General Data Protection
        Regulation. You may contact our EU representative, as well as us
        directly, with any query that you may have in relation to your personal
        data. The contact details of our EU representative are as follows:
      </Text>
      <div className="ml-6 lg:ml-8">
        <Text variant="paragraph" className="flex flex-col ">
          <span> EU Business Partners,</span>
          <br /> <span>10 Ashe Street,</span>
          <br />
          <span> Clonakilty,</span>
          <br /> <span>Co. Cork P85 E403,</span>
          <br />
          <span>Ireland</span>
          <br />
          <span> Point of contact: Flor McCarthy</span>
          <br /> Email: info@eubusinesspartners/com
        </Text>
      </div>
      <Text variant="paragraph">
        EU Business Partners’ role in this respect is limited solely to being a
        contact point for questions on data protection from persons located in
        the EEA or UK and data protection supervisory authorities.
      </Text>
      <Text variant="paragraph" className="font-semibold">
        HOW TO CONTACT US
      </Text>
      <div className="ml-6 lg:ml-8">
        <Text variant="paragraph" className="flex flex-col">
          <span> LifeDNA Inc.</span> <br />
          <span>1050 Queen St., 100</span> <br />
          <span>Honolulu, HI 96814</span> <br />
          <span> Email: aloha@lifedna.com</span> <br />
          <span>Or via phone: +1 877-543-3362</span>
        </Text>
      </div>
      <Text variant="paragraph">
        To register a complaint or concern, please contact us at
        privacy@lifedna.com
      </Text>
      <Text variant="paragraph" className="font-semibold">
        Subprocessors
      </Text>
      <Text variant="paragraph">Last Updated: Mar 22, 2024</Text>
      <Text variant="paragraph">
        To support the delivery of our Services, LifeDNA (“LifeDNA”) (or one of
        its Affiliates) uses service providers (each, a “Subprocessor”) that may
        store and process Customer Data (which may contain personal data). This
        page provides important information about the identity, location and
        role of each Subprocessor. LifeDNA engages different types of
        sub-processors to perform various functions as explained below. Terms
        used on this page but not defined have the meaning set forth in the
        Terms of Service or if applicable, the superseding written agreement
        between LifeDNA and Customer (the “Agreement”).
      </Text>
      <Text variant="paragraph">Third Parties</Text>
      <Text variant="paragraph">
        LifeDNA currently uses third party Subprocessors to provide
        infrastructure services, and to help us provide customer support and
        email notifications. Prior to engaging any Subprocessor, LifeDNA
        performs commercially reasonable diligence to evaluate their security,
        privacy and confidentiality practices, and executes an agreement
        implementing its applicable obligations.
      </Text>
      <Text variant="paragraph">Infrastructure Subprocessors</Text>
      <Text variant="paragraph">
        LifeDNA may use the following Subprocessors to host or store Customer
        Data or provide other infrastructure that helps with delivery of our
        Services:
      </Text>
      <div className="overflow-x-auto max-md:max-w-[600px]">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="text-base lg:text-lg">
            <tr>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Entity Name
              </th>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Entity Type
              </th>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Entity Country
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">
                Amazon Web Services (AWS)
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Cloud Service Provider
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Text variant="paragraph" className="italic">
        Other Subprocessors
      </Text>
      <Text variant="paragraph">
        LifeDNA may use the following Subprocessors to host or store Customer
        Data or provide other infrastructure that helps with delivery of our
        Services:
      </Text>
      <div className="overflow-x-auto max-md:max-w-[600px]">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="text-base lg:text-lg">
            <tr>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Subprocessor Name
              </th>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Processing Activities
              </th>
              <th className="border border-gray-300 p-2 py-5 text-left">
                Entity Country
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Chargebee</td>
              <td className="border border-gray-300 p-2  py-5">
                Customer Payments
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Cloudflare</td>
              <td className="border border-gray-300 p-2  py-5">Security</td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">
                Google Ads/Analytics
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Analytics/Advertising
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Meta Ads</td>
              <td className="border border-gray-300 p-2  py-5">
                Analytics/Advertising
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Klaviyo</td>
              <td className="border border-gray-300 p-2  py-5">
                Email Marketing/Email Communications
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Amplitude</td>
              <td className="border border-gray-300 p-2  py-5">
                Customer Analytics
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">AKESOgen</td>
              <td className="border border-gray-300 p-2  py-5">
                Genotyping Lab
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Gene By Gene</td>
              <td className="border border-gray-300 p-2  py-5">
                Genotyping Lab
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">UseProof</td>
              <td className="border border-gray-300 p-2  py-5">
                Front-end Deployment
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">
                Referral Candy
              </td>
              <td className="border border-gray-300 p-2  py-5">
                Email Marketing/Email Communications
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-2 py-5">Self Decode</td>
              <td className="border border-gray-300 p-2  py-5">
                Front-end Deployment
              </td>
              <td className="border border-gray-300 p-2  py-5">
                United States
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Text variant="paragraph" className="italic">
        LifeDNA Affiliates
      </Text>
      <Text variant="paragraph">
        Depending on the geographic location of a Customer or their authorized
        users, and the nature of the Services provided, LifeDNA may also engage
        one or more of the following Affiliates as Subprocessors to deliver some
        or all of the Services to a Customer:
      </Text>
      <Text variant="paragraph" className="italic">
        Updates
      </Text>
      <Text variant="paragraph">
        As our business grows and evolves, the Sub Processors we engage may
        change. We will endeavor to provide the owner of Customer’s account with
        notice of any new Subprocessors to the extent required under the
        Agreement, along with posting such updates here.
      </Text>
      <Text variant="paragraph" className="font-semibold">
        Addendum to the Privacy Notice for EU Residents on International Data
        Transfers
      </Text>
      <Text variant="paragraph" className="font-semibold">
        Effective Date: March 22, 2024
      </Text>
      <Text variant="paragraph">
        LifeDNA Inc. understands the importance of privacy and data protection
        for our customers, especially concerning the international transfer of
        personal data from the European Union (EU) or European Economic Area
        (EEA) to the United States (US). This addendum to our Privacy Notice for
        EU Residents clarifies the legal bases and safeguards we employ to
        protect your data during such transfers.
      </Text>
      <Text variant="paragraph" className="italic">
        1. Legal Basis for Data Transfer
      </Text>
      <Text variant="paragraph">
        The international transfer of personal data from the EU to the US by
        LifeDNA Inc. is based on the following legal grounds under the General
        Data Protection Regulation (GDPR):
      </Text>
      <Text variant="paragraph">
        Standard Contractual Clauses (SCCs): We use SCCs approved by the
        European Commission, which provide specific data protection and privacy
        guarantees for the transferred data.
      </Text>
      <Text variant="paragraph">
        Explicit Consent: For the processing of sensitive data, such as genetic
        information, we obtain explicit consent from our customers, ensuring
        they are fully informed of the data transfer and its purpose.
      </Text>
      <Text variant="paragraph" className="italic">
        2. Scope and Purpose of Data Transfers
      </Text>
      <Text variant="paragraph">
        Purchasing DNA Kits: Personal data collected during the purchase and
        processing of DNA kits, including payment details and genetic
        information from saliva samples, is transferred to the US for necessary
        processing to provide our services. DNA kits are not currently available
        for purchase in the EU or EEA at this time.
      </Text>
      <Text variant="paragraph">
        Uploading DNA Data: When customers upload their genetic data to our
        platforms, this data is transferred to our US-based servers for analysis
        and report generation.
      </Text>
      <Text variant="paragraph" className="italic">
        3. Safeguards for Protecting Your Data
      </Text>
      <Text variant="paragraph">
        To ensure the protection of your data during international transfers,
        LifeDNA Inc. has implemented the following safeguards:
      </Text>
      <Text variant="paragraph">
        Adherence to Standard Contractual Clauses (SCCs): We commit to the data
        protection obligations set forth in the SCCs, ensuring that any data
        transfer complies with GDPR standards.
      </Text>
      <Text variant="paragraph">
        Encryption and Security Measures: We employ robust encryption and
        security measures to protect your data against unauthorized access,
        alteration, and loss. These measures are regularly reviewed to align
        with the latest security standards.
      </Text>
      <Text variant="paragraph">
        Data Minimization and Limitation: Only the necessary data for processing
        is transferred, and it is strictly used for the purposes outlined in our
        privacy notice.
      </Text>
      <Text variant="paragraph">
        Subprocessor Oversight: We ensure that any third-party service providers
        or sub-processors who handle your personal data are contractually
        obligated to meet GDPR compliance standards, including data protection,
        privacy, and security requirements.
      </Text>
      <Text variant="paragraph" className="italic">
        4. Your Data Protection Rights
      </Text>
      <Text variant="paragraph">
        As an EU resident, you have the right to access, rectify, erase, or
        restrict the processing of your personal data at any time. Additionally,
        you have the right to object to data processing and the right to data
        portability as stipulated by the GDPR.
      </Text>
      <Text variant="paragraph" className="italic">
        5. Contact Information
      </Text>
      <Text variant="paragraph">
        For any inquiries regarding the international transfer of your data or
        to exercise your data protection rights, please contact us at:
      </Text>
      <Text variant="paragraph">LifeDNA Inc.</Text>
      <Text variant="paragraph">1050 Queen St., 100</Text>

      <Text variant="paragraph">Honolulu, HI 96814</Text>
      <Text variant="paragraph">Email: privacy@lifedna.com</Text>
      <Text variant="paragraph">Phone: +1 877-543-3362</Text>
    </div>
  );
}
