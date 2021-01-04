//This is a component to render movie cards in a list of movie, wheter it is top_rated or popular movie

import React, {Component} from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

import {
    Link
} from "react-router-dom";

class MovieSlider extends Component {
    state = {
        movies: [],
    }

    componentDidMount() {

        //The type whether this is a top_rated movies or popular movies or movies from search page
        const type = this.props.type;

        //The API key
        const API_KEY = '21651cfc06aec6e7a17b622403b697db';

        //Get the movie via AJAX with axios

        //If this component will be rendered to the home or browse page, execute this code
        axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => {
                const movies = res.data.results;

                this.setState({
                    movies: movies,
                });
            })
        }

        render() {
            return (
                <Carousel
                    controls="false"
                >
                    {
                        this.state.movies.slice(0, parseInt(this.props.count)).map(movie =>
                            <Carousel.Item>
                                <a href={ `/movies/${movie.id}`}>
                                    <div className="carousel-img-container">
                                        <img
                                            className="d-block w-100"
                                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                            alt={`${movie.title} Poster`}
                                        />
                                        <div className="overlay"></div>
                                    </div>
                                    <div className="container relative">
                                        <Carousel.Caption className="col-12">
                                            <h3>{movie.title}</h3>
                                            <p>{movie.overview}</p>
                                        </Carousel.Caption>
                                    </div>
                                </a>
                            </Carousel.Item>
                        )
                    }

                </Carousel>
            )
        }

    }

export default MovieSlider;
