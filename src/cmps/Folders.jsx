import { useNavigate} from 'react-router-dom'
import { emailService } from "../services/email.service"
import {useState , useEffect} from "react"


export function Folders({filterBy, onFolderBy}){
    const navigate = useNavigate();
    const [count, setCount] = useState(0)

    useEffect(  () =>  {
        GetCount()

    },[])
    //if (folder) onFolderBy(folder)

   async function GetCount(){
        const count = await emailService.emailCount()
        console.log(count )
        setCount(count )
    }

    function onCategorySelect(cat){
        onFolderBy(cat)
        navigate(`/EmailIndex/${cat}`);
    }


    return< section className="folders">
                <button onClick = {() =>onCategorySelect("all")}>all</button><span>{count}</span>
                <button onClick = {() => onCategorySelect("inbox")}>inbox</button>
                <button onClick = {() =>onCategorySelect("sent")}>sent</button>
                <button onClick = {() =>onCategorySelect("starred")}>starred</button>
                <button onClick = {() =>onCategorySelect("trash")}>trash</button>
                <button onClick = {() =>onCategorySelect("draft")}>draft</button>
           </section>
}

