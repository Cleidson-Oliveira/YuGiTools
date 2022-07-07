import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import CardSearcher from "./Pages/searcher";
import Calculator from "./Pages/calculator";

export default function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<CardSearcher />} />
                    <Route path="calculator" element={<Calculator />} />
                </Routes>
            </Router>
            <GlobalStyle />             
        </>
    )
}
