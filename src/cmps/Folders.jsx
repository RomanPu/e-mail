import { useEffect, useState } from "react"

export function Folders({filterBy, onFolderBy}){

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        onFolderBy(filterByToEdit)
    }, [filterByToEdit])

    function onCategorySelect(cat){
        setFilterByToEdit(prev => ({ ...prev, ["status"]: cat}))
        //console.log(filterByToEdit)
    }


    return< section className="folders">
                <button onClick = {() =>onCategorySelect("all")}>all</button>
                <button onClick = {() => onCategorySelect("inbox")}>inbox</button>
                <button onClick = {() =>onCategorySelect("sent")}>sent</button>
           </section>
}