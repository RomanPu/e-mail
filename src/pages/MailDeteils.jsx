import { emailService } from "../services/email.service"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// import { robotService } from "../services/robot.service"
// import { Link } from "react-router-dom"
import { useParams } from "react-router"
// { id: 'r1', subject: 'hy', body: "ha ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
//     removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "inbox"},
export function MailDeteils(){
    const { id } = useParams()
    const [stateId, setId] = useState(null)
    const [deteils, setDeteils] = useState(null)

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

    function handleClick() {
        console.log('Link clicked!');
        setDeteils(null)
      }

    if(!deteils) return 
    return <section>
        <h1>from {deteils.from}</h1>
        <h1>to {deteils.to}</h1>
        <h1>subject {deteils.subject}</h1>
        <h1>subject {deteils.body}</h1>
        <Link to={`/EmailIndex`} onClick={handleClick} >back</Link>
    </section>
}