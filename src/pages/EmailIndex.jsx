import { emailService } from "../services/email.service"
import { MailList } from '../cmps/MailList'
import { MailFilter } from '../cmps/MailFilter'
import { MailDeteils } from "./MailDeteils";
import { Folders } from '../cmps/Folders'

import imgUrl from '../assets/imgs/gmail-logo.jpg'


import { useEffect, useState} from "react"



export function EmailIndex() {
    const [emails, setEmeils] = useState(null)
    const [ filterBy, setFilterBy ] = useState(emailService.defoultFilter())
    const [ clickChange, setClickChange ] = useState(false)

    async function loadEmail() {
        const t = await emailService.query(filterBy)
        console.log(t)
        setEmeils( t)
       // console.log("load")
    }

    useEffect(  () =>  {
        loadEmail()
    },[])

    useEffect(() => {
        console.log("change")
        loadEmail()
    }, [filterBy, clickChange])

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

    function onHandleClick(id, action, ev){
        //ev.stopPropagation()
        setAction(id, action)
        console.log("click",id, action)
    }

    async function setAction(id, action) {
        const t = await emailService.getById(id)
        console.log(action)
        if(action === "read") t.isRead = true
        if(action === "star") t.isStarred = !t.isStarred

        emailService.save(t)
        .then(() => {
            setClickChange(prev => !prev)
         })

         if(action === "delete"){
         emailService.remove(id)
         .then(() => {
             setClickChange(prev => !prev)
          })
        }
    }
    
    if(!emails) return <div>Loading...</div>
    return<div className="emails-page">
        <div className="logo">           
            <img src={imgUrl} alt="" />
            <h1>gMail</h1>
        </div>  
        <MailFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        <Folders filterBy={filterBy} onFolderBy={onFolderBy}/>
        <MailList emails = {emails} handleClick={onHandleClick} />
        <MailDeteils />
     </div>
  
}
    