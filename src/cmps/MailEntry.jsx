
export function MailEntry({email}){
    const months = ["January", "February", "March",
         "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    
    const d = new Date(email.sentAt)
    console.log(d.getDay())
    return <>
    <td>{email.isStarred ? "yes" : "No"}</td>   
    <td className = "email-from">{ email.from}</td>
    <td className = "email-subject">{email.subject}</td>
    <td className = "email-date">{`${months[d.getMonth()]}`+` ${d.getDay()}`}</td>
    </>
}

// { _id: 'r4', subject: 'ny', body: "la ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
//     removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
