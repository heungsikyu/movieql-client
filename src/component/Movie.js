import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";


const Movie = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 50px;
    text-overflow: ellipsis;
    padding: 0 20px;
    box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133, 0.22);
    border-radius: 10px;
`;

const MovieColumn = styled.div`
    width: 43%;
    box-sizing: border-box;
    text-overflow: ellipsis;
`;

const Title = styled.div`
    margin: 20px 0px;
    font-size: 20px;
    font-weight: 600;
`;
 
const Rating = styled.span`
    font-size: 15px;
    line-height:normal;
    color: #fbc531;
`;

const Img = styled.img`
    max-width: 100%;
    position: relative;
    top: -20px;
    box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3), 10px 15px 12px rgba(80, 80, 80, 0.22);
    border-radius: 10px;
`;

const Genres = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom:20px;
`;

const Genre = styled.span`
    margin-right:10px;
    color:#B4B5BD;
`;


const Summary = styled.div`
    line-height: normal;
`;


const MovieList = ({id, title, rating, genres, poster, summary}) => (
        
            <Movie >
                <MovieColumn> 
                <Link to={`/detail/${id}`}>
                    <Img src={poster} alt={poster} /> 
                    </Link>
                </MovieColumn>
                <MovieColumn>
                    <Title><Link to={`/detail/${id}`}>{title} </Link> <Rating>{rating}</Rating> </Title>                   
                    <Genres>
                        {/* {genres} */ console.log({genres})}
                        {genres.map((genre,index ) => <GenreList genre={genre} key={index}/>)}
                    </Genres>
                    <Summary>
                        <LinesEllipsis
                            text={summary}
                            maxLine='5'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'  
                        />
                    </Summary>
                </MovieColumn>
            </Movie>
);

MovieList.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    // genres: PropTypes.array.isRequired,
    poster: PropTypes.string.isRequired

}

const GenreList = ({genre,index}) => {
    return( <Genre  key={index}>{genre}</Genre>)
} 

export default MovieList;