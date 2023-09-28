import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/compa">CompA</a>
                    </li>
                    <li>
                        <a href="/compb">CompB</a>
                    </li>
                    <li>
                        <a href="/compc">CompC</a>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="compa" element={<CompA />} />
                <Route path="compb" element={<CompB />} />
                <Route path="compc" element={<CompC />} />
            </Routes>
        </>
    );
}

export default App;
