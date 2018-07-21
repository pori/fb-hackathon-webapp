import Head from 'next/head';
import React, { Component } from 'react';
global.firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
  apiKey: 'AIzaSyAmyznkC4SN_nmbdhyJueWOZPXGMBqpMOU',
  authDomain: 'fb-hackathon-b00ec.firebaseapp.com',
  databaseURL: 'https://fb-hackathon-b00ec.firebaseio.com',
  projectId: 'fb-hackathon-b00ec'
  // storageBucket: "<BUCKET>.appspot.com",
  // messagingSenderId: "<SENDER_ID>",
};

export default class Header extends Component {
  componentDidMount() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  render() {
    return (
      <div>
        <Head>
          <title>Travid</title>
        </Head>
      </div>
    );
  }
}
