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

  return (
    <div className="grid md:pb-8 pb-4 gap-4">
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
