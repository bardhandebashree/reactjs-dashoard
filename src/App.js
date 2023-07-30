import logo from "./logo.svg";
import "./App.css";
import style from "styled-components";
import { Account } from "./comonents/account";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { PicturesAccount } from "./comonents/account/picturesAccount";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { Widget } from "./comonents/account/dashboard";
import { Graph } from "./comonents/account/graph";
import {Row,Col,Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const HelloWorld = style.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-display: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
  
`;

function App() {
  return (
    <div>
      <Router>
        {/* <HelloWorld> */}
          {/* <Routes> */}
            {/* <Route exact path="/" element=  {<Account />}/>
  <Route exact path="/picturesaccount" element=  {<PicturesAccount />}/> */}
            {/* <Route exact path="/" element=  {<Widget/>}/> */}
          {/* </Routes> */}
          <Row style={{margin:"20px"}}>
            <Col>
              <Widget type={"support"} />
            </Col>
            <Col>
              <Widget type={"places"} />
            </Col>
            <Col>
              <Widget type={"user"} />
            </Col>
            <Col>
              <Widget type={"tags"} />
            </Col>
          </Row>
          <Row style={{margin:"20px"}}>
            <Graph />
          </Row>
        {/* </HelloWorld> */}
        <ToastContainer />
      </Router>
    </div>
  );
  // return <HelloWorld><PicturesAccount></PicturesAccount></HelloWorld>;
}

export default App;
