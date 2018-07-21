import Link from "next/link";

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        background: white;
        padding: 1em;
        margin-bottom: 4em;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.33);

        ul {
          list-style-type: none;

          li {
            display: inline-block;
            margin-right: 1em;
          }
        }
      }
    `}</style>
  </nav>
);
