import React from 'react';
import * as style from './Navbar.module.scss';

export const NavBar = (props: {
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}): React.ReactElement => {

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
            className={style.nav}
            style={{
                left: props.page !== 'home' ? '0%' : '15%'
            }}>
            <ul className={style.list}>
                {
                    navigation.map(item => {
                        return (
                            <li key={item.page}>
                                <a
                                    onClick={() => props.setPage(item.page)}
                                    className={props.page === item.page ? style.active : ''}
                                    role='button'
                                    tabIndex={0}
                                    title={item.title}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};