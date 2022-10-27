import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import MuliTables from './page/MuliTables';
import SingleTable from './page/SingleTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/single-table-replacement' element={<SingleTable></SingleTable>}></Route>
        <Route path='/multi-tables-replacement' element={<MuliTables></MuliTables>}></Route>
        <Route path='/*' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
