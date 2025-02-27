import React from 'react'

function TeamMemberCard(name,job) {
  return (
    <>
        <div>
            <h1>Name: {name}</h1>
        </div>
        <div>
            <h2>Job title: {job}</h2>
        </div>
    </>
  )
}

export default TeamMemberCard