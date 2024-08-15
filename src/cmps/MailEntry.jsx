
export function MailEntry({email}){
    const months = ["January", "February", "March",
         "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(email.sentAt)
    const d = new Date(email.sentAt)
    return <div>
    <p1>{email.isStarred ? "yes" : "No"}</p1>   
    <p1>{email.from}</p1>
    <p1>{email.subject}</p1>
    <p1>{`${months[d.getMonth()]} ${d.getDay()}`}</p1>
    </div>
}

// { _id: 'r4', subject: 'ny', body: "la ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
//     removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
