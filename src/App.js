import Homepage from './pages/homepage'
import RedirectingPage from './pages/redirectingPage'
import RedirectingPage2 from './pages/redirectingPage2'
import Overviewpage from './pages/overviewpage'
import MissionValuepage from './pages/missionValuepage'
import ExecutivePage from './pages/executivePage'
import AdvisorPage from './pages/advisorpage'
import InsightPage from './pages/insightPage'
import FAQpage from './pages/FAQpage'
import RanddPage from './pages/r&dPage'
import LatexImage from './pages/latexImage'
import ProductsPage from './pages/productsPage'
import CentralPage from './pages/centralPage'
import ContactPage from './pages/contactPage'
import Extra from './components/extras/extra'
import LatexImage2 from './pages/latexImage2'
import LatexImage4 from './pages/latexImage3'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Extra2 from './components/extras/extra2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <>
              <CentralPage></CentralPage>
            </>
          }
        />
        <Route
          path='/powerandrenewableenergy'
          exact
          element={
            <>
              <Homepage homepageBoolean={true} />
            </>
          }
        />
        <Route
          path='/comingsoon'
          exact
          element={
            <>
              <Extra />
            </>
          }
        />
        <Route
          path='/about'
          exact
          element={
            <>
              <RedirectingPage />
            </>
          }
        />
        <Route
          path='/productsandsolution'
          exact
          element={
            <>
              <RedirectingPage2 />
            </>
          }
        />
        <Route
          path='/insights'
          exact
          element={
            <>
              <InsightPage />
            </>
          }
        />
        <Route
          path='/faq'
          exact
          element={
            <>
              <FAQpage />
            </>
          }
        />
        <Route
          path='/overview'
          exact
          element={
            <>
              <Overviewpage />
            </>
          }
        />
        <Route
          path='/contactus'
          exact
          element={
            <>
              <ContactPage />
            </>
          }
        />
        <Route
          path='/missionandvalue'
          exact
          element={
            <>
              <MissionValuepage />
            </>
          }
        />
        <Route
          path='/executivepage'
          exact
          element={
            <>
              <ExecutivePage />
            </>
          }
        />
        <Route
          path='/advisors'
          exact
          element={
            <>
              <AdvisorPage />
            </>
          }
        />
        <Route
          path='/randd'
          exact
          element={
            <>
              <RanddPage />
            </>
          }
        />
        <Route
          path='/products'
          exact
          element={
            <>
              <ProductsPage />
            </>
          }
        />
        <Route
          path='/fivepara'
          exact
          element={
            <>
              <LatexImage />
            </>
          }
        />
        <Route
          path='/fourpara'
          exact
          element={
            <>
              <LatexImage2 />
            </>
          }
        />
        <Route
          path='/threepara'
          exact
          element={
            <>
              <LatexImage4 />
            </>
          }
        />
        <Route
          path='/successmessage'
          exact
          element={
            <>
              <Extra2 />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
