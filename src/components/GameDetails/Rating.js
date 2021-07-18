import React from "react";
import styled from "styled-components";
import Stars from "../Stars";

const Rating = ({ ratingName, rating }) => {
	return (
		<StyledRating>
			<p>{ratingName}</p>
			<Score>
				<RatingText>{rating} / 5</RatingText>
				<Stars rating={rating} />
			</Score>
		</StyledRating>
	);
};

const StyledRating = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	p {
		font-size: 1.2rem;
	}
`;

const Score = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
`;

const RatingText = styled.p`
	font-size: 1.2rem;
	color: #525252;
`;

export default Rating;