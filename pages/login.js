import React, { Component } from "react";
import unauthenticated from "../layouts/unauthenticated";
import Router from "next/router";

class Login extends Component {
  state = {
    error: false
  };

  authenticate = () => {
    const auth = firebase.auth();

    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        facebookAuthProvider.setCustomParameters({ display: "popup" });

        return auth.signInWithPopup(facebookAuthProvider);
      })
      .then(result => {
        global.result = result;
        Router.push("/dashboard");
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  get error() {
    if (!this.state.error) return;

    return <div>There was an error authenticated you</div>;
  }

  render() {
    return (
      <div>
        {this.error}
        <button onClick={this.authenticate}>Facebook Login button</button>
      </div>
    );
  }
}

export default unauthenticated(Login);
