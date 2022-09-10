import React, { useState } from 'react';

interface UseDropdown {
  dropdown: Element | undefined;
  openDropdown: React.MouseEventHandler<HTMLButtonElement>;
  closeDropdown: () => void;
}

export const useDropdown = (initialState?: Element): UseDropdown => {
  const [dropdown, setAnchorElement] = useState<Element | undefined>(initialState);

  const openDropdown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorElement(event.currentTarget);
  };

  const closeDropdown = () => {
    setAnchorElement(undefined);
  };

  return { dropdown, openDropdown, closeDropdown };
};
