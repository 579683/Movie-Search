//This component is to render the movie detail page of this application

import React, { Component } from 'react';
import ActorInfo from '../components/ActorInfo';
import MovieCard from '../components/MovieCard';

class ActorDetail extends Component {
    render() {
        const { castSlug } = this.props.match.params

        return (
            <div className="actor-detail">

                <div className="container content no-pad">
                    <div>
                        <ActorInfo actor_id={`${castSlug}`} />
                    </div>
                    <div>
                        <h3>Filmography</h3>
                        <MovieCard actor_id={`${castSlug}`} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ActorDetail;