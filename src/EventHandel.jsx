import React, { useState } from 'react'
import './EventHandel.css'


const EventHandel = () => {

  const [text, setText] = useState("")
  const [dept, setDept] = useState("")
  const [rat, setRat] = useState("")
  const [todo, setTodo] = useState([])


  const handlechange = (event) => {
    const { name, value } = event.target

    if (name === "name")
      setText(value)


    else if (name === "dept")
      setDept(value)




    else
      setRat(value)

  }

  // const handledept = (event) => {
  //   setDept(event.target.value)
  // }
  // const handlerat = (event) => {
  //   setRat(event.target.value)
  // }

  const handleclick = () => {
    const obj = {
      name: text,
      dept: dept,
      rat: rat,
    }
    setTodo([...todo, obj])
    setText("")
    setDept("")
    setRat("")

  }

  return (
    <>
    <div className="main">

      <h2>EMPLOYEE FEEDBACK FORM</h2>


      <div className="bbox">
        <p>Name :</p>
        <input type='text' name="name" value={text} onChange={handlechange} />
        <p>Department :</p>
        <input type='text' name="dept" value={dept} onChange={handlechange} />
        <p>Rating :</p>
        <input type='text' name="rat" value={rat} onChange={handlechange} />
      </div>



      <button className="button80" onClick={handleclick}>SUBMIT</button>

    </div>


      <div className="ulli">
        {
          todo.map((item, index) => (

            <div className='dataa'key={index}>
              <div className='data'>Name :{item.name}</div>
              <div className='data'>Department :{item.dept}</div>
              <div className='data'>Rating :{item.rat}</div>

            </div>

          ))}
      </div >
    </>
  )
}
export default EventHandel