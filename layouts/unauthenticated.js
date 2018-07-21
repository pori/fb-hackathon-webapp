import Head from '../components/Head';
import UnauthenticatedMenu from '../components/UnauthenticatedMenu';

export default Child => () => (
  <div>
    <Head />
    <UnauthenticatedMenu />
    <Child />
  </div>
);
