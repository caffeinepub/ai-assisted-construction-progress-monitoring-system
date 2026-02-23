import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UploadProgress from './pages/UploadProgress';
import ProjectDetails from './pages/ProjectDetails';

// Root route with layout
const rootRoute = createRootRoute({
  component: () => <Outlet />
});

// Define routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/upload',
  component: UploadProgress
});

const projectDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/project/$id',
  component: ProjectDetails
});

// Create route tree
const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  uploadRoute,
  projectDetailsRoute
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
