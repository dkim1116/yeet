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
            <div>
                <h3>Image List</h3>
                <div className="ui three column grid">
                    {this.renderList()}
                </div>
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