import unauthenticated from "../layouts/unauthenticated";
import Gallery from "../components/Gallery";

export default unauthenticated(() => (
  <div className="container">
    <h2>Your Videos</h2>
    <Gallery
      cards={[
        {
          image: "https://www.fillmurray.com/460/300",
          date: "Friday, July 20th"
        },
        {
          image: "https://www.fillmurray.com/460/300",
          date: "Friday, July 20th"
        },
        {
          image: "https://www.fillmurray.com/460/300",
          date: "Friday, July 20th"
        },
        {
          image: "https://www.fillmurray.com/460/300",
          date: "Friday, July 20th"
        },
        {
          image: "https://www.fillmurray.com/460/300",
          date: "Friday, July 20th"
        },
        {
          image: "https://www.fillmurray.com/460/300",
          date: "Friday, July 20th"
        }
      ]}
    />
    <style jsx>{`
      .container {
        width: 960px;
        margin: 0 auto;
      }
    `}</style>
  </div>
));
