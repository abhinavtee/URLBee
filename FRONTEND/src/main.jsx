import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routeTree } from './routing/Route-Tree.js';
import { Provider } from 'react-redux';
import { store } from './store/store.js'

const queryClient = new QueryClient();
const router = createRouter({ 
    routeTree,
    context: {
        queryClient,
        store
    }

 })

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </Provider>

)
