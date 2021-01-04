//This component is to render the homepage of this application

import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import MovieCasts from '../components/MovieCasts';

import MovieSlider from '../components/MovieSlider'
import { Helmet } from "react-helmet";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                {/* Show The Title of The Page */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Browse for Your Favourite Movies Here!</title>
                </Helmet>
                {/* Show The Slider */}
                <MovieSlider type="popular" count="5" />
                <div className="container content no-pad">

                    {/* Show 10 Popular Actors */}
                    <h1>Popular Actor/Actress Today</h1>
                    <MovieCasts count="10" />
                </div>
            </div>
        )
    }
}

export default Home;