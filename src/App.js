import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <Link to="/topics">Topics</Link>
//       <button onClick={() => props.history.push('/topics')}>click here</button>
//       <h1>HomePage</h1>
//     </div>
//   );
// }
const TopicList = (props) => {
  console.log(props);
  return (
    < div >
      <h1>TopicList</h1>
      <Link to={`${props.match.url}/13`}>To topic 13</Link>
    </div >

  );
}
const TopicDetail = (x) => {
  console.log(x);
  return (
    < div >
      <h1>Topic Detail :{x.match.params.topicId}</h1>
    </div >
  );
}
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/topics' component={TopicList} />
      <Route path='/topics/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
