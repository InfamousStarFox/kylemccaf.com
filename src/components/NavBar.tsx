import React from 'react';

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
        <div className={`main-menu${props.page !== 'home' ? ' main-menu-pgactive' : ''}`}>
            <ul className="main-menu-list">
                {
                    navigation.map(item => {
                        return (
                            <li key={item.page}><a onClick={() => props.setPage(item.page)} className={props.page === item.page ? 'menuActive' : ''}>{item.title}</a></li>
                        );
                    })
                }
            </ul>
        </div>
    );
};