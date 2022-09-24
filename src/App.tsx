import React, { Suspense } from "react";
import Layout from "./components/UI/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/UI/Loading";

function App() {
  const HomeComponent = React.lazy(() => import("./pages/Home"));
  const WorkComponent = React.lazy(() => import("./pages/Work"));
  const AboutComponent = React.lazy(() => import("./pages/About"));
  const ContactComponent = React.lazy(() => import("./pages/Contact"));

  const RouteConponents = [
    { path: "/", element:<HomeComponent /> },
    { path: "/work", element:<WorkComponent /> },
    { path: "/about", element: <AboutComponent /> },
    { path: "/contact", element: <ContactComponent /> },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
        {RouteConponents.map( (props) => (<Route path={props.path} element={props.element}/>))}

        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
