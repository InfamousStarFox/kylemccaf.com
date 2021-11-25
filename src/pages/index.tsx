import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { NavBar } from 'components/NavBar';
import { About } from 'components/About';
import { Experience } from 'components/Experience';
import { Projects } from 'components/Projects';
import { Contact } from 'components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import * as classNames from 'assets/css/index.module.scss';

const IndexPage = (): React.ReactElement => {
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

  const [page, setPage] = useState('home');
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

      <div className={classNames.container}>
        <NavBar page={page} setPage={setPage} />
        <div
          className={`${classNames.sectionVcardbody} ${classNames.sectionHome}`}
          style={{
            left: page !== 'home' ? '15%' : '30%'
          }}
        >
          <StaticImage
            src='../images/profile.jpg'
            alt="Kyle McCaffery"
            placeholder="blurred"
            width={190}
            height={190}
            quality={90}
            style={{
              overflow: 'hidden',
              borderRadius: '100%',
              border: '6px solid #ddd',
              marginBottom: 20
            }}
          />
          <h1 className={classNames.profileTitle}>Kyle <span style={{ color: "#557A95" }}>McCaffery</span></h1>
          <div style={{ marginBottom: 20 }}>
            <h4 style={{ marginBottom: 20 }}>Software Developer | Security Consultant</h4>
            <p>Software Developer in Seattle WA.</p>
            <p>React, TypeScript, GraphQL, & more.</p>
          </div>
          <a href="/Kyle McCaffery Resume.pdf" target="_blank" className={classNames.btn}><FontAwesomeIcon icon={faFilePdf} />&nbsp; Download my Resume</a>
          <a href="https://www.linkedin.com/in/kylemccaf/" target="_blank" className={classNames.btn}><FontAwesomeIcon icon={faLinkedinIn} />&nbsp; Connect on LinkedIn</a>
        </div>

        <About active={page === 'about'} />
        <Experience active={page === 'experience'} />
        <Projects active={page === 'projects'} />
        <Contact active={page === 'contact'} />
      </div>
    </>
  )
}

export default IndexPage
