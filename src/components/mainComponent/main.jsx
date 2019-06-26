import React from 'react';

import {
  Container
} from './styled';

import DND from '../DND';
import DNDTarget from '../DNDTarget';
import Result from '../Result';

function Main() {
  return (
    <Container>  
        <DND />
        <DNDTarget />
        <Result />
    </Container>
  );
}

export default Main;
