import React from 'react';

export const Helloo = ({name, posts}) => {
if (!name) return null;
let isMorning = (new Date()).getHours() < 12;
let hellooHeader = isMorning
? <h3> Good Morning {name} </h3>
: <h3> Good Day {name} </h3> ;
return (
<>
{hellooHeader}
{posts === 0
? null
: <h3> {posts} New Posts </h3>}
</> )}