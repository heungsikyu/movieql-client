import React,  { Component }from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import Home from "./views/Home";
import Detail from "./views/Detail"; 
import { GlobalStyle } from './globalStyles';


class App extends Component  {
  render () {
    return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <React.Fragment>
            <GlobalStyle />
            <Route exact={true} path={"/"} component={Home} />
            {/* <Route path={"/details/:movieId"} component={Detail} children={(props) => props.match ? <h1>/datails 주소 </h1> : <h1>/details 주소 아님 </h1>}/> */}
            <Route path={"/detail/:movieId"} component={Detail} /> 
          </React.Fragment>
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
    );
  }

}

export default App;
