import React, {Component} from 'react';
import styles from './user.scss'

class User extends Component {
  onChange(store) {
    const storeState = store.getState();
    const userData = storeState.github[0].userData;
    this.setState({userData})
  }

  constructor(props, context) {
    super(props, context);
    const {userData, store} = props;

    this.state = {userData: userData || {}};
    store.subscribe(this.onChange.bind(this, store));
  }

  render(){
    return (
      <div className={styles.container}>
        <div className={styles.info}>
          <div><span className={styles.keys}>Username:</span> {this.state.userData.login}</div>
          <div><span className={styles.keys}>Full Name:</span> {this.state.userData.name}</div>
          <div><span className={styles.keys}>Link:</span> <a href={this.state.userData.url}>{this.state.userData.url}</a></div>
          <div><span className={styles.keys}>Blog:</span> <a href={this.state.userData.blog}>{this.state.userData.blog}</a></div>
          <div><span className={styles.keys}>Location:</span> {this.state.userData.location}</div>
          <div><span className={styles.keys}>Email:</span> <a href={this.state.userData.email}>{this.state.userData.email}</a></div>
          <div><span className={styles.keys}>Public Repos:</span> {this.state.userData.public_repos}</div>
          <div><span className={styles.keys}>Public Gists:</span> {this.state.userData.public_gists}</div>
          <div><span className={styles.keys}>Followers:</span> {this.state.userData.followers}</div>
          <div><span className={styles.keys}>Following:</span> {this.state.userData.following}</div>
          <div><span className={styles.keys}>Created:</span> {this.state.userData.created_at}</div>
          <div><span className={styles.keys}>Last Updated:</span> {this.state.userData.updated_at}</div>
        </div>
        <div className={styles.meta}>
          <img className={styles.avatar} src={this.state.userData.avatar_url} alt={this.state.userData.name}/>
        </div>
      </div>
    )

  }
}

export default User;
