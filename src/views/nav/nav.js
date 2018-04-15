// @flow

import React, { Component } from 'react';
import cafe from "../../assets/cafe.svg";
// $FlowFixMe 
import resume from "../../assets/resume.pdf";
import './nav.css';

type Props = {
  route: string
};

export class Nav extends Component<Props> {
  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    return (
        <header className="nav-main">
          
          <div className="nav-content-left">
            <span className="nav-hide-cafe"></span>
            <a-link to="/"><img className="nav-icon-cafe" src={cafe}/></a-link>
            <a-link to="/"><div className="nav-name">Mark Harper</div></a-link>
          </div>

          <div className="nav-content-middle">
            <a-link class={this.props.route === '/' ? "nav-link-active" : "nav-link"} to="/"><span>HOME</span></a-link>
            <a-link class={this.props.route === '/experience' ? "nav-link-active" : "nav-link"} to="/experience"><span>EXPERIENCE</span></a-link>
          </div>

          <div className="nav-content-right">
            <a className="btn-resume" href={resume} target="_blank">{'R' + String.fromCharCode(233) + 'SUME'}</a>
          </div>
        </header>
    );
  }
}
