import React from 'react';

import Header from './Header';
import Footer from './Footer';
import ImageList from './images/ImageList';

const App = () => {
    return (
        <div className="ui container">
            <Header />
            <ImageList />
            <Footer />
        </div>
    );
}

export default App;