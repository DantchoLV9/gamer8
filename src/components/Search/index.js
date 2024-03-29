import algoliasearch from "algoliasearch/lite";
import { createRef, default as React, useState, useMemo } from "react";
import { InstantSearch } from "react-instantsearch-dom";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import useClickOutside from "../../hooks/useClickOutside";

const Search = ({ indices }) => {
	const rootRef = createRef();
	const [query, setQuery] = useState();
	const [hasFocus, setFocus] = useState(false);
	const searchClient = useMemo(
		() =>
			algoliasearch(
				process.env.GATSBY_ALGOLIA_APP_ID,
				process.env.GATSBY_ALGOLIA_SEARCH_KEY
			),
		[]
	);
	useClickOutside(rootRef, () => setFocus(false));
	return (
		<StyledSearch ref={rootRef}>
			<InstantSearch
				searchClient={searchClient}
				indexName={indices[0].name}
				onSearchStateChange={({ query }) => setQuery(query)}
			>
				<SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
				<SearchResult
					show={query && query.length > 0 && hasFocus}
					indices={indices}
				/>
			</InstantSearch>
		</StyledSearch>
	);
};

const StyledSearch = styled.div`
	position: relative;
	@media (max-width: 780px) {
		width: 100%;
	}
`;

export default Search;
