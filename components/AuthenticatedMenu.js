import React, { Component } from 'react';
import Link from 'next/link';
import router from 'next/router';

export default class AuthenticatedMenu extends Component {
  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <ul className="menu">
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <a onClick={this.signOut}>Log the fuck out</a>
        </li>
      </ul>
    );
  }
}
