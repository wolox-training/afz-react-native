import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import tronsauce from 'reactotron-apisauce';
import Reactotron, { overlay, trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({ name: 'wbooks', host: scriptHostname })
    .use(trackGlobalErrors({}))
    .use(tronsauce())
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .use(overlay())
    .connect();
  // eslint-disable-next-line no-console
  console.tron = {
    log: Reactotron.logImportant,
    clear: Reactotron.clear,
    customCommand: Reactotron.onCustomCommand,
    display: Reactotron.display
  };
}
export default Reactotron;
