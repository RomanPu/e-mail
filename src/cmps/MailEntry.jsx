
export function MailEntry({email}){
    const months = ["January", "February", "March",
         "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    console.log(email.sentAt)
    const d = new Date(email.sentAt)
    // return <h1>ghfgfj</h1>
    return <tr>
    <th>{email.isStarred ? "yes" : "No"}</th>   
    <th>{email.from}</th>
    <th>{email.subject}</th>
    <th>{`${months[d.getMonth()]} ${d.getDay()}`}</th>
  </tr>
}

// { _id: 'r4', subject: 'ny', body: "la ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
//     removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
