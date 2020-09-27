import React from 'react';

const Ninjas = (props) => { //we can get rid of line 4 just by getting 'props' directly in 'ninjas' by declaring function argument as ({ninjas})
    const {ninjas} = props;
    const ninjaList = ninjas.map(ninja=> {
        return(
            <div className="ninja" key={ ninja.id } >
                <div>Name: { ninja.name } </div>
                <div>Age: { ninja.age } </div>
                <div>Belt: { ninja.belt } </div>
                <br></br>
            </div>
        )
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>   
    )
}

export default Ninjas