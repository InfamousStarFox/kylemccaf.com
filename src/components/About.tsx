import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGlobeAmericas, faUsers, faMedkit, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Card } from './parts/Card';
import { CardItem } from './parts/CardItem';

export function About(props: {
    active?: boolean
}): React.ReactElement {

    return (
        <Card
            active={props.active}
            title="About Kyle"
            content={
                <>
                    <CardItem
                        title={<>
                            <FontAwesomeIcon icon={faGraduationCap} />&nbsp; Education
                        </>}
                        time={<>
                            Western Washington University - Class of 2019<br />
                            Bachelor Degree of Science
                        </>}
                        description={<>
                            <p>Computer Science Major</p>
                            <p>
                                Mathematics Minor<br />
                                Psychology Minor
                            </p>
                            <p>E-Commerce Development Certificate</p>
                        </>}
                    />

                    <CardItem
                        title={<>
                            <FontAwesomeIcon icon={faGlobeAmericas} />&nbsp; Location
                        </>}
                        description={<>
                            <p>Based in the greater Seattle area.</p>
                        </>}
                    />

                    <CardItem
                        title={<>
                            <FontAwesomeIcon icon={faUsers} />&nbsp; Organizations
                        </>}
                        description={<>
                            <p>
                                Association for Computing Machinery (ACM)<br />
                                Collegiate Cyber Defense Club<br />
                                WWU Artificial Intelligence Association<br />
                                WWU Formula SAE Racing Engineering Team
                            </p>
                        </>}
                    />

                    <CardItem
                        title={<>
                            <FontAwesomeIcon icon={faMedkit} />&nbsp; Community
                        </>}
                        description={<>
                            <p>
                                Eagle Scout, BSA Troop 4006<br />
                                Civil Air Patrol, CAP-015<br />
                                American Red Cross Community Response Hero - saved a classmate from drowning
                            </p>
                        </>}
                    />

                    <CardItem
                        title={<>
                            <FontAwesomeIcon icon={faGamepad} />&nbsp; Hobbies
                        </>}
                        description={<>
                            <p>Eagle Scout, avid hiker and camper<br />
                                Theatre Technician, sound & light design<br />
                                Competitive Fencer<br />
                                Ham Radio, Technician Rating
                            </p>
                        </>}
                    />
                </>
            }
        />
    );
}