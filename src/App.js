import { toast } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ closeToast }) => {
  return (
    <div>Something went wrong!!
    <button onClick={closeToast}>Close</button>
    </div>
  )
}

toast.configure()
function App() {

  const notify = () => {
    toast('Basic notification!', {position: toast.POSITION.TOP_LEFT, autoClose:8000})
    toast.success('Success notification!', {position: toast.POSITION.BOTTOM_LEFT, autoClose: false})
    toast.info('Info notification !', {position: toast.POSITION.TOP_RIGHT})
    toast.warn(<CustomToast/>, {position: toast.POSITION.BOTTOM_RIGHT})
    toast.error('Error notification!', {position: toast.POSITION.TOP_CENTER})
  }
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default App;
