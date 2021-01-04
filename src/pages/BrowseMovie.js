//This page is for browse movie page, like for Top Movies and Popular Movies, also Search Results Page. Renders Movie Card Page and paginations


import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import MovieInfo from "../components/MovieInfo";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation";

class ActorDetail extends Component {

    render() {
        //These variables below is to render the title of the page. Whether to render Top Movies page, Popular page, or Search Result Page
        let pageTitle = "";

        //Set the title to "Top" if type="top_rated"
        if (this.props.type === "top_rated") {
            pageTitle = "Top"
        }

        //Set the title to "Popular" if type="popular"
        if (this.props.type === "popular") {
            pageTitle = "Popular"
        }

        //Variables to parse query string from URL into a proper object
        const queryString = require('query-string');
        const parsedQueryString = queryString.parse(window.location.search);

        //SearchTitle is the title parameter in the search query on URL
        const searchTitle = parsedQueryString.title;

        return (
            <div className="container">
                {this.props.type !== "search" &&
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Shade - {pageTitle} Movies</title>
                    </Helmet>
                }

                {this.props.type === "search" &&
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Shade - Search Results for "{searchTitle}"</title>
                    </Helmet>
                }


                {this.props.type !== "search" &&
                    <h1>{pageTitle} Movies</h1>
                }
                {this.props.type === "search" &&
                    <h1> Search Results For "{searchTitle}"</h1>
                }
                <MovieCard type={this.props.type} isBrowsePage="true" searchTitle="" />
            </div>
        )
    }
}



export default ActorDetail;