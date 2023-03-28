import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const StyledText = ({ children, bold, color, fontSize }) => {
  const stylesToApply = [
    styles.standard,
    bold && styles.bold,
    color && { color },
    fontSize && { fontSize }
  ]
  return (
    <Text style={stylesToApply}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  standard: {
    color: theme.fontColors.primaryColor,
    fontSize: 20,
    flexWrap: 'wrap'
  },
  bold: { fontWeight: 'bold' }
})

export default StyledText
