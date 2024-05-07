import React from 'react';
import * as style from './CardItem.module.scss';

export const CardItem = (props: {
    title?: React.ReactNode,
    time?: React.ReactNode,
    description?: React.ReactNode
}): React.ReactElement => (
    <div className={style.item}>
        {props.title ? <h3 className={style.title}>{props.title}</h3> : null}
        {props.time ? <h4 className={style.time}>{props.time}</h4> : null}
        {props.description ? <div className={style.description}>{props.description}</div> : null}
    </div>
);
