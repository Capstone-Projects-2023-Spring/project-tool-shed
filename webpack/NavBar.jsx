import React, { useContext } from "react";
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Flex, Spacer, Box, IconButton } from "@chakra-ui/react";
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
    navItemsLeft["/user/me/tools"] = "Tools";
    navItemsLeft["/tools/new"] = "Add Tool";
    navItemsLeft["/user/me/listings"] = "Listings";
    navItemsLeft["/user/me/reviews"] = "My Review";
    navItemsLeft["/review/users"] = "Review";
  } else {
    navItemsRight["/user/login"] = "Log In";
    navItemsRight["/user/new"] = "Sign Up";
    navItemsLeft["/about"] = "About";
  }

  return (
    <Flex>
      <Box bg="blue.500" position="fixed" top="0" left="0" w="100%" p="4">
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center" justify="space-between" w="30%">
            <a href="/" style={{ color: "white", fontSize: "24px" }}>
              <strong>{navItemsLeft["/"]}</strong>
            </a>
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
          <Flex alignItems="center">
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
    </Flex>
  );
};


ReactDOM.createRoot(document.getElementById('nav')).render(
  <ChakraProvider>
      <NavBar authUser={_user} />
  </ChakraProvider>
);
