import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectBoxProps = {
    title: string
    placeholder: string
    items: string[]
    }


export function SelectBox({title, placeholder, items} : SelectBoxProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {items.map((item, index) => (
                <SelectItem key={index} value={item}>{item}</SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
