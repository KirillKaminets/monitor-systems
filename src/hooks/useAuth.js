import { useAppSelector } from "./reduxHooks";

export function useAuth(){
    const{} = useAppSelector(state => state.user)

    return{
        isAuth: !!email,
        email,
        token,
        id
    }
}