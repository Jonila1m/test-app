import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Content from './Content'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  )
}


export default App

