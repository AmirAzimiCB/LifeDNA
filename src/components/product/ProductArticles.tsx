import Link from "next/link";
import { removeEdgesAndNodes } from "@/lib/utils";

const ProductArticles = ({ data, title = "Articles and Videos" }) => {
  const references = removeEdgesAndNodes(data.references);

  return (
    <div className="grid gap-4">
      <h4 className="text-lg font-semibold">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {references.map((reference, index) => {
          const linkText = reference.fields.find(
            (field) => field.key === "link_text"
          )?.value;
          const linkUrl = reference.fields.find(
            (field) => field.key === "link_value"
          )?.value;

          return (
            <Link
              href={linkUrl}
              target="_blank"
              key={`${reference.id}-reference-${index}`}
              className="transition-all hover:opacity-70 border-b-[.25px] border-transparent hover:border-gray-600/70"
            >
              {linkText}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductArticles;
