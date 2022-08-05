import React from 'react';
import { FormSearchDashboard } from './form.styled';
import { InputSearchDashboard } from './input.styled';
import { IconSearch } from './icon.styled';
import { IconButton } from '@mui/material';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from 'react';

const SearchDashboard: React.FC = () => {
  const [term, setTerm] = useState('');

  return (
    <FormSearchDashboard>
      <IconSearch />
      <InputSearchDashboard
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search Content"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton style={{ visibility: term ? 'visible' : 'hidden' }} onClick={() => setTerm('')}>
        <RiCloseFill />
      </IconButton>
    </FormSearchDashboard>
  );
};

export default SearchDashboard;
