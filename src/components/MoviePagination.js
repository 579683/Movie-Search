//This is a component to render to pagination in a movie page. Separated from movie card component so the maintenance of this component will be easier

import React, {Component} from 'react';
import Pagination from 'react-bootstrap/Pagination';

import {
    Link
} from "react-router-dom";

class MoviePagination extends Component {

    render() {

        //This is an algorithm to append the pagination
        var active = parseInt(this.props.activePage); //active is the active page of the pagination
        var last = parseInt(this.props.totalPages);
        var delta = 3; //Delta is the range between active pagination with the first pagination and last pagination
        var left = active - delta; //Left is the index of items which on the left side of active
        var right = active + delta + 1; //Right is the index of 3 items which on the right side of active
        var items = []; //Items is the pagination items that will be rendered

        if(last > 1) {
            for(let i = 1; i <= last; i++) {
                //Append the pagination item at first, last, active page, 3 on the left of active and 3 on the right of active
                if(i === 1 || i === last || i >= left && i < right) {
                    if(this.props.searchTitle) {
                        items.push(
                            <Pagination.Item key={i} active={i === active} href={`?title=${this.props.searchTitle}&page=${i}`}>{i}

                            </Pagination.Item>
                        );
                    } else {
                        items.push(
                            <Pagination.Item key={i} active={i === active} href={`?page=${i}`}>{i}</Pagination.Item>
                        );
                    }
                }

                //Append the ellipsis pagination on the second item and second last item if active < left or active >= left
                if(i === 2 && i < left || i === last - 1 && i >= right) {
                    items.push(<Pagination.Ellipsis disabled/>)
                }
            }
        }

        return (
            <Pagination>

                {/* If it is not search page, render this */}
                {!this.props.searchTitle &&
                    <Pagination.First href="?page=1" />
                }

                {/* If it is search page, render this */}
                {this.props.searchTitle &&
                    <Pagination.First href={`?title=${this.props.searchTitle}&page=1`} />
                }

                {/* Render pagination items */}
                {items}

                {/* If it is not search page, render this */}
                {!this.props.searchTitle &&
                    <Pagination.Last href={`?page=${last}`} />
                }

                {/* If it is search page, render this */}
                {this.props.searchTitle &&
                    <Pagination.Last href={`?title=${this.props.searchTitle}&page=${last}`} />
                }
            </Pagination>
        )
    }
}

export default MoviePagination;