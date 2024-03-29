import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

const Game = ({ name, rating }) => {
	let numberOfRatings = 0;
	for (let key in rating) {
		if (rating[key] != null) {
			numberOfRatings++;
		}
	}
	const overAllRating =
		(rating.graphics + rating.gameplay + rating.story) / numberOfRatings;

	return (
		<StyledGame>
			<MainGameData>
				<h2>{name}</h2>
				<OverAllRating>
					<RatingText>
						{Math.round((overAllRating + Number.EPSILON) * 100) / 100} / 5
					</RatingText>
					<Stars rating={overAllRating} />
				</OverAllRating>
			</MainGameData>
		</StyledGame>
	);
};

const StyledGame = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	color: ${(props) => props.theme.fg};
	width: 100%;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		box-shadow: -5px -5px 15px 0 ${(props) => props.theme.shadowL},
			5px 5px 15px 0 ${(props) => props.theme.shadowD};
	}
`;

const MainGameData = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	column-gap: 1rem;
	@media (max-width: 780px) {
		flex-direction: column;
		text-align: center;
		row-gap: 0.3rem;
	}
`;

const OverAllRating = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
`;

const RatingText = styled.p`
	font-size: 1.3rem;
	color: ${(props) => props.theme.fg};
`;

export default Game;
