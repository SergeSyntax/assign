import React, { useState } from 'react';
import _ from 'lodash';
import { useReactiveVar } from '@apollo/client';
import { IconButton } from '@mui/material';
import { RiCloseFill } from 'react-icons/ri';
import { searchVar } from 'config';
import { DashboardSearchForm, DashboardSearchIcon, DashboardSearchInput } from './dashboard-search-input.styled';

const EMPTY = '';

const setSearchVar = _.debounce(searchVar, 500);

export const DashboardSearch: React.FC = () => {
  const searchValue = useReactiveVar(searchVar);
  console.log('searchValue', searchValue);
  const [value, setValue] = useState(searchValue);
  console.log('value', value);

  const clearSearch = () => {
    setValue(EMPTY);
    searchVar(EMPTY);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    setSearchVar.cancel();
    setSearchVar(e.target.value);
  };

  return (
    <DashboardSearchForm>
      <DashboardSearchIcon />
      <DashboardSearchInput value={value} onChange={handleInputChange} placeholder="Search Content" />
      <IconButton sx={{ visibility: value ? 'visible' : 'hidden' }} onClick={clearSearch}>
        <RiCloseFill />
      </IconButton>
    </DashboardSearchForm>
  );
};
