import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="/" element={<Home />} />
                    <Route path="store" element={<Store />} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router