import React from 'react';
import { connect } from 'react-redux';
import { 
    searchPhoto, 
    onSearchTermChange
} from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    onSearchChange = (event) => {
        event.preventDefault();

        this.props.onSearchTermChange(event.target.value);
    }

    onSearchSubmit = (event) => {
        event.preventDefault();

        this.props.searchPhoto(this.props.searchTerm);
    }

    render() {
        return (
            <form 
                className="ui medium" 
                onSubmit={
                    this.props.onSearchSubmit(this.props.submitTerm)
                }>
                <div className="ui fluid search">
                    <div className="ui icon input">
                        <input 
                            className="prompt" 
                            type="text" 
                            placeholder="Search..." 
                            onChange={this.onSearchChange}
                            value={this.props.searchTerm}/>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos, searchTerm: state.searchTerm, submitTerm: state.submitTerm };
}

export default connect
(mapStateToProps, { 
    searchPhoto, 
    onSearchTermChange,
})(SearchBar);