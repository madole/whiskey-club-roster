import React, {Component} from 'react';
import styles from './user-card.scss'
import {Avatar, Paper, Table, TableRow, TableRowColumn, TableBody, TableHeader, TableHeaderColumn} from 'material-ui'
import moment from 'moment';

class User extends Component {
  constructor(props, context) {
    super(props, context);
    const {userData, store, actions} = props;

    this.state = {userData};
    this.actions = actions;
    store.subscribe(() => this.onChange(store))
  }

  onChange(store) {
    const storeState = store.getState();
    if(storeState && storeState.github && storeState.github && storeState.github.userData && this.user !== storeState.github.user) {
      const userData = storeState.github.userData;
      this.setState({userData});
      this.actions.fetchRepos(storeState.github.user);
      this.user = storeState.github.user;
    }
  }

  getUserDataModel(userData) {
    const {
      login,
      name,
      html_url,
      avatar_url,
      blog,
      location,
      email,
      public_repos,
      public_gists,
      followers,
      following,
      created_at,
      updated_at} = userData;

    return [
      {
        name: 'Username',
        value: login
      }, {
        name: 'Full Name',
        value: name
      }, {
        name: 'Link',
        value: html_url,
        link: true
      }, {
        name: 'Blog',
        value: blog,
        link: true
      }, {
        name: 'Location',
        value: location
      }, {
        name: 'Email',
        value: email,
        link: true
      }, {
        name: 'Public Repos',
        value: public_repos,
      }, {
        name: 'Public Gists',
        value: public_gists,
      }, {
        name: 'Followers',
        value: followers
      }, {
        name: 'Following',
        value: following
      }, {
        name: 'Created',
        value: moment(created_at).fromNow()
      }, {
        name: 'Last Updated',
        value: moment(updated_at).fromNow()
      }
    ];
  }

  render(){
    if (! this.state.userData) {
      return <div></div>;
    }

    const avatar_url = this.state.userData.avatar_url;
    const userData = this.getUserDataModel(this.state.userData);

    const tableBody = userData.map((item) => {
      if(!item.value) {return;}
      const value = item.link ? <a href={item.value}>{item.value}</a> : item.value;

      return <TableRow>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>{value}</TableRowColumn>
        </TableRow>;
    });

    return (
      <div className={styles.container}>
        <div className={styles.table}>
          <Table
            className={styles.table}
            height='200'
            selectable={false}>
            <TableHeader displaySelectAll={false}>
              <TableRow key='header1'>
                <TableHeaderColumn colSpan="2" tooltip='Github user details'>
                  User Details
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
             {tableBody}
            </TableBody>
          </Table>
        </div>

        <div className={styles.meta}>
          <Paper zDepth={3} circle={true}>
            <Avatar src={avatar_url} size={200} />
          </Paper>
        </div>
      </div>
    )

  }
}

export default User;
