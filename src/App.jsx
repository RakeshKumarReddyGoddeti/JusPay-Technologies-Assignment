import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Assignment_Page from "./Components/Molecules/Asignment_Page"
import HomePage from './Components/Pages/HomePage';
import Default from './Components/Molecules/Default';

import OrderTable from './Components/Organisms/OrdersTable';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/assignment_page" replace />} />
          <Route path="/assignment_page" element={<Assignment_Page />} />
          <Route path="/homepage" element={<HomePage />} >
            <Route index element={<Default />} />
            <Route path="ordertable" element={<OrderTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
