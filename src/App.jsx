
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Detalles from "./Detalles";
import NotFound from "./NotFound";

//Url de la API NET con datos
const API_URL = 'https://localhost:7030/api/peliculas';
// URL de la API NodeJs con datos
//const API_URL = 'http://localhost:3000/api/peliculas';

//Componente principal
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="detalles/:id" element={<Detalles />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
export { API_URL };