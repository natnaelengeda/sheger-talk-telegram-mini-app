import { useMemo } from 'react';

import { AppRoot } from '@telegram-apps/telegram-ui';
import { retrieveLaunchParams, useSignal, isMiniAppDark } from '@telegram-apps/sdk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// routes
import { routes } from '../routes';

export default function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route) => <Route key={route.path} element={route.Component} />)
          }

        </Routes>
      </BrowserRouter>
    </AppRoot>
  )
}
