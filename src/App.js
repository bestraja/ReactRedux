import {Routes,Route,Link} from "react-router-dom";
import ListTask from "./component/ListTask";
import AddTask from "./component/AddTask";
import './App.css'

import Header from "./component/Header";
import Filter from "./component/Filter";
import Edittask from "./component/Edittask";

function App() {
  return (
    <>
    <Header/>
    
    <nav className="navbar">
    <Link to={'/'}><button>Home</button></Link>
<Link to={'/addtask'}><button>AddTask</button></Link>

<Link to={'/filter'}><button>Filter</button></Link>


    </nav>
    
     <Routes>
        <Route path ='/' element={<ListTask/>} />
        <Route path ='/addtask' element={<AddTask/>} />
        <Route path="/edit/:id" element={<Edittask />} />
        <Route path="/filter" element={<Filter/>} />
      </Routes>
      
    </>
  );
}

export default App;
