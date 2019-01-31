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
        const { onSearchTermChange } = this.props;
        event.preventDefault();
        onSearchTermChange(event.target.value);
    }

    onSearchSubmit = (event) => {
        const { searchTerm, searchPhoto } = this.props;
        event.preventDefault();
        searchPhoto(searchTerm);
    }

    render() {
        const { searchTerm } = this.props;
        return (
            <form
                className="ui medium"
                onSubmit={this.onSearchSubmit}>
                <div className="ui fluid search">
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            type="text"
                            placeholder="Search..."
                            onChange={this.onSearchChange}
                            value={searchTerm}/>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = ({ photos, searchTerm, submitTerm }) => ({
  photos,
  searchTerm,
  submitTerm
});

const mapDispatchToProps = (dispatch) => ({
  searchPhoto: (term) => dispatch(searchPhoto(term)),
  onSearchTermChange: (term) => dispatch(onSearchTermChange(term))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
