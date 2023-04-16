import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Heading, Text, UnorderedList, ListItem, Button } from '@chakra-ui/react';

function Account() {
  const [currentTab, setCurrentTab] = useState('');
  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  const handleLogout = () => {
    fetch('/user/logout', {
      method: 'POST',
      credentials: 'include'
    }).then(response => {
      console.log('User has been logged out');
      window.location.href = '/';
    }).catch(error => {
      console.error('Error logging out:', error);
    });

  };

  const authUser = window._user; // Access the authUser variable from the global _user variable

  let content = '';
  switch (currentTab) {
    case 'Account Details and Settings':
      content = (
        <>
          <Text>
            Welcome to Account Settings!<br />
            <br />
            Your account information:<br />
            <strong>First Name:</strong> {authUser.first_name}<br />
            <strong>Last Name:</strong> {authUser.last_name}<br />
            <strong>Email:</strong> {authUser.email}<br />
            <strong>ID:</strong> {authUser.id}<br />
            <strong>Address ID:</strong> {authUser.address_id}<br />
            <br />
            To update your account information, you can click here to go directly to your account page and make any necessary changes:<br />
            <br />
            <a href="/user/me" style={{ color: 'blue', fontWeight: 'bold' }}>Edit Account Information!</a>
          </Text>
        </>
      );
      break;
    case 'View your Toolshed':
      content = (
        <>
          <Text>
            Welcome to your Toolshed!<br />
            <br />
            To view your Toolshed, you can click here to go directly to your ToolShed page and make any necessary changes:<br />
            <br />
            <a href="/user/me/tools" style={{ color: 'blue', fontWeight: 'bold' }}>View your ToolShed!</a>
          </Text>
        </>
      );
      break;
    case 'Log Out':
      content = (
        <>
          <Text>
            Thank you for using our website! We hope you had a great experience.<br />
            <br />
            Have a nice day, and see you again soon!<br />
            <br />
            <Button onClick={handleLogout}>Click here to logout</Button>
          </Text>
        </>
      );
      break;
    default:
      content = '';
  }

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
