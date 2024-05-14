import React from 'react';
import { Link } from 'react-router-dom';
import '~/styles/App.css';

interface IProps {
    id: string,
    image: string,
    name: string,
}

export function Selection(props: IProps) {
    return(
        <Link className='selection' to={'/stream/' + props.id}>
            <div>
                <div><img src={props.image} alt={props.image} className='selection-image'/></div>
                <div>{props.name}</div>
            </div>
        </Link>
    );
}
