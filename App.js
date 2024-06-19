import { registerRootComponent } from 'expo';
import MainApp from './MainApp';  // Assuming MainApp is your root component

// registerRootComponent calls AppRegistry.registerComponent('main', () => MainApp);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(MainApp);
