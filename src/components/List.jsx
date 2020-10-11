import React from 'react';

const List = ({list}) => {

    return (
        <div>
            <h3>Lista</h3>
            <ol>
                {
                list.map(item =>{
                    return (
                        <li>
                            {item.name}
                        </li>
                    )
                })    
                }
            </ol>
        </div>
    )
}

export default List;