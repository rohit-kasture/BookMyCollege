import { Route } from "react-router-dom";
import Login from "../components/container/StudentLogin/Login";
import Register from "../components/container/StudentLogin/Register";
import Header from '../components/container/Header';
import Home from "../components/container/Home";
import Form from "../components/container/Form";
import DisplayStudentData from "./container/reports/DisplayStudentData";
import Logout from "./container/StudentLogin/Logout";
function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Login} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" exact component={Register} />
      <Route path="/home" exact component={Home} />
      <Route path="/form" exact component={Form} />
      <Route path="/studentdetails" exact component={DisplayStudentData} />
    </div>
  );
}

export default App;
