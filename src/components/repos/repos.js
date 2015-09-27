import React, {Component} from 'react';
import styles from './repos.scss';
import Repo from './../repo-card/repo-card.js'

class Repos extends Component {
  constructor(props, context) {
    super(props, context);
    const {userRepos, store} = props;
    this.state = {userRepos};
    store.subscribe(() => this.onChange(store))
  }

  onChange(store) {
    const storeState = store.getState();
    if(storeState && storeState.github) {
      const userRepos = storeState.github.userRepos;
      this.setState({userRepos});
    }
  }


  render() {
    if (!this.state.userRepos) {
      return <div></div>;
    }
    return (
      <div className={styles.container}>
        {this.state.userRepos.map((repo) => {
          return <Repo
            key={repo.id}
            name={repo.name}
            description={repo.description}
            homepage={repo.homepage}
            privateRepo={repo.private}
            htmlUrl={repo.html_url}
            created_at={repo.created_at}
            updated_at={repo.updated_at}
            owner={repo.owner} />
        })
        }
      </div>
    );
  }
}

export default Repos;