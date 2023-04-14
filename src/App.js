
import './App.css';

import Student from './components/Student';
import Score from './components/Score';
import studentsData from './data'

const students = studentsData.map((el, idx) => {
  return (
    <Student 
      key ={idx}
      name = {el.name}
      bio = {el.bio}
      scores = {el.scores}
    />
  )
})


function App() {
  return (
    <div className="App">
      <h1>Students Board</h1>
      <section>{students}</section>
    </div>
  );
}

export default App;
