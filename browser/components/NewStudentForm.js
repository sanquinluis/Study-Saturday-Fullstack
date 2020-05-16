import React, { Component } from 'react';
 
export default class NewStudentForm extends React.Component {
    constructor(props) {
        super()
    }   
     render(){
         return (
             <form onSubmit={this.handleSubmit}> 
                 <label>
                     First Name:
                     <input placeholder="First Name" type="text" name="firstName" />
                 </label>

                 <label>
                     Last Name:
                     <input placeholder="Last Name" type="text" name="lastName"/>
                 </label>

                 <label>
                     Email:
                     <input placeholder="yourEmail@mail.com" type="email" name="email" />
                 </label>

                 <button type="submit">Submit New Student</button>
             </form>
         )
     }

}

