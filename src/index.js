import getCity from "./calls/getCity";
import search from "./pages/search"
import { State } from "./state/state"

function component() {
    const searchBar = document.createElement('div');
    const contentBar = document.createElement('div');
    searchBar.className = 'search';
    contentBar.className = 'content'
    document.body.append(searchBar, contentBar); 
    search();
    State.initialize();
    console.log(State);
    getCity("Bacoor");
  }
  
component();