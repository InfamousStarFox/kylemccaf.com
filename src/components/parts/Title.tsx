import React from 'react';
import * as style from './Title.module.scss';

export const Title = (props: {
    text: React.ReactNode[]
}) => {
    const [first, second] = props.text;

    return (
        <h1 className={style.title}>
            {first} <span style={{ color: "#557A95" }}>{second}</span>
        </h1>
    )
}
