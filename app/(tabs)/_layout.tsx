// import {StyleSheet} from "react-native";
import React from "react";
import {Tabs} from "expo-router";
import {Image, ImageBackground, Text} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

interface TabIconProps {
    focused: boolean;
    icon: any;
    title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
    return (
        <>
            <ImageBackground
                source={focused ? images.highlight : null}
                className={`flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4
        justify-center items-center ${focused ? 'rounded-full overflow-hidden' : ''}`}
            >
                <Image
                    source={icon}
                    tintColor={focused ? "#151312" : "#666"}
                    className="size-5"
                />
                <Text
                    className={`${focused ? 'text-secondary' : 'text-gray-500'} text-base font-semibold ml-2`}
                >
                    {title}
                </Text>
            </ImageBackground>
        </>
    );
}

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Home", headerShown: false, tabBarIcon: ({focused}) => (
<TabIcon focused={focused} icon={icons.home} title="Home" />
            )}
            }/>
            <Tabs.Screen name="search" options={{title: "Search", headerShown: false, tabBarIcon: ({focused}) => (
<TabIcon focused={focused} icon={icons.search} title="Search" />
            )
            }}/>
            <Tabs.Screen name="saved" options={{title: "Saved", headerShown: false, tabBarIcon: ({focused}) => (
<TabIcon focused={focused} icon={icons.save} title="Saved" />
            )
            }}/>
            <Tabs.Screen name="profile" options={{title: "Profile", headerShown: false, tabBarIcon: ({focused}) => (
<TabIcon focused={focused} icon={icons.person} title="Profile" />
            )
            }}/>
        </Tabs>
    );
};

export default _layout;

// const styles = StyleSheet.create({});
