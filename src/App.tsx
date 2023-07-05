import React, {Suspense} from "react";
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={<p>Loading ...</p>}>
                <Header />
                <Router />
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;