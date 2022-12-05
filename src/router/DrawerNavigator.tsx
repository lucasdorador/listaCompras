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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

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
      <DrawerItem
        label="Sair"
        icon={() => <Icon name="logout" size={30} style={stylesDrawer.icons} />}
        // style={stylesDrawer.text}
        onPress={handlerLogout}
        labelStyle={stylesDrawer.text}
      />
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
        options={{
          drawerLabel: 'Início',
          headerTitle: 'Minhas Listas',
          drawerLabelStyle: {fontSize: 18, color: theme.colors.white},
          drawerIcon() {
            return <Icon name="home" size={30} style={stylesDrawer.icons} />;
          },
        }}
        component={HomePage}
      />
    </Drawer.Navigator>
  );
};

const stylesDrawer = StyleSheet.create({
  icons: {color: theme.colors.white},
  text: {fontSize: 18, color: theme.colors.white},
});
