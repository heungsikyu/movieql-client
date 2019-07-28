import gql from "graphql-tag";

export const MOVIE_LIST = gql`
    {
        movies(limit:50, rating:6, sort_by: "like_count"){
            id
            title
            rating
            genres
            summary
            medium_cover_image
        }
    }
`;


export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) 
  {
    movie(id: $movieId) {
      medium_cover_image 
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      genres
      medium_cover_image
    }
  }
`;