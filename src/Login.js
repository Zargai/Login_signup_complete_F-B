import './index.css';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Input, Button} from 'antd';
import { useEffect, useState } from "react";
import { useAlert } from 'react-alert'
import axios from 'axios';
function Login() {

    const alert = useAlert()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    
//on submit function define here
const onFinish =  async (values) => {
    console.log("form data ==>",values)
    try {
    const responce = await axios.post('http://localhost:8080/api/auth/signin',values)
    if(responce)
    {    
        localStorage.setItem("user", JSON.stringify(responce.data.user));
       
        alert.success('Logged Inn')
        setIsLoggedIn(true);

    } 
    }catch(error) {
        console.log(error);
        alert.error('Invalid Login!') 

      } 

                      
             };
               const onFinishFailed =  async (values) => {
                alert.error('Login Failed!..Enter data of all fields') 
                     };


  return (
    <>
      {isLoggedIn ? (
        <Redirect to="/dashboard" />
      ) :(
    <div class="container-fluid login_page">
    <div class="container ">


<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9 my-5">

        <div class="card o-hidden border-0 shadow-lg my-5 ">
            <div class="card-body p-0">
         
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block Login_Heading ">
                        <h1>INDUSTRIAL <br/>
                        SOLUTIONS</h1>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">INDUSTRIAL SOLUTIONS</h1>
                                <h2>Login</h2>
                            </div>
 <Form 
     onFinish={onFinish}
       onFinishFailed={onFinishFailed}
  className="user">
    

      <div className="form-group">
            <Form.Item  validateStatus="error" label="System-ID"  validateStatus="error" name="systemId"
            rules={[{ required: true, message: "SysyemId must be in formate SYS-XX",    
                 asyncValidator: (rule, value) => {
                 return new Promise((resolve, reject) => {
                   if (!value.match((/[S/s][Y/y][S/s]-[0-9]{2}/))) {
                     reject('SysyemId must be in formate SYS-XX');  // reject with error message
                   } 
                   else {
                     resolve();
                   }
                 });
               }  }]} >
              
             <Input className="form-control form-control-user"/>
            </Form.Item>
      </div>

          <div className="form-group">
                 <Form.Item label="Password" name="password" 
                 rules={[  { required: true,  message: 'Please input your password!',  },  ]} >
                   <Input.Password  className="form-control"  placeholder="Password" />
                    </Form.Item>
         </div>
                       
         <Form.Item >
             <Button  className="btn btn-primary btn-user btn-block my-3" 
             placeholder="Password..."  style={{padding:'5px 40px'}} type="primary" htmlType="submit">
                 Log In
                   </Button>
         </Form.Item>
         <Link style={{textDecoration:'none'}} to="/"> Click Here for Registeration</Link>        
                            </Form>
                           
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
</div>

)}
</>
  );
}

export default Login;
