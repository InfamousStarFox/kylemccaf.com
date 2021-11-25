import React from "react";
import { navigate } from 'gatsby';
import * as classNames from 'assets/css/index.module.scss';

export default function NotFoundPage(): React.ReactElement {
  return (
    <div className={classNames.container}>
      <div className={`${classNames.sectionVcardbody} ${classNames.sectionHome}`}>
        <h1 className={classNames.profileTitle}>Error <span style={{ color: "#557A95" }}>404</span></h1>
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ marginBottom: 20 }}>Page not found</h4>
          <p>The requested page could not be found.</p>
        </div>
        <a onClick={() => navigate('/')} className={classNames.btn}>Return Home</a>
      </div>
    </div>
  );
}