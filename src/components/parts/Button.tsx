import React from 'react';
import * as classNames from './Button.module.scss';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    content?: string | React.ReactChild,
}

export function Button(props: ButtonProps): React.ReactElement {

    return (
        <a className={classNames.btn} {...props}>
            {props.content}
        </a>
    );
}