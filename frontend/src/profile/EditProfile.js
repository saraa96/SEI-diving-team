import React, { Component } from 'react'
import { Card } from "react-bootstrap";
import './profile.css';
import 'semantic-ui-css/semantic.min.css'
import jwt_decode from 'jwt-decode'
import axios  from "axios"
export default class EditProfile extends Component {
state = {
  first_name: '',
  last_name: '',
  email: '',
  createdAt:'',
  _id:''
}

EditProfileHandler = (e)=>{
console.log("EditProfileHandler Run");
this.setState({
  [e.target.name] : e.target.value
})
console.log("this is state",this.state);


}



onSubmit(e) {
  e.preventDefault();
  const obj = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    createdAt: this.state.createdAt,
    _id: this.state._id
  };
  axios.post('http://localhost:5000/profile/edit/'+this.state._id, obj)
      .then(res => console.log(res.data));
  
  this.props.history.push('/profile');
}




componentDidMount(){
    let token = localStorage.usertoken
console.log("toek in Show Profile: ",token)

if(token){
  const decoded = jwt_decode(token)
  const decodedUser = decoded.user
  const decodedEmail = decoded.user.email

console.log("Decoded token ",decoded)
console.log("DecodedUser ",decodedUser)
console.log("email ",decodedEmail)


 this.setState(decodedUser)
}else{
  this.props.history.push('/login')
}
}
    
    render() {

      const date = this.state.createdAt.split("-")

        return (
            <Card style={{paddingTop : "150px"}}>
       <form onSubmit={this.onSubmit}>
            <div className="row">  
              <div className="col-lg-12 col-md-12 col-sm-12">
          
                      <div className="card hovercard">
                          <div className="cardheader">
          
                          </div>
                          <div className="avatar">
                              <img alt="Header"  src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"/>
                              </div>
                          <div className="info">
                              <div className="title">
                              <label>Name: </label>
                                 <input onChange={this.EditProfileHandler} type="text" name="name" placeholder={this.state.first_name +" "+ this.state.last_name} />
                              </div>
                              
                              
                          </div>
                          <div className="desc">
                          <label>Bio: </label>
                          <input onChange={this.EditProfileHandler} type="text" name="bio" placeholder="bio" />
                          </div>
                          
                          
                          <div className="bottom">
                          <label>Email: </label>
                          <input onChange={this.EditProfileHandler} type="email" name="email" placeholder={this.state.email} />
                              
                              
                          </div>
                          
                          <div className="desc">Profile Created: {date[0]}-{date[1]}</div>
                      </div>
<div className="ui buttons">
<button type="reset" className="ui button">Reset</button> 
  <div className="or"></div>
  <button type="submit" className="ui positive button">Save</button>
</div>
</div>  
            </div>
            </form>
          </Card>
        )
    }
}
