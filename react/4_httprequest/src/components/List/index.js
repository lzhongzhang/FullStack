import React from 'react';

const List = props => {
    return (
        <div className="list">
            <h3>List</h3>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>username</th>
                    <th>image</th>
                </tr>
                </thead>
                <tbody>
                    {props.data.map((record, index) => {
                        return (
                            <tr key = {index} onClick={() => props.getDetail(record.login)}>
                                <td>{record.id}</td>
                                <td>{record.login}</td>
                                <td>
                                    <img src={record.avatar_url} alt={record.avatar_url} width={100} height={100}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default List;

