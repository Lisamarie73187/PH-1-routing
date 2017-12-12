import React from 'react';
import {Route, NavLink} from 'react-router-dom';

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      <NavLink activeClassName="red" to="/About/faq">FAQ</NavLink>
      <NavLink activeClassName="blue" to="/About/company">Company</NavLink>
      {props.children}
    </div>
  )
}