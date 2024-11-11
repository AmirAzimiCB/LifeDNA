import Tag from "./Tag";
import { removeEdgesAndNodes } from "@/lib/utils";

const ProductKeyIngredients = ({ data }) => {
  const references = removeEdgesAndNodes(data.references);

  return (
    <div className="grid gap-4">
      <h4 className="text-lg font-semibold">Ingredient Information</h4>
      <div className="lg:pr-6">
        <h5 className="font-medium mb-3 capitalize">Key Ingredients</h5>
        <ul className="flex flex-wrap gap-2">
          {references.map((ingredient, index) => (
            <Tag
              key={`key-ingredients-${index}`}
              item={ingredient.fields[0].value}
              className="bg-green-50 border-[#CACACA] border-[.75px] rounded-xl md:gap-2"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductKeyIngredients;
