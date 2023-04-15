import React, { useContext } from "react";
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Flex, Spacer, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";

const NavBar = ({ authUser }) => {
  const navItemsLeft = {
    "/": "ToolShed",
    "/about": "About",
  };

  const navItemsRight = {};

  if (authUser) {
    navItemsRight["/inbox"] = <MdOutlineEmail />;
    navItemsRight["/account"] = <MdOutlineAccountCircle />;
    navItemsLeft["/user/me/reviews"] = "My Review";
    navItemsLeft["/review/users"] = "Review";
  } else {
    navItemsRight["/user/login"] = "Log In";
    navItemsRight["/user/new"] = "Sign Up";
    
  }
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
      <Box bg="blue.500" position="sticky" top="0" left="0" w="100%" p="4">
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center" justify="space-between" w={authUser ? "30%" : "10%"}>
              <a href="/" style={{ color: "white", fontSize: "24px" }}>
                <strong>{navItemsLeft["/"]}</strong>
              </a>
              {authUser ? (
              <Menu isOpen={isOpen} onClose={onClose}>
                <MenuButton onClick={onOpen} as={Button} rightIcon={<ChevronDownIcon />} bg="blue.500" color="white" border="0px" fontSize="16px" w="max-content" transition="all 0.3s ease" _focus={{outline: "none"}} _hover={{bg: "blue.400"}}>
                  General
                </MenuButton>
                
                <MenuList onMouseLeave={onClose} bg="blue.500" style={{minWidth: '100px'}} border="0px" transition="all 0.3s ease">
                  <MenuItem as="a" href="/user/me/tools" 
                            color="white"
                            bg="blue.500"
                            _hover={{ bg: "blue.400" }}
                            _focus={{ bg: "blue.600", boxShadow: "inner", outline: "none" }}
                            px="4"
                  >Tools</MenuItem>
                  <MenuItem as="a" href="/tools/new" 
                            color="white"
                            bg="blue.500"
                            _hover={{ bg: "blue.400" }}
                            _focus={{ bg: "blue.600", boxShadow: "inner", outline: "none" }}
                            px="4"
                  >Add Tool</MenuItem>
                  <MenuItem as="a" href="/user/me/listings" 
                            color="white"
                            bg="blue.500"
                            _hover={{ bg: "blue.400" }}
                            _focus={{ bg: "blue.600", boxShadow: "inner", outline: "none" }}
                            px="4"
                  >Listings</MenuItem>
                  <MenuItem as="a" href="/user/me/reviews" 
                            color="white"
                            bg="blue.500"
                            _hover={{ bg: "blue.400" }}
                            _focus={{ bg: "blue.600", boxShadow: "inner", outline: "none" }}
                            px="4"
                  >My Reviews</MenuItem>

                </MenuList>
              </Menu>
              ) : null}
              {Object.entries(navItemsLeft).map(([url, label]) => (
                url !== "/" && (
                  <a
                    key={url}
                    href={url}
                    style={{
                      color: "white",
                      fontSize: "16px",
                      marginLeft: "8px",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ccc";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "white";
                    }}
                  >
                    {label}
                  </a>
                )
              ))}
          </Flex>
          <Flex alignItems="center" justify="space-around" w={authUser ? "5%" : "10%"}>
            {Object.entries(navItemsRight).map(([url, label]) => (
              <a
                key={url}
                href={url}
                style={{
                  color: "white",
                  marginLeft: "8px",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ccc";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "white";
                }}
              >
                {typeof label === "string" ? (
                  label
                ) : (
                  <IconButton
                    aria-label={url}
                    variant="ghost"
                    icon={label}
                    fontSize="24px"
                    mr={2}
                    _hover={{ bg: "blue.400" }}
                    _focus={{ bg: "blue.600", boxShadow: "inner",  }}
                  />
                )}
              </a>
            ))}
          </Flex>
        </Flex>
      </Box>
  );
};


ReactDOM.createRoot(document.getElementById('nav')).render(
  <ChakraProvider>
      <NavBar {...window.__NavBarProps} />
  </ChakraProvider>
);
