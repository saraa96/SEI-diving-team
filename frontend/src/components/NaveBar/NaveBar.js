import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
// import { Link, withRouter } from 'react-router-dom'
import { withRouter } from "react-router-dom";


class NaveBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = ((e, { name }) => {
    this.setState({ activeItem: name })
    if (name === "home"){
      this.props.history.push(`/${name}`)

    }else{
      this.props.history.push(`/${name}`)

    }
    } )

    //function created to use log out 
    handleLogout = () =>{
      localStorage.removeItem('usertoken')
      this.setState({ isLoggedIn: true })
      this.props.history.push('/')
    }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='login'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='register'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
         
         
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'} //This is used to click and log out 
            onClick={this.handleLogout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
export default withRouter(NaveBar)