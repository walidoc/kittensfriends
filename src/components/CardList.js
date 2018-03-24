import React from "react";
import Card from './Card';

const CardList = ({ kittens }) => {

    return (
        <div>
            {
                kittens.map(kitten => {
                    return (
                        <Card 
                            key={kitten.id} 
                            id={kitten.id} 
                            name={kitten.name} 
                            email={kitten.email} 
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;