import { useEffect, useState } from "react"

export function MailFilter({filterBy,onFilterBy}){

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        setFilterByToEdit(prev => ({ ...prev, ["txt"]: target.value }))
    }

    return <section className="mail-filter">
        <label htmlFor="txt">search</label>
        <input 
         value={filterByToEdit.txt} 
         onChange={handleChange}
         id="model" 
         name="model" 
         type="text" />
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