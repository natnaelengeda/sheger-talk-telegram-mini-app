import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import Root from './routes/Root';
import { EnvUnsupported } from '@/components/env-unsupported';
import { init } from './init';

// Mock environment
import './mockEnv.ts';

// styles
import '@telegram-apps/telegram-ui/dist/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  const launchParams = retrieveLaunchParams();
  const { tgWebAppPlatform: platform } = launchParams;
  const debug = (launchParams.tgWebAppStartParam || '').includes('platformer_debug')
    || import.meta.env.DEV;

  console.log(platform);

  // Configure all application dependencies.
  await init({
    debug,
    eruda: debug && ['ios', 'android'].includes(platform),
    mockForMacOS: platform == "macos",
  }).then(() => {
    root.render(
      <StrictMode>
        <Root />
      </StrictMode>
    )
  })

} catch (e) {
  console.log(e)
  root.render(<EnvUnsupported />);
}