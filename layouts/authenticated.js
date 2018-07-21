import React, { Component } from 'react';
import Head from '../components/Head';
import AuthenticatedMenu from '../components/AuthenticatedMenu';
import router from 'next/router';

export default Child =>
  class AuthenticatedLayour extends Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user === null) {
          router.push('/login');
        }
      });
    }
    render() {
      return (
        <div>
          <Head />
          <AuthenticatedMenu />
          <Child />
        </div>
      );
    }
  };
