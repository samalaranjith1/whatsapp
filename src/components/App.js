import Login from "./Login";
import {useState} from 'react'
import Dashboard from "./Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";

function App() {
  
  const [id,setId]=useLocalStorage('-id');
  const dashboard=(
    <ContactsProvider>
      <ConversationsProvider>
      <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )
  return (<>
    {id?dashboard :<Login onIdSubmit={setId} />}
    
  </>
    
  );
}

export default App;
