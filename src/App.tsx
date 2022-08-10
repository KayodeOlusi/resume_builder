import "./App.css";
import Spinner from "react-spinkit";
import { FC, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
// Components
import ScrollToTop from "./hooks/ScrollToTop";
const Blog = lazy(() => import("./pages/blog"));
const Steps = lazy(() => import("./pages/steps"));
const Stepper = lazy(() => import("./pages/stepper"));
const Landing = lazy(() => import("./pages/landing"));
const Preview = lazy(() => import("./pages/preview"));
const Navbar = lazy(() => import("./components/navbar"));
const SignUp = lazy(() => import("./pages/auth/signup"));
const SignIn = lazy(() => import("./pages/auth/signin"));
const PageLayout = lazy(() => import("./layout/PageLayout"));
const Templates = lazy(() => import("./components/steps/templates/Templates"));

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
        <div className="mx-auto lg:max-w-6xl lg:px-5 xl:px-0">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/blog" element={<Blog />} />

            <Route element={<RequireAuth />}>
              <Route path="/page" element={<PageLayout />}>
                <Route index element={<Steps />} />
                <Route path="templates" element={<Templates />} />
                <Route path={`templates/stepper:id`} element={<Stepper />} />
                <Route
                  path={`templates/stepper:id/preview`}
                  element={<Preview />}
                />
              </Route>
            </Route>
          </Routes>
        </div>
      </Suspense>
    </main>
  );
}

export default App as FC;
