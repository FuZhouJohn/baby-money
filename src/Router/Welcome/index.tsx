// import useWelcomeService from "./useWelcomeService";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function Welcome(){
    // const welcomeService = useWelcomeService()
    const history = useHistory()
    useEffect(()=>{
        setTimeout(()=>{
            history.push('/dash/money')
        },3000)
    },[history])
    return (
        <div>
            Welcome
        </div>
    )
}
