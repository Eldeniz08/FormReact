import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Step1 from './components/pages/step1'
import Step2 from './components/pages/step2'
import Step3 from './components/pages/step3'
import Step4 from './components/pages/step4'

import Main from './components/layout/Main'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'




function App() {

  return (
       <Router>
          <Container>
              <Navbar />
              <Main>
                <Step1/>
                <Routes>
                  <Route exact path="/form1" element={<Step1 />} />
                  <Route exact path="/form2" element={<Step2 />} />
                  <Route exact path="/form3" element={<Step3 />} />
                  <Route exact path="/form4" element={<Step4 />} />
                </Routes>
              </Main>
           </Container>
     </Router>
  )
}

export default App
