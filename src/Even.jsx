export default function Even({count})
{
    if(count%2===0)
        // console.log(count); // this will be rendered twicw in console, so take the React.strictmode
        return <p>number is Even</p>;   
    else
    return <p>number is Odd</p>;
}

