"use client";
import { Button } from "../ui/Button";
import { useDebounce } from "react-use";
import { Input } from "@/components/ui/Input";
import { useState, useRef, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import SortSelect from "@/components/filter-sort/Sort";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import useClickOutside from "../hooks/useClickOutside";

const PRICE_RANGE_FILTER_DEBOUNCE = 500;

const FilterPopup = ({ filters, close }) => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const ref = useRef(null);
  const router = useRouter();
  useClickOutside(ref, close);

  const isFilterSelected = (filterValue) => {
    if (!filterValue.input) return false;

    // Parse the input
    const input = JSON.parse(filterValue.input);
    const key = Object.keys(input)[0];
    const value = input[key];

    if (key === "variantOption") {
      const expectedValue = `${value.name}:${value.value}`;
      return params.getAll(key).includes(expectedValue);
    } else if (key === "productMetafield") {
      // For productMetafield, construct the expected string format
      const expectedValue = `${value.namespace}:${value.key}:${value.value}`;
      return params.getAll(key).includes(expectedValue);
    }

    // For other filters (like available)
    return params.getAll(key).includes(String(value));
  };

  // Helper function to toggle filter
  const toggleFilter = (filter, value) => {
    const newParams = new URLSearchParams(params);

    // Parse the input
    const input = JSON.parse(value.input);
    const key = Object.keys(input)[0];
    const filterValue = input[key];

    if (key === "variantOption") {
      const variantString = `${filterValue.name}:${filterValue.value}`;

      if (isFilterSelected(value)) {
        const currentValues = params.getAll(key);
        newParams.delete(key);
        currentValues
          .filter((v) => v !== variantString)
          .forEach((v) => newParams.append(key, v));
      } else {
        newParams.append(key, variantString);
      }
    } else if (key === "productMetafield") {
      const metafieldString = `${filterValue.namespace}:${filterValue.key}:${filterValue.value}`;

      if (isFilterSelected(value)) {
        const currentValues = params.getAll(key);
        newParams.delete(key);
        currentValues
          .filter((v) => v !== metafieldString)
          .forEach((v) => newParams.append(key, v));
      } else {
        newParams.append(key, metafieldString);
      }
    } else if (typeof filterValue === "boolean") {
      // Special handling for boolean filters
      if (isFilterSelected(value)) {
        // Remove only this specific boolean value
        const currentValues = params.getAll(key);
        newParams.delete(key);
        currentValues
          .filter((v) => v !== String(filterValue))
          .forEach((v) => newParams.append(key, v));
      } else {
        // Add the new boolean value
        newParams.append(key, filterValue);
      }
    } else {
      // Handle other filter types
      if (isFilterSelected(value)) {
        newParams.delete(key);
      } else {
        newParams.append(key, filterValue);
      }
    }

    router.push(`${path}?${newParams.toString()}`, undefined, {
      scroll: false,
      shallow: true,
    });
  };

  return (
    <aside className="lg:hidden flex items-end fixed inset-0 backdrop-blur-lg bg-black/10">
      <div
        ref={ref}
        className="flex-1 flex gap-4 flex-col bg-white px-0 py-4 h-[95vh] rounded-t-xl overflow-hidden"
      >
        <h4 className="lg:hidden font-bold flex capitalize text-[#383B42] text-2xl mx-auto">
          filters
        </h4>
        <div className="border-b-[0.75px] border-[#CACACA] flex-1  px-4 overflow-y-auto pb-4">
          {filters.map((filter, index) => {
            return (
              <div
                className="border-b-[0.75px] border-[#CACACA] pb-6"
                key={`filter-type-${index}`}
              >
                <h2 className="text-[#383B42] font-medium mb-2">
                  {filter.label}
                </h2>
                <div className="flex flex-col gap-1">
                  {filter.values.map((value, index) => {
                    return (
                      <label
                        key={`filter-value-${index}`}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        {filter.type === "LIST" ? (
                          <>
                            <Checkbox
                              id={`filter-${filter.label}-${value.label}`}
                              checked={isFilterSelected(value)}
                              onCheckedChange={() => toggleFilter(value)}
                            />
                            <span className="text-[#383B42] capitalize">
                              {value.label}
                            </span>
                          </>
                        ) : (
                          filterMarkup(filter, params)
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <SortSelect className="w-full mt-4" />
        </div>
        <div className="lg:hidden block px-4">
          <Button onClick={close}>Done</Button>
        </div>
      </div>
    </aside>
  );
};

export default FilterPopup;

// turns user selected input into filter params values to be extracted in the products page from the URL
function filterInputToParams(type, rawInput, params) {
  const input = typeof rawInput === "string" ? JSON.parse(rawInput) : rawInput;
  switch (type) {
    case "PRICE_RANGE":
      if (input.price.min) params.set("minPrice", input.price.min);
      if (input.price.max) params.set("maxPrice", input.price.max);
      break;
    case "LIST":
      Object.entries(input).forEach(([key, value]) => {
        if (params.has(key, value)) {
          return;
        }
        if (typeof value === "string" || typeof value === "boolean") {
          params.append(key, value);
        } else if (key === "productMetafield") {
          const { namespace, key, value: val } = value;
          const newVariant = `${namespace}:${key}:${val}`;
          const allVariants = params.getAll(`productMetafield`);
          if (!allVariants.includes(newVariant)) {
            params.append("productMetafield", newVariant);
          }
        } else {
          const { name, value: val } = value;
          const allVariants = params.getAll(`variantOption`);
          const newVariant = `${name}:${val}`;
          if (!allVariants.includes(newVariant)) {
            params.append("variantOption", newVariant);
          }
        }
      });
      break;
  }

  return params;
}

// determines what type of filter UI to render
function filterMarkup(filter, params) {
  switch (filter.type) {
    case "PRICE_RANGE":
      const min =
        params.has("minPrice") && !isNaN(Number(params.get("minPrice")))
          ? Number(params.get("minPrice"))
          : undefined;

      const max =
        params.has("maxPrice") && !isNaN(Number(params.get("maxPrice")))
          ? Number(params.get("maxPrice"))
          : undefined;

      return <PriceRangeFilter min={min} max={max} />;

    default:
      return null;
  }
}

// renders price range filter UI
function PriceRangeFilter({ max, min }) {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const [minPrice, setMinPrice] = useState(min ? String(min) : "");
  const [maxPrice, setMaxPrice] = useState(max ? String(max) : "");

  useDebounce(
    () => {
      if (
        (minPrice === "" || minPrice === String(min)) &&
        (maxPrice === "" || maxPrice === String(max))
      )
        return;

      const price = {};
      if (minPrice !== "") price.min = minPrice;
      if (maxPrice !== "") price.max = maxPrice;

      const newParams = filterInputToParams("PRICE_RANGE", { price }, params);
      router.push(`${path}?${newParams.toString()}`, undefined, {
        scroll: false,
        shallow: true,
      });
    },
    PRICE_RANGE_FILTER_DEBOUNCE,
    [minPrice, maxPrice]
  );

  const onChangeMax = (event) => {
    const newMaxPrice = event.target.value;
    setMaxPrice(newMaxPrice);
  };

  const onChangeMin = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
  };

  return (
    <div className="flex">
      <label className="flex-[2] flex items-center justify-between capitalize">
        <Input
          type="number"
          name="maxPrice"
          placeholder={"$"}
          defaultValue={min}
          onChange={onChangeMin}
          className="w-full rounded-md px-[6px] py-[6px]"
        />
      </label>
      <span className="flex-[1] flex items-center justify-center"> - </span>
      <label className="flex-[2] flex items-center justify-between capitalize">
        <Input
          type="number"
          name="minPrice"
          placeholder={"$"}
          defaultValue={max}
          onChange={onChangeMax}
          className="w-full rounded-md px-[6px] py-[5px]"
        />
      </label>
    </div>
  );
}
