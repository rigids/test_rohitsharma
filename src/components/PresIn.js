import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/';
import { Link,BrowserRouter } from 'react-router-dom';

const multiselectList = ["One", "Two", "Three", "Four", "Five"];

class PresIn extends Component {
  constructor() {
    super();
    this.state = {
      stored_value: '',
      show_msg: false,
      stored_selection: []
      
    }
  }
  save(){
    this.props.addItem(this.state);
    // clear form
    ReactDOM.findDOMNode(this.refs.text_bar).value    =  "";
    ReactDOM.findDOMNode(this.refs.select_bar).value  =  "";
    this.setState({showMsg: true})
    // show success message for 2 seconds
    setTimeout(() => this.setState({showMsg: false}), 2000);
    
  }
  render(){
    
    const { showMsg } = this.state;
    return (
      <div className="block__wrapper">
        <div className="menu__wrapper">
          <ul>
            <li className="shadow-alt">
              <Link to='/contout'>Saved Items</Link>
            </li>
          </ul>
        </div>
        <div className="form__container shadow">
          {  
            showMsg ?
            <div className="alert alert-success">Item Saved</div>:
            <div className="alert">&nbsp;</div>
          }
          <Form>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl ref="text_bar"
                  componentClass="textarea" 
                  placeholder="Enter Description"
                  rows="10"
                  onChange={event => this.setState({ stored_value: event.target.value })}
                />
            </FormGroup>
            <FormGroup controlId="formControlsSelectMultiple" >
              <ControlLabel>Select</ControlLabel>
              {' '}
              <FormControl multiple componentClass="select"  ref="select_bar"
                onChange={event=> this.setState({stored_selection:[...event.target.options].filter(({selected}) => selected).map(({value}) => value)})} 
              >
                <option key="_blank" value="">Select Option</option>
                {
                  multiselectList.map((item,i) => <option key={i} value={item}>{item}</option>)
                }
              </FormControl>
            </FormGroup>
            <div className="form-button">
             
              <Button disabled={showMsg} onClick={ ()=>this.save() }>Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(null,{addItem})(PresIn);