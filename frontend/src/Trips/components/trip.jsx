import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {Image} from 'bootstrap'
import '../trip.css'
export default class courses extends Component {

    render() {
  let Trips = this.props.trip.map(item => 
<section >
  <div className="container py-3" >
    <div className="card" style={{margin:"0 auto",width:"65%", height:"65%"}}>
      <div className="row ">
        <div className="col-md-4">
            <img className={{width:"150px", height:"200px"}} variant="left" src={item.ImageUrl} class="w-100" fluid/>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title">{item.TripTitle}</h4>
              <p className="card-text">{item.Description} </p>
              <p className="card-text">{item.Price}</p>
              <NavLink  style={{width:"50%", marginLeft:"70%"}}  to={`/trips/${item._id}`}>Book Now</NavLink>
            </div>
          </div>

        </div>
      </div>
    </div>
</section>
  ) 
        return (
            <div style = {{ marginTop:"190px", paddingBottom:"90px"  }}>

        {Trips}
            </div>
        )
    }
}
