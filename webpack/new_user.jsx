//This isn't being used at the moment

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import NewUserForm from './NewUserForm';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <ChakraProvider>
    <NewUserForm />
  </ChakraProvider>
);