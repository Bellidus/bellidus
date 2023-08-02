// our-story.component.jsx

import React from 'react';
import Container from '@mui/material/Container';

const OurStoryComponent = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Ocupar toda a altura da viewport
      }}
    >
      <h1>Nossa História</h1>
      <p>
        Aqui está a história emocionante de nossa jornada usando MaterialUI para
        centralizar esta página.
      </p>
    </Container>
  );
};

export default OurStoryComponent;