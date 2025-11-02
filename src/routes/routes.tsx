import Home from "../pages/home";
import CheckLatency from "@/pages/check_latency";

interface IRoute {
  path: string;
  Component: React.ReactNode;
}

export const routes: IRoute[] = [
  { path: "/", Component: <Home /> },
  { path: "/check_latency", Component: <CheckLatency /> }
]