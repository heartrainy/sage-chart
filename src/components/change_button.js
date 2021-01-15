import React, { useState, Component } from 'react';
import './change_button.css';

class ChangeButton extends Component{
    constructor(props){
      super(props);
      this.state={
        btnTxt:'Login2'
      }
    }

    render(){
      const {btnTxt}=this.state;
      return(
        <div className='button-container' onClick={()=>{ this.setState({btnTxt:btnTxt==='Login2'?'Logout4':'Login2'})}}>
          <span>{btnTxt}</span>
        </div>
      )
    }
}

export default ChangeButton;