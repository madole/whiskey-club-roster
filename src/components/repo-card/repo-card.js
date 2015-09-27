import React, {Component} from 'react';
import styles from './repo-card.scss'
import FontAwesome from 'react-fontawesome'
import moment from 'moment';
import {
  Avatar,
  Card,
  CardText,
  CardTitle,
  CardHeader,
  CardActions,
  RaisedButton,
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn} from 'material-ui';

class RepoCard extends Component {
  constructor(props, context) {
    super(props, context);

    const {
      name,
      html_url,
      description,
      created_at,
      updated_at,
      stargazers_count,
      watchers_count,
      open_issues_count,
      forks,
      homepage,
      owner
      } = props.repo;
    const privateRepo = props.repo.private;
    this.state = {
      name,
      privateRepo,
      html_url,
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

  getRepoTableData(repo) {
    if(!repo) {return [];}
    return [{
      name: 'Project Name',
      value: repo.name
    }, {
      name: 'Private Repo',
      value: repo.privateRepo
    }, {
      name: 'Repository Url',
      value: repo.html_url,
      link: true
    }, {
      name: 'Created',
      value: moment(repo.created_at).fromNow()
    }, {
      name: 'Updated',
      value: moment(repo.updated_at).fromNow()
    }, {
      name: 'Starred',
      value: repo.stargazers_count
    }, {
      name: 'Watched',
      value: repo.watchers_count
    }, {
      name: 'Issues',
      value: repo.issues_count
    }, {
      name: 'Homepage',
      value: repo.homepage,
      link: true
    }
    ]
  }

  goToUrl(url) {
    location.href = url;
  }

  render() {
    const repoDataModel = this.getRepoTableData(this.state);
    const tableBody = repoDataModel.map((item) => {
      if(!item.value) {return; }
      const value = item.link ? <a href={item.value}>{item.value}</a> : item.value;
      return <TableRow>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>{value}</TableRowColumn>
      </TableRow>;
    });

    return (
      <div className={styles.container}>
        <Card>
          <CardHeader
            title={this.state.name}
            subtitle={this.state.description}
            avatar={<Avatar src={this.state.owner.avatar_url} />}
            />
          <CardText>
            <Table>
              <TableHeader displaySelectAll={false}>
                <TableRow key='header1'>
                  <TableHeaderColumn colSpan="2" tooltip='Github user details'>
                  </TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {tableBody}
              </TableBody>
            </Table>
          </CardText>
          <CardActions>
            <RaisedButton label="View Code" onClick={() => this.goToUrl(this.state.html_url)}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default RepoCard;