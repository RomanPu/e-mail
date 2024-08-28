import { useEffect, useState } from "react"

export function Folders({filterBy, onFolderBy}){

    function onCategorySelect(cat){
        onFolderBy(cat)
    }


    return< section className="folders">
                <button onClick = {() =>onCategorySelect("all")}>all</button>
                <button onClick = {() => onCategorySelect("inbox")}>inbox</button>
                <button onClick = {() =>onCategorySelect("sent")}>sent</button>
           </section>
}

