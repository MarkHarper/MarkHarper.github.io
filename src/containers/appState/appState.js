// @flow

import * as React from 'react';

type Props = {
  children: (data: { match: boolean }) => React.Node,
  debug: boolean
};
type State = {}

export class AppState extends React.Component<Props, State> {
  state = {}

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  setAppState(updater: any, callback: any) {
    this.setState(updater, () => {
      if (this.props.debug) {
        console.log('setAppState', JSON.stringify(this.state));
      }
      if (callback) {
        callback();
      }
    });
  }

  render() {
    return (
        React.Children.map(this.props.children, child => {
          return React.cloneElement(child, {
            appState: this.state,
            setAppState: this.setAppState
          });
        })
    );
  }
}