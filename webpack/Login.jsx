import React from 'react';
import renderComponent from './util/renderComponent';
import {FormControl, FormLabel, Input, Button} from '@chakra-ui/react';

const Login = ({redirectURI}) => {
	return (
		<form method="POST">
			{redirectURI && <input name="redirectURI" type="hidden" value={redirectURI} />}
			<FormControl>
				<FormLabel>Email</FormLabel>
				<Input type="email" name="email" placeholder="me@example.com" />
			</FormControl>
			<FormControl mt={6}>
				<FormLabel>Password</FormLabel>
				<Input type="password" name="password" placeholder="*******" />
			</FormControl>
			<Button width="full" mt={4} type="submit">Sign In</Button>
		</form>
	);
};

renderComponent("#root", <Login {...window.__loginProps} />);

