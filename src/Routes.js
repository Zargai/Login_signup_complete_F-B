import Sider from 'antd/lib/layout/Sider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';
import Login from './Login';
import Registration from './Registration';



function Routes() {
   

  return (
    <>    
           <BrowserRouter>
           <Switch>
               
                <Route path="/" component={Registration} exact />
                <Route path="/login" component={Login}  />
                <Route path="/dashboard" component={Dashboard}  />
            </Switch>
            </BrowserRouter>
    </>
  );
}

export default Routes;
