import Tag from "./Tag";
import { removeEdgesAndNodes } from "@/lib/utils";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const ProductIngredients = ({ data }) => {
  const references = removeEdgesAndNodes(data.references);

  const ingredients = references.map((ref) => {
    const transformedData = {
      title: null,
      details: null,
      amount: null,
      is_key: null,
    };

    for (const field of ref.fields) {
      if (field.key in transformedData) {
        const value =
          field.value === "true"
            ? true
            : field.value === "false"
            ? false
            : field.value;

        transformedData[field.key] = value;
      }
    }

    return {
      id: ref.id,
      type: ref.type,
      ...transformedData,
    };
  });

  const keyIngredients = ingredients.filter(
    (ingredient) => ingredient.is_key === true
  );

  return (
    <div className="grid md:pb-8 pb-4 gap-4">
      <h4 className="text-lg font-semibold">Ingredient Information</h4>

      {/* Key Ingredients Tags */}
      <div className="lg:pr-6">
        <h5 className="font-medium mb-3 capitalize">Key Ingredients</h5>
        <ul className="flex flex-wrap gap-2">
          {keyIngredients.map((ingredient, index) => (
            <Tag
              item={ingredient.title}
              key={`key-ingredients-${index}`}
              className="bg-green-50 border-[#CACACA] border-[.75px] rounded-xl md:gap-2"
            />
          ))}
        </ul>
      </div>

      {/* All Ingredients Accordion */}
      <Accordion.Root type="single" collapsible>
        {ingredients.map((ingredient, index) => (
          <Accordion.Item
            key={ingredient.id}
            value={`item-${index}`}
            className="border-b-[0.75px] border-[#CACACA] md:py-4 py-2"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex md:gap-3 gap-2 items-center justify-between w-full pl-1 md:pr-6 pr-3 py-3 text-left [&[data-state=open]>svg]:rotate-180">
                <div className="flex flex-1 gap-2 items-center justify-between">
                  <span className="font-bold">{ingredient.title}</span>
                  <span className="font-semibold text-sm">
                    {ingredient.amount}
                  </span>
                </div>
                <ChevronDownIcon
                  aria-hidden
                  className="w-4 h-4 transition-transform duration-200 ease-out"
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="pl-1 md:pr-6 pr-3 pb-3 text-sm text-gray-600">
              <div className="pt-2">
                {ingredient.details && <p>{ingredient.details}</p>}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default ProductIngredients;
