import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

function Type(props) {
    return (
        <div className='  bold-font'>
            <Typewriter

                onInit={(typewriter) => {

                    typewriter.typeString(props.string)

                        .pauseFor(1000)
                        // .deleteAll()
                        // .typeString("WORD")
                        .start();
                }}
            />
        </div>
    );
}

export default Type;
