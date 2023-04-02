import { ChakraProvider, Flex, Spacer, Box } from "@chakra-ui/react";
import { MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";

const NavBar = ({ authUser }) => {
    const navItemsLeft = {
      "/": "ToolShed",
      "/about": "About",
    };
  
    const navItemsRight = {}; 
  
    if (authUser) {
      navItemsRight["/account"] = <MdOutlineAccountCircle />;
      navItemsRight["/inbox"] = <MdOutlineEmail />;
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
      <Box bg="blue.500" position="fixed" top="0" left="0" w="100%" p="4">
        <Flex alignItems="center" justify="space-between">
          <Flex alignItems="center">
            <Link href="/">
              <strong>{navItemsLeft["/"]}</strong>
            </Link>
            {Object.entries(navItemsLeft).map(([url, label]) => (
              url !== "/" && (
                <Link key={url} href={url} p="2" ml="2">
                  {label}
                </Link>
              )
            ))}
          </Flex>
          <Flex alignItems="center">
            {Object.entries(navItemsRight).map(([url, label]) => (
              <Link key={url} href={url} p="2" ml="2">
                {typeof label === "string" ? (
                  label
                ) : (
                  <IconButton
                    aria-label={url}
                    variant="ghost"
                    icon={label}
                    mr={2}
                  />
                )}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    );
  };


ReactDOM.createRoot(document.getElementById('nav')).render(
  <ChakraProvider>
      <NavBar
      authUser={_user} />
  </ChakraProvider>
);