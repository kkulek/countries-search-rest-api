import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {Filter} from "./components/Filter";
import {Feed} from "./components/Feed";

function App() {
    return (
        <main className="bg-gray-100 p-10">
            <Header/>
            <section>
                <Search/>
                <Filter/>
            </section>
            <Feed/>
        </main>
    )
}

export default App;
