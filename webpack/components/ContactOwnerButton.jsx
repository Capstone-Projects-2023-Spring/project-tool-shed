import React from 'react';
import {Link, Button} from '@chakra-ui/react';

const ContactOwnerButton = ({listingId, owner}) => {
	let url = `/inbox/${owner.id}`;
	if (listingId) {
		url += `?listingId=${listingId}`;
	};

	return (
		<Link href={url}>
			<Button colorScheme="blue">Contact {owner.first_name}</Button>
		</Link>
	);
};

export default ContactOwnerButton;
