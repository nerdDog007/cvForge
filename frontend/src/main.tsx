import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
  <Provider store={store}>
  <RouterProvider router={routes} />
  </Provider>
  </QueryClientProvider>
)
