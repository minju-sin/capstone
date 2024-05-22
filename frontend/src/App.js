import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './components/page/MainPage';
import InventoryPage from './components/page/InventoryPage';
import ServicePage from './components/page/ServicePage';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                {/* POS 재고 관리 (메인화면) */}
                <Route path="/" element={<MainPage />} />

                {/* POS 재고 화면 */}
                <Route path="/inventory" element={<InventoryPage />} />

                {/* 주문내역 화면 */}
                <Route path="/service" element={<ServicePage />} />
          
            </Routes>
        </BrowserRouter>
  );
}

export default App;