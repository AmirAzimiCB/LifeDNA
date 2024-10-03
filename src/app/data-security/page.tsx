import React from "react";
import { Text, Title } from "@/components/atoms";
const DataSecurity = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto w-full px-6 py-16 lg:p-16">
      <Title type="h1" variant="default" className="text-[34px] font-semibold">
        Data Security
      </Title>
      <Text variant="terms">
        LifeDNA is dedicated to providing the robust data privacy and security
        controls required for DNA testing and DNA analysis.
      </Text>
      <Text variant="terms">
        What we do with your data and personal information
      </Text>
      <Text variant="terms">
        LifeDNA ensures transparency about the type of data we collect, the
        purposes for which we do so, and how we utilize it. Personal information
        is typically processed by LifeDNA for the following reasons:
      </Text>
      <Text variant="terms" className="flex flex-col gap-6 list-disc mb-6">
        <li className="text-sm font-normal ml-6 ">DNA kit purchase(s).</li>
        <li className="text-sm font-normal ml-6 ">
          Make an account, then add a kit to that account.
        </li>
        <li className="text-sm font-normal ml-6">
          Promote our reports and other DNA – personalized services.
        </li>
        <li className="text-sm font-normal ml-6 ">
          Conduct website maintenance, analytics, and network and infrastructure
          security.
        </li>
      </Text>
      <Text variant="terms">
        Generally, we process highly sensitive personal data, such as genetic
        information, and other personal data in order to:
      </Text>
      <Text variant="terms" className="flex flex-col gap-6 list-disc mb-6">
        <li className="text-sm font-normal ml-6 ">
          Process your sample at the lab.
        </li>
        <li className="text-sm font-normal ml-6 ">Generate your reports.</li>
        <li className="text-sm font-normal ml-6 ">
          Maintain and improve the tools, features, and usability of your
          account.
        </li>
        <li className="text-sm font-normal ml-6 ">
          Take part in the LifeDNA research if you’ve consented to participate.
        </li>
        <li className="text-sm font-normal ml-6 ">
          Address your concerns through our Support specialists.
        </li>
      </Text>
      <Text variant="terms">
        Gaining access to, downloading, and deleting your data
      </Text>
      <Text variant="terms">
        At LifeDNA, we would like you to understand how we secure your personal
        information, why we store it, and to whom we disclose it.
      </Text>
      <Text variant="terms">
        LifeDNA customers can ask for a copy of their data by contacting our
        Support Team at <a href="mailto:aloha@lifedna.com">aloha@lifedna.com</a>
        . You can request your data to be deleted at any time. Simply submit our
        request to our Support Team. Data deletion is irreversible and cannot be
        stopped, reversed, retracted, or undone.
      </Text>
      <Text variant="terms">
        We do not disclose our users’ information to law authorities unless we
        are obliged to do so by a legal subpoena or court order. LifeDNA has
        never had a data breach in our system, and we regularly check our
        security measures in order to keep DNA information protected at all
        times.
      </Text>
      <Text variant="terms">Protecting your data</Text>
      <Text variant="terms">
        We put in place the proper organizational and technical mechanisms to
        provide a level of security corresponding with the risk involved in
        processing personal data. Your DNA and personal information are
        protected by well-renowned organizational and technical safeguards.
      </Text>
      <Text variant="terms">
        These safeguards help prevent unauthorized access to your genetic
        information and to guarantee that it is used responsibly.
      </Text>
      <Text variant="terms">Managing our third-party service providers</Text>
      <Text variant="terms">
        The majority of data processing necessary to provide our
        DNA-personalized reports and insights is carried out directly by
        LifeDNA. However, we do work with a few outside service providers to
        help support our services, particularly in the following areas:
      </Text>
      <Text variant="terms">
        <li>Lab</li>
        <li>Courier (for DNA kit purchases)</li>
      </Text>
      <Text variant="terms">
        Each third-party service provider can guarantee the proper level of
        security and data protection thanks to our meticulous screening
        procedure. For more information, check out LifeDNA’s Privacy Policy.
      </Text>
      <Text variant="terms">
        Got questions about LifeDNA’s security or found a security-related
        issue?
      </Text>
      <Text variant="terms">
        Please contact us at{" "}
        <a href="mailto:security@lifedna.com">security@lifedna.com</a>. In an
        effort to safeguard our community, LifeDNA encourages users to inform us
        of any security-related problems with our website. If you think you’ve
        discovered a vulnerability or issue, we ask that you send us a thorough
        explanation of the problem, along with instructions on how we can
        reproduce it and/or a proof-of-concept.
      </Text>
      <Text variant="terms">
        Please give our team a reasonable amount of time to reply to your
        concern and resolve the issue after you submit it to us. We sincerely
        appreciate all that you do to keep our community safe.
      </Text>
    </div>
  );
};

export default DataSecurity;
