import { FunctionComponent } from 'react';

import Nav from 'ui/partials/nav/nav';

const Aside: FunctionComponent = props => {
  return (
    <aside>
      <p>aside</p>

      <Nav />
    </aside>
  );
};

export default Aside;
