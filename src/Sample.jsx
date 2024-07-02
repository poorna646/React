// 3 ways

// function Sample()
// {

// }
// export default Sample;

// export function Sample()
// {

// }

// function Sample()
// {

// }
// export { Sample};
// ---------------------------------------------------
//CONDITIONAL RENDERING
// export default function Sample()
// {
//     let present = true;
//     if(present)
//         return <p>good</p>;
//     else
//     return <p>good</p>;
// }

// ------------------------------------------------------
// ol>li*3
{/* <ol>
    <li></li>
    <li></li>
    <li></li>
</ol> */}
// ---------------------------------------------------------


// ARRAY
// export default function Sample()
// {
//     let arr = ["poorna","shree"];
//     return(
//        <ol>
//         <li>{arr[0]}</li>
//         <li>{arr[1]}</li>
//        </ol> 


//     );
// }


export default function Sample()
{
    let arr = ["poorna","shree"];
    return(
        //when written like this there will be warning in console , to clear that we have another method
       <ol>
        {
            arr.map((value) => {
                return (<li>{value}</li>)
            })

            
        }


        {/* another way to directly display */}
        {/* {
            ["poorna","shree"]
        } */}

       </ol> 


    );
}