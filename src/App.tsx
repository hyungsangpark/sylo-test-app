import { Route, Switch } from 'react-router';
import './App.css';
import ContactsScreen from './screens/ContactsScreen/ContactsScreen';
import EditContactScreen from './screens/EditContactScreen/EditContactScreen';
import StartScreen from './screens/StartScreen/StartScreen';
import NewContactScreen from './screens/NewContactScreen/NewContactScreen';
import SendToContactScreen from './screens/SendToContactScreen/SendToContactScreen';


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
        <Route path="/newContact">
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
