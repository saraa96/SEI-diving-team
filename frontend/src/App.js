import React, { Component } from 'react'
import { Navbar,Nav ,Form} from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import Home from './HomePage/homepage'
import Uplod from './uplodimg.js'
import Admin from './Admin'
import Cart from './Cart/Cart'
import './App.css'
import {
  BrowserRouter, Switch,
  Route,
} from 'react-router-dom';
import axios from 'axios'
import Courses from './Coruses/courses'
import Show from './Coruses/showCourse'
import Trips from './Trips/components/trip'
import TripShow from './Trips/components/trips'
import Login from './components/container/Login'
import Register from './components/container/Register'
import ShowProfile from './profile/ShowProfile'


import Trip from './components/container/Trip'
 import { Icon,Button,Input, Menu} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'
import NaveBar from './components/NaveBar/NaveBar.js';
import DivingLocations from "./Locations/DivingLocations";
import EditProfile from "./profile/EditProfile";
import Component404 from './profile/components/Component404'



import ChangePassword from './profile/ChangePassword'

export default class App extends Component {
  state = {
    loading: true,
    error: "",
    data: null,
    courses: [],
    Trips:[],
    isAdmin : false,
    activeItem: 'home',
    addtocart : [],
    select:null,
  };

  handleFaveToggle =(select) =>{
    var temp = []
    temp = this.state.addtocart
    temp.push(select)
      this.setState({
        addtocart : temp,
        select : select
       }) 
      localStorage.setItem("cart",JSON.stringify(this.state.addtocart))
  }
  loadData = () => {
    this.setState({ loading: true });
    return axios
      .get(`http://localhost:5000/Profile/5ddb9b0078680b43b09ee539`)
      .then(result => {
        console.log(result);
        this.setState({
          data: result.data,
          loading: false,
          error: false
        });
      })
      .catch(error => {
        console.error("error: ", error);
        this.setState({
       
          error: `${error}`,
          loading: false
        });
      });
  };


  getCourses = () => {
    fetch('http://localhost:5000/corses')
    .then(res => res.json())
    .then(result => { console.log(result);
  
      this.setState({ courses : result})})
    .catch(e => console.log(e))
  }
  getTrips = () => {
    fetch('http://localhost:5000/trips')
    .then(res => res.json())
    .then(result => { console.log(result);
      this.setState({ Trips : result})})
    .catch(e => console.log(e))
  }


  componentDidMount(){
 
    //this.loadData();
    this.getCourses()
    this.getTrips()
    let token = localStorage.usertoken
    
    if(token){
      const decoded= jwt_decode(token)

      const admin = decoded.user.isAdmin

      console.log("is ",admin);
      this.setState({isAdmin:admin})
      console.log(this.state.isAdmin);
      
    }else{
      
    }
    
  }



  render() {
  
console.log(this.state.addtocart);

    return (
       <div >

 <Navbar fixed={'top'} style={{  width: "100%",height: "91px",  backgroundColor: "#1e56a0" }}  expand="lg">
  <Navbar.Brand href="/home"> <img
            src="https://i.ibb.co/B4r08CS/wave.png"
            width="130"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />

          
          </Navbar.Brand>
          
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"> </Nav>
  
          <Form className ="d-flex justify-content-around" inline>

{ this.token  &&  <Nav.Link  className="nav-link" href="/login">Login</Nav.Link>}
{ this.token  &&  <Nav.Link  className="nav-link" href="/register">Register</Nav.Link>}
<BrowserRouter>
<NaveBar />
</BrowserRouter>
<Nav.Link  className="nav-link" href="/home">Logout</Nav.Link>
    <Button  href="/Profile" style ={{backgroundColor:"transparent"}} animated='vertical'>
       <Button.Content hidden>Profile</Button.Content>
      <Button.Content visible>
        <Icon name='user' />
      </Button.Content>
    </Button> 
     <Button href="/cart" style ={{backgroundColor:"transparent"}} animated='vertical'>
      <Button.Content hidden>Cart</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button> 
    </Form>

  
  </Navbar.Collapse>
  <BrowserRouter>
<Navbar className="d-flex justify-content-around"  fixed={'top'} style = {{ marginTop:"90px", fontSize:"20px" ,opacity: "1",backgroundColor: "#d6e4f0"} }>
        <Nav >
      <Nav.Link  className="nav-link" href="/trips">Diving Trips</Nav.Link>
      <Nav.Link  className="nav-link" href="/courses"> Diving Courses</Nav.Link>
      <Nav.Link className="nav-link" href="/locations">Locations</Nav.Link>
      
  </Nav>
    </Navbar>
    </BrowserRouter>
</Navbar>
 <BrowserRouter>
    <Switch>
<Route exact path='/' component={Home} />
    <Route exact path='/home' component={Home} />
    <Route exact path='/courses'  render={(props) => <Courses {...props} courses={this.state.courses}  handleFaveToggle = {this.handleFaveToggle}  select = {this.state.select} addtocart = {this.state.addtocart} />} />
     <Route path="/courses/:id" render={({match}) => {
   return  <Show 
            course={this.state.courses.find(course => course._id === match.params.id) }  handleFaveToggle = {this.handleFaveToggle}  select = {this.state.select} addtocart = {this.state.addtocart}  />}  } /> 

    <Route exact path='/trips'  render={(props) => <Trips {...props} trip={this.state.Trips} />} />
    <Route path="/trips/:id" render={({match}) => {
            if(!this.state.Trips) return <div className="work">error</div>   
            return <TripShow
            trip={this.state.Trips.find(trip => trip._id === match.params.id) } />} } /> 


            <Route exact path="/register" component={Register} />
            <Route  path="/cart" exact render ={(props) =>    <Cart  {...props}  handleFaveToggle = {this.handleFaveToggle}  select = {this.state.select} addtocart = {this.state.addtocart} />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Uplod" component={Uplod} />
            { this.state.isAdmin ? <Route exact path="/admin" component= {Admin} /> : console.log("Sorry you are not admin ") } 
            <Route exact path="/Profile" render={props => <ShowProfile {...props} /*response={data}*//>}/>
            
            <Route  path="/locations" component={DivingLocations} />
            <Route  exact path="/profile/Edit/" render={props => (
              <EditProfile {...props} /*response={data}*/ /> )}/>
              <Route  exact path="/profile/Edit/changePassword" render={props => (
              <ChangePassword {...props} /*response={data}*/ /> )}/>
            <Route  path="*" component={Component404} />
    </Switch>
    </BrowserRouter>
    
    <footer className = "footer">
    <div className="d-flex justify-content-around">
    <p>About us</p> 
    <p>Safety & Fairst Aid</p>
    <p>Careers</p>
    <p>Contact us</p>
    <p>Diving Brochure</p>
    </div>
  </footer>
      </div>
    )
  }
}

