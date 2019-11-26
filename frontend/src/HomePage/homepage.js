import React, {Component } from 'react';
 import './homepage.css'
 import {
  Link,
  Route,
} from 'react-router-dom';
 import {Row,Col,Container,Image} from 'react-bootstrap'
 import {Button} from 'semantic-ui-react'
 import DatePicker from 'react-date-picker';
export default class homepage extends Component {
    state = {
        date: 'dd'/'ww'/'yyyy' 
      }
    onChange = date => this.setState({ date })
    render() {
        return (
          <div >
            <div className="backGraound">
            <div className="FindBorder" >
            -
            </div>
           <div className ="FindTrip" >Find Trip
           </div>
          
          <div className="calnder" >
        FROM :   <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
           
           TO :    <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />

            
            </div>
            <Button >Submit</Button>
            </div>
        <Container style={{marginRight:"40%",}} >
  <Row>
    <Col style={{marginTop:"60px"}} lg>
 <h1 style={{fontSize:"70px",letterSpacing:"2px"}}>Why Scuba Dive</h1> 
 <p style={{marginTop:"60px ",fontSize:"23px" , fontFamily:"Franklin Gothic Medium" }} >
 Diving offers many possibilities for education. First we have to face fears, learn new skills and later we continue to improve our skills and reach new boundaries. All the while learning about ourselves and a whole new world we barely acknowledged was there before.
 </p>

    </Col>
    <Col lg>
    <div className="sq">
    </div>
    </Col>
    <Row>
    <Col style={{marginTop:"30px;"}} lg>

<Image style={{width:"200%", marginLeft:"-320px",marginTop:"30px;"}} src="https://ambergrisdivers.com/wp-content/uploads/2018/11/padi-open-water-diver-course-990x490.jpg"  />
    </Col>
    <Col lg>
    <h1 style={{fontSize:"40px",marginTop:"160px",marginLeft:"45%" }}>IT’S DIFFERENT EVERYWHERE YOU GO, EVERY TIME YOU GO</h1> 
    <div className = 'shopbtn'>
       <Link to="/courses" >  <Button content='Primary' size="md" style = {{fontSize : "20px" , fontFamily: 'Courier New'}}  > JOIN NOW  </Button> </Link>  
</div>

    </Col>
  </Row>
  </Row>

 </Container>
 
            </div>
        )
    }
}
