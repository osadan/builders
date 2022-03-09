import React from 'react';
import { Button, CountriesSelect } from '@freightos/design-system';
const  App = ({}) => {
  return(<>

   <h1>Hello World From React-Rollup</h1>
   <Button />
    <CountriesSelect
      onChange={function noRefCheck() { }}
      value={[]}
    />
  </>)
}
export default App;