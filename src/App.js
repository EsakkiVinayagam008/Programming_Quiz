import './index.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Firstpage from './Componend/Firstpage';
import Secondpage from './Componend/Secondpage';
import Intro from './Componend/Intro';
import Htmlpage from './Componend/Htmlpage';
import Csspage from './Componend/Csspage';
import Scorepage from './Componend/Scorepage';
import Answerpage from './Componend/Answerpage';
import Javapage from './Componend/Javapage';
import Cpage from './Componend/Cpage';
import Javascript from './Componend/Javascript';
import Pythonpage from './Componend/Pythonpage';
import Sqlpage from './Componend/Sqlpage';
import Phppage from './Componend/Phppage';
import Reactpage from './Componend/Reactpage';



function App() {
 
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route exact  path="/" Component={Firstpage} />
        <Route path="/secondpage" Component={Secondpage} />
        <Route path='/Htmlpage' Component={Htmlpage}/>
       <Route path='/Intro' Component={Intro}/>
       <Route path='/Csspage' Component={Csspage}/>
       <Route path='/Scorepage' Component={Scorepage}/>
       <Route path='/Answerpage' Component={Answerpage}/>
       <Route path='/Java' Component={Javapage}/>
       <Route path='/C' Component={Cpage}/>
       <Route path='/Javascript' Component={Javascript}/>
       <Route path='/Python' Component={Pythonpage}/>
       <Route path='/Sql' Component={Sqlpage}/>
       <Route path='/Php' Component={Phppage}/>
       <Route path='/Reactjs' Component={Reactpage}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
