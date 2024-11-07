import { SVGicons } from '@trilogy-ds/assets/lib/iconsPath'
import { TrilogyThemeProvider, defaultTheme } from '@trilogy-ds/react/context/providerTheme'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

import '@trilogy-ds/styles/dist/default/trilogy.css'
import Screens from '../components.json'

SplashScreen.preventAutoHideAsync()

const theme = {
  ...defaultTheme,
  icons: SVGicons,
  fontFamily: { regular: 'poppins-regular', medium: 'poppins-medium', bold: 'poppins-semibold' },
}

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' />
      {Screens.map((screen, index) => {
        return <Stack.Screen name={screen} key={index} />
      })}
    </Stack>
  )
}

const RootLayout = () => {
  const [loaded] = useFonts({
    'poppins-bold': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-bold.ttf'),
    'poppins-medium': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-medium.ttf'),
    'poppins-regular': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-regular.ttf'),
    'poppins-semibold': require('@trilogy-ds/assets/lib/fonts/ttf/poppins-semibold.ttf'),
  })

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync()
  }, [loaded])

  if (!loaded) return null

  return (
    <TrilogyThemeProvider theme={theme}>
      <StackLayout />
    </TrilogyThemeProvider>
  )
}

export default RootLayout
