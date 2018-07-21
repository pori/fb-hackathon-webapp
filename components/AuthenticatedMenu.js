import Link from 'next/link';

export default () => (
  <ul class="menu">
    <li>
      <Link href="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link href="/">Log the fuck out</Link>
    </li>
  </ul>
);
