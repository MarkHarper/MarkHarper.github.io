// @flow

import React, { Component } from 'react';

type Props = {};

export class Home extends Component<Props> {

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    return (
      /*
        Include posts from external sources:
        - medium
        - dev.to
        Support personal blog?
      */

      <div>Writing</div>
    );
  }
}