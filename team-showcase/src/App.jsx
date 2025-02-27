import './App.css'
import React from 'react'
import TeamMemberCard from './Components/TeamMemberCard'


const data = [{
  name:"jhon doe",
  job: "manager"
},{
  name:"mayura",
  job: "employee"
},
{
  name:"arnab dutta",
  job: "teacher"
}
]


function App() {
  return (
    <>
      {data.map((ele)=>{
        return TeamMemberCard(ele.name,ele.job);
      })}
    </>
  )
}

export default App
