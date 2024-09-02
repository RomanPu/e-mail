import { emailService } from "../services/email.service"
import { MailList } from '../cmps/MailList'
import { MailFilter } from '../cmps/MailFilter'
import { MailDeteils } from "./MailDeteils"
import { Folders } from '../cmps/Folders'
import { Compose } from '../cmps/compose'
import { utilService } from "../services/util.service"

import imgUrl from '../assets/imgs/gmail-logo.jpg'


import { useEffect, useState} from "react"
import {useSearchParams } from "react-router-dom"




export function EmailIndex() {
    const [emails, setEmeils] = useState(null)
    const [ clickChange, setClickChange ] = useState(false)
    const [ mode, setModeChange ] = useState("list")
    const [ compose, setComposeChange ] = useState(false)
    const [ comMail, setComposedMail ] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const [ filterBy, setFilterBy ] = useState(emailService.getFilterFromSearchParams(searchParams))
    const [count, setCount] = useState(0)

    async function loadEmail() {
        const t = await emailService.query(filterBy)
        console.log(t)
        setEmeils( t)
        setCountFunc()
    }

    useEffect(  () =>  {
        setModeChange("list")
    },[])

    useEffect(() => {
        console.log("change")
        loadEmail()
    }, [clickChange])

    useEffect(() => {
        console.log("change")
        setSearchParams(utilService.getExistingProperties(filterBy))
        loadEmail()
    }, [filterBy])

    useEffect(() => {
        if( Object.keys(comMail).length !== 0) saveDraft()
    }, [comMail])

    async function setCountFunc(){
        const count = await emailService.emailCount()
        console.log(count )
        setCount(count )
    }

  

      function onFolderBy(filterBy){
        let defoultFilter = emailService.defoultFilter()
        defoultFilter.folder = filterBy;
        console.log("folderBy",defoultFilter)
        setFilterBy(defoultFilter)
        setModeChange("list")
    }
    
    function onFilterBy(filterBy){
        console.log("index", filterBy)
        setFilterBy(prev => ({ ...prev, ...filterBy }))
    }

    function onHandleClick(id, action, ev){
        setAction(id, action)
    }

    async function setAction(id, action) { 
        if(action === "list") return setModeChange("list") 

        var t = await emailService.getById(id)
        if(action === "read") t.isRead = true
        if(action === "star") t.isStarred = !t.isStarred
        if(action === "deteils") {
            if(t.status === "draft") return onEdit(t)
            t.isRead = true
            setModeChange("deteils") 
        }
        

        emailService.save(t)
        .then(() => {
            setClickChange(prev => !prev)
         })

         if(action === "delete" || action === "delete-from-deteils"){

            if (t.status === "trash") { 

                emailService.remove(id)
                .then(() => {
                    setClickChange(prev => !prev)
                    if(action === "delete-from-deteils") setModeChange("list") 
                })
            }
            else{
                t.status = "trash"
                await emailService.save(t)
                if(action === "delete-from-deteils") setModeChange("list") 
            }
        }

    }

    function onEdit(mail){
        setComposedMail(mail)
        setComposeChange(true)

    }

    async function onCompose(){
        let email = emailService.newEmail()
        email = await emailService.save(email)
        setComposedMail(email)
        setComposeChange(true)
    }

    async function onComposeChange(email){
       setComposedMail(prev => ({...prev, ...email}))
    }

    async function onComposeFinish(com, email){

        if(com === "send") await emailService.save(emailService.finalizeMail(email))

        await loadEmail()
        setComposeChange(false)
    }

    async function saveDraft(){
        console.log("saveeee",comMail)
        await emailService.save(comMail)
    }
    
    if(!emails) return <div>Loading...</div>
    return<div className="emails-page">
        <div className="logo">           
            <img src={imgUrl} alt="" />
            <h1>gMail</h1>
            <button onClick={onCompose}>compose</button>
        </div>  
        <MailFilter filterBy={filterBy} onFilterBy={onFilterBy}/>
        <Folders onFolderBy={onFolderBy} count= {count}/>
        {compose && <Compose onFinish={onComposeFinish} onChange={onComposeChange} mail = {comMail}/>}
        <div className="mail-section">
            {mode === "list" && <MailList emails={emails} handleClick={onHandleClick} />}
            {mode === "deteils" && <MailDeteils handleClick={onHandleClick}/>}
        </div>
     </div>
  
}
    