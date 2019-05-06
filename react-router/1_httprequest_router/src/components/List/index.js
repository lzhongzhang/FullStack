import React from 'react';
import axios from 'axios';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          err: null
        };
      }
    
    componentDidMount() {
    axios.get('https://api.github.com/users?per_page=100')
        .then(res => {
            console.log(res);
            this.setState({data: res.data, err: null});
        })
        .catch(err => {
            console.log(err);
            this.setState({err: err});
            alert(err);
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="List">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((record, index) => {
                            return (
                            <tr key = {index} onClick={() => this.props.history.push(`/users/${record.login}`)}>
                                <td>{record.id}</td>
                                <td>{record.login}</td>
                                <td>
                                    <img src={record.avatar_url} alt={record.avatar_url} width={100} height={100}/>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        );
    }

}

export default List;