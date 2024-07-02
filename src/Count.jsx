import { useState } from "react";

export default function Count({initialValue , min , max})
{
    // let count= 0;
    const[count,setCount] = useState(initialValue); //initial value of count is 0
    // function Click()
    // {
    //     console.log("clicked",count);
    //     // count++;
    //     setCount(count+1);
    // }

    function incr()
    {
        // count++;
        if(count<max)
        setCount(count+1);
    }

    function decr()
    {   
        if(count<min)
            {                
                console.log("cannot decr");    
            }
        else
        setCount(count-1);
    }

    return(
        <>
        <h1>my count value is {count}</h1>
        <button onClick={incr}>incr</button>
        <button onClick={decr}>decr </button>
        {/* <button onClick={Click}>click me</button> */}
       
        </>

    );
}


// import { useState } from "react";

// export default function Count(props)
// {
//     // let count= 0;
//     const[count,setCount] = useState(props.initialValue); //initial value of count is 0
//     // function Click()
//     // {
//     //     console.log("clicked",count);
//     //     // count++;
//     //     setCount(count+1);
//     // }

//     function incr()
//     {
//         // count++;
//         if(count<props.max)
//         setCount(count+1);
//     }

//     function decr()
//     {   
//         if(count<props.min)
//             {
//                 console.log("cannot decr");    
//             }
//         else
//         setCount(count-1);
//     }

//     return(
//         <>
//         <h1>my count value is {count}</h1>
//         <button onClick={incr}>incr</button>
//         <button onClick={decr}>decr </button>
//         {/* <button onClick={Click}>click me</button> */}
       
//         </>

//     );
// }



// import { useState } from "react";

// export default function Count()
// {
//     // let count= 0;
//     const[count,setcount] = useState(0);
//     function Click()
//     {
//         count = count + 1;
//         console.log(count);
//     }

//     return(
//         <>
//         <h1>my count value is {count}</h1>
//         <button onClick={() => setCount(count + 1)}>incr</button>
//         <button onClick={() => setCount(count + 1)}>decr</button>
//         {/* <button onClick={Click}>dec</button> */}
//         </>

//     );
// }