import { Link } from "react-router-dom"
import { MailEntry } from './MailEntry';


export function MailList({emails}){
    //console.log(emails)
    return <section>
                <ul>
                    {emails.map( em => {return <li key={em.id}> <MailEntry email = {em} />
                    <Link to={`/EmailIndex/${em.id}`} >Details</Link>
                    </li>})}
                </ul>
        </section>
}