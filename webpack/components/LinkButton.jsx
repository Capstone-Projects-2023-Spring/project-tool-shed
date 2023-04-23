import React from 'react';
import {Link, Button} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';

const LinkButton = ({url, isExternal, children}) => {
	return (
		<Link href={url} isExternal={isExternal}>
			<Button colorScheme="blue">{children}{isExternal ? <ExternalLinkIcon /> : null}</Button>
		</Link>
	);
};

export default LinkButton;
