import { Route, Switch } from 'react-router';
import './App.css';
import ContactsScreen from './screens/ContactsScreen';
import EditContactScreen from './screens/EditContactScreen';
import StartScreen from './screens/StartScreen';
import NewContactScreen from './screens/NewContactScreen';
import SendToContactScreen from './screens/SendToContactScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/editContact">
          <EditContactScreen />
        </Route>
        <Route path="/sendToContact">
          <SendToContactScreen />
        </Route>
        <Route path="/addContact">
          <NewContactScreen />
        </Route>
        <Route path="/contacts">
          <ContactsScreen />
        </Route>
        <Route path="/">
          <StartScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
