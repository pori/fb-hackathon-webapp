import Head from '../components/Head';
import AuthenticatedMenu from '../components/AuthenticatedMenu';

export default Child => () => (
  <div>
    <Head />
    <AuthenticatedMenu />
    <Child />
  </div>
);
