import React from 'react';
import * as classNames from './CardItem.module.scss';

export function CardItem(props: {
    title?: string | React.ReactChild,
    time?: string | React.ReactChild,
    description?: string | React.ReactChild
}): React.ReactElement {

    const title = props.title ? <h3 className={classNames.itemTitle}>{props.title}</h3> : <></>;
    const time = props.time ? <h4 className={classNames.itemTime}>{props.time}</h4> : <></>;
    const description = props.description ? <div className={classNames.itemDescription}>{props.description}</div> : <></>;

    return (
        <div className={classNames.pageItem}>
            {title}{time}{description}
        </div>
    );
}