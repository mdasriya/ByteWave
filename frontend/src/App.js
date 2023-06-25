
import './App.css';
import FinishedPage from './components/FinishedPage';
import Footer from './components/Footer';
import InterviewSimulator from './components/InterviewSimulator';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import MainRoutes from './pages/MainRoutes';


function App() {
//   let question = "give me 5 react interview question"

// const fetchdata = async() => {
//   const itemData = {
//     "model": "text-davinci-003",
//     "prompt": question,
//     "temperature": 1,
//     "max_tokens": 1000,
//     "top_p": 1,
//     "frequency_penalty": 0,
//     "presence_penalty": 0
//   }
 
//   await fetch('https://api.openai.com/v1/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "Authorization": `Bearer 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`
//     },
//     body: JSON.stringify(itemData),
//   })
//     .then(response => response.json())
//     .then(data => {
//       // Process the created item
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
    
// }
// fetchdata()

  return (
    <div className="App">
     {/* <InterviewSimulator></InterviewSimulator> */}
     {/* <Login /> */}
<Navbar />

<MainRoutes />


    </div>
  );
}

export default App;
