import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { Card } from './parts/Card';
import { CardItem } from './parts/CardItem';

export function Contact(props: {
    active?: boolean
}): React.ReactElement {

    return (
        <Card
            active={props.active}
            title="Contact"
            content={<>
                <CardItem
                    title={'Connect'}
                    description={<>
                        <p><FontAwesomeIcon icon={faLinkedin} />&nbsp; LinkedIn: <a href="https://www.linkedin.com/in/kylemccaf/" target="_blank">linkedin.com/in/kylemccaf/</a></p>
                        <p><FontAwesomeIcon icon={faGithubSquare} />&nbsp; GitHub: <a href="https://github.com/InfamousStarFox/" target="_blank">github.com/InfamousStarFox/</a></p>
                    </>}
                />

                <CardItem
                    title={'Share'}
                    description={<>
                        <p><FontAwesomeIcon icon={faFilePdf} />&nbsp;Printable Resume: <a href="/Kyle McCaffery Resume.pdf" target="_blank">Kyle McCaffery Resume.pdf</a></p>
                    </>}
                />
            </>}
        />
    );
}