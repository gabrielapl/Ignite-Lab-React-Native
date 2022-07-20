import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '../screens/SignIn';
import { AppRoutes } from './app.routes';

export function Route() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}