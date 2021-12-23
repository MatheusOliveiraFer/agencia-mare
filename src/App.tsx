import { MainRoutes } from './routes/MainRoutes';
import * as C from './components/AppStyles';
import { Link } from 'react-router-dom';

const App = () => {
  
  
  return(
    <C.Header>
        <C.Container>
            <div className="logo">
                <a href="/"><img src="./src/images/logo_agencia.png" /></a>
            </div>
          <C.Menu>
            <nav>
            <div  className="menuMobile">
					    <div className="mm_line"></div>
					    <div className="mm_line"></div>
					    <div className="mm_line"></div>
			    	</div>
              <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/Sobre">Sobre nós</Link></li>
                <li><Link to="/trabalhos">Trabalhos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </nav>
          </C.Menu>
        </C.Container>
    </C.Header>
  );
}

export default App;