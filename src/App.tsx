import "./App.css";
import Spinner from "react-spinkit";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
// Components
import ScrollToTop from "./hooks/ScrollToTop";
const Steps = lazy(() => import("./pages/steps"));
const Landing = lazy(() => import("./pages/landing"));
const Navbar = lazy(() => import("./components/navbar"));
const SignUp = lazy(() => import("./pages/auth/signup"));
const SignIn = lazy(() => import("./pages/auth/signin"));
const PageLayout = lazy(() => import("./layout/PageLayout"));
const Templates = lazy(() => import("./components/steps/templates/Templates"));
const Stepper = lazy(() => import("./pages/stepper"));

function App() {
  return (
    <main className="mt-8 relative md:mt-14 md:px-5 xl:px-0">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-[100vh]">
            <Spinner name="ball-clip-rotate-multiple" color="steelblue" />
          </div>
        }
      >
        <ScrollToTop />
        <Navbar />
        <div className="mx-auto lg:max-w-6xl">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />

            <Route element={<RequireAuth />}>
              <Route path="/page" element={<PageLayout />}>
                <Route index element={<Steps />} />
                <Route path="templates" element={<Templates />} />
                <Route path={`templates/stepper:id`} element={<Stepper />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Suspense>
    </main>
  );
}

export default App as FC;
