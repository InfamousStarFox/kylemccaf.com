import React from 'react';
import * as classNames from './Card.module.scss';
import * as indexClassNames from 'assets/css/index.module.scss';

export function Card(props: {
    title?: string | React.ReactChild,
    content?: React.ReactChild,
    active?: boolean,
}): React.ReactElement {

    return (
        <div className={`${indexClassNames.sectionVcardbody} ${classNames.sectionPage} ${props.active ? classNames.sectionPageActive : ''}`}>
            <h2 className={classNames.pageTitle}>{props.title}</h2>
            {props.content}
        </div>
    );
}