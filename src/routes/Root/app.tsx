import { useMemo } from 'react';

import { AppRoot } from '@telegram-apps/telegram-ui';
import { retrieveLaunchParams, useSignal, isMiniAppDark } from '@telegram-apps/sdk-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// routes
import { routes } from '../routes';
import Home from '@/pages/home';
import { SocketProvider } from '@/context/socket-provider';

// State
import { Provider } from 'react-redux';
import { persistor, store } from "@/store";
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  const lp = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);
  const url = import.meta.env.VITE_SERVER_URL;


  const Wrapper = () => {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}>
          <SocketProvider
            serverUrl={`${url}/user`}>
            <BrowserRouter>
              <Routes>
                {
                  routes.map((route, index: number) => <Route key={index} path={route.path} element={route.Component} />)
                }
              </Routes>
            </BrowserRouter>
          </SocketProvider>
        </PersistGate>
      </Provider>
    );
  }

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}>
      <Wrapper />
    </AppRoot>
  )
}
