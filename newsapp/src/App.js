import "./App.css";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

//export default class App extends Component {
   const App =()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
 // state = {
    //progress: 0,
 // };
  const [progress, setprogress] = useState(0)
 // setProgress = (progress) => {
   // setState({ progress: progress });
 // };
 // render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Switch>
            <Route exact path="/">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/sports">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/science">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              {" "}
              <News
                setProgress={setprogress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}

export default App;
