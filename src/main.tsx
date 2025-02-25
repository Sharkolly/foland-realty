import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Context from './Store/Context.tsx';
// import {HelmetProvider} from 'react-helmet-async';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HelmetProvider> */}
    <QueryClientProvider client={queryClient}>
     <Context/>
    {/* </HelmetProvider> */}
    </QueryClientProvider>
  </StrictMode>,
);
