import React from 'react';
function Hello() {
    let isMorning = (new Date()).getHours() < 12;
    return isMorning
    ? (
        <React.Fragment>
            <h3> Good Morning </h3>
            <h3> 5 New Posts </h3>
            </React.Fragment>
            )
            : (
                <>
                <h3> Good Morning </h3>
                <h3> 7 New Posts </h3>
                </>
                )
            }
export default Hello;