import authenticated from '../layouts/authenticated';
import { Component } from 'react';

class Dashboard extends Component {
  state = {
    videos: []
  };

  componentDidMount() {
    setTimeout(this.getVideos, 5000);
  }

  getVideos = () => {
    const storage = firebase.storage();
    const uid = firebase.auth().currentUser.uid;

    firebase
      .firestore()
      .collection('videos')
      .get()
      .then(querySnapshot => {
        const videos = [];
        querySnapshot.forEach(video => videos.push(video.data()));

        Promise.all(
          videos.map(video =>
            storage
              .ref(`${uid}/${video.path}`)
              .getDownloadURL()
              .then(url => ({ ...video, url }))
          )
        ).then(videos => {
          this.setState({ videos });
        });
      });
  };

  render() {
    return (
      <div>
        <div>List of your Videos</div>
      </div>
    );
  }
}

export default authenticated(Dashboard);
