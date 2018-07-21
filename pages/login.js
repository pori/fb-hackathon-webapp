import unauthenticated from '../layouts/unauthenticated';
import Link from 'next/link';

export default unauthenticated(() => (
  <div>
    <Link href="/dashboard">Facebook Login button</Link>
  </div>
));
