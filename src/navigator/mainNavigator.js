import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView13293Navigator from '../features/CalendarView13293/navigator';
import BlankScreen413292Navigator from '../features/BlankScreen413292/navigator';
import BlankScreen513291Navigator from '../features/BlankScreen513291/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView13293: { screen: CalendarView13293Navigator },
BlankScreen413292: { screen: BlankScreen413292Navigator },
BlankScreen513291: { screen: BlankScreen513291Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
