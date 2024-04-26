import Layout from './layout';
import IndexPage from './pages/indexpage';
import {Route,Routes} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>

            <Route index element={<IndexPage/>} />

        </Route>
      </Routes>
  );
}

export default App;
