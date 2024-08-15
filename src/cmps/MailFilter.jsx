import { useEffect, useState } from "react"

export function MailFilter({filterBy,onFilterBy}){

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        setFilterByToEdit(prev => ({ ...prev, ["txt"]: target.value }))
    }

    function onCategorySelect(cat){
        setFilterByToEdit(prev => ({ ...prev, ["status"]: cat}))
        //console.log(filterByToEdit)
    }


    return <section className="mail-filter">
        <label htmlFor="txt">search</label>
     <input 
         value={filterByToEdit.txt} 
         onChange={handleChange}
         id="model" 
         name="model" 
         type="text" />
        <button onClick = {() => onCategorySelect("inbox")}>inbox</button>
        <button onClick = {() =>onCategorySelect("sent")}>sent</button>
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