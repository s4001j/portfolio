import { useState } from "react";
import React from "react";
import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { createHashRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";

const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ProjectPage = lazy(()=> import("@/pages/ProjectPage"));
const Experience = lazy(()=> import("@/pages/Experience"));
const SkillPage = lazy(()=> import("@/pages/SkillPage"));

const router = createHashRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "experience", element: <Experience /> },
      { path: "projectPage", element: <ProjectPage /> },
      { path: "skillPage", element: <SkillPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
    </QueryClientProvider>
  );
}

export default App
