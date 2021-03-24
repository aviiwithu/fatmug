import './App.css';
import {useState} from 'react';
import Appbar from './components/Appbar'
import SubmittedArticles from './components/SubmittedArticles'
import ViewArticle from './components/ViewArticle'
import CreateEditArticle from './components/CreateEditArticle'
import Dashboard from './components/Dashboard';
import Login from './components/Login'
import {Switch, Route, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {updateArt,createArt} from './actions/articles';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [navitems, setNavitems] = useState({
    item1:{text:"Write",type:'submit'}, item2:{text:'Your Article',type:''}, item3:{text:'Logout',type:''}
  });
  const [article, setArticle] = useState({
    title:'',description:'',selectedFile:'',creator:'', userid:'',
});

  
const [currentId, setCurrentId] = useState(null);

const handleSubmit =(e)=>{
  e.preventDefault();
  if(currentId) {
      dispatch(updateArt(currentId, article, history))
  } else {
      dispatch(createArt(article, history))
  }
  clear();
}

const clear =()=>{
  setCurrentId(null);
  setArticle({...article,title:'',description:'', selectedFile:''})
}
  
  return (
    <>
    <Switch>
      <Route path='/login' exact render={(props)=> (<Login {...props} currentId={currentId} setCurrentId={setCurrentId} setNavitems={setNavitems} />) } />
      <>
        <Appbar navitems={navitems} currentId={currentId} setCurrentId={setCurrentId} handleSubmit={handleSubmit}  />
        <Route path='/' exact render={(props)=> (<Dashboard {...props} currentId={currentId} setCurrentId={setCurrentId} setNavitems={setNavitems} />) } />
        <Route path='/new' exact render={(props)=> (<CreateEditArticle {...props} clear={clear} article={article} handleSubmit={handleSubmit} setArticle={setArticle} currentId={currentId} setCurrentId={setCurrentId} setNavitems={setNavitems} />) } />
        <Route path='/view/:id' exact render={(props)=> (<ViewArticle {...props} setNavitems={setNavitems} />) } />
        <Route path='/articles' exact render={(props)=> (<SubmittedArticles {...props} currentId={currentId} setCurrentId={setCurrentId} setNavitems={setNavitems} />) } />
      </>
    </Switch>
           
      
      </>
  );
}

export default App;
