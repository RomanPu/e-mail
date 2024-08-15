import { emailService } from "../services/email.service"
import { MailList } from '../cmps/MailList'
import { MailFilter } from '../cmps/MailFilter'

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

    function onFilterBy(filterBy){
        setFilterBy(filterBy)
    }
    
    if(!emails) return <div>Loading...</div>
    return<div>  
        <MailFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        <MailList emails = {emails}/>
     </div>
  
}
    