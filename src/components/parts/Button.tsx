import React from 'react';
import * as style from './Button.module.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.ReactElement => (
    <a className={style.btn} role='button' {...props} />
);

interface IconButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon: IconDefinition
}

export const IconButton = (props: IconButtonProps): React.ReactElement => (
    <a className={style.btn} role='button' target='_blank' {...props}>
        <FontAwesomeIcon icon={props.icon} /> &nbsp;
        {props.children}
    </a>
);
