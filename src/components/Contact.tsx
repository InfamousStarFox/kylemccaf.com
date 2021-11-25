import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import * as classNames from 'assets/css/index.module.scss';

export function Contact(props: {
    active?: boolean
}): React.ReactElement {

    return (
        <div className={`${classNames.sectionVcardbody} ${classNames.sectionPage} ${props.active ? classNames.sectionPageActive : ''}`}>
            <h2 className={classNames.pageTitle}>Contact</h2>
            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}>Connect</h3>
                <p><FontAwesomeIcon icon={faLinkedin} />&nbsp; LinkedIn: <a href="https://www.linkedin.com/in/kylemccaf/" target="_blank">linkedin.com/in/kylemccaf/</a></p>
                <p><FontAwesomeIcon icon={faGithubSquare} />&nbsp; GitHub: <a href="https://github.com/InfamousStarFox/" target="_blank">github.com/InfamousStarFox/</a></p>
            </div>
            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}>Share</h3>
                <p><FontAwesomeIcon icon={faFilePdf} />&nbsp;Printable Resume: <a href="/Kyle McCaffery Resume.pdf" target="_blank">Kyle McCaffery Resume.pdf</a></p>
            </div>
        </div>
    );
}