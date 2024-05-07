import React from "react";
import { navigate } from 'gatsby';
import { Button } from "components/parts/Button";
import { CardHome } from "components/parts/Card";
import { Title } from "components/parts/Title";
import App from "components/App";

export default function NotFoundPage(): React.ReactElement {
  return (
    <App>
      <CardHome style={{height: '260px'}}>
        <Title text={['Error', '404']} />
        <div style={{ marginBottom: 20 }}>
          <h4 style={{ marginBottom: 20 }}>Page not found</h4>
          <p>The requested page could not be found.</p>
        </div>
        <Button
          onClick={() => navigate('/')}
          children='Return Home'
        />
      </CardHome>
    </App>
  );
}