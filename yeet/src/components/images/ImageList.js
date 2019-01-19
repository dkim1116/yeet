import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo } from '../../actions';

import ImageDetail from './ImageDetail';

class ImageList extends React.Component {

    componentDidMount() {
        this.props.fetchVideo();
    }

    renderList() {
        return this.props.videos.map(x => {
            return <ImageDetail videoItem={x} />
        })
    }

    render() {
        return (
            <div>
                <h3>Image List</h3>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { videos: state.videos }
}

export default connect(
    mapStateToProps,
    { fetchVideo } 
)(ImageList);