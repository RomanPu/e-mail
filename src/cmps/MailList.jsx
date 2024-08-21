import { Link } from "react-router-dom"
import { MailEntry } from './MailEntry';


export function MailList({emails, handleClick}){

    // function handleClick(id){
    //     console.log("dit",id)
    // }
    //console.log(emails)

    // function handleEntryClicks(id, status) {
    //     handleClick(id, status) 
    //  }
    return <table className="mail-list">               
                {emails.map(em => (
                <tr className={`entry ${em.isRead && "entry-read"}`}  key={em.id}>
                    <td className = "star" onClick ={(ev) => handleClick(em.id, "star", ev)}>
                    {em.isStarred  ? "yes" : "No"}</td>
                    <Link onClick=  {(ev) => handleClick(em.id, "deteils", ev)}
                     to={`/EmailIndex/${em.id}`}>
                        <MailEntry email={em} handleEntryClick={handleClick}/>
                    </Link>
                    <td><button onClick ={(ev) => handleClick(em.id, "delete", ev)}>X</button></td>
                 </tr>                 
                ))}
        </table>
}