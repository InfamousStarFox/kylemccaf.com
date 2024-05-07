import React from 'react';
import * as style from './Card.module.scss';

export const Card = (props: {
    title?: React.ReactNode,
    children?: React.ReactNode,
    active?: boolean,
}): React.ReactElement => (
    <div className={`${style.card} ${style.page} ${props.active ? style.active : ''}`}>
        {props.title ? <h2 className={style.title}>{props.title}</h2> : null}
        {props.children}
    </div>
);


export const CardHome = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.ReactElement => (
    <div className={`${style.card} ${style.home}`} {...props} />
);
