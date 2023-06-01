import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './useEffects/App';
import Cleanup from './useEffects/Cleanup';
import Ref from './useRefs/Ref';
import RefGoodThing from './useRefs/RefGoodThing'
import Reducers from './useReducers/Reducers';
import Reducers2 from './useReducers/Reducers2';



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(<App />);
