import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { MOVIE_LIST } from "../queries";
import MovieList from "../component/Movie";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div`
    padding: 50px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size:14px;
`;

const Home = () => {
    const {data, error, loading} = useQuery(MOVIE_LIST);
    return (
        <Container>
            <Helmet>
                <title>Home / MovieQl</title>
            </Helmet>
            {loading && "loading"}
            {error && "something is wrong" }
            {!loading && 
                data &&
                data.movies.map(movie =>(
                    <MovieList
                        id={movie.id}
                        key={movie.id}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                        genres={movie.genres}
                        summary={movie.summary}
                    />
                ))}
        </Container>
    );
};



export default Home;