import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions';

import ImageDetail from './ImageDetail';

class ImageList extends React.Component {

    componentDidMount() {
        this.props.fetchVideo();
    }

    render() {
        return (
            <div>
                <h3>Image List</h3>
                <ImageDetail />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { videos: state.videos }
}

export default connect(
    mapStateToProps,
    { fetchVideo } 
)(ImageList);