import React from "react";



function TodoHeader({children, loading}){
    
    

    return(
    <header>
        {React.cloneElement(children, {loading })}
    </header>
    );
}

export {TodoHeader} ;