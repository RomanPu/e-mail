
export function MailEntry({email, handleEntryClicks}){
    const d = new Date(email.sentAt)
    const months = ["January", "February", "March",
         "April", "May", "June", "July", "August", "September", "October", "November", "December"];


        //handleEntryClicks("rt","ghfg")

        function handleEntryClicksLocal(id, status, ev) {
            ev.stopPropagation();
            handleEntryClicks(id, status, ev);
        }

    
    return <>   
    <td className = "email-from">{ email.from}</td>
    <td className = "email-subject">{email.subject}</td>
    <td className = "email-date">{`${months[d.getMonth()]}`+` ${d.getDay()}`}</td>
    </>
}

