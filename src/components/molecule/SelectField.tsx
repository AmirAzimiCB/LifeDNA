"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image, { StaticImageData } from "next/image";

type Option = {
  value: string;
  label: string | StaticImageData;
};

interface SelectFieldProps {
  options: Option[];
  onValueChange: (value: string) => void;
  defaultValue?: string;
}

export function SelectField({
  options,
  onValueChange,
  defaultValue,
}: SelectFieldProps) {
  return (
    <Select.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      <Select.Trigger className="bg-white border-b border-[#A5A5A5]  shadow-sm px-4 py-2 inline-flex justify-between items-center w-full">
        <Select.Value
          className="!text-2xl font-semibold leading-[150%] capitalize placeholder:text-2xl"
          placeholder="Select a Report"
        />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="rounded-md shadow-lg overflow-hidden relative">
          <Select.Viewport className="p-2 bg-white ">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="relative cursor-default select-none py-2 pl-10 pr-4 outline-none border-none rounded-xl group hover:bg-[#41C752] hover:text-white"
              >
                <Select.ItemText>
                  {typeof option.label === "string" ? (
                    option.label
                  ) : (
                    <Image
                      src={option.label}
                      width={32}
                      height={32}
                      alt="Option Image"
                    />
                  )}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
