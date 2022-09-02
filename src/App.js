import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage, Collectionpage, Albumpage, AlbumInfopage } from "./pages";
import "./App.css";
import "./styles/global.css";
import { ScrollToTop } from "./hooks/ScrollToTop";
function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/collections" element={<Collectionpage />} />
                <Route
                    path="/collections/:collection"
                    element={<Albumpage />}
                />
                <Route
                    path="/collections/:collection/:album"
                    element={<AlbumInfopage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
