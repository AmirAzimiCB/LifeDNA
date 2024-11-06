import { Fragment } from "react";
import { removeEdgesAndNodes } from "@/lib/utils";

const ProductWarnings = ({ data }) => {
  const references = removeEdgesAndNodes(data.references);

  return (
    <div className="grid md:pb-8 pb-4 lg:pr-6 gap-4 border-b-[0.75px] border-[#CACACA]">
      <h4 className="text-lg font-semibold">Warnings</h4>
      <div className="flex flex-col gap-4">
        {references.map((reference, index) => {
          const title = reference.fields.find(
            (field) => field.key === "title"
          )?.value;
          const details = reference.fields.find(
            (field) => field.key === "the_warning_details"
          )?.value;

          return (
            <Fragment key={`product-warning-${index}`}>
              <p className="uppercase">{title}</p>
              <p>{details}</p>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProductWarnings;
