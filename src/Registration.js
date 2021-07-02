import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import 'react-notifications/lib/notifications.css';
import { Link } from "react-router-dom";
import { Form, Input, Button} from 'antd';
import { useAlert } from 'react-alert'
import axios from 'axios';
function Registration() {
    //alert function added here
    const alert = useAlert()
    localStorage.setItem("user", null);
    //on finsih function define Here :
    const onFinish =  async (values) => {
        console.log("form data ==>",values)
        try {
        const responce = await axios.post('http://localhost:8080/api/auth/signup',values)
        alert.success('Account has been created') 
        
        }catch(error) {
            console.log(error);
            alert.error('User already Registered!') 

          }   
        
             };
               const onFinishFailed =  async (values) => {
                alert.show('Registration Failed!,Enter data of all fields',{type: 'error'})  
                     };


  return (
    <>
    <div class="container-fluid Reg_page">
    <div class="container ">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9 my-5">

        <div class="card o-hidden border-0 shadow-lg my-5 ">
            <div class="card-body p-0">
         
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block Reg_Heading ">
                        <h1>INDUSTRIAL <br/>
                        SOLUTIONS</h1>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">INDUSTRIAL SOLUTIONS</h1>
                                <h2>Registration</h2>
                            </div>
<Form 
   onFinish={onFinish}
   onFinishFailed={onFinishFailed}
    className="user">

   <div className="form-group">
        <Form.Item validateStatus="error" label="Name" name="name"
        rules={[ {  required: true, message: 'Please input your  Name!', }, ]}  >
        <Input  className="form-control form-control-user" placeholder="Enter First Name" ></Input>
        </Form.Item>
     </div>

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
             <Form.Item validateStatus="error" label="Email" name="email"
             rules={[{ required: true,  message: 'Please input your Email!',  },  ]} >
               <Input  className="form-control form-control-user" placeholder="Enter Email Address..." ></Input>
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
                 Registeration
                   </Button>
         </Form.Item>
         <Link style={{textDecoration:'none'}} to="/login"> Click Here to Login</Link>                          
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
    </>
  );
}

export default Registration;
