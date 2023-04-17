import React, { useState, useEffect } from 'react';
import Listing from './components/Listing';
import {Heading, Box} from '@chakra-ui/react';

import renderComponent from './util/renderComponent';

const ListingDetails = ({listings, recommendations}) => {
	return <Box>
		<Listing {...listings} isPrimary/>
		{recommendations.length > 0 && <Heading size="md">Recommended Tools ⬇️⬇️⬇️</Heading>}
		{recommendations.map(r => <Listing key={r.id} {...r} />)}
	</Box>
};

renderComponent('#root', <ListingDetails {...window._listings} />);
