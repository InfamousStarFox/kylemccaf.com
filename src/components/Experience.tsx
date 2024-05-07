import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Card } from './parts/Card';
import { CardItem } from './parts/CardItem';
import { Button } from './parts/Button';
import { Link } from './parts/Link';

export const Experience = (props: {
    active?: boolean
}): React.ReactElement => {

    const [showMore, setShowMore] = useState(false);

    return (
        <Card
            active={props.active}
            title="Work Experience"
            children={<>
                <CardItem
                    title={'Liberty Mutual'}
                    time={<>
                        Senior Software Engineer<br />2022 - Present
                    </>}
                    description={<>
                        <p>Full stack, senior developer; React, TypeScript, and GraphQL. Interface design and construction for agents across the world to interact with customer data.</p>
                    </>}
                />
                <CardItem
                    title={'Doosan GridTech'}
                    time={<>
                        Software Development Engineer<br />2019 - 2022
                    </>}
                    description={<>
                        <p>Full stack engineer, building a React Native application to control a Distributed Energy Resource Optimizer (DERO) system using TypeScript, GraphQL, and PWA technologies.</p>
                    </>}
                />
                <CardItem
                    title={'Western Region, BSA'}
                    time={<>
                        Technology Team Lead<br />2016 - 2018
                    </>}
                    description={<>
                        <p>Led a team of 10 to build and maintain a MySQL database program using PHP, JSON, and AJAX. Used Slack, JIRA, Git, and Zoom to coordinate team members and maintain project timeline.</p>
                    </>}
                />
                <CardItem
                    title={'Freelance Web Design Design'}
                    time='2014 - 2019'
                    description={<>
                        <p>
                            <Link href="https://western.oa-bsa.org/">Western Region, BSA</Link>
                            <Link href="https://github.com/OAWest/wp-theme" title="GitHub">&emsp;<FontAwesomeIcon icon={faGithub} /> WordPress Theme</Link>
                            <Link href="https://whatcomroofing.com/">Whatcom Roofing</Link>
                            <Link href="https://oa-bsa.org/">Order of the Arrow, BSA</Link>
                            <Link href="https://jonathanstyle.com/">Jonathan O'Brien Interior Design</Link>
                        </p>
                    </>}
                />

                {showMore && <>

                    <CardItem
                        title="Jonathan O'Brien Interior Design"
                        time='May 2017 - June 2019'
                        description={<>
                            <p>The lead technology assistant for this local Bellingham company. Duties include social media & brand management, website maintenance, SEO, and advertising.</p>
                        </>}
                    />
                    <CardItem
                        title="Section W-1N"
                        time='April 2015 - Sep 2017'
                        description={<>
                            <p>Chief of this local non-profit organization which focuses on community service. Duties included organizing yearly training events in Alaska and Washington with 200-500 participants, leading quartly board meetings, and managing both the external and internal communications.</p>
                        </>}
                    />
                    <CardItem
                        title="Childcare Worldwide"
                        time='Summer 2016'
                        description={<>
                            <p>Telemarketer for the Ugandan Kids Choir. Duties involved calling organizations, filing paperwork, and attending meetings</p>
                        </>}
                    />
                    <CardItem
                        title="Zodiac Aerospace"
                        time='Summer 2015'
                        description={<>
                            <p>Inventory control and database management for the finished goods warehouse and shipping department.</p>
                        </>}
                    />
                    <CardItem
                        title="Salvation Army"
                        time='Summer 2014'
                        description={<>
                            <p>Served as a cabin counselor, where I created fun and engaging ways to keep energetic youth entertained.</p>
                        </>}
                    />
                    <CardItem
                        title="Fire Mountain Scout Camp"
                        time='Summer 2011-2013'
                        description={<>
                            <p>Taught leadership and communication skills to youth through a fun, adventures manner.</p>
                        </>}
                    />
                </>}
                <Button
                    onClick={() => setShowMore(!showMore)}
                    children={<>Show {showMore ? 'Less' : 'More'}</>}
                />
            </>}
        />
    );
}
