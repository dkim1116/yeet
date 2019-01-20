import React from 'react';

const ImageDetail = (props) => {

    const imageSrcRef = (id, farm, server, secret) => {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img src={
                        imageSrcRef(
                            props.id, 
                            props.farmId,
                            props.serverId,
                            props.secret)} />
                </div>
                <div className="content">
                    <h4>{props.title.slice(0,40)}</h4>
                </div>
            </div>
        </div>
    );
}

 
export default ImageDetail;