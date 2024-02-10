import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";

export const App = () => {

    const parts = window.location.hostname.split('.');

    if( parts.length !== 2){
        return (
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Profile />} />
        </Routes>
    )
}



