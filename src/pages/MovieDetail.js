//This component is to render the movie detail page of this application

import React, { Component } from "react";
import MovieInfo from '../components/MovieInfo';
import MovieCasts from '../components/MovieCasts';
import {Helmet} from "react-helmet";

class MovieDetail extends Component {
    render() {
        const { movieSlug } = this.props.match.params
        return (
            <div className="movie-detail">
                <MovieInfo movie_id ={`${movieSlug}`}/>
                <div className="container">
                    <h1>Cast List</h1>
                    <MovieCasts movie_id ={`${movieSlug}`}/>
                </div>
            </div>
        )
    }
}

export default MovieDetail;