import React from 'react';
import { connect } from 'react-redux';
import { searchPhoto } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: null };
    }

    onSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value})
    }

    onSearchSubmit = (event) => {
        event.preventDefault();

        this.props.searchPhoto(this.state.searchTerm);
    }

    render() {
        return (
            <form className="ui" onSubmit={this.onSearchSubmit}>
                <div className="ui search">
                    <div className="ui icon input">
                        <input 
                            className="prompt" 
                            type="text" 
                            placeholder="Search..." 
                            onChange={this.onSearchChange}/>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos };
}

export default connect(mapStateToProps, { searchPhoto })(SearchBar);