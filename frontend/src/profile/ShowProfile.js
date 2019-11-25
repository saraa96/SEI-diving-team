import React, { Component } from "react";
import { Card } from "react-bootstrap";
import './profile.css';
// import axios from "axios";
import jwt_decode from 'jwt-decode'

export default class ShowProfile extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        createdAt:'',
        _id:''
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

      //console.log(this.state.first_name);
      // console.log("fffffff");
       this.setState(decodedUser)
      }else{
        this.props.history.push('/login')
      }
      }
   render() {
   
     // console.log(this.props.response.result);
      //const { email, bio, first_name, createdAt,last_name } = this.props.response.result;
       const date = this.state.createdAt.split("-")
      
      
      
      
      return (
      
        // <Card style={{ width: "18rem" }}>
        //   <Card.Img variant="top" src="holder.js/100px160" alt="Pic Here" />
        //   <Card.Body>
        //     <Card.Title>{name}</Card.Title>
        //     <Card.Text>
        //       {email}
        //     </Card.Text>
        //     <Card.Text>
        //       {bio}
        //     </Card.Text>
        //   </Card.Body>
        //   <Card.Footer>
        //     <small className="text-muted">Profile Created: {date[0]}-{date[1]}</small>
        //   </Card.Footer>
        // </Card>



        <Card style={{paddingTop : "150px"}}>
        
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
                                {this.state.first_name}  {this.state.last_name}  
                          </div>
                          
                          
                      </div>
                      <div className="desc">
                      {/* {bio} */}
                      </div>
                      
                      
                      <div className="bottom">
                          <a href={"mailto:" + this.state.email }>
                              {/* <i className="fa fa-twitter"></i> */}
                             
                              {/* Send email to {name} */}
                              
                              <img alt="email icon" src="https://freeiconshop.com/wp-content/uploads/edd/email-flat.png" width="40px" height="40px"/>
                          </a>
                          
                      </div>
                      <div className="desc">Profile Created: {date[0]}-{date[1]} </div>
                  </div>
      
              </div>
      
        </div>
      </Card>
     
      );
    
  }
}
