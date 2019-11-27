import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Show from "./showCourse";
import "./courses.css";
export default class courses extends Component {
  render() {
    let course = this.props.courses.map(item => (
      <section>
        <div className="container py-3">
          <div
            className="card"
            style={{ margin: "0 auto", width: "65%", height: "65%" }}
          >
            <div className="row ">
              <div className="col-md-4">
                <img
                  alt="d"
                  style={{ width: "250px" }}
                  variant="left"
                  src={item.ImageUrl}
                />
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <h4 className="card-title">{item.CourseTitle}</h4>
                  <p className="card-text">{item.overview} </p>
                  <p className="card-text">{item.Price}</p>
                  <NavLink
                    style={{ width: "50%", marginLeft: "70%" }}
                    to={`/courses/${item._id}`}
                  >
                    Book Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ));
    return (
      <div style={{ marginTop: "190px", paddingBottom: "90px" }}>{course}</div>
    );
  }
}
