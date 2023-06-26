import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header />
            // your main content goes here
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
