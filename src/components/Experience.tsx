import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as classNames from 'assets/css/index.module.scss';

export function Experience(props: {
    active?: boolean
}): React.ReactElement {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className={`${classNames.sectionVcardbody} ${classNames.sectionPage} ${props.active ? classNames.sectionPageActive : ''}`}>
            <h2 className={classNames.pageTitle}>Work Experience</h2>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}>Doosan GridTech</h3>
                <h4 className={classNames.itemTime}>Software Development Engineer<br />2019 - Present</h4>
                <div className={classNames.description}>
                    <p>Full stack engineer, building a React Native application to control a Distributed Energy Resource Optimizer (DERO) system using TypeScript, GraphQL, and PWA technologies.</p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}>Western Region, BSA</h3>
                <h4 className={classNames.itemTime}>Technology Team Lead<br />2016 - 2018</h4>
                <div className={classNames.description}>
                    <p>Led a team of 10 to build and maintain a MySQL database program using PHP, JSON, and AJAX. Used Slack, JIRA, Git, and Zoom to coordinate team members and maintain project timeline.</p>
                </div>
            </div>

            <div className={classNames.pageItem}>
                <h3 className={classNames.itemTitle}>Freelance Web Design Design</h3>
                <h4 className={classNames.itemTime}>2014 - 2019</h4>
                <div className={classNames.description}>
                    <p>
                        <a href="http://western.oa-bsa.org/" target="_blank">Western Region, BSA</a><br />
                        &emsp;<a href="https://github.com/OAWest/wp-theme" target="_blank"><FontAwesomeIcon icon={faGithub} />&nbsp; WordPress Theme</a><br />
                        <a href="http://whatcomroofing.com/" target="_blank">Whatcom Roofing</a><br />
                        <a href="http://oa-bsa.org/" target="_blank">Order of the Arrow, BSA</a><br />
                        <a href="https://jonathanstyle.com/" target="_blank">Jonathan O'Brien Interior Design</a><br />
                    </p>
                </div>
            </div>

            {showMore && <>

                <div className={classNames.pageItem}>
                    <h3 className={classNames.itemTitle}>Jonathan O'Brien Interior Design</h3>
                    <h4 className={classNames.itemTime}>May 2017 - June 2019</h4>
                    <div className={classNames.description}>
                        <p>The lead technology assistant for this local Bellingham company. Duties include social media & brand management, website maintenance, SEO, and advertising.</p>
                    </div>
                </div>

                <div className={classNames.pageItem}>
                    <h3 className={classNames.itemTitle}>Section W-1N</h3>
                    <h4 className={classNames.itemTime}>April 2015 - Sep 2017</h4>
                    <div className={classNames.description}>
                        <p>Chief of this local non-profit organization which focuses on community service. Duties included organizing yearly training events in Alaska and Washington with 200-500 participants, leading quartly board meetings, and managing both the external and internal communications.</p>
                    </div>
                </div>

                <div className={classNames.pageItem}>
                    <h3 className={classNames.itemTitle}>Childcare Worldwide</h3>
                    <h4 className={classNames.itemTime}>Summer 2016</h4>
                    <div className={classNames.description}>
                        <p>Telemarketer for the Ugandan Kids Choir. Duties involved calling organizations, filing paperwork, and attending meetings</p>
                    </div>
                </div>

                <div className={classNames.pageItem}>
                    <h3 className={classNames.itemTitle}>Zodiac Aerospace</h3>
                    <h4 className={classNames.itemTime}>Summer 2015</h4>
                    <div className={classNames.description}>
                        <p>Inventory control and database management for the finished goods warehouse and shipping department.</p>
                    </div>
                </div>

                <div className={classNames.pageItem}>
                    <h3 className={classNames.itemTitle}>Salvation Army</h3>
                    <h4 className={classNames.itemTime}>Summer 2014</h4>
                    <div className={classNames.description}>
                        <p>Served as a cabin counselor, where I created fun and engaging ways to keep energetic youth entertained.</p>
                    </div>
                </div>

                <div className={classNames.pageItem}>
                    <h3 className={classNames.itemTitle}>Fire Mountain Scout Camp</h3>
                    <h4 className={classNames.itemTime}>Summer 2011-2013</h4>
                    <div className={classNames.description}>
                        <p>Taught leadership and communication skills to youth through a fun, adventures manner.</p>
                    </div>
                </div>
            </>}
            <a className={classNames.btn} onClick={() => setShowMore(!showMore)}>Show {showMore ? 'Less' : 'More'}</a>
        </div>
    );
}