import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text, View } from 'react-native'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className='flex flex-row min-w-[100px] min-h-[41px] justify-center items-center rounded-full overflow-hidden px-2 py-1'
            >
                <Image source={icon} tintColor="#151312" className='size-4' />
                <Text className='text-secondary text-sm font-semibold ml-1'>{title}</Text>
            </ImageBackground>
        )
    } else {
        return (
            <View className='justify-center items-center rounded-full'>
                <Image source={icon} tintColor="#A8B5DE" className='size-4' />
            </View>
        )
    }
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 30,
                    marginHorizontal: 20,
                    marginBottom: 18,
                    height: 40,
                    position: 'absolute',
                    borderWidth: 1,
                    borderColor: '#0f0D23',
                    paddingVertical: 4,
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.home} title='Home' />
                    ),
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.search} title='Search' />
                    ),
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.save} title='Save' />
                    ),
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.person} title='Profile' />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _layout
