import React from 'react';
import { ItemMenuFooter } from '../item';
import { FOOTER_MENU_LIST } from './list.constant';
import { WrapperMenuListFooter } from './wrapper.style';

export const Menu: React.FC = () => (
  <WrapperMenuListFooter>
    {FOOTER_MENU_LIST.map(item => (
      <ItemMenuFooter key={item.title} {...item} />
    ))}
  </WrapperMenuListFooter>
);
