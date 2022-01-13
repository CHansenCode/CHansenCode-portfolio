import { Slide } from 'components';
import { Login } from 'components';

export default function Home({ ...props }) {
  return props.whom ? <Slide {...props} /> : <Login {...props} />;
}
