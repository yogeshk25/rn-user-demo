import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./screens/StartScreen";
import UserListScreen from "./screens/UserListScreen";
import UserDetailScreen from "./screens/UserDetailScreen";

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
      Home: StartScreen,
      UserList: {
        screen: UserListScreen,
        options: {
          title: 'User List'
        }
      },
      UserDetail: {
        screen: UserDetailScreen,
        options: {
          title: 'User Detail'
        }
      },
    },
  });
  
const Navigation = createStaticNavigation(RootStack);

export default Navigation;
