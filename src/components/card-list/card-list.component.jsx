import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => (

    <div className = 'card-list'> {

        props.users.map ( user => (

            <Card key = {user._id} user = {user} />

            ))

        }
    </div>
        
    /*console.log (props);
    return <div className='card-list'>{props.children}</div>*/
);