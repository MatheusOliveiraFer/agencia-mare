import { useParams, useNavigate } from "react-router-dom";

export const TrabalhosItem = () => {

    const params  = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    const handleHomeButton = () => {
        navigate('/');
    }
    

    return(
        <div>
            Página sobre item {params.slug}
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
            <button onClick={handleHomeButton}>Home</button>
            
        </div>
    );
}