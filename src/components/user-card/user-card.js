import React, {Component} from 'react';
import styles from './user-card.scss'

class User extends Component {
  constructor(props, context) {
    super(props, context);
    const {userData, store} = props;

    this.state = {userData};
    store.subscribe(() => this.onChange(store))
  }

  onChange(store) {
    const storeState = store.getState();
    if(storeState && storeState.github && storeState.github[0] && storeState.github[0].userData) {
      const userData = storeState.github[0].userData;
      this.setState({userData})
    }
  }


  render(){
    if (! this.state.userData) {
      return <div></div>;
    }
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
      updated_at} = this.state.userData;
    return (
      <div className={styles.container}>
        <div className={styles.info}>
          <div><span className={styles.keys}>Username:</span> {login}</div>
          <div><span className={styles.keys}>Full Name:</span> {name}</div>
          <div><span className={styles.keys}>Link:</span> <a href={html_url}>{html_url}</a></div>
          <div><span className={styles.keys}>Blog:</span> <a href={blog}>{blog}</a></div>
          <div><span className={styles.keys}>Location:</span> {location}</div>
          <div><span className={styles.keys}>Email:</span> <a href={email}>{email}</a></div>
          <div><span className={styles.keys}>Public Repos:</span> {public_repos}</div>
          <div><span className={styles.keys}>Public Gists:</span> {public_gists}</div>
          <div><span className={styles.keys}>Followers:</span> {followers}</div>
          <div><span className={styles.keys}>Following:</span> {following}</div>
          <div><span className={styles.keys}>Created:</span> {created_at}</div>
          <div><span className={styles.keys}>Last Updated:</span> {updated_at}</div>
        </div>
        <div className={styles.meta}>
          <img className={styles.avatar} src={avatar_url} alt={name}/>
        </div>
      </div>
    )

  }
}

export default User;
