import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//TanStack Query things
  const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <>
        {/* Provide the (tanstack) client to your App */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />

      {/* TanStack QueryTools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
      
    </>
  );
};
