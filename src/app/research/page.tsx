import { Card, Title } from "@/components/atoms";
import { Button } from "@/components/ui/Button";
import { Link } from "lucide-react";

const researchData = [
  {
    title: "MTHFR",
    content:
      "The MTHFR gene may lead to increased inflammation, heart disease, birth defects, difficult pregnancies, and a weakened detoxification ability. Vitamin B and folic acid supplements may be necessary to mitigate weaknesses in this gene.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2667971/",
  },
  {
    title: "NBPF3, ALPL",
    content:
      'Together, these genes help regulate "one-carbon metabolism." If these genes are compromised, your ability to manage Vitamins B6 may be reduced. Coronary heart disease and stroke are proven side effects of this weakness.',
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2773275/",
  },
  {
    title: "FUT2",
    content:
      "The FUT2 gene affects the microbiome of your gut. When this gene is defective, the normal gut microbiome energy metabolism is deregulated. This leads to sub-clinical levels of inflammation associated with Crohn's disease. This gene is also known to affect Vitamin B12 levels.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2673801/",
  },
  {
    title: "CBS",
    content:
      "Coronary artery disease is one of the key risk factors associated with this gene. Certain variants of this gene are known to make folic acid supplements more effective in treating vascular disease and neural tube defects.",
    link: "https://academic.oup.com/ajcn/article/98/3/668/4577061",
  },
  {
    title: "TCN1",
    content:
      "The TCN1 may reduce levels of Vitamin B6, Vitamin B12, and folate. These deficiencies may lead to various illnesses. This gene may also raise levels of homocysteine, which is a key risk factor for heart disease. Supplementation may be useful in these cases.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2773275/",
  },
  {
    title: "KCNJ11",
    content:
      "Type 2 diabetes is one of the greatest threats to health and wellness in the modern world, and may be caused by a sedentary lifestyle, excess alcohol, excess carbohydrate and fat consumption, and more. There is also a strong genetic component.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/17463246",
  },
];

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center my-12">
        Review Our Research Database
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {researchData.map((item, index) => (
          <Card key={index} className="bg-white drop-shadow-xl">
            <Title>{item.title}</Title>
            <Card>
              <p className="text-sm text-gray-600 mb-2">{item.content}</p>
              <Button variant="primary" className="flex items-center gap-2">
                <Link className="h-4 w-4" />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600"
                >
                  Read more
                </a>
              </Button>
            </Card>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>
          If you choose to consent to research, you agree to the terms{" "}
          <a href="#" className="text-green-600">
            here
          </a>
          .
        </p>
        <p className="mt-4">Full list of references available upon request.</p>
        <p>
          Please email us at{" "}
          <a href="mailto:aloha@lifedna.com" className="text-green-600">
            aloha@lifedna.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
