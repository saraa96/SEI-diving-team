
import React, { Component } from 'react'
import '../trip.css'
export default class showCourse extends Component {

  state = {
    data: this.props.trip
  }
  render() {

    return (
      <>
      <div style={{ paddingTop: "45px", paddingBottom: "90px" }}>
        <div class="container">
          <img src={this.state.data.ImageUrl} className='showImage'/>
          <div class="text-block">
            <h1>{this.state.data.TripTitle}</h1>
          </div>
        </div>
        <div style={{ width: "50%", marginLeft: "180px" }} >
          
          <h2>Price : </h2>{this.state.data.Price}
          <h2>Date : </h2>{this.state.data.Date}
          <h2>Start Time : </h2>{this.state.data.StartTime}
          <h2>End Time : </h2>{this.state.data.EndTime}
          <h2>DeparturePoint : </h2>{this.state.data.DeparturePoint}
          <h2>Overview : </h2>{this.state.data.Description}
        </div>
      <div class="container">
	<div class="row">
		<div class="col-md-12">
            <div class="input-group" id="boot-search-box">
                <input type="text" class="form-control" placeholder="Type a search term like: mobile phone" />
                <div class="input-group-btn">
                    <div class="btn-group" role="group">
                        <div class="dropdown dropdown-lg">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button>
                            <div class="dropdown-menu dropdown-menu-right" role="menu">
                                <form class="form-horizontal" role="form">
                                  <div class="form-group">
                                    <label for="filter">Narrow the search:</label>
                                    <select class="form-control">
                                        <option value="catalogue" selected>Whole catalogue</option>
                                        <option value="modal">Modal</option>
                                        <option value="price">Price</option>
                                        <option value="popular">Most Popular</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Brand:</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Category:</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  
                                 <div class="form-group">
                                    <label for="password1" class="col-sm-3 control-label">Price Range:</label>
                                <div class="col-sm-3">
                                    <input type="text" class="form-control" id="max-price" placeholder="Max"/> 
                                    <input type="text" class="form-control" id="min-price" placeholder="Min"/>
                                </div>
                                                       
                                  <button type="submit" class="btn btn-primary btn-block">Search :: <span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                  </div>
                                </form>
                            </div>
                        </div>
                        <button type="button" class="btn btn-success "><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
	</div>
</div>
   
          </>
          )
        }
      }
