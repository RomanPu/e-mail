import { emailService } from "../services/email.service"
import { MailList } from '../cmps/MailList'
import { MailFilter } from '../cmps/MailFilter'
import { MailDeteils } from "./MailDeteils";
import { Folders } from '../cmps/Folders'


import { useEffect, useState} from "react"



export function EmailIndex() {
    const [emails, setEmeils] = useState(null)
    const [ filterBy, setFilterBy ] = useState(emailService.defoultFilter())

    async function loadEmail() {
        const t = await emailService.query(filterBy)
        setEmeils( t)
       // console.log("load")
    }

    useEffect(  () =>  {
        loadEmail()
    },[])

    useEffect(() => {
        loadEmail()
    }, [filterBy])

    // function onFilterBy(filterBy){
    //     setFilterBy(filterBy)
    // }

      function onFolderBy(filterBy){
        setFilterBy(prev => ({ ...prev, ["status"]: filterBy.status}))
        //setFilterBy(filterBy)
        console.log("test")
    }
    
    function onFilterBy(filterBy){
        setFilterBy(prev => ({ ...prev, ["txt"]: filterBy.txt}))
        //setFilterBy(filterBy)
    }
    
    if(!emails) return <div>Loading...</div>
    return<div>  
        <MailFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        <Folders filterBy={filterBy} onFolderBy={onFolderBy}/>
        <MailList emails = {emails}/>
        <MailDeteils />
     </div>
  
}
    