import React from 'react';

const List = ({list}) => {
var i = 0;

const showList = list.length ? (
    <h3 className="listTitle">Lista:</h3>
) : (
    <h3></h3>
);

    return (
        <div className="List">
            {showList}
            <table className="table borderless">
                {
                list.map(item =>{
                    i++
                    return (
                        
                        <tbody>
                            <tr>
                                <th scope="row">{i}</th>
                                <td><img className="listImg" src={item.picture} alt={item.name}/></td>
                                <td>{item.name}</td>
                            </tr>
                        </tbody>
                    )
                })    
                }
            </table>
        </div>
    )
}

export default List;