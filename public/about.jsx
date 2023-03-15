// WORKING
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to ShareMyToolshed.com! We are a platform dedicated to making tool-sharing more accessible, affordable, and sustainable. Our mission is to reduce waste, save money, and build stronger connections within our communities by providing a platform for users to connect and share tools.</p>
      <p>The ShareMyToolshed.com platform was created by a team of students as part of their capstone project. We're constantly working to improve the platform and welcome contributions from anyone who is interested in helping us achieve our mission.</p>
      <p>Thank you for joining us in our mission to make tool-sharing more accessible and sustainable!</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/about/faqs">FAQs</a></li>
        <li><a href="/about/terms_of_use">Terms of Use</a></li>
        <li><a href="/about/avoiding_scams">Avoiding Scams</a></li>
      </ul>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<About />);


// //ChakraUI Ready
// import { Heading, Text, VStack } from "@chakra-ui/react";

// function About() {
//   return (
//     <VStack spacing="4">
//       <Heading as="h1" size="xl" textAlign="center">
//         About Us loaded from about.jsx
//       </Heading>
//       <Text>
//         Welcome to ShareMyToolshed.com! We are a platform dedicated to making
//         tool-sharing more accessible, affordable, and sustainable. Our mission
//         is to reduce waste, save money, and build stronger connections within
//         our communities by providing a platform for users to connect and share
//         tools.
//       </Text>
//       <Text>
//         The ShareMyToolshed.com platform was created by a team of students as
//         part of their capstone project. We're constantly working to improve the
//         platform and welcome contributions from anyone who is interested in
//         helping us achieve our mission.
//       </Text>
//       <Text>
//         Thank you for joining us in our mission to make tool-sharing more
//         accessible and sustainable!
//       </Text>
//     </VStack>
//   );
// }

// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(<About />);
