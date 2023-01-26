import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../pages/profile"
import StackNavigator from "./Stack"
import CustomSidebarMenu from "../pages/CustomSidebarMenu"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
        drawerContent={props => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen name="Tela Inicial" component={StackNavigator}/>
            <Drawer.Screen name="Perfil" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
