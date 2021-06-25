import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {
  // import the store state ie get the user from the store and then the condional will allow either the login page or signed in state
  const [{user}, dispatch] = useStateValue();

  //once logged in the dispatch  of the user will enter the data layer which we then call from the useStateValue - then map below

  return (
    <div className="App">
      {!user ? <Login/> : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
      )}
      
    </div>
  );
}

export default App;
