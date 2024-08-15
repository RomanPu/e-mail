import { MailEntry } from './MailEntry';


export function MailList({emails}){
    console.log(emails)
    return <table>
            {emails.map( em => <MailEntry email = {em} />)}
        </table>
}