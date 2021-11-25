import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGlobeAmericas, faUsers, faMedkit, faGamepad } from '@fortawesome/free-solid-svg-icons';
import * as classNames from 'assets/css/index.module.scss';

export function About(props: {
    active?: boolean
}): React.ReactElement {

    return (
        <div className={`${classNames.sectionVcardbody} ${classNames.sectionPage} ${props.active ? classNames.sectionPageActive : ''}`}>
            <h2 className={classNames.pageTitle}>About Kyle</h2>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faGraduationCap} />&nbsp; Education</h3>
                <h4 className={classNames.itemTime}>
                    Western Washington University - Class of 2019<br />
                    Bachelor Degree of Science</h4>
                <div className={classNames.description}>
                    <p>Computer Science Major</p>
                    <p>
                        Mathematics Minor<br />
                        Psychology Minor
                    </p>
                    <p>E-Commerce Development Certificate</p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faGlobeAmericas} />&nbsp; Location</h3>
                <div className={classNames.description}>
                    <p>Based in the greater Seattle area.</p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faUsers} />&nbsp; Organizations</h3>
                <div className={classNames.description}>
                    <p>
                        Association for Computing Machinery (ACM)<br />
                        Collegiate Cyber Defense Club<br />
                        WWU Artificial Intelligence Association<br />
                        WWU Formula SAE Racing Engineering Team
                    </p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faMedkit} />&nbsp; Community</h3>
                <div className={classNames.description}>
                    <p>
                        Eagle Scout, BSA Troop 4006<br />
                        Civil Air Patrol, CAP-015<br />
                        American Red Cross Community Response Hero - saved a classmate from drowning
                    </p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}><FontAwesomeIcon icon={faGamepad} />&nbsp; Hobbies</h3>
                <div className={classNames.description}>
                    <p>Eagle Scout, avid hiker and camper<br />
                        Theatre Technician, sound & light design<br />
                        Competitive Fencer<br />
                        Ham Radio, Technician Rating
                    </p>
                </div>
            </div>

        </div>
    );
}