import React from 'react'
import './../Styles/resume.css'
function Profile({ item }) {
  
  return (
       
        <div className="profile-container">
            <h1>MY <strong>Profile</strong></h1>
            <hr></hr>
            <ul className='profile-lists'>
                <li><strong>Name:- </strong> {item.Name}</li>
                <li><strong>Birthday:- </strong> {item.Birthday}</li>
                <li><strong>Address:- </strong> {item.Address}</li>
                <li><strong>Phone:- </strong> {item.Phone}</li>
                <li><strong>Email:- </strong> {item.Email}</li>
                <li><strong>Website:- </strong> {item.Website}</li>
            </ul>

        </div> 
  )
}

export default Profile;