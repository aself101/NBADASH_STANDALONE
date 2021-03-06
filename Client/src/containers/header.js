import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">NBA Dashboard</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i className="glyphicon glyphicon-option-vertical"></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#boxscores" aria-controls="boxscores" role="tab" data-toggle="tab">Box Scores</a></li>
                  <li><a href="#standings" aria-controls="standings" role="tab" data-toggle="tab">Standings</a></li>
                  <li><a href="#tankathon" aria-controls="tankathon" role="tab" data-toggle="tab">Tankathon</a></li>
                  <li><a href="#players" aria-controls="players" role="tab" data-toggle="tab">Players</a></li>
                  <li><a href="#teams" aria-controls="teams" role="tab" data-toggle="tab">Teams</a></li>
                  <li><a href="#newsFeed" aria-controls="newsFeed" role="tab" data-toggle="tab">News & Feeds</a></li>
                  <li role="separator" className="divider"></li>
                  <li><Link className="nav-link" to="/signout">Sign Out</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};


export default connect(null, null)(Header);
