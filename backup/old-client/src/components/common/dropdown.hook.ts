import React, { useState } from 'react';

interface UseDropdown {
  dropdown: Element | null;
  openDropdown: React.MouseEventHandler<HTMLButtonElement>;
  closeDropdown: () => void;
}

export const useDropdown = (initialState: Element | null): UseDropdown => {
  const [dropdown, setAnchorElement] = useState<Element | null>(initialState);

  const openDropdown: React.MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorElement(event.currentTarget);
  };

  const closeDropdown = () => {
    setAnchorElement(null);
  };

  return { dropdown, openDropdown, closeDropdown };
};
