import React from 'react';

const Ninjas = (props) => { 
    const {ninjas} = props;
    // const ninjaList = ninjas.map(ninja=> { //same thing defined below using ternary operator, must use return in last to parse this
    //     if( ninja.age>5 ){
    //         return(
    //             <div className="ninja" key={ ninja.id } >
    //                 <div>Name: { ninja.name } </div>
    //                 <div>Age: { ninja.age } </div>
    //                 <div>Belt: { ninja.belt } </div>
    //                 <br></br>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // })

    // const ninjaList = ninjas.map(ninja=> { //directly using this in return function
    //     return ninja.age>5 ? (
    //         <div className="ninja" key={ ninja.id } >
    //                 <div>Name: { ninja.name } </div>
    //                 <div>Age: { ninja.age } </div>
    //                 <div>Belt: { ninja.belt } </div>
    //                 <br></br>
    //             </div>
    //     ) : (null);
    // });

    return(
        <div className="ninja-list">
            { 
                ninjas.map(ninja=> { 
                    return ninja.age>5 ? (
                        <div className="ninja" key={ ninja.id } >
                            <div>Name: { ninja.name } </div>
                            <div>Age: { ninja.age } </div>
                            <div>Belt: { ninja.belt } </div>
                            <br></br>
                        </div>
                    ) : (null);
                })
            }
        </div>   
    )
}

export default Ninjas