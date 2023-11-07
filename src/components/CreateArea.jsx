import { useState } from "react"

export default function CreateArea({onAdd}) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    })

    function handleChange(e){
        // const newValue= e.target.value  //value = cuvintele care le scrim
        // const inputName = e.target.name  //name = numele cimpului(title ori content)
        // console.log(newValue,inputName).
        const {value, name} = e.target

        setInputText(prevValue=>{
            if(name === "title") {
                return {
                    title:value,
                    content:prevValue.content
                }
            } else if(name === "content") {
                return {
                    title:prevValue.title,
                    content:value
                }
            }
        })
        //shorter version with spreaad operator
        // setInputText(prevValue=>{
        //     return {
        //         ...prevValue,
        //         [name]:value
        //     }
        // })
        
    }

    function submitNote(e) {
        onAdd(inputText)
        e.preventDefault()
        setInputText({
            title: "",
            content: ""
        })
        
    }

    return(
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputText.content}></textarea>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.


//This is the end result you're aiming for:
//https://pogqj.csb.app/
