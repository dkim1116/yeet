import React from 'react';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions';

import ImageDetail from './ImageDetail';

class ImageList extends React.Component {

    componentDidMount() {
        this.props.fetchPhoto();
    }

    renderList() {
        return this.props.photos.map(photo => {
            return (
                <div className="item" key={photo.id} >
                    <ImageDetail 
                        farmId={photo.farm} 
                        serverId={photo.server} 
                        id={photo.id} 
                        secret={photo.secret} />
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui celled list">
                <h3>Image List</h3>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { photos: state.photos }
}

export default connect(
    mapStateToProps,
    { fetchPhoto } 
)(ImageList);