import { Text, Title } from "@/components/atoms";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto w-full px-4 py-16 lg:p-16">
      <Title type="h1" variant="default" className="text-[34px] font-normal">
        General Website Privacy Policy
      </Title>
      <Text variant="paragraph">Effective Date: January 19, 2023</Text>
      <Text variant="paragraph">Last modified: March 13, 2024</Text>
      <Text variant="paragraph">
        LifeDNA Inc. (<span className="font-semibold">“Company”</span> or{" "}
        <span className="font-semibold">“We”</span>) respect your privacy and
        are committed to protecting it through our compliance with this policy.
        This policy describes the types of information we may collect from you
        or that you may provide when you visit the website lifedna.com, our
        platform at my.lifedna.com, or mobile app (our “Services“) and our
        practices for collecting, using, maintaining, protecting, and disclosing
        that information.
      </Text>
      <Text variant="paragraph">
        Please see our{" "}
        <span className="text-[#41c752]">Privacy Notice for EU Residents</span>{" "}
        if you are an individual located in the European Economic Area (EEA),
        United Kingdom (UK) or Switzerland.
      </Text>
      <Text variant="paragraph">
        If you are a resident of California, please see{" "}
        <span className="text-[#41c752]">
          our Privacy Notice for California Residents.
        </span>
      </Text>
      <Title type="h2" className="font-normal text-sm" variant="smaller">
        This policy applies to information we collect:
      </Title>
      <ul className="flex flex-col gap-6 list-disc mb-6">
        <li className="text-sm font-normal ml-6 lg:ml-10">
          On the LifeDNA website, web-app, and mobile app.
        </li>
        <li className="text-sm font-normal ml-6 lg:ml-10">
          In email, text, and other electronic messages between you and LifeDNA.
        </li>
        <li className="text-sm font-normal ml-6 lg:ml-10">
          Through mobile and desktop applications you download from LifeDNA,
          which provide dedicated non-browser-based interaction between you and
          LifeDNA.
        </li>
        <li className="text-sm font-normal ml-6 lg:ml-10">
          When you interact with our advertising and applications on third-party
          websites and services if those applications or advertising include
          links to this policy.
        </li>
        <li className="text-sm font-normal ml-6 lg:ml-10">
          From you that may be offline or through any other means such as your
          saliva sample and genetic information.
        </li>
      </ul>
      <Text variant="paragraph" className="">
        <span className="uppercase">
          {" "}
          PLEASE READ THIS POLICY CAREFULLY TO UNDERSTAND OUR POLICIES AND
          PRACTICES REGARDING YOUR INFORMATION AND HOW WE WILL TREAT IT.
        </span>{" "}
        If you do not agree with our policies and practices, your choice is not
        to use our Services. By accessing or using these Services, you agree to
        this privacy policy. This policy may change from time to time. Your
        continued use of these Services after we make changes is deemed to be
        acceptance of those changes, so please check the policy periodically for
        updates.
      </Text>
      <Title variant="smaller" type="h2" className="font-normal text-sm">
        Children Under the Age of 18
      </Title>
      <Text variant="paragraph">
        Our Services are not intended for children under 18 years of age. No one
        under age 18 may provide any information to the Services without
        verified parental consent. We do not knowingly collect personal
        information from children under 18. If you are under 18, do not use or
        provide any information on these Services or on or through any of its
        features. If we learn we have collected or received personal information
        from a child under 18 without verification of parental consent, we will
        delete that information. If you believe we might have any information
        from or about a child under 18, please contact us at:
      </Text>
      <address className="flex flex-col list-disc text-sm font-normal normal-case mb-6">
        <li className="ml-4 lg:ml-5">1050 Queen St., 100</li>
        <br />
        <li className="ml-4 lg:ml-5">Honolulu, HI 96814</li>
        <br />
        <li className="ml-4 lg:ml-5">By email at:</li>{" "}
        <li className="ml-4 lg:ml-5">
          <a href="mailto:aloha@lifedna.com">aloha@lifedna.com</a>
        </li>
        <br />
        <li className="ml-4 lg:ml-5">
          By calling our toll-free number: (877) 543-3362
        </li>
      </address>

      <Text variant="paragraph">
        California residents under 18 years of age may have additional rights
        regarding the collection and sale of their personal information. For
        more information, please see our{" "}
        <span className="text-[#41c752]">
          Privacy Policy for California Residents.
        </span>
      </Text>
      <Text variant="paragraph">
        Information We Collect about You and How We Collect It
      </Text>
      <Text variant="paragraph">
        We collect several types of information from and about users of our
        Services, including information:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6 ">
        <li className="ml-6 lg:ml-8">
          By which you may be personally identified, such as name, postal
          address, e-mail address, telephone number, date of birth, sex, or any
          other identifier by which you may be contacted online or offline
          (“personal information“);
        </li>
        <li className="ml-6 lg:ml-8">
          That includes your genotype, diseases or other traits or
          characteristics, genetic data, and reports we generate from testing
          the saliva kit.
        </li>
        <li className="ml-6 lg:ml-8">
          That you provide on the test tube that contains your saliva (such as
          your year of birth and sex).
        </li>
        <li className="ml-6 lg:ml-8">
          That is about you but individually that does not identify you. Such
          information is deidentified or anonymous data that does not identify
          you; and/or
        </li>
        <li className="ml-6 lg:ml-8">
          About your internet connection, the equipment you use to access our
          Services, and usage details.
        </li>
      </ul>
      <Text variant="paragraph">We collect this information:</Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          Directly from you when you provide it to us.
        </li>
        <li className="ml-6 lg:ml-8">
          Automatically as you navigate through the site. Information collected
          automatically may include usage details, IP addresses, and information
          collected through cookies, web beacons, and other tracking
          technologies.
        </li>
        <li className="ml-6 lg:ml-8">
          From third parties. For example, we may receive your information from
          someone who has given you the gift of our product and service.
        </li>
      </ul>
      <Text variant="paragraph">Information You Provide to Us. </Text>
      <Text variant="paragraph">
        The information we collect on or through our Services may include:{" "}
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          Information that you provide by filling in forms in our Services. This
          includes information provided at the time of registering to use our
          Services, subscribing to our service, posting material, or requesting
          further services by email or through our customer services.
        </li>
        <li className="ml-6 lg:ml-8">
          Information related to participating in our{" "}
          <span className="text-[#41c752]">Research Program. </span>
        </li>
        <li className="ml-6 lg:ml-8">
          When you provide the saliva sample for us to perform services, we may
          ask you for information relevant to provide your genetic report.
        </li>
        <li className="ml-6 lg:ml-8">
          Survey information [such as your sex, age, ethnicity, weight, and
          height that a user may provide when responding to a survey. This also
          includes behavioral and social information such as a user’s
          occupation, commute, diet, alcohol consumption and tobacco use,
          fitness and exercise and sleep behavior.]
        </li>
        <li className="ml-6 lg:ml-8">
          We may collect information if you enter a contest or promotion
          sponsored by us, and when you report a problem with our Services.
        </li>
        <li className="ml-6 lg:ml-8">
          Records and copies of your correspondence (including email addresses)
          if you contact us.
        </li>
        <li className="ml-6 lg:ml-8">
          Your responses to surveys that we might ask you to complete so we can
          improve our Services.
        </li>
        <li className="ml-6 lg:ml-8">
          Details of transactions you carry out through our Services and of the
          fulfillment of your orders. You may be required to provide financial
          information (i.e., credit card information) before placing an order
          through our Services.
        </li>
        <li className="ml-6 lg:ml-8">Your search queries in the Services.</li>
      </ul>
      <Text variant="paragraph">
        Information We Collect Through Automatic Data Collection Technologies.
      </Text>
      <Text variant="paragraph">
        As you navigate through and interact with our Services, we may use
        automatic data collection technologies to collect certain information
        about your equipment, browsing actions, and patterns, including:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6 ">
        <li className="ml-6 lg:ml-8">
          Details of your visits to our Services, including [traffic data,
          location data, logs], and other communication data and the resources
          that you access and use in the Services.
        </li>
        <li className="ml-6 lg:ml-8">
          Information about your computer and internet connection, including
          your IP address, operating system, and browser type.
        </li>
      </ul>
      <Text variant="paragraph">
        We also may use these technologies to collect information about your
        online activities over time and across third-party websites or other
        online services (behavioral tracking).
      </Text>
      <Text variant="paragraph">
        The information we collect automatically does include personal
        information, or we may maintain it or associate it with personal
        information we collect in other ways or receive from third parties. It
        helps us to improve our Services and to deliver a better and more
        personalized service, including by enabling us to:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          Estimate our audience size and usage patterns.
        </li>
        <li className="ml-6 lg:ml-8">
          Store information about your preferences, allowing us to customize our
          Services according to your individual interests.
        </li>
        <li className="ml-6 lg:ml-8">Speed up your searches</li>
        <li className="ml-6 lg:ml-8">
          Recognize you when you return to our Services.
        </li>
      </ul>
      <Text variant="paragraph">
        The technologies we use for this automatic data collection may include:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold"> Cookies (or browser cookies).</span>{" "}
          A cookie is a small file placed on the hard drive of your computer.
          You may refuse to accept browser cookies by activating the appropriate
          setting on your browser. However, if you select this setting, you may
          be unable to access certain parts of our Services. Unless you have
          adjusted your browser setting so that it will refuse cookies, our
          system will issue cookies when you direct your browser to our
          Services. You can learn more about how we use cookies in our Cookie
          Policy.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">Flash Cookies.</span> Certain features
          of our Services may use local stored objects (or Flash cookies) to
          collect and store information about your preferences and navigation
          to, from, and on our Services. Flash cookies are not managed by the
          same browser settings as are used for browser cookies. For information
          about managing your privacy and security settings for Flash cookies,
          see Choices About How We Use and Disclose Your Information.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold"> Web Beacons.</span> Pages of our
          Services and our emails may contain small electronic files known as
          web beacons (also referred to as clear gifs, pixel tags, and
          single-pixel gifs) that permit the Company, for example, to count
          users who have visited those pages or opened an email and for other
          related website statistics (for example, recording the popularity of
          certain website content and verifying system and server integrity).
        </li>
      </ul>
      <Text variant="paragraph">How We Use Your Information</Text>
      <Text variant="paragraph">
        We use information that we collect about you or that you provide to us,
        including any personal information:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          To present our Services and its contents to you.
        </li>
        <li className="ml-6 lg:ml-8">
          To perform services (i.e., analyze your genetic information so we can
          provide you a report regarding your genotype).
        </li>
        <li className="ml-6 lg:ml-8">
          To sign up for our services by creating an account.
        </li>
        <li className="ml-6 lg:ml-8">
          To provide you with information, products, or services that you
          request from us.
        </li>
        <li className="ml-6 lg:ml-8">
          To fulfill any other purpose for which you provide it.
        </li>
        <li className="ml-6 lg:ml-8">
          To provide you with notices about your account, including expiration
          and renewal notices.
        </li>
        <li className="ml-6 lg:ml-8">
          To carry out our obligations and enforce our rights arising from any
          contracts entered into between you and us, including for billing and
          collection.
        </li>
        <li className="ml-6 lg:ml-8">
          To notify you about changes to our Services or any products or
          services we offer or provide though it.
        </li>
        <li className="ml-6 lg:ml-8">
          To allow you to participate in interactive features in our Services.
        </li>
        <li className="ml-6 lg:ml-8">
          For research purposes. See{" "}
          <span className="text-[#41c752]">Research Program.</span>
        </li>
        <li className="ml-6 lg:ml-8">
          To give us feedback or{" "}
          <span className="text-[#41c752]">contact us.</span>
        </li>
        <li className="ml-6 lg:ml-8">
          In any other way we may describe when you provide the information.
        </li>
        <li className="ml-6 lg:ml-8">
          For any other purpose with your consent.
        </li>
      </ul>
      <Text variant="paragraph">
        We may also use your information to contact you about our own products
        and services that may be of interest to you. If you do not want us to
        use your information in this way, please reach out to us at
        aloha@lifedna.com.
      </Text>
      <Text variant="paragraph">Disclosure of Your Information</Text>
      <Text variant="paragraph">
        We do not sell your information, and we will not use your genetic
        information for marketing or personalized advertising without your
        explicit consent. We may disclose aggregated information about our
        users, and information that does not identify any individual, without
        restriction.
      </Text>
      <Text variant="paragraph">
        We may disclose personal information that we collect or you provide as
        described in this privacy policy:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          To contractors, service providers, and other third parties we use to
          support our business and who are bound by contractual obligations to
          keep personal information confidential and use it only for the
          purposes for which we disclose it to them. The primary example of this
          would be for shipping purposes.
        </li>
        <li className="ml-6 lg:ml-8">
          To a buyer or other successor in the event of a merger, divestiture,
          restructuring, reorganization, dissolution, or other sale or transfer
          of some or all of LifeDNA Inc.’s assets, whether as a going concern or
          as part of bankruptcy, liquidation, or similar proceeding, in which
          personal information held by LifeDNA Inc. about our Services’ users is
          among the assets transferred.
        </li>
        <li className="ml-6 lg:ml-8">
          If you request we share information with your friends, family members,
          doctors, or other healthcare professionals, and/or any other
          individuals or entities who may or may not be using our services,
          including through third party services such as social networks and
          third-party apps that connect to our services.
        </li>
        <li className="ml-6 lg:ml-8">
          To provide you with information, products, or services that you
          request from us.
        </li>
        <li className="ml-6 lg:ml-8">To our subsidiaries and affiliates.</li>
        <li className="ml-6 lg:ml-8">
          For any other purpose disclosed by us when you provide the
          information.
        </li>
      </ul>
      <Text variant="paragraph">
        We may also disclose your personal information:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          To academic institutions or companies that conduct research. If you
          participate in our Research Program, we will ask you to provide
          consent by opting-in. For more information regarding participating in
          research, see{" "}
          <span className="text-[#41c752]">Research Program.</span>
        </li>
        <li className="ml-6 lg:ml-8">
          To a buyer or other successor in the event of a merger, divestiture,
          restructuring, reorganization, dissolution, or other sale or transfer
          of some or all of LifeDNA Inc.’s assets, whether as a going concern or
          as part of bankruptcy, liquidation, or similar proceeding, in which
          personal information held by LifeDNA Inc. about our Services’ users is
          among the assets transferred.
        </li>
        <li className="ml-6 lg:ml-8">
          To comply with any court order, law, or legal process, including to
          respond to any government or regulatory request.
        </li>
        <li className="ml-6 lg:ml-8">
          To enforce or apply our{" "}
          <span className="text-[#41c752]">Terms of Services </span>and other
          agreements, including for billing and collection purposes.
        </li>
        <li className="ml-6 lg:ml-8">
          If we believe disclosure is necessary or appropriate to protect the
          rights, property, or safety of LifeDNA Inc., our customers, or others.
          This includes exchanging information with other companies and
          organizations for the purposes of fraud protection and credit risk
          reduction.
        </li>
      </ul>
      <Text variant="paragraph">
        Unless we are legally required, we will not disclose your personal
        information with:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">Public databases.</li>
        <li className="ml-6 lg:ml-8">nsurance companies or employers.</li>
        <li className="ml-6 lg:ml-8">Law enforcement or regulatory.</li>
      </ul>
      <Text variant="paragraph" className="font-semibold underline">
        LifeDNA Research Program
      </Text>
      <Text variant="paragraph">
        We conduct research to create new discoveries about genetics and other
        variables that contribute to health and wellness. All LifeDNA users are
        given the opportunity to opt-in to the research program. You are not
        required to participate in our research program, and you can opt-out at
        any time.
      </Text>
      <Text variant="paragraph">How We Use and Disclose Your Information</Text>
      <Text variant="paragraph">
        We strive to provide you with choices regarding the personal information
        you provide to us. We have created mechanisms to provide you with the
        following control over your information:
      </Text>
      <ul className="list-disc text-sm font-normal flex flex-col gap-6 mb-6">
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">
            Tracking Technologies and Advertising.
          </span>{" "}
          You can set your browser to refuse all or some browser cookies, or to
          alert you when cookies are being sent. If you disable or refuse
          cookies, please note that some parts of this site may then be
          inaccessible or not function properly.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">
            {" "}
            Disclosure of Your Information for Third-Party Advertising.
          </span>{" "}
          If you do not want us to share your personal information with
          unaffiliated or non-agent third parties for promotional purposes, you
          can opt out by clicking the relevant opt-out links in the
          communications you receive from us, or reach out to us at
          aloha@lifedna.com.{" "}
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">
            Promotional Offers from the Company.
          </span>{" "}
          If you do not wish to have your email address used by the Company to
          promote our own or third parties’ products or services, you can opt
          out by following the relevant opt-out links in the communication, or
          by sending us an email stating your request to aloha@lifedna.com.
        </li>
        <li className="ml-6 lg:ml-8">
          <span className="font-semibold">
            {" "}
            Accessing and Correcting Your Information.
          </span>{" "}
          You can review and change your personal information by logging into
          the Services and visiting your account profile page. You may also send
          us an email at aloha@lifedna.com to request access to, correct, or
          delete any personal information that you have provided to us. We
          cannot delete your personal information except by also deleting your
          user account. We may not accommodate a request to change information
          if we believe the change would violate any law or legal requirement or
          cause the information to be incorrect. California residents may have
          additional personal information rights and choices. Please see Your
          California Privacy Rights for more information.
        </li>
        <li className="ml-6 lg:ml-8">
          Your California Privacy Rights <br /> If you are a California
          resident, California law may provide you with additional rights
          regarding our use of your personal information. To learn more about
          your California privacy rights, click{" "}
          <span className="text-[#41c752]">
            Privacy Notice for California Residents.
          </span>{" "}
          California’s “shine the Light” law (Civil Code Section § 1798.83)
          permits users of our App that are California residents to request
          certain information regarding our disclosure of personal information
          to third parties for their direct marketing purposes. To make such a
          request, please send an email to aloha@lifedna.com or write us at:
          1050 Queen St., 100, Honolulu, Hawaii 96814.
        </li>
      </ul>
      <Text variant="paragraph">Data Security</Text>
      <Text variant="paragraph">
        We have implemented measures designed to secure your personal
        information from accidental loss and from unauthorized access, use,
        alteration, and disclosure. All information you provide to us is stored
        on our secure servers behind firewalls. Any payment transactions will be
        encrypted using SSL technology.
      </Text>
      <Text variant="paragraph">
        The safety and security of your information also depends on you. Where
        we have given you (or where you have chosen) a password for access to
        certain parts of our Services, you are responsible for keeping this
        password confidential. We ask you not to share your password with
        anyone.
      </Text>
      <Text variant="paragraph">
        Unfortunately, the transmission of information via the internet is not
        completely secure. Although we do our best to protect your personal
        information, we cannot guarantee the security of your personal
        information transmitted to our Services. Any transmission of personal
        information is at your own risk. We are not responsible for
        circumvention of any privacy settings or security measures contained as
        part of the Services.
      </Text>
      <Text variant="paragraph">Retention</Text>
      <Text variant="paragraph">
        We will keep your personal information while you have an account with us
        or while we are providing products and services to you. We will not
        retain your personal information for longer than necessary for the
        purposes set out in this policy. Different retention periods apply for
        different types of personal information.
      </Text>
      <Text variant="paragraph">
        When it is no longer necessary to retain your personal information, we
        will delete or anonymize it.
      </Text>
      <Text variant="paragraph">Changes to Our Privacy Policy</Text>
      <Text variant="paragraph">
        It is our policy to post any changes we make to our privacy policy on
        this page with a notice that the privacy policy has been updated on the
        LifeDNA updates page. If we make material changes to how we treat our
        users’ personal information, we will notify you by email to the email
        address specified in your account. The date the privacy policy was last
        revised is identified at the top of the page. You are responsible for
        ensuring we have an up-to-date active and deliverable email address for
        you, and for periodically visiting our website and this privacy policy
        to check for any changes.
      </Text>
      <Text variant="paragraph">Contact Information</Text>
      <Text variant="paragraph">
        To ask questions or comment about this privacy policy and our privacy
        practices, contact us at:
      </Text>
      <address className="flex flex-col list-disc text-sm font-normal normal-case mb-6">
        <li className="ml-4 lg:ml-5">1050 Queen St., 100</li>
        <br />
        <li className="ml-4 lg:ml-5">Honolulu, HI 96814</li>
        <br />
        <li className="ml-4 lg:ml-5">By email at:</li>{" "}
        <li className="ml-4 lg:ml-5">
          <a href="mailto:aloha@lifedna.com">aloha@lifedna.com</a>
        </li>
        <br />
        <li className="ml-4 lg:ml-5">
          By calling our toll-free number: (877) 543-3362
        </li>
      </address>
      <Text variant="paragraph">
        To register a complaint or concern, please contact us at
        aloha@lifedna.com.
      </Text>
      <Text variant="paragraph">
        Disclaimer: LifeDNA’s reports have not been evaluated by the Food and
        Drug Administration. The contents on our website and our reports are for
        informational purposes only, and are not intended to diagnose any
        medical condition, replace the advice of a healthcare professional, or
        provide any medical advice, diagnosis, or treatment. Consult with a
        healthcare professional before making any major lifestyle changes or if
        you have any other concerns about your results.
      </Text>
    </div>
  );
};

export default PrivacyPolicy;
