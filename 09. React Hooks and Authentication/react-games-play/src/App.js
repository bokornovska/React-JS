import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as gameService from './services/gameService';
import { AuthContext } from './contexts/AuthContext';

import { Catalog } from "./components/Catalog/Catalog";
import { Create } from "./components/Create/Create";
// import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from './components/GameDetails/GameDetails';

function App() {

    const navigate = useNavigate()
    const [games, setGames] = useState([]);

    const [auth, setAuth] = useState({});

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })
    }, []);

    const onCreateGameSubmit = async (data) => {

        const newGame = await gameService.create(data);

        //todo add to state

        setGames(state => [...state, newGame])
        //todo redirect
        navigate('/catalog')
    }

    const onLoginSubmit = async (data) => {
        
        console.log(data)
       
        
    }

    return (
        <AuthContext.Provider value={{onLoginSubmit}}>

            <div id="box">

                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-game' element={<Create onCreateGameSubmit={onCreateGameSubmit} />} />
                        <Route path='/catalog' element={<Catalog games={games} />} />
                        <Route path='catalog/:gameId' element={<GameDetails />} />
                    </Routes>

                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
