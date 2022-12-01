import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigator} from './DrawerNavigator';
import LoginPage from '../screens/Login/indexLoginPage';
import CreateAccountPage from '../screens/CreateAccount/indexCreateAccountPage';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from '../hooks/react-hooks-redux';
import {
  setDataLogin,
  setDataLogout,
} from '../store/actions/screens/Login/actionLoginPage';

export type RootStackParamList = {
  DrawerNavigator: undefined;
  LoginPage: undefined;
  CreateAccountPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  const dispatch = useAppDispatch();
  const [initializing, setInitializing] = React.useState(true);
  const {isLogged} = useAppSelector(state => state.loginPage);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      dispatch(
        setDataLogin({
          isLogged: true,
          user: user.uid,
        }),
      );
      if (initializing) setInitializing(false);
    } else {
      dispatch(setDataLogout());
    }
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(e => {
      onAuthStateChanged(e);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (isLogged) {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="DrawerNavigator">
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} />
      </Stack.Navigator>
    );
  }
}
