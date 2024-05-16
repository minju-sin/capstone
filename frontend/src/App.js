import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './components/page/MainPage'; 

function App() {
  return (
    <BrowserRouter>
            <Routes>
                {/* POS 재고 관리 (메인화면) */}
                <Route path="/" element={<MainPage />} />

                
            </Routes>
        </BrowserRouter>
  );
}

export default App;