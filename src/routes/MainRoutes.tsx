import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Trabalhos } from '../pages/Trabalhos';
import { TrabalhosItem } from '../pages/TrabalhosItem';
import { Sobre } from '../pages/About';
import  { Contato } from '../pages/Contato';

export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/trabalhos" element={<Trabalhos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/trabalhos/:slug" element={<TrabalhosItem />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}