import React,{Component} from 'react';
import Register from './RegisterComponent';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5000/users";

class UserList extends Component{
    constructor(){
        super()

        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk') == null){
            this.props.history.push('/login');
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile');
        }
        return(
            <div>
               <UserDisplay userData={this.state.users}/>
               <Register userData={this.state.users}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({users:data})})
    }
}

export default UserList;