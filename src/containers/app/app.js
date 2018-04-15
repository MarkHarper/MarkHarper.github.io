// @flow

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
  Home,
  Nav,
  Experience
} from '../../views';

type Props = {};
type State = {
  route?: string
};

export class App extends Component<Props, State> {
  state = {};

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  componentDidMount() {
    const router = (document.querySelector('a-router'): any);

    router.addEventListener('initialized', () => {
      this.setState({
        route: router.history.location.pathname
      });
    });

    router.addEventListener('historyChange', (h) => {
      this.setState({
        route: h.detail.location.pathname
      });
    });
  }

  render() {
    return (
      <a-router root="/" history="hash">
        <a-route path="/">
          <Nav route={this.state.route}/>
        </a-route>

        <a-group>
          <a-route path="/" exact>
            <Home/>
          </a-route>

          <a-route path="/experience" exact>
            <Experience/>
          </a-route>
          
          <a-route>
            <div>Unknown - 404</div>
          </a-route>
        </a-group>
      </a-router>
    );
  }
}