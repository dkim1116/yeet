export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_VIDEO':
            return {...state, videos: action.payload}
        default:
            return state;
    }
}