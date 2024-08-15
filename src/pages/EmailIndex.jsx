import { emailService } from "../services/email.service"
import { MailList } from '../cmps/MailList'
import { MailFilter } from '../cmps/MailFilter'

import { useEffect, useState} from "react"



export function EmailIndex() {
    const [emails, setEmeils] = useState(null)

    async function onLoad() {
        const t = await emailService.query()
        setEmeils( t)
        console.log("load")
    }

    useEffect(  () =>  {
        onLoad()
    },[])
    
    if(!emails) return <div>Loading...</div>
    return<div>  
        <MailFilter/>
        <MailList emails = {emails}/>
     </div>
  
}
    