import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/auth.slice";

export const useAuth = () => {

  const dispatch = useDispatch();
  const { status, user } = useSelector( store => store.auth );

  const loginUser = ( userCredentials ) => {
    dispatch( login( { ...userCredentials, password: '' } ) )
  }

  const logoutUser = () => [
    dispatch( logout() )
  ]

  return {
    status,
    user,
    loginUser,
    logoutUser,
  }

}