import Card from './components/Card';
import Btn from './components/Btn';
import titleContext from './context/titleContext';
function App() {
  return (
    <div>
      <titleContext.Provider value={'click'}>
        <Card text={'text'}></Card>
      </titleContext.Provider>
    </div>
  );
}

export default App;
