import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className = 'card-container'>
        <h3> "{props.user.quote}" </h3>
        <p> Author: {props.user.source} </p>
        <p> Philosophy: {props.user.philosophy} </p>
    </div>
);