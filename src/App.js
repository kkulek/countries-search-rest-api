import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {CountryPage} from "./pages/Country";

function App() {
    return (
        <Router>
            <Header/>
            <main className="bg-gray-100 p-10">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/countries/:name" element={<CountryPage />} />
                    </Routes>
            </main>
        </Router>
    )
}

export default App;
