import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import YoutubePlayer from "./components/YoutubePlayer.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:id/" element={<YoutubePlayer />} />
        </Routes>
    );
}

export default App;