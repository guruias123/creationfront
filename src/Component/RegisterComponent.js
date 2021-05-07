import React, { Component } from 'react';
import './Register.css'
const registerurl = "http://localhost:5000/users/";
const url = "http://localhost:5000/register" 

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyname: '',
            email: '',
            phonenumber: '',
            personname: '',
            companytype: '',
            pincode: '',
            password: '',
          
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
  
    handleChange1=(event)=>{
                const email1 = event.target.value;
              
                this.setState({email:email1});
                
     }
       
       
    

    handleChangecompanytype = (event) => {
        const type = event.target.value;
        this.setState({ companytype: type })
    }

    handleSubmit = () => {
        console.log(this.state)
      
      fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(this.props.history.push('/login'))
            
            
        

    }

    render() {
        return (
            <form className="container">
                <img className='img' src="data:image/jpeg;base64,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" />
                <div className="panel panel-info">
                    <div className="panel panel-success">
                        <div  className="panel-heading">
                            <h5 className="head">Register</h5>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input name="companyname" type="text" value={this.state.companyname}
                                    className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Official Email</label>
                                <input id="email" name="email" 
                                    className="form-control" onInput={this.handleChange1} />
                                     
                            </div>
                           
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input name="phonenumber" value={this.state.phonenumber}
                                    className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Person Name</label>
                                <input name="personname" value={this.state.personname}
                                    className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Company Type</label><br />
                                <select onChange={this.handleChangecompanytype}>
                                    <option>select</option>
                                    <option >Product</option>
                                    <option >Service</option>
                                    <option >Consulting</option>
                                    <option >Training</option>
                                </select>

                            </div>
                            <div className="form-group">
                                <label>pincode</label>
                                <input name="pincode" value={this.state.pincode}
                                    className="form-control" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" value={this.state.password}
                                    className="form-control" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                            <input type="radio" /><span>I agree to receive Promotional Communication from this site </span> <br />
                            <input type="radio" /><span>I agree to terms and conditions </span> <br />
                            </div>
                            <div className="form-group">
                            <button className="btn btn-success"
                                onClick={this.handleSubmit}>
                                Register
                        </button>
                        </div>
                        </div>
                    </div>
                </div>

            </form>
        )
    }
}

export default Register