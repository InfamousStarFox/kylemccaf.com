import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Experience(props:{
    active?: boolean
}): React.ReactElement {

    const [showMore, setShowMore] = useState(false);

    return (
        <div className={`section-vcardbody section-page${props.active ? ' section-page-active' : ''}`}>
            <h2 className="pageTitle">Work Experience</h2>

            <div className="pageItem">
                <h3 className="itemTitle">Doosan GridTech</h3>
                <h4 className="itemTime">Software Development Engineer<br />2019 - Present</h4>
                <div className="description">
                    <p>Full stack engineer, building a React Native application to control a Distributed Energy Resource Optimizer (DERO) system using TypeScript, GraphQL, and PWA technologies.</p>
                </div>
            </div>

            <div className="pageItem">
                <h3 className="itemTitle">Western Region, BSA</h3>
                <h4 className="itemTime">Technology Team Lead<br />2016 - 2018</h4>
                <div className="description">
                    <p>Led a team of 10 to build and maintain a MySQL database program using PHP, JSON, and AJAX. Used Slack, JIRA, Git, and Zoom to coordinate team members and maintain project timeline.</p>
                </div>
            </div>

            <div className="pageItem">
                <h3 className="itemTitle">Freelance Web Design Design</h3>
                <h4 className="itemTime">2014 - 2019</h4>
                <div className="description">
                    <p>
                        <a href="http://western.oa-bsa.org/" target="_blank">Western Region, BSA</a><br />
                        &emsp;<a href="https://github.com/OAWest/wp-theme" target="_blank"><FontAwesomeIcon icon={faGithub} />&nbsp; WordPress Theme</a><br />
                        <a href="http://whatcomroofing.com/" target="_blank">Whatcom Roofing</a><br />
                        <a href="http://oa-bsa.org/" target="_blank">Order of the Arrow, BSA</a><br />
                        <a href="https://jonathanstyle.com/" target="_blank">Jonathan O'Brien Interior Design</a><br />
                    </p>
                </div>
            </div>

            { showMore && <>
            
                <div className="pageItem">
                    <h3 className="itemTitle">Jonathan O'Brien Interior Design</h3>
                    <h4 className="itemTime">May 2017 - June 2019</h4>
                    <div className="description">
                        <p>The lead technology assistant for this local Bellingham company. Duties include social media & brand management, website maintenance, SEO, and advertising.</p>
                    </div>
                </div>

                <div className="pageItem">
                    <h3 className="itemTitle">Section W-1N</h3>
                    <h4 className="itemTime">April 2015 - Sep 2017</h4>
                    <div className="description">
                        <p>Chief of this local non-profit organization which focuses on community service. Duties included organizing yearly training events in Alaska and Washington with 200-500 participants, leading quartly board meetings, and managing both the external and internal communications.</p>
                    </div>
                </div>

                <div className="pageItem">
                    <h3 className="itemTitle">Childcare Worldwide</h3>
                    <h4 className="itemTime">Summer 2016</h4>
                    <div className="description">
                        <p>Telemarketer for the Ugandan Kids Choir. Duties involved calling organizations, filing paperwork, and attending meetings</p>
                    </div>
                </div>

                <div className="pageItem">
                    <h3 className="itemTitle">Zodiac Aerospace</h3>
                    <h4 className="itemTime">Summer 2015</h4>
                    <div className="description">
                        <p>Inventory control and database management for the finished goods warehouse and shipping department.</p>
                    </div>
                </div>

                <div className="pageItem">
                    <h3 className="itemTitle">Salvation Army</h3>
                    <h4 className="itemTime">Summer 2014</h4>
                    <div className="description">
                        <p>Served as a cabin counselor, where I created fun and engaging ways to keep energetic youth entertained.</p>
                    </div>
                </div>

                <div className="pageItem">
                    <h3 className="itemTitle">Fire Mountain Scout Camp</h3>
                    <h4 className="itemTime">Summer 2011-2013</h4>
                    <div className="description">
                        <p>Taught leadership and communication skills to youth through a fun, adventures manner.</p>
                    </div>
                </div>
            </> }
            <a className="btn btn-dark btn-block center" onClick={() => setShowMore(!showMore)}>Show {showMore ? 'Less' : 'More'}</a>
        </div>
    );
}