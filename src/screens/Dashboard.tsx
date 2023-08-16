import React from 'react'
import { Text, View } from 'react-native'

interface DashboardProps {
    name: string
}
const Dashboard = ({name}: DashboardProps) => {
  return (
    <View className="flex-1 justify-center items-center">
    <Text className="font-bold text-4xl text-red-500">{name}</Text>
  </View>
  )
}

export default Dashboard