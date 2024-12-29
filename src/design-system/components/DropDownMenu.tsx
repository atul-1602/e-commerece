import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { useState, useMemo } from "react";

interface DropDownMenuTypes {
  items: string[];
}

const DropDownMenu = ({ items }: DropDownMenuTypes) => {
  const [selectedItem, setSelectedItem] = useState<string>(items[0]);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  const renderedItems = useMemo(() => items.map((item) => (
    <MenuItem key={item} value={item} onClick={() => handleSelect(item)}>
      {item}
    </MenuItem>
  )), [items]);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Text cursor="pointer" display="inline-flex" alignItems="center">
          {selectedItem}
          <ChevronDownIcon ml={2} />
        </Text>
      </MenuTrigger>
      <MenuContent>{renderedItems}</MenuContent>
    </MenuRoot>
  );
};

export default DropDownMenu;
