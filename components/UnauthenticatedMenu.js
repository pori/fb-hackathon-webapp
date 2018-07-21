import Link from 'next/link';

export default () => (
  <ul class="menu">
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/login">Login</Link>
    </li>
  </ul>
);
