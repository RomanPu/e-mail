
export function MailFilter({filterBy,onFilterBy}){

    function handleChange({ target }) {
        const { name, value } = target;
        // console.log(name, value)
        onFilterBy({ ...filterBy, [name]: value })
    }

    return <section className="mail-filter">
        <label htmlFor="txt">search</label>
        <input 
         value={filterBy.txt} 
         onChange={handleChange}
         id="model" 
         name="txt" 
         type="text" />
          {/* <label htmlFor="readStatus">Read Status</label> */}
        <select
        value={filterBy.readStatus}
        onChange={handleChange}
        id="readStatus"
        name="readStatus"
      >
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
      <select
        value={filterBy.sortBy}
        onChange={handleChange}
        id="sortBy"
        name="sortBy"
      >
        <option value="subject">subject</option>
        <option value="sentAt">sentAt</option>
        <option value="from">from </option>
      </select>
    </section>
}

// return  { id:"", subject: '', body: "", isRead: false, isStarred: false, sentAt : null,
//   removedAt : null, from : "momo@shalomo.com", to: '', status : "draft"}