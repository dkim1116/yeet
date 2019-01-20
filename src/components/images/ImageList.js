import React from 'react';
import { connect } from 'react-redux';
import { getRecent } from '../../actions';

import ImageDetail from './ImageDetail';

class ImageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: null };
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
        })
    }

    render() {
        return (
            <div className="ui raised segment">
                <div className="ui red ribbon label">
                    <i className="rocket icon"></i>
                    Explore
                </div>
                <span>
                    Retrieved for: 
                    {this.state.searchTerm ? this.state.searchTerm : " Recent Uploads"}
                </span>
                <p></p>
                <div className="ui three column grid">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos };
}

export default connect(
    mapStateToProps,
    { getRecent } 
)(ImageList);