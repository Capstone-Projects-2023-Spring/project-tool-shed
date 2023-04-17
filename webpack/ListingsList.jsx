import React from 'react';
import Listing from './components/Listing';
import renderComponent from './util/renderComponent';

const ListingsList = ({ listings, owner }) => {
	return (
		<div>
			{listings.map(l => <Listing isOwn={l.tool.owner.id === owner.id} key={l.id} {...l} />)}
		</div>
	);
};

renderComponent("#root", <ListingsList {...window._ListingsListProps} />);
