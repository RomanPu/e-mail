import { emailService } from "../services/email.service"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// import { robotService } from "../services/robot.service"
// import { Link } from "react-router-dom"
import { useParams } from "react-router"
// { id: 'r1', subject: 'hy', body: "ha ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
//     removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "inbox"},
export function MailDeteils({handleClick}){
    const { id } = useParams()
    const [stateId, setId] = useState(null)
    const [deteils, setDeteils] = useState(null)

    const months = ["January", "February", "March",
        "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // const d = new Date(deteils.sentAt)

    async function loadEmail(){
    const mail = await emailService.getById(id)
    setDeteils(mail)
    }

    useEffect(  () =>  {
        //const { id } = useParams()
        setId(id)
    },[])

    useEffect(  () =>  {
       
        loadEmail()
    },[id])

    function onHandleClick(id, action) {
        //console.log('Link clicked!');
        setDeteils(null)
        handleClick(id, action)
      }

    if(!deteils) return null
    return <section className="mail-deteils">
      <div className="mail-header">
        <h2>{deteils.subject}</h2>
        <div className="mail-actions">
        <Link to={`/EmailIndex`}  onClick={() =>onHandleClick(null, "list")} >close</Link>
          <button  onClick={() =>onHandleClick(deteils.id, "delete-from-deteils")}>Delete</button>
        </div>
      </div>
        <div className="mail-info">
           <span>{deteils.from}</span>
           {/* <span>{`${months[d.getMonth()]} ${d.getDay()}`}</span> */}
        </div>
        
        <div className="mail-body">{deteils.body}</div>
        
        
    </section>
}