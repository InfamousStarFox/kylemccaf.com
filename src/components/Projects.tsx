import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import * as classNames from 'assets/css/index.module.scss';

export function Projects(props: {
    active?: boolean
}): React.ReactElement {

    return (
        <div className={`${classNames.sectionVcardbody} ${classNames.sectionPage} ${props.active ? classNames.sectionPageActive : ''}`}>
            <h2 className={classNames.pageTitle}>Projects</h2>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faPlane} transform={{ rotate: -45 }} />&nbsp; Skygenda - Flight Scheduling Software</h3>
                <h4 className={classNames.itemTime}>Senior Project<br />2018-2019</h4>
                <div className={classNames.description}>
                    <p>Built a Progressive Web App (PWA) scheduling website using NodeJS, Express, Vuex, and Bulma, which allows Civil Air Patrol pilots and cadets to enter and find matching availability.</p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faCompass} />&nbsp; Radio Direction Finding</h3>
                <div className={classNames.description}>
                    <p>Using an array of four software defined radio receivers (RTL-SDR), this project calculates the bearing and direction of a signal, then plots it on a map in real time. The code has been featured on several hackaday projects.</p>
                    <p><a href="https://github.com/InfamousStarFox/kerberossdr" target="_blank"><FontAwesomeIcon icon={faGithub} />&nbsp; GitHub Repository</a></p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faTrophy} />&nbsp; WWU ACM Hackathon</h3>
                <h4 className={classNames.itemTime}>1st Place Wining Team<br />November 2017</h4>
                <div className={classNames.description}>
                    <p>Led the development team of four, which built a PHP/MySQL website for students to connect with mentors and collaborate on projects and assignments.</p>
                    <p><a href="https://hackoa.com/wwu/" target="_blank">Demo Site</a></p>
                    <p><a href="https://mentorq.cs.wwu.edu/" target="_blank">Live Site</a></p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faTrophy} />&nbsp; Intel HackOA Hackathon</h3>
                <h4 className={classNames.itemTime}>1st Place Wining Team<br />October 2017</h4>
                <div className={classNames.description}>
                    <p>Led a team of four to develop a program in C which reduced the amount of https packets and bandwidth necessary to serve websites via localized caching.</p>
                    <p><a href="https://devpost.com/software/project-a-l-l-a-n-6ftjzl" target="_blank">More Info</a></p>
                </div>
            </div>
        </div>
    );
}