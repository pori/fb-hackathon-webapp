import Head from "next/head";
import React, { Component } from "react";
global.firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyAmyznkC4SN_nmbdhyJueWOZPXGMBqpMOU",
  authDomain: "fb-hackathon-b00ec.firebaseapp.com",
  databaseURL: "https://fb-hackathon-b00ec.firebaseio.com",
  projectId: "fb-hackathon-b00ec"
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
      <Head>
        <title>Travid</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito"
          rel="stylesheet"
        />
        <style global jsx>{`
      :root {
        --typeface: "Nunito", sans-serif;
        --global-radius: 3px;
        --transition-speed: .3s;
        --transition: all var(--transition-speed);

        --primary: lavender;
        --secondary: mediumpurple;
        --black: #333: 
      }

      *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background: lavender;
      }

      h1,
      h2,
      h3,
      p,
      a {
        font-family: var(--typeface);
        color: var(--black);
        margin-bottom: 1em;
      }

      h1,
      h2,
      h3 {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        transition: var(--transition);

        &:hover {
          color: var(--secondary);
        }
      }
    `}</style>
        <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js" />
        <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-auth.js" />
        <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase-database.js" />
      </Head>
    );
  }
}
