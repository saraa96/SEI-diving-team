import React, {Component } from 'react';
 import './homepage.css'
 import {
  Link,
} from 'react-router-dom';
 import {Row,Col,Container,Image} from 'react-bootstrap'
 import {Button} from 'semantic-ui-react'
 import 'react-datepicker/dist/react-datepicker.css'
 import DatePicker from 'react-datepicker';
export default class homepage extends Component {
    state = {
        StartDate: new Date(),
        EndDate: new Date(),
      }
     
    onChange = (StartDate)=> {
      this.setState({ StartDate})
       }
       onChange2 = (EndDate)=> {
        this.setState({ EndDate})
         }
    
    render() {
      var str = this.state.StartDate.toString()
      console.log(typeof(str));
      
        return (
          <div >
            <div className="backGraound">
            <div className="FindBorder" >
            -
            </div>
           <div className ="FindTrip" >Find Trip
           </div>
          
          <div className="calnder" >
      
     From :   <DatePicker
     
      showPopperArrow={false}
      selected={this.state.StartDate}
      onChange={StartDate => this.onChange(StartDate)}
    />
          
    TO:      <DatePicker
    dateFormat="yyyy/MM/dd"
      showPopperArrow={false}
      selected={this.state.EndDate}
      onChange={EndDate => this.onChange2(EndDate)}
    />
<Button href='/trips'>Submit</Button>
            </div>
           
            </div>
        <Container style={{marginRight:"40%",}} >
  <Row>
    <Col style={{marginTop:"60px"}} lg>
 <h1 style={{fontSize:"70px",letterSpacing:"2px"}}>Why Scuba Dive</h1> 
 <p style={{marginTop:"60px ",fontSize:"23px" , fontFamily:"Franklin Gothic Medium" }} >
 Diving offers many possibilities for education. First we have to face fears, learn new skills and later we continue to improve our skills and reach new boundaries. All the while learning about ourselves and a whole new world we barely acknowledged was there before.
 </p>
{console.log(this.state.date)}
    </Col>
    <Col lg>
    <div className="sq">
    </div>
    </Col>
    <Row>
    <Col style={{marginTop:"30px;"}} lg>
 {console.log(str.substring(0,15))} 
{console.log(this.state.StartDate)}
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
