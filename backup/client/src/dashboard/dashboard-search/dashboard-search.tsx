import _ from 'lodash';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { DashboardSearchForm } from './dashboard-search-form.styled';
import { DashboardSearchIcon } from './dashboard-search-icon.styled';
import { DashboardSearchInput } from './dashboard-search-input.styled';
import { RiCloseFill } from 'react-icons/ri';
import { searchVar } from '../../apollo';
import { useReactiveVar } from '@apollo/client';

const EMPTY = '';
const SEARCH_PLACEHOLDER = 'Search Content';

export const DashboardSearch: React.FC = () => {
  const searchValue = useReactiveVar(searchVar);
  const [value, setValue] = useState(searchValue);
  const clearSearch = () => {
    setValue(EMPTY);
    searchVar(EMPTY);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchVarDebounce = React.useCallback(_.debounce(searchVar, 500), []);
  const handleInputChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => {
    setValue(e.target.value);
    searchVarDebounce.cancel();
    searchVarDebounce(e.target.value);
  };

  return (
    <DashboardSearchForm>
      <DashboardSearchIcon />
      <DashboardSearchInput
        value={value}
        onChange={handleInputChange}
        placeholder={SEARCH_PLACEHOLDER}
      />
      <IconButton style={{ visibility: value ? 'visible' : 'hidden' }} onClick={clearSearch}>
        <RiCloseFill />
      </IconButton>
    </DashboardSearchForm>
  );
};
