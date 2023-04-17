import React, { useState, useEffect } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Text, Heading, Flex, Link} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons'

import LinkButton from './LinkButton';
import {billingIntervalPluralNouns, billingIntervalNouns} from '../../constants';

const Video = ({url}) =>
            <iframe
              width="560"
              height="315"
              src={url}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />;

const Listing = ({ id: listingId, price, billingInterval, maxBillingIntervals, tool, isPrimary=false, isOwn=false }) => {
	if (tool.video === 'https://www.youtube.com/') tool.video = null;
	
	const videoId = getVideoId(tool.video);

	const biNoun = (maxBillingIntervals === 1 ? billingIntervalNouns : billingIntervalPluralNouns)[billingInterval];
	const isRental = billingInterval !== 'eternity';

	return (
		<Card>
			<CardHeader>
				<Flex direction="row" justifyContent="space-between">
					<Heading size="lg">{tool.name}</Heading>
					{!isOwn && <LinkButton url={`/inbox/${tool.owner.id}/?listingId=${listingId}`}>Contact {tool.owner.first_name}</LinkButton>}
					{isOwn && <LinkButton url={`/tools/${tool.id}/edit`}>Edit</LinkButton>}
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

export default Listing;
