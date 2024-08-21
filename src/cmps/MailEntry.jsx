
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
    <div className = "email-from">{ email.from}</div>
    <div className = "email-subject">{email.subject}</div>
    <div className = "email-date">{`${months[d.getMonth()]}`+` ${d.getDay()}`}</div>
    </>
}

