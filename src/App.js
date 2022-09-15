import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Homepage,
    Collectionpage,
    Albumpage,
    AlbumInfopage,
    AdminHomepage,
    AdminGrouppage,
    AdminCollectionpage,
    Loginpage,
} from "./pages";
import "./App.css";
import "./styles/global.css";
import { ScrollToTop } from "./hooks/ScrollToTop";
import { RequireAuth } from "./components";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route>
                    <Route path="/admin">
                        <Route index element={<AdminHomepage />} />
                        <Route path=":group" element={<AdminGrouppage />} />
                        <Route
                            path=":group/:collection"
                            element={<AdminCollectionpage />}
                        />
                    </Route>
                </Route>
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
