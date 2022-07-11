import getCity from "./calls/getCity";
import search from "./pages/search"
import { State } from "./state/state"
import buttonClick from "./interactions/buttonClick"

function component() {
    const searchBar = document.createElement('div');
    const contentBar = document.createElement('div');
    const formData = document.createElement('div');
    searchBar.className = 'search';
    contentBar.className = 'content'
    formData.className = "formData"; 
    document.body.append(contentBar,searchBar, formData);  

    search();
    State.initialize();
    buttonClick();
  }
  
component();