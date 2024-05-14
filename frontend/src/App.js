import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './components/page/MainPage'; 
import ScanPage from './components/page/ScanPage'; 

import InPage from './components/page/InPage'; 
import OutPage from './components/page/OutPage'; 
import SetPage from './components/page/SetPage'; 

function App() {
  return (
    <BrowserRouter>
            <Routes>
                {/* 재고 관리 (메인화면) */}
                <Route path="/" element={<MainPage />} />

                {/* 영수증 스캔 및 입고 */}
                <Route path="/scan" element={<ScanPage />} />  
                <Route path="/in" element={<InPage />} />  

                {/* 출고 및 설정 */}
                <Route path="/out" element={<OutPage />} />  
                <Route path="/set" element={<SetPage />} />  
            </Routes>
        </BrowserRouter>
  );
}

export default App;