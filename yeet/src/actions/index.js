import images from '../apis/images';

export const fetchVideo = async () => {
    const response = await images.get();

    console.log("RESPONSE");
    console.log(response);

    return {
        type: 'FETCH_VIDEO',
        payload: response.data
    };
};