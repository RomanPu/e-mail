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
    const [ mode, setModeChange ] = useState("list")

    async function loadEmail() {
        const t = await emailService.query(filterBy)
        console.log(t)
        setEmeils( t)
       // console.log("load")
    }

    useEffect(  () =>  {
        setModeChange("list")
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
    }
    
    function onFilterBy(filterBy){
        setFilterBy(prev => ({ ...prev, ["txt"]: filterBy.txt}))
    }

    function onHandleClick(id, action, ev){
       // ev.stopPropagation()
        setAction(id, action)
        console.log("click",id, action)
    }

    async function setAction(id, action) { 
        if(action === "list") return setModeChange("list") 

        var t = await emailService.getById(id)
        console.log(action)
        if(action === "read") t.isRead = true
        if(action === "star") t.isStarred = !t.isStarred
        if(action === "deteils") {
            t.isRead = true
            setModeChange("deteils") 
        }
        

        emailService.save(t)
        .then(() => {
            setClickChange(prev => !prev)
         })

         if(action === "delete" || action === "delete-from-deteils"){
         emailService.remove(id)
         .then(() => {
             setClickChange(prev => !prev)
             if(action === "delete-from-deteils") setModeChange("list") 
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
        <div className="mail-section">
            {mode === "list" && <MailList emails={emails} handleClick={onHandleClick} />}
            {mode === "deteils" && <MailDeteils handleClick={onHandleClick}/>}
        </div>
     </div>
  
}
    