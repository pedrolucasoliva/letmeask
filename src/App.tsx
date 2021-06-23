import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
