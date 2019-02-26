import React from "react";

const students = [
    {
        Name: "Joshua",
        Age: 25,
        Hobby: `Wooing and Sleeping`                
    },

    {
        Name: "Tele",
        Age: 23,
        Hobby: "Music"                
    },

    {
        Name: "Lanre",
        Age: 22,
        Hobby: "Running"                
    },

    {
        Name: "Elijah",
        Age: 35,
        Hobby: "Praying"                
    },

    {
        Name: "Segun",
        Age: 40,
        Hobby: "Tasking"                
    },
]

class reactAssignment1 extends React.Component{
    render(){
        return <div>
            {
                students.map((pupil)=>{
                    return <h2>Name: {pupil.Name}, Age: {pupil.Age}, Hobby(ies): {pupil.Hobby}</h2>
                })
            }
        </div>
    }
}

export default reactAssignment1;