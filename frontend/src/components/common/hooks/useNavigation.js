import { useNavigate } from "react-router-dom"

export const useNav = () => {

    const navigate = useNavigate();

    const goToPage = ( page = "" ) => {
        navigate( page );
    }

    return {
        goToPage
    }

}