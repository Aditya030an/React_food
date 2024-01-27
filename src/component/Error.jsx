import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err) //object of error
    return(
        <>
            {/* This information is not complete for user 
                means user do not know which type of error is their
                so we use a HOOK useRouterError() , which gives us an object as a output
            */}
            <h1>Oops!!</h1>
            <h5>Something wrong don</h5>
            <h1>{err.status + ":" + err.statusText}</h1>
        </>
    );
}

export default Error;