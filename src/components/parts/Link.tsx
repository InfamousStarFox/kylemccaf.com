import React from 'react';

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.ReactElement {
    const style: React.CSSProperties = {
        display: 'block',
        padding: '5px 0px'
    }

    return (
        <a role='link' style={style} target='_blank' {...props} />
    );
}