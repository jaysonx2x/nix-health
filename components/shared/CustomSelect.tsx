import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CustomSelect = ({
  title,
  groupTitle,
  items,
}: {
  title: string;
  groupTitle?: string;
  items: string[];
}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-offset-0">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {groupTitle !== "" && <SelectLabel>{groupTitle}</SelectLabel>}
          {items.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
