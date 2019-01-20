import React from 'react';

const ImageDetail = (props) => {

    const imageSrcRef = (id, farm, server, secret) => {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    return (
        <div>
            <img src={
                imageSrcRef(
                    props.id, 
                    props.farmId,
                    props.serverId,
                    props.secret)} />
        </div>
    );
}

 
export default ImageDetail;