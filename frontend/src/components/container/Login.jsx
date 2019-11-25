import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login }  from '../../functionAuth/functionAuth'
export default class Register extends Component {
state ={}
onChangHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmitHandelr = async (e)=>{
    e.preventDefault()
    var test = login(this.state)
    if(test){ 
        this.props.history.push('/profile') 
    }
}
    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.onSubmitHandelr} style={{paddingTop : "150px"}}>
            <Form.Field>
                <label>email</label>
                <input placeholder='email' name="email" 
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <label>password</label>
                <input placeholder='password'  name = "password"
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to anas is the best' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
    }
}
