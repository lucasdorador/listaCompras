import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import theme from '../global/theme';
import HomePage from '../screens/HomePage/indexHomePage';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const handlerLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Sair" onPress={handlerLogout} />
    </DrawerContentScrollView>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: theme.colors.white,
        headerStyle: {
          backgroundColor: theme.colors.darkSecundary,
        },
        drawerStyle: {backgroundColor: theme.colors.greenSecundary},
        drawerItemStyle: {
          backgroundColor: 'transparent',
          borderBottomWidth: 2,
        },
        drawerLabelStyle: {color: theme.colors.darkPrimary, fontSize: 18},
      }}
      initialRouteName="ListaCompras"
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen
        name="HomePage"
        options={{drawerLabel: 'Início', headerTitle: 'Minhas Listas'}}
        component={HomePage}
      />
    </Drawer.Navigator>
  );
};
