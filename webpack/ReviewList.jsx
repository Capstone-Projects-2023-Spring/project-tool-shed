import React from "react";
import Review from './components/Review';
import renderComponent from './util/renderComponent';

const ReviewList = ({reviews}) => {
	return <div>
		{reviews.map(r => <Review key={r.id} {...r} />)}
	</div>
};

renderComponent('#root', <ReviewList {...window._ReviewListProps} />);


