import React from 'react';

import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import ImageList from './images/ImageList';

const App = () => {
    return (
        <div className="ui container">
            <Header />
            <h2>App!</h2>
            <SearchBar />
            <ImageList />
            <Footer />
        </div>
    );
}

export default App;