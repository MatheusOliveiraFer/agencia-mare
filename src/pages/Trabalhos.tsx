import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export const Trabalhos = () => {
    
    const navigate = useNavigate();


    const handleHomeButton = () => {
        navigate('/');
    }

    const [searchParams, setSearchParams] = useSearchParams();
    return(
        <div>
            Filtro: {searchParams.get('filter')}
            <hr />
        
            Bem vindo a Trabalhos
            
            <ul>
                <li><Link to="/trabalhos/trabalho1">Trabalho 1</Link></li>
                <li><Link to="/trabalhos/trabalho2">Trabalho 2</Link></li>
            </ul>
            <hr />
            <button onClick={handleHomeButton}>Voltar</button>
        </div>
    );
}