import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Heading, Text, UnorderedList, ListItem, Button } from '@chakra-ui/react';

function Account() {
  const [currentTab, setCurrentTab] = useState('');
  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  let content = '';
  switch (currentTab) {
    case 'Account Details and Settings':
      content = (
        <>
          <Text>
            Welcome to Account Settings!<br />
            <br />
            To update your account information, you can click here to go directly to your account page and make any necessary changes:<br />
            <a href="http://127.0.0.1:5000/user/me" style={{ color: 'blue', fontWeight: 'bold' }}>Edit Account Information</a>.
          </Text>
        </>
      );
      break;


    case 'View your Toolshed':
      content = (
        <>
          <Text>
            Welcome to your Toolshed!<br />
          </Text>
        </>
      );
      break;
    case 'Log Out':
      content = (
        <>
          <Text>
            Thank you! Goodbye!<br />
          </Text>
        </>
      );
      break;
    default:
      content = '';
  }

  const handleLogout = () => {
    window.location.href = '/user/logout';
  };

    return (
        <Box maxW="600px" mx="auto" p="4">
            <UnorderedList mb="8" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <ListItem>
                    <Button onClick={() => handleTabChange('Account Details and Settings')}>Account</Button>
                </ListItem>
                <ListItem>
                    <Button onClick={() => handleTabChange('View your Toolshed')}>Toolshed</Button>
                </ListItem>
                <ListItem>
                    <Button onClick={() => handleTabChange('Log Out')}>Log Out</Button>
                    {/* <Button onClick={handleLogout}>Log Out</Button> */}
                </ListItem>
            </UnorderedList>
            <Heading as="h1" mb="4">{currentTab}</Heading>
            <Text mb="4">{content}</Text>
        </Box>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ChakraProvider>
    <Account />
  </ChakraProvider>,
  rootElement
);
