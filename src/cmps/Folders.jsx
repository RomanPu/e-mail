import { useNavigate } from 'react-router-dom';

export function Folders({filterBy, onFolderBy}){
    const navigate = useNavigate();
    //if (folder) onFolderBy(folder)

    function onCategorySelect(cat){
        onFolderBy(cat)
        navigate(`/EmailIndex/${cat}`);
    }


    return< section className="folders">
                <button onClick = {() =>onCategorySelect("all")}>all</button>
                <button onClick = {() => onCategorySelect("inbox")}>inbox</button>
                <button onClick = {() =>onCategorySelect("sent")}>sent</button>
                <button onClick = {() =>onCategorySelect("starred")}>starred</button>
                <button onClick = {() =>onCategorySelect("trash")}>trash</button>
                <button onClick = {() =>onCategorySelect("draft")}>draft</button>
           </section>
}

