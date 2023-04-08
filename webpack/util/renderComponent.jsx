import React from 'react';
import {ThemeProvider, CSSReset} from '@chakra-ui/react';
import {createRoot} from 'react-dom/client';
import toolshedTheme from '../config/theme';

const renderComponent = (_root, jsx) => {
	const root = typeof _root === "string" ? document.querySelector(_root) : _root;
	createRoot(root).render(
		<ThemeProvider theme={toolshedTheme}>
			<CSSReset />
			{jsx}
		</ThemeProvider>
	);
};

export default renderComponent;
