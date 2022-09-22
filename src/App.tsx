import React, {Suspense} from 'react';
import Layout from './components/UI/Layout/Layout';
import { Route, Routes  } from "react-router-dom";
import Loading from './components/UI/Loading';


function App() {

  const HomeComponent = React.lazy(() => import('./pages/Home'))
  const WorkComponent = React.lazy(() => import('./pages/Work'))
  const AboutComponent = React.lazy(() => import('./pages/About'))
  const ContactComponent = React.lazy(() => import('./pages/Contact'))

  return (
      <Suspense fallback={<Loading />}>
    <Layout>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/load" element={<Loading />} />
          <Route path="/work" element={<WorkComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
    </Layout>
      </Suspense>
  );
}

export default App;
