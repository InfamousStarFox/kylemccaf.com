import React from 'react';
import * as classNames from './Navbar.module.scss';

export function NavBar(props: {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}): React.ReactElement {

    const navigation = [
        {
            title: 'Home',
            page: "home"
        },
        {
            title: 'About',
            page: "about"
        },
        {
            title: 'Experience',
            page: "experience"
        },
        {
            title: 'Projects',
            page: "projects"
        },
        {
            title: 'Contact',
            page: "contact"
        },
    ];

    return (
        <div
            className={classNames.mainMenu}
            style={{
                left: props.page !== 'home' ? '0%' : '15%'
            }}>
            <ul className={classNames.menuList}>
                {
                    navigation.map(item => {
                        return (
                            <li key={item.page}><a onClick={() => props.setPage(item.page)} className={props.page === item.page ? classNames.menuActive : ''}>{item.title}</a></li>
                        );
                    })
                }
            </ul>
        </div>
    );
};