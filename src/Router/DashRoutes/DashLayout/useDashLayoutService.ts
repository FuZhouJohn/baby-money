import {useCallback, useState} from "react";
import {useHistory} from "react-router-dom";

export default function useDashLayoutService(){
    const history = useHistory()
    const [dashKey,setDashKey] = useState<string>('money')
    const handleClick = useCallback((key)=>{
        history.push(`/dash/${key}`)
    },[ history])
    return {
        dashKey,
        setDashKey,
        handleClick
    }
}
