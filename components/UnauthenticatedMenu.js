import Link from 'next/link';

export default () => (
  <ul className="menu">
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
);
