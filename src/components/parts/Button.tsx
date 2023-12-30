import React from 'react';
import * as classNames from './Button.module.scss';

export function Button(props: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.ReactElement {

    return (
        <a className={classNames.btn} role='button' {...props} />
    );
}