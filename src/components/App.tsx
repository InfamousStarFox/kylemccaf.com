import React from 'react';
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import * as style from './App.module.scss';

export default function App(props: {
    children: React.ReactNode
}): React.ReactElement {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  config.autoAddCss = false;

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <style>{dom.css()}</style>
      </Helmet>

      <div className={style.container}>
        {props.children}
      </div>
    </>
  )
}