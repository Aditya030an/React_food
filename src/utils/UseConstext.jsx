//i want that this my name and email id will be their in all the comonent but i donot want to set props or do props drilliing so use UseCintext to do it

import { createContext } from "react";

const UseContext = createContext({
    user:{
        name:"Demo Name",
        email:"demo@gamil.com"
    }
});

export default UseContext;