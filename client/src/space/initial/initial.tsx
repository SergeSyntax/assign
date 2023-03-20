import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { SubmitButton } from 'src/common/button/button';
import CreateImage from 'public/img/create.jpg';
import Image from 'next/image';

interface InitialProps {}

export const Initial: React.FC<InitialProps> = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '10rem', display: 'flex' }}>
      <div style={{ marginRight: '5rem' }}>
        <Typography style={{ color: '#333', marginBottom: '.5rem' }} variant="h1">
          Name your first space
        </Typography>
        <Typography style={{ color: '#42526e', marginBottom: '3rem' }} variant="h2">
          A space is a home for your team&apos;s content.
        </Typography>
        <TextField
          style={{ marginBottom: '2rem' }}
          fullWidth
          size="small"
          id="outlined-basic"
          placeholder="Space Name"
          variant="outlined"
        />
        <SubmitButton style={{ marginLeft: 'auto' }} size="small" text="Next" inProgress={false} disabled />
      </div>
      <div style={{ maxWidth: '34rem', opacity: 0.2, filter: 'blur(1px)' }}>
        <Image src={CreateImage} alt="create illustration" />
      </div>
    </Container>
  );
};
