"use client";

import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Option = {
  value: string;
  label: string | StaticImageData;
};

interface SelectFieldProps {
  options: Option[];
  onValueChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

export function SelectField({
  options,
  onValueChange,
  defaultValue,
  placeholder,
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onValueChange(value);
    setIsOpen(false);
  };

  return (
    <Select.Root
      onValueChange={handleSelect}
      defaultValue={defaultValue}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Select.Trigger
        className={cn(
          isOpen
            ? "border border-b-0 border-[#1A1A1A]"
            : "border-b-[0.5px] border-[#1A1A1A]",
          "flex justify-between items-center px-4 py-2.5 cursor-pointer bg-white w-full outline-none "
        )}
      >
        <Select.Value
          placeholder={placeholder}
          className={`text-xs whitespace-nowrap w-full line-clamp-1 outline-none border-none text-[#1A1A1A] ${
            selectedValue ? "font-bold" : ""
          }`}
        >
          {selectedValue || placeholder}
        </Select.Value>
        <Select.Icon>
          {isOpen ? (
            <ChevronUpIcon className="w-4 h-4 text-[#1A1A1A]" />
          ) : (
            <ChevronDownIcon className="w-4 h-4 text-[#1A1A1A]" />
          )}
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={cn(
            "absolute w-full top-8  z-20 bg-white border-[0.5px] shadow-lg flex flex-col",
            isOpen ? "border-[#1A1A1A] border-t-0" : "border-[#1A1A1A]"
          )}
        >
          <Select.Viewport className="outline-none border-none">
            {options
              .filter((option) => option.value !== selectedValue)
              .map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    "px-4 py-2 text-[10px] text-[#1A1A1A] cursor-pointer hover:bg-[#41c752] hover:text-white hover:font-bold outline-none border-none",
                    selectedValue === option.value ? "font-medium" : ""
                  )}
                >
                  {typeof option.label === "string" ? (
                    <Select.ItemText>{option.label}</Select.ItemText>
                  ) : (
                    <Image
                      src={option.label}
                      alt={`${option.value}`}
                      width={20}
                      height={20}
                    />
                  )}
                </Select.Item>
              ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
