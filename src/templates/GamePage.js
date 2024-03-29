import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ReviewDate from "../components/GameDetails/ReviewDate";
import GameHeader from "../components/GameDetails/GameHeader";
import Image from "../components/GameDetails/Image";
import Ratings from "../components/GameDetails/Ratings";
import Article from "../components/GameDetails/Article";
import Gallery from "../components/GameDetails/Gallery";

const GamePage = ({ data }) => {
	const game = data.markdownRemark;
	const mainImage = game.frontmatter.images.mainImage;
	const galleryImages = game.frontmatter.images.galleryImages;

	return (
		<Layout pageTitle={game.frontmatter.title}>
			<Seo gameSEO gameNode={game} />
			<GameDetails>
				<ReviewDate reviewDate={game.frontmatter.date} />
				<GameHeader
					gameTitle={game.frontmatter.title}
					rating={game.frontmatter.rating}
				/>
				{mainImage && <Image image={mainImage} alt={game.frontmatter.title} />}
				<Ratings rating={game.frontmatter.rating} />
				{game.html && <Article html={game.html} />}
				{galleryImages && (
					<Gallery pictures={galleryImages} alt={game.frontmatter.title} />
				)}
			</GameDetails>
		</Layout>
	);
};

const GameDetails = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 50%;
	margin: auto;
	color: ${(props) => props.theme.fg};
	@media (max-width: 1600px) {
		width: 65%;
	}

	@media (max-width: 1300px) {
		width: 80%;
	}

	@media (max-width: 780px) {
		width: 100%;
	}
`;

export const query = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			fields {
				slug
			}
			frontmatter {
				title
				date(formatString: "DD MMMM YYYY")
				rating {
					gameplay
					graphics
					story
				}
				images {
					mainImage {
						childImageSharp {
							gatsbyImageData
						}
						publicURL
					}
					galleryImages {
						childImageSharp {
							gatsbyImageData
						}
						id
					}
				}
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default GamePage;
