import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { Card } from './parts/Card';
import { CardItem } from './parts/CardItem';
import { Link } from './parts/Link';

export function Projects(props: {
    active?: boolean
}): React.ReactElement {

    return (


        <Card
            active={props.active}
            title="Projects"
            content={<>
                <CardItem
                    title={<><FontAwesomeIcon icon={faPlane} transform={{ rotate: -45 }} />&nbsp; Skygenda - Flight Scheduling Software</>}
                    description={<>
                        <p>Built a Progressive Web App (PWA) scheduling website using NodeJS, Express, Vuex, and Bulma, which allows Civil Air Patrol pilots and cadets to enter and find matching availability.</p>
                    </>}
                />

                <CardItem
                    title={<><FontAwesomeIcon icon={faCompass} />&nbsp; Radio Direction Finding</>}
                    description={<>
                        <p>Using an array of four software defined radio receivers (RTL-SDR), this project calculates the bearing and direction of a signal, then plots it on a map in real time. The code has been featured on several hackaday projects.</p>
                        <Link href="https://github.com/InfamousStarFox/kerberossdr"><FontAwesomeIcon icon={faGithub} /> GitHub Repository</Link>
                    </>}
                />

                <CardItem
                    title={<><FontAwesomeIcon icon={faTrophy} />&nbsp; WWU ACM Hackathon</>}
                    time={<>1st Place Wining Team<br />November 2017</>}
                    description={<>
                        <p>
                            Led the development team of four, which built a PHP/MySQL website for students to connect with mentors and collaborate on projects and assignments.
                        </p>
                    </>}
                />

                <CardItem
                    title={<><FontAwesomeIcon icon={faTrophy} />&nbsp; Intel HackOA Hackathon</>}
                    time={<>1st Place Wining Team<br />October 2017</>}
                    description={<>
                        <p>Led a team of four to develop a program in C which reduced the amount of https packets and bandwidth necessary to serve websites via localized caching.</p>
                        <Link href="https://devpost.com/software/project-a-l-l-a-n-6ftjzl">Learn more at DevPost</Link>
                    </>}
                />
            </>}
        />

    );
}