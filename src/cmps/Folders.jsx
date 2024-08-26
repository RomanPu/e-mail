import { useEffect, useState } from "react"

export function Folders({filterBy, onFolderBy}){

    const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        // console.log( "filter",filterByToEdit)
        setFilterByToEdit(filterBy)
    }, [])

    useEffect(() => {
        onFolderBy(filterByToEdit)
    }, [filterByToEdit])

    function onCategorySelect(cat){
        setFilterByToEdit(cat)
        //console.log(filterByToEdit)
    }


    return< section className="folders">
                <button onClick = {() =>onCategorySelect("all")}>all</button>
                <button onClick = {() => onCategorySelect("inbox")}>inbox</button>
                <button onClick = {() =>onCategorySelect("sent")}>sent</button>
           </section>
}