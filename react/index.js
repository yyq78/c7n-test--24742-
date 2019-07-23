import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';

const Role = asyncRouter(() => import('./routes/role'));
// const CreatRole = asyncRouter(()=>import('./role/role2'));

@inject('AppState')
class RouteIndex extends React.Component {
  render() {
    const { match, AppState } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/role`} component={Role} ></Route>
        <Route path="*" component={nomatch} />
      </Switch>
    );
  }
}

export default RouteIndex;