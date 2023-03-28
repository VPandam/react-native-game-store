import { BackHandler } from 'react-native'

export const addListenerToBackButton = (navigate) => {
  const backAction = () => {
    navigate('/')
    return true
  }
  console.log(backAction)
  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  )

  return () => backHandler.remove()
}
