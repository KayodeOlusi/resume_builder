import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "react-spinkit";
import "./App.css";
// Components
const Steps = lazy(() => import("./pages/steps"));
const Landing = lazy(() => import("./pages/landing"));
const Navbar = lazy(() => import("./components/navbar"));
const SignUp = lazy(() => import("./pages/auth/signup"));
const SignIn = lazy(() => import("./pages/auth/signin"));
const PageLayout = lazy(() => import("./layout/PageLayout"));
const Templates = lazy(() => import("./components/steps/templates/Templates"));

function App() {
  return (
    <main className="overflow-x-hidden mx-auto mt-4 md:mt-14 md:px-5 lg:max-w-6xl xl:px-0">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-[100vh]">
            <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
          </div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/page" element={<PageLayout />}>
            <Route index element={<Steps />} />
            <Route path="templates" element={<Templates />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App as FC;
