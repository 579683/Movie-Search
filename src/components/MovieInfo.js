//this component is to render the detail of information of a movie, such as title, description, and list of casts

import React, { Component } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import Navigation from "./Navigation/Navigation";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";

class MovieInfo extends Component {
    state = {
        movieInfos: {},
        movieCasts: [],
        movieVideoKey: ""
    }

    componentDidMount() {
        const MOVIE_ID = this.props.movie_id;
        const API_KEY = "21651cfc06aec6e7a17b622403b697db";

        //get the movie info via AJAX with axios
        axios.get(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                const infos = res.data;
                this.setState({ movieInfos: infos });
            })

        //get the movie video via AJAX with axios
        axios.get(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                let videos = res.data.results;
                videos = videos.filter(video => video.site == "YouTube");

                //if there is a Youtube video link, then set the movieVideoKey state
                if (videos.length > 0) {
                    this.setState({ movieVideoKey: videos[0].key });
                }
            })

    }

    render() {
        //convert the birthday date into the locale string
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        let releaseDate = (new Date(this.state.movieInfos.release_date)).toLocaleDateString('en-US', options);

        const optionsTitle = { year: 'numeric' };
        let yearDate = (new Date(this.state.movieInfos.release_date)).toLocaleDateString('en-US', optionsTitle);

        return (
            <div className="movie-info">
                {/* For the title */}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{`Shade - ${this.state.movieInfos.title}`}</title>
                </Helmet>

                {/* Navigation */}
                <div>
                    <Navigation movieInfos={this.state.movieInfos.title} />
                </div>

                <div className="container">
                    <section className="row section">
                        {/* Render the poster which hidden itself at mobile device when it has video for aesthetic purpose */}
                        {this.state.movieVideoKey &&
                            <div className="col-sm-3">
                                <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.poster_path}`} className="img-fluid d-none d-sm-block" alt={this.state.movieInfos.title} />
                            </div>
                        }

                        {/* Render the poster for all devices it does not have a video for aesthetic purpose */}
                        {!this.state.movieVideoKey &&
                            <div className="col-sm-3">
                                <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.backdrop_path}`} className="img-fluid mb-2 d-block d-sm-none backdrop" alt={this.state.movieInfos.title} />

                                <img src={`https://image.tmdb.org/t/p/w300${this.state.movieInfos.poster_path}`} className="img-fluid d-none d-sm-block" alt={this.state.movieInfos.title} />
                            </div>

                        }

                        <div className="col-sm-9">
                            <div className="flex">
                                <h1 className="movie-info--title">{this.state.movieInfos.original_title} ({yearDate})</h1>
                            </div>
                            <div className="flex my-2">

                                <div className="runtime">
                                    <p className="flex"><span className="icon"><img src="/icons/calendar.svg" /></span>{this.state.movieInfos.runtime} minutes</p>
                                </div>
                                <div className="release_date">
                                    <p className="flex"><span className="icon"><img src="/icons/clock.svg" /></span>{releaseDate}</p>
                                </div>
                                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                <div className="imdb-rating">
                                    <p className="flex"><span className="icon"><img src="/icons/star.svg" /></span><b>{this.state.movieInfos.vote_average}</b>/10 ({this.state.movieInfos.vote_count})
                                    </p>
                                </div>
                            </div>
                            <h2>Plot</h2>
                            <p>{this.state.movieInfos.overview}</p>
                        </div>
                        <div>
                        </div>
                    </section>
                    {/* render the YouTube video */}
                    {this.state.movieVideoKey &&
                        <iframe className="trailer-video" width="100%" src={`https://www.youtube.com/embed/${this.state.movieVideoKey}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameBorder="0"></iframe>
                    }
                    {/* render the YouTube video */}
                </div>
                <MovieInfoBar
                    time={this.state.movieInfos.runtime}
                    budget={this.state.movieInfos.budget}
                    revenue={this.state.movieInfos.revenue}
                />
            </div>

        )
    }
}

export default MovieInfo;