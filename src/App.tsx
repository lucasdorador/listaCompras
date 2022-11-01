import {Provider} from 'react-redux';
import MainScreen from './Screens/MainScreen/indexMainScreen';
import store from './Store/configureReduxStore';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
