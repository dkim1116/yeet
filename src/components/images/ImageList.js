import React from 'react';
import { connect } from 'react-redux';
import { 
    getRecent,
    onSearchTermSubmit
} from '../../actions';

import SearchBar from '../SearchBar';
import ImageDetail from './ImageDetail';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRecent();
    }

    renderList() {
        return this.props.photos.map(photo => {
            return (
                <ImageDetail 
                    key={photo.id}
                    farmId={photo.farm} 
                    serverId={photo.server} 
                    id={photo.id} 
                    secret={photo.secret} 
                    title={photo.title}/>
            );
        });
    }

    render() {
        return (
            <div className="ui raised segment">
                <div className="ui red ribbon label">
                    <i className="rocket icon"></i>
                    Exploratorium
                </div>
            
                <div className="ui menu">
                    <div className="item">
                        Retrieved for: 
                        {this.props.submitTerm ? 
                            this.props.submitTerm : " Recent Uploads"}
                    </div>
                    <div className="right item">
                        <SearchBar onSearchSubmit={this.props.onSearchTermSubmit}/>
                    </div>
                </div>
                <div className="ui top attached tabular menu">
                    <p></p>
                    <div className="ui three column grid">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        photos: state.photos, 
        searchTerm: state.searchTerm, 
        submitTerm: state.submitTerm 
    };
};

const mapDispatchToProps = (dispatch) => ({
    getRecent: () => {
        dispatch( getRecent() );
    },
    onSearchTermSubmit: (term) => {
        dispatch( onSearchTermSubmit(term) );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageList);