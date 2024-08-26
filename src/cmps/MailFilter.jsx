import { useEffect, useState } from "react"

export function MailFilter({filterBy,onFilterBy}){

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        console.log( "filter",filterByToEdit)
        onFilterBy(filterBy)
    }, [])

    useEffect(() => {
        console.log( "filter",filterByToEdit)
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const { name, value } = target;
        // console.log(name, value)
        setFilterByToEdit(prev => ({ ...prev, [name]: value }))
    }

    return <section className="mail-filter">
        <label htmlFor="txt">search</label>
        <input 
         value={filterByToEdit.txt} 
         onChange={handleChange}
         id="model" 
         name="txt" 
         type="text" />
          {/* <label htmlFor="readStatus">Read Status</label> */}
        <select
        value={filterByToEdit.readStatus}
        onChange={handleChange}
        id="readStatus"
        name="readStatus"
      >
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
    </section>

    
//     return <section className="mail-filter">
//     <label htmlFor="txt">search</label>
//     <input 
//         value={filterByToEdit.model} 
//         onChange={handleChange}
//         id="model" 
//         name="model" 
//         type="text" />
    
//     <label htmlFor="battery">Battery Status</label>
//     <input 
//         value={filterByToEdit.minBatteryStatus} 
//         onChange={handleChange}
//         id="battery" 
//         name="minBatteryStatus" 
//         type="number" />

// </section>
}