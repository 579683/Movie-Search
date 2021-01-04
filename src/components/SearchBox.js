//This component is to render Search box. Main Purpose is to search movie

import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

class SearchBox extends Component {
    render() {
        var search = function(e) {
            let searchQuery = document.getElementById('searchForm').value;
            e.preventDefault();
            window.location.href=`/search?title=${searchQuery}`;
        }

         return (
            <Form inline onSubmit={search.bind(this)}>
                <InputGroup  className="search-input" >
                    <FormControl
                        placeholder="Search Movies..."
                        aria-label="Search Movies..."
                        aria-describedby="basic-addon2" id="searchForm" required
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary"><img className="search-icon" src="/icons/search.svg" alt="search-icon"/></Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>

        )
    }
}

export default SearchBox;