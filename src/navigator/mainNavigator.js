import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging13295Navigator from '../features/Messaging13295/navigator';
import EmailAuth13294Navigator from '../features/EmailAuth13294/navigator';
import CalendarView13293Navigator from '../features/CalendarView13293/navigator';
import BlankScreen413292Navigator from '../features/BlankScreen413292/navigator';
import BlankScreen513291Navigator from '../features/BlankScreen513291/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging13295: { screen: Messaging13295Navigator },
EmailAuth13294: { screen: EmailAuth13294Navigator },
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
