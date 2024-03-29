import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import StyledLink from "../components/StyledLink";
import Game from "../components/Game";

const IndexPage = ({ data }) => {
	return (
		<Layout pageTitle="Home">
			<Seo />
			<StyledGamesList>
				{data.allMarkdownRemark.edges.map((data) => (
					<StyledLink key={data.node.id} to={data.node.fields.slug}>
						<Game
							key={data.node.id}
							name={data.node.frontmatter.title}
							rating={data.node.frontmatter.rating}
						/>
					</StyledLink>
				))}
			</StyledGamesList>
		</Layout>
	);
};

const StyledGamesList = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 50%;
	margin: auto;

	@media (max-width: 1600px) {
		width: 65%;
	}

	@media (max-width: 1300px) {
		width: 80%;
	}

	@media (max-width: 780px) {
		width: 100%;
		row-gap: 1rem;
	}
`;

export const query = graphql`
	query MainQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
			edges {
				node {
					frontmatter {
						title
						rating {
							gameplay
							graphics
							story
						}
					}
					id
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
