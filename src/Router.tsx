import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="store" element={<Store />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router