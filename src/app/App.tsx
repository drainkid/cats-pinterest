import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "../pages/mainPage/mainPage.tsx";
import FavoritesPage from "../pages/favoritesPage/favoritesPage.tsx";
import './styles.css'
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./queryClient.tsx";

const App = () => {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/favorites" element={<FavoritesPage/>} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
};

export default App;