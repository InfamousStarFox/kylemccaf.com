import React from "react";
import { navigate } from 'gatsby';
import 'assets/css/index.scss';

export default function NotFoundPage():React.ReactElement {
  return (
    <div className='container'>
      <div className={`section-vcardbody section-home`}>
        <div style={{textAlign:'center'}}>
          <h1 className="profile-title">Error <span style={{color: "#557A95"}}>404</span></h1>
          <h4 className="profile-subtitle">Page not found</h4>
          <div className="profile-subtitle">
            <p>The requested page could not be found.</p>
          </div>
          <a onClick={() => navigate('/')} className="btn btn-dark btn-block">Return Home</a>
        </div>
      </div>
    </div>
  )
}