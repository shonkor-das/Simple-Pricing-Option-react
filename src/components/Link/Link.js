import React from 'react';

const Link = ({route}) => {
    return (
        <li className='list-none ml-5 text-2xl text-white'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;