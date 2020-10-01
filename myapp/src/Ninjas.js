import React from 'react';

const Ninjas = (props) => { 
    const {deleteNinja, ninjas} = props;
    return(
        <div className="ninja-list">
            {
                ninjas.map(ninja=> { 
                    return ninja.age>0 ? (
                        <div className="ninja" key={ ninja.id } >
                            <div>Name: { ninja.name } </div>
                            <div>Age: { ninja.age } </div>
                            <div>Belt: { ninja.belt } </div>
                            <button onClick={() => {deleteNinja(ninja.id)}} >Delete</button>
                            <br></br>
                        </div>
                    ) : (null);
                })
            }
        </div>
    )
}

export default Ninjas