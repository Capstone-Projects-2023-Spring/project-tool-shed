import React, { useState, useEffect } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Text, Heading, Flex, Link} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons'

import ContactOwnerButton from './components/ContactOwnerButton';
import renderComponent from './util/renderComponent';
import {billingIntervalPluralNouns, billingIntervalNouns} from '../constants';

const Video = ({url}) => 
            <iframe
              width="560"
              height="315"
              src={url}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />;

const Listing = ({ id: listingId, owner, price, billingInterval, maxBillingIntervals, tool, isPrimary=false }) => {
	if (tool.video === 'https://www.youtube.com/') tool.video = null;
	
	const videoId = getVideoId(tool.video);

	const biNoun = (maxBillingIntervals === 1 ? billingIntervalNouns : billingIntervalPluralNouns)[billingInterval];
	const isRental = billingInterval !== 'eternity';

	return (
		<Card>
			<CardHeader>
				<Flex direction="row" justifyContent="space-between">
					<Heading size="lg">{tool.name}</Heading>
					<ContactOwnerButton listingId={listingId} owner={tool.owner} />
				</Flex>
			</CardHeader>
			<CardBody>
				<Text>{tool.description}</Text>
				{isPrimary && videoId && <Video url={`https://www.youtube.com/embed/${videoId}`} />}
				{isPrimary && !videoId && tool.video && <Video url={tool.video} />}
				{isPrimary && !videoId && !tool.video && <Link href={getSearchURL(tool)} isExternal>Videos on youtube <ExternalLinkIcon /></Link>}
			</CardBody>
			<CardFooter>
				{isRental ? 
				<Text>For rent for ${price} {billingInterval} (max {maxBillingIntervals} {biNoun})</Text>
				: <Text>For sale for ${price}</Text>}
			</CardFooter>
		</Card>
	);
};

function getSearchURL(tool) {
	return `https://www.youtube.com/results?search_query=${encodeURIComponent(tool.name)}`;
}

function getVideoId(videoUrl) {
	if (!videoUrl) return null;
	const regex = /(?:\/|v=)([\w-]{11})(?:\?|&|$)/;
	const match = videoUrl.match(regex);
	return match ? match[1] : null;
}

const ListingDetails = ({listings, recommendations}) => {
	return <div>
		<Listing {...listings} isPrimary/>
		{recommendations.length > 0 && <Heading size="md">Recommended Tools ⬇️⬇️⬇️</Heading>}
		{recommendations.map(r => <Listing key={r.id} {...r} />)}
	</div>
};

renderComponent('#root', <ListingDetails {...window._listings} />);
