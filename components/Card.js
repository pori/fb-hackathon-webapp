import Link from "next/link";

export default ({ image, date }) => (
  <Link href="#">
    <a className="card">
      <img src={image} alt="" />
      <div className="card-body">
        <p>
          <b>{date}</b>
        </p>
      </div>
      <style jsx>{`
        .card {
          display: inline-block;
          border-radius: var(--global-radius);
          background: white;
          box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.33);

          &:hover {
            box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.33);
          }

          img {
            width: 100%;
            border-top-left-radius: var(--global-radius);
            border-top-right-radius: var(--global-radius);
          }

          .card-body {
            padding: 0 0.5em;
          }
        }
      `}</style>
    </a>
  </Link>
);
