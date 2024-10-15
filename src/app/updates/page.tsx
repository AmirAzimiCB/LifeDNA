import { Text, Title, Card } from "@/components/atoms";
import React from "react";

const Updates = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto w-full px-6 py-16 lg:p-16">
      <Card type="h1" className="text-6xl font-semibold">
        LifeDNA Updates
      </Card>
      <Text variant="terms" className="">
        Last updated: <span style={{ color: "#289a96" }}>March 22, 2024</span>
      </Text>

      <UpdateCard
        title="LifeDNA's Removing 3ML Feature Toggle"
        date="March 22, 2024"
        content="As of March 22, 2024, LifeDNA's will begin the process of removing the 3ML (DNA+Demographics) feature toggle on all users' reports. This feature has been in its alpha phase, and, in the interest of providing enhanced value, will be worked on by the LifeDNA team for a future update."
      />

      <UpdateCard
        title="LifeDNA's Application Consent Added to Terms & Conditions"
        date="March 22, 2024"
        content="As of March 22, 2024, LifeDNA's Application Consent has been added to the Terms & Conditions. The Application Consent details what customers can and should expect from their LifeDNA purchases."
      />

      <UpdateCard
        title="LifeDNA's List of Sub-Processors Updated"
        date="March 21, 2024"
        content="As of March 21, 2024, Self Decode, Referral Candy, and UseProof have been added as subprocessors in the EU Privacy Notice."
      />

      <UpdateCard
        title="LifeDNA Adds Aging Report to Premium Reports"
        date="March 14, 2024"
        content="LifeDNA launched the Aging Report, available to all users in the Premium Reports section of their dashboard."
      />

      <UpdateCard
        title="LifeDNA's Terms & Conditions and Privacy Policy Updated"
        date="March 13, 2024"
        content="LifeDNA updated its Terms & Conditions and Privacy Policy in its ongoing efforts in regulatory compliance. Please reference the Terms & Conditions, Section 4.b for details."
      />

      <UpdateCard
        title="LifeDNA Launches DNA-Supplements"
        date="August 31, 2023"
        content="LifeDNA has partnered with OK Capsule, a leading private label supplement provider, to deliver high quality supplement packs for users based on their DNA. Supplements will be available to users in the United States."
      />

      <UpdateCard
        title="LifeDNA Launches DNA-Meals"
        date="August 16, 2023"
        content="LifeDNA has partnered with Mealogic, a leading meal delivery company, to provide high quality meals for users curated by their unique genetic blueprint. Meals will be available in the contiguous United States, dependent on a user's zip code."
      />

      <UpdateCard
        title="LifeDNA Adds Sleep Report"
        date="May 4, 2023"
        content="LifeDNA updated its standard reports to provide include a new Sleep Report. This report includes brand new traits in addition to legacy traits that provide information about a user's sleep hygiene."
      />

      <UpdateCard
        title="LifeDNA's Application Updated to Offer Premium Reports"
        date="February 23, 2023"
        content="LifeDNA updated its Application to provide Premium Reports in addition to the standard reports (Nutrition, Vitamins & Supplements, Skincare, Fitness, Personality & Cognition, and Wellness). The first Premium Report launched is the Methylation Genes Report."
      />

      <UpdateCard
        title="LifeDNA’s Application Updated to Display Users’ Biometric Data"
        date="November 22, 2022"
        content={
          <>
            <Text variant="terms">
              LifeDNA now allows Platinum Members to view their biometrics data
              directly on their Dashboard. By connecting their preferred
              wellness/fitness app, users are able to access their data on Daily
              Activity, Sleep, Exercise, Resting Heart Rate (RHR), and Heart
              Rate Variability.
            </Text>
            <Text variant="terms" className="mt-2">
              Some of the apps available are:
            </Text>
            <ul className="list-disc list-inside mt-2 pl-5">
              <li>
                <Text variant="terms" className="inline">
                  Oura
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Fitbit
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  MyFitnessPal
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  GoogleFit
                </Text>
              </li>
            </ul>
            <Text variant="terms" className="mt-2">
              We’re looking to be able to integrate more apps in the future so
              that members can have more options on which biometrics data they
              would like to take into account.
            </Text>
            <Text variant="terms" className="mt-2">
              With our goal of continuously developing tools that can help
              people optimize their wellness even further, we’re also developing
              personalized lifestyle optimizations based on their biometric
              data.
            </Text>
            <img
              src="/images/update1.png"
              alt="Placeholder for future integrations"
              className="mt-4"
            />
          </>
        }
      />

      <UpdateCard
        title="LifeDNA’s Platform Updated to Include New, Nutrition-Focused Page"
        date="September 12, 2022"
        content={
          <>
            <Text variant="terms">
              While having our customers’ goals in mind, we’ve developed a new,
              exclusive feature that gives Platinum Members access to these
              powerful insights based on the users’ genetic profile, lifestyle,
              and goals.
            </Text>
            <Text variant="terms" className="mt-2">
              <strong>Your suggested macro breakdown:</strong> Discover how many
              calories, grams of fat, grams of protein, and grams of carbs are
              suggested for you. Plus, get your own nutrition profile with
              information about your BMI.
            </Text>
            <Text variant="terms" className="mt-2">
              <strong>
                Your personalized lists of foods to avoid & food substitutes:{" "}
              </strong>{" "}
              Stay on top of your diet by keeping track of foods you need to
              avoid based on your sensitivities and intolerances, as well as
              foods you may use as alternatives.
            </Text>
            <Text variant="terms" className="mt-2">
              <strong>
                Your top food and nutrient suggestions to optimize your
                wellness:
              </strong>
              See your top food sources in order to get the suggested dosage of
              vitamins and minerals indicated in your Vitamin reports.
            </Text>
            <img
              src="/images/update2.png"
              alt="Placeholder for future integrations"
              className="mt-4"
            />
          </>
        }
      />

      <UpdateCard
        title="Demographic Data Incorporated"
        date="May 11, 2022"
        content={
          <>
            <Text variant="terms">
              Every individual is a combination of their DNA, lifestyle, and
              environment. DNA is just one part of the equation of who we are as
              people.
            </Text>
            <Text variant="terms" className="mt-2">
              At LifeDNA, we’re working on developing a fully integrative
              platform that starts with your genetics and combines environment
              and other key health data points to deliver a fully personalized
              approach to wellness.
            </Text>
            <Text variant="terms" className="mt-2">
              With that, LifeDNA has started to incorporate demographics on top
              of DNA data to help make the results, reports, and suggestions
              more accurate and informative. In order to do this, additional
              data is being collected from surveys prior to accessing the
              results.
            </Text>
            <Text variant="terms" className="mt-2">
              The results we provide are now powered by LifeDNA’s unique ML
              Enhanced DNA (your DNA results combined with our proprietary
              machine learning), along with demographics (your answers to the
              survey).
            </Text>
            <img
              src="/images/update3.png"
              alt="Placeholder for future integrations"
              className="mt-4"
            />
          </>
        }
      />

      <UpdateCard
        title="LifeDNA’s Web-App Updated"
        date="February 17, 2022"
        content={
          <>
            <Text variant="terms">
              LifeDNA has recently launched a new, mobile-first interface in
              order to significantly improve users’ experience.
            </Text>
            <Text variant="terms" className="mt-2">
              We’ve also launched new, exclusive DNA features as part of our
              Platinum Membership:
            </Text>
            <Text variant="terms" className="mt-2">
              <ul className="list-disc list-inside mt-2 pl-5">
                <li>
                  <Text variant="terms" className="inline">
                    Wellness Goals
                  </Text>
                </li>
                <li>
                  <Text variant="terms" className="inline">
                    Lab
                  </Text>
                </li>
              </ul>
            </Text>
            <Text variant="terms" className="mt-2">
              The Wellness Goals allow users to take a deeper dive into
              different aspects of their well-being and see how certain traits
              affect each of these:
            </Text>
            <ul className="list-disc list-inside mt-2 pl-5">
              <li>
                <Text variant="terms" className="inline">
                  Cardiovascular
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Brain
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Gut
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Immunity
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Liver
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Endocrine
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  Bone
                </Text>
              </li>
              <li>
                <Text variant="terms" className="inline">
                  And more.
                </Text>
              </li>
            </ul>
            <Text variant="terms" className="mt-2">
              The Lab, on the other hand, allows users to easily and quickly
              find the traits that matter to them the most.
            </Text>
            <Text variant="terms" className="mt-2">
              LifeDNA is looking to launch more incredible features in the
              coming year in order to further improve the overall user
              experience.
            </Text>
            <img
              src="/images/update4.png"
              alt="Placeholder for future integrations"
              className="mt-4"
            />
          </>
        }
      />
    </div>
  );
};

function UpdateCard({
  title,
  date,
  content,
}: {
  title: string;
  date: string;
  content: React.ReactNode;
}) {
  return (
    <Card>
      <Title type="h4" className="text-xl font-semibold">
        {title}
      </Title>
      <Text variant="terms" className="mt-2">
        <span style={{ color: "#289a96" }}>{date}</span>
      </Text>
      <Text variant="terms" className="mt-2">
        {content}
      </Text>
    </Card>
  );
}

export default Updates;
