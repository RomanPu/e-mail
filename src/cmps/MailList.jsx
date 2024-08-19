import { Link } from "react-router-dom"
import { MailEntry } from './MailEntry';


export function MailList({emails}){
    //console.log(emails)
    return <table class="mail-list">
                
                {emails.map(em => (
                    <tr key={em.id}>
                    <Link to={`/EmailIndex/${em.id}`}>
                        <MailEntry email={em} />
                    </Link>
                    </tr>
                ))}
        </table>
}