import React, {Component} from 'react';
import styles from './repo-card.scss'
import FontAwesome from 'react-fontawesome'

class RepoCard extends Component {
  constructor(props, context) {
    super(props, context);
    const {
      name,
      privateRepo,
      htmlUrl,
      description,
      created_at,
      updated_at,
      stargazers_count,
      watchers_count,
      open_issues_count,
      forks,
      homepage
      } = props;

    this.state = {
      name,
      privateRepo,
      htmlUrl,
      description,
      created_at,
      updated_at,
      stargazers_count,
      watchers_count,
      open_issues_count,
      forks,
      homepage
    };
  }


  render() {

    const description = (this.state.description) ? <div className={styles.description}>{this.state.description}</div> : null;
    const homepage = (this.state.homepage) ? <div>Homepage: {this.state.homepage}</div> : null;
    const url = (this.state.htmlUrl) ? <div> <FontAwesome name='rocket' /> <a href={this.state.url}>{this.state.htmlUrl}</a> </div> : null;

    return (
      <div className={styles.container}>
        <div className={styles.projectName}>{this.state.name} </div>
        {description}
        {homepage}
        <div className={styles.spacer}> </div>
        {url}
      </div>
    );
  }
}

export default RepoCard;