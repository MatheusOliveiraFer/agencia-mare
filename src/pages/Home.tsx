import { Link } from 'react-router-dom';
import * as C from '../components/Home';

export const Home = () => {

    return(
       <div>
        <C.Header>
            <C.Container>
                <div className="content-left">
                    <div className="title">Experiências memoráveis</div>
                    <div className="copy">
                        Surpreenda seus clientes com sites e campanhas íncrives que atingem o público certo 
                        no momento certo da jornada de compra.Acompanhe a Maré!
                    </div>
                    <div className="contact">
                        <button className="seejobs"><Link to="/trabalhos">Ver trabalhos</Link></button>
                        <button className="gocontact"><Link to="/contato">Entrar em contato</Link></button>
                    </div>
                </div>
                <div className="content-right">
                    <img src="./src/images/time.jpg"  alt="Time de desenvolvimento" />
                </div>
            </C.Container>
        </C.Header>
        <C.OurJobs>
            <div className="content-jobs">
                <h1 className="content-jobs-title">O que fazemos</h1>
                <img src="./src/images/ondas.png" /> 
            </div>
            <div className="jobs-demo">
                <div className="modelo">
                    <div className="modeloHeader1"></div>
                    <hr />
                    <div className="modeloFooter">Visualizar</div>
                </div>
                <div className="modelo">
                <div className="modeloHeader2"></div>
                    <hr />
                    <div className="modeloFooter">Visualizar</div>
                </div>
                <div className="modelo">
                <div className="modeloHeader3"></div>
                    <hr />
                    <div className="modeloFooter">Visualizar</div>
                </div>
                <div className="modelo">
                <div className="modeloHeader4"></div>
                    <hr />
                    <div className="modeloFooter">Visualizar</div>
                </div>
                <div className="modelo">
                <div className="modeloHeader5"></div>
                    <hr />
                    <div className="modeloFooter">Visualizar</div>
                </div>
                <div className="modelo">
                <div className="modeloHeader6"></div>
                    <hr />
                    <div className="modeloFooter">Visualizar</div>
                </div>
            </div>
            <div className="jobs"></div>
        </C.OurJobs>
        <C.RecentWorks>
            <C.Title>
                <h1>Trabalhos Recentes</h1>
                <h3>Resultados relevantes para clientes e amigos</h3>
            </C.Title>
            <C.Morkey>
                <C.WorkImageMorkey></C.WorkImageMorkey>
                <C.WorkContentMorkey></C.WorkContentMorkey>
            </C.Morkey>
            <C.Adobe>
                <C.WorkImageAdobe></C.WorkImageAdobe>
                <C.WorkContentAdobe></C.WorkContentAdobe>
            </C.Adobe>
        </C.RecentWorks>
       </div> 
    );
}