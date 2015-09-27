import React, {Component} from 'react';
import styles from './repo-card.scss'
import FontAwesome from 'react-fontawesome'
import moment from 'moment';
import {Card, CardText, CardTitle, CardHeader, Avatar} from 'material-ui';

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
      homepage,
      owner
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
      homepage,
      owner
    };
  }


  render() {

    const description = (this.state.description) ?
      <div className={styles.description}>{this.state.description}</div> : null;
    const homepage = (this.state.homepage) ? <div><i className="material-icons">link</i> <a className={styles.link}
                                                                                            href={this.state.homepage}>{this.state.homepage}</a>
    </div> : null;
    const url = (this.state.htmlUrl) ?
      <div><FontAwesome name='github'/> <a className={styles.link} href={this.state.htmlUrl}>{this.state.htmlUrl}</a>
      </div> : null;
    const update = (this.state.updated_at) ? <div>Last Updated: {moment(this.state.updated_at).fromNow()}</div> : null;
    const fakeCard = <div className={styles.container}>
      <div className={styles.projectName}>{this.state.name} </div>
      {description}
      <div className={styles.spacer}></div>
      {homepage}
      {url}
      <div>Created: {moment(this.state.created_at).fromNow()}</div>
      {update}
    </div>;

    return (
      <div className={styles.container}>

        <Card>
          <CardHeader
            title={this.state.name}
            subtitle={this.state.description}
            avatar={<Avatar src={this.state.owner.avatar_url} showExpandableButton={true}/>}
            />
          <CardText>
            {description}
          </CardText>
        </Card>
      </div>
    );
  }
}

export default RepoCard;