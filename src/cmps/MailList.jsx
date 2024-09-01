import { Link } from "react-router-dom"
import { MailEntry } from './MailEntry';

import imgFullStarUrl from '../assets/imgs/full-star.png'
import imgEmptyStarUrl from '../assets/imgs/empty-star.png'
import imgOpenEnvUrl from '../assets/imgs/envelope-open.png'
import imgEnvUrl from '../assets/imgs/envelope.png'


export function MailList({emails, handleClick}){
    // function handleClick(id){
    //     C
    // }
    //console.log(emails)

    // function handleEntryClicks(id, status) {
    //     handleClick(id, status) 
    //  }
    return <ul className="mail-list">               
                {emails.map(em => (
                <li className={`entry ${em.isRead && "entry-read"}`}  key={em.id}>
                    <div className = "star" onClick ={(ev) => handleClick(em.id, "star", ev)}>
                    <img src={em.isStarred  ? imgFullStarUrl : imgEmptyStarUrl} alt="" /> </div>

                    <Link className = "entry-data" onClick=  {(ev) => handleClick(em.id, "deteils", ev)}
                     to={`/EmailIndex/Deteils/${em.id}`}>
                        <MailEntry email={em} handleEntryClick={handleClick}/>
                    </Link>

                    <div className = "read" onClick ={(ev) => handleClick(em.id, "read", ev)}>
                    <img src={!em.isRead ? imgEnvUrl : imgOpenEnvUrl} alt="" /> </div>

                    <button onClick ={(ev) => handleClick(em.id, "delete", ev)}>X</button>
                 </li>                 
                ))}
        </ul>
}