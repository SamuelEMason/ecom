import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Rating({ value, text }) {
	const ratingValues = [...Array(5).keys()];

	return (
		<div className='rating'>
			{ratingValues.map((index) => {
				return (
					<span key={index}>
						{value >= index + 1 ? (
							<FaStar />
						) : value >= index + 0.5 ? (
							<FaStarHalfAlt />
						) : (
							<FaRegStar />
						)}
					</span>
				);
			})}
			<span className='rating-text'>{text}</span>
		</div>
	);
}
