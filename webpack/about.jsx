import React, { useState } from 'react';
import renderComponent from './util/renderComponent';
import { Box, Heading, Text, UnorderedList, ListItem, Button } from '@chakra-ui/react';

function About() {
  const [currentTab, setCurrentTab] = useState('About');

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  // Define the content to be displayed based on the selected tab
  let content = '';
  switch (currentTab) {
    case 'About':
      content = (
        <>
          <Text>
            Welcome to ShareMyToolShed!<br />
            <br />
            We are a community-based platform that connects people who need tools with local community members who have them.<br />
            <br />
            Our mission is to make it easy and affordable for everyone to access the tools they need to complete their projects, while promoting sharing and sustainability.<br />
            <br />
            We are committed to providing excellent service and support to all of our users.<br />
          </Text>
        </>
      );
      break;
    case 'FAQs':
      content = (
        <>
          <Text>
            Q: How do I create an account?<br />
            A: Click on the "Sign Up" button on the top right corner of the homepage and follow the instructions.
          </Text>
          <br />
          <Text>
            Q: How do I post a tool for rent?<br />
            A: First, create an account and log in. Then, click on "Post a Tool" on the navigation bar, and fill out the necessary information about your tool.
          </Text>
          <br />
          <Text>
            Q: How do I search for tools?<br />
            A: Use the search bar on the homepage to search for tools by keyword or category. You can also browse tools by category or location.
          </Text>
          <br />
          <Text>
            Q: How do I contact a tool owner?<br />
            A: Click on the "Contact Owner" button on the tool listing page, and fill out the contact form. The tool owner will receive your message and respond accordingly.
          </Text>
          <br />
          <Text>
            Q: What happens if the tool I rented is damaged or lost?<br />
            A: You are responsible for any damage or loss of the tool while it is in your possession. We recommend that you take pictures of the tool before renting it to avoid any disputes.
          </Text>
          <br />
          <Text>
            Q: What happens if the tool owner cancels my reservation?<br />
            A: If the tool owner cancels your reservation, you will receive a full refund. The tool owner may be subject to penalties and suspension from the website.
          </Text>
          <br />
          <Text>
            Q: How do I report a user or tool listing?<br />
            A: Click on the "Report" button on the user profile or tool listing page, and fill out the report form. We take all reports seriously and will investigate any violations of our Terms of Use and Community Guidelines.
          </Text>
        </>
      );
      break;
    case 'Terms of Use':
      content = (
        <>
          <Text>
            Welcome to ShareMyToolshed.com! By using our website, you agree to the following terms and conditions:
          </Text>
          <br />
          <Text>
            1. Use at Your Own Risk: ShareMyToolshed.com is a platform for users to share tools with one another. You acknowledge that the use of our website and any tools obtained through it is at your own risk. We are not responsible for any damages, theft, or loss of tools that may occur as a result of your use of our website.
          </Text>
          <br />
          <Text>
            2. Ownership of Tools: ShareMyToolshed.com does not own any of the tools listed on our website. Users are solely responsible for the tools they share, including their maintenance and upkeep. We do not guarantee the quality or condition of any tools listed on our website.
          </Text>
          <br />
          <Text>
            3. Prohibited Conduct: You agree not to use ShareMyToolshed.com for any illegal or unauthorized purpose. You also agree not to engage in any conduct that could damage, disable, or impair our website or interfere with any other user's use of our website.
          </Text>
          <br />
          <Text>
            4. Intellectual Property: All content and materials on ShareMyToolshed.com are the property of ShareMyToolshed.com and its licensors. You may not use, reproduce, distribute, or display any content or materials on our website without our prior written consent.
          </Text>
          <br />
          <Text>
            5. Disclaimer of Liability: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SHAREMYTOOLSHED.COM DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IN NO EVENT SHALL SHAREMYTOOLSHED.COM BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING OUT OF YOUR USE OF OUR WEBSITE OR ANY TOOLS OBTAINED THROUGH IT.
          </Text>
          <br />
          <Text>
            6. Indemnification: You agree to indemnify and hold ShareMyToolshed.com, its affiliates, officers, directors, employees, and agents harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our website, your violation of these terms and conditions, or your violation of any rights of another user or third party.
          </Text>
          <br />
          <Text>
            7. Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [insert state/country], without giving effect to any principles of conflicts of law.
          </Text>
          <br />
          <Text>
            8. Modification: ShareMyToolshed.com reserves the right to modify these terms and conditions at any time. Your continued use of our website after any such modifications shall constitute your agreement to the modified terms and conditions.
          </Text>
          <br />
          <Text>
            By using ShareMyToolshed.com, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree to these terms and conditions, you may not use our website.
          </Text>
        </>
      );
      break;
    case 'Avoiding Scams':
      content = (
        <>
          <Text>
            Scams are unfortunately common in the online world, and ShareMyToolshed.com is not immune. Here are some tips to help you avoid scams:
          </Text>
          <br />
          <Text>
            1. Deal only with trusted users: Stick to users who have a good reputation on the website. Check their ratings and reviews before agreeing to a transaction.
          </Text>
          <br />
          <Text>
            2. Use caution when dealing with new users: If you are dealing with a new user, be extra cautious. Ask for references, and consider meeting in person to assess the user's legitimacy.
          </Text>
          <br />
          <Text>
            3. Avoid wire transfers: Scammers often ask for wire transfers because they are difficult to trace. Never wire money to someone you don't know.
          </Text>
          <br />
          <Text>
            4. Beware of fake checks: Fake checks are a common scam. Never accept a check for more than the agreed-upon amount, and never send money back to the user until the check has fully cleared.
          </Text>
          <br />
          <Text>
            5. Be wary of overpayment: If a user overpays for a tool and asks you to wire back the excess amount, it is likely a scam. Do not wire the money back, and report the user to ShareMyToolshed.com immediately.
          </Text>
          <br />
          <Text>
            6. Report suspicious activity: If something seems off about a user or transaction, report it to ShareMyToolshed.com immediately. We take all reports seriously and will investigate any suspicious activity.
          </Text>
        </>
      );


      break;
    default:
      content = '';
  }


  return (
    <Box maxW="600px" mx="auto" p="4">
      <UnorderedList mb="8" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" listStyleType="none">
        <ListItem>
          <Button onClick={() => handleTabChange('About')}>About</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleTabChange('FAQs')}>FAQs</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleTabChange('Terms of Use')}>Terms of Use</Button>
        </ListItem>
        <ListItem>
          <Button onClick={() => handleTabChange('Avoiding Scams')}>Avoiding Scams</Button>
        </ListItem>
      </UnorderedList>
      <Heading as="h1" mb="4">{currentTab}</Heading>
      <Text mb="4">{content}</Text>
    </Box>
  );
}

renderComponent("#root", <About />);
