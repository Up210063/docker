import { useDispatch, useSelector } from "react-redux"
import { setAsideMenu } from "../store/ui.slice";

export const useUI = () => {

    const dispath = useDispatch();
    const { asideMenu } = useSelector( store => store.ui );

    const openAsideMenu = () => {
        dispath( setAsideMenu({ isOpen: true }) )
    }

    const closeAsideMenu = () => {
        dispath( setAsideMenu({ isOpen: false }) )
    }

    return {
        asideMenu,

        openAsideMenu,
        closeAsideMenu
    }
}