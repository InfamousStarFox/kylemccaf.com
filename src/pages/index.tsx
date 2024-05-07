import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { NavBar } from 'components/NavBar';
import { About } from 'components/About';
import { Experience } from 'components/Experience';
import { Projects } from 'components/Projects';
import { Contact } from 'components/Contact';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { IconButton } from 'components/parts/Button';
import { CardHome } from 'components/parts/Card';
import { Title } from 'components/parts/Title';
import App from 'components/App';

export default function IndexPage(): React.ReactElement {
  const [page, setPage] = useState('home');

  return (
    <App>
      <NavBar page={page} setPage={setPage} />
      <CardHome
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
        <Title text={["Kyle", "McCaffery"]} />
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ marginBottom: 20, fontSize: '1rem' }}>Senior Software Developer</h2>
          <p>Senior Software Developer in Seattle WA.</p>
          <p>React, TypeScript, GraphQL, &amp; more.</p>
        </div>
        <IconButton
          icon={faFilePdf}
          children="Download my Resume"
          href="/Kyle McCaffery Resume.pdf"
        />
        <IconButton
          icon={faLinkedinIn}
          children="Connect on LinkedIn"
          href="https://www.linkedin.com/in/kylemccaf/"
        />
      </CardHome>

      <About active={page === 'about'} />
      <Experience active={page === 'experience'} />
      <Projects active={page === 'projects'} />
      <Contact active={page === 'contact'} />
    </App>
  )
}