import './App.css'
import { Provider } from 'react-redux';
import store from '../src/store/index'
//import Conatctform from'./component/contact'
import FeedbackPage from './Component/Feedbackpage';
function App() {
  return (
    <div className="App">
       <Provider store={store}>
       {/*<Conatctform></Conatctform>*/}
       <FeedbackPage></FeedbackPage>
      </Provider>

    </div>
  );
}

export default App;