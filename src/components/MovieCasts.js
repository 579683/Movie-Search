//This is a component to render movie casts in a list of movie casts in a movie detail page. It neets movie id parameter as a props

import React, {Component} from 'react';
import axios from 'axios';

import {
    Link
} from "react-router-dom";

class MovieCasts extends Component {
    state = {
        movieCasts: []
    }

    componentDidMount() {
        const MOVIE_ID = this.props.movie_id //The type whether this is a top_rated movies or popular movies
        const API_KEY = '21651cfc06aec6e7a17b622403b697db';

        //Get the movie casts via AJAX with axios
        if(MOVIE_ID) {
            axios.get(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${API_KEY}
            `)
                .then(res => {
                    const casts = res.data.cast;
                    this.setState({ movieCasts: casts });
                })
        } else {
            axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}
            `)
                .then(res => {
                    let casts = res.data.results;
                    if(this.props.count) {
                        casts = casts.slice(0, parseInt(this.props.count))
                    }
                    this.setState({ movieCasts: casts })
                })
            }
        }


        render() {
            return (
                <div className="row">
                    <ul className="cast-card-container list-unstyled col-12">
                        {this.state.movieCasts.map(cast =>
                            <li className="cast-card">
                                <a href={ `/people/${cast.id}` } title={cast.name}>
                                    <div className="image-container">
                                        {/* Render the image from API if there is a profile_path */}
                                        {cast.profile_path &&
                                            <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={`${cast.name} Picture`} />
                                        }
                                        {!cast.profile_path &&
                                            <img className="backstage-img" src="/icons/backstage.svg" alt={`${cast.name} Picture`} />
                                        }
                                    </div>
                                    <div class="cast-card--title">
                                        <p><b>{cast.name}</b></p>
                                        {cast.character &&
                                            <p>as {cast.character}</p>
                                        }
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }

export default MovieCasts;