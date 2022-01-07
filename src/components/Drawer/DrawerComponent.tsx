import React, { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface DrawerComponentProps {
    buttonLabel?: string;
    drawerContent: JSX.Element;
    drawerIcon?: React.ReactElement<SvgIconProps>;
}

export const DrawerComponent: React.FC<DrawerComponentProps> = ({drawerIcon, buttonLabel, drawerContent}) => {
    const [visible, setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible);
    };
    return (
        <div>
            {buttonLabel && <button onClick={toggle}>
                {buttonLabel}
            </button>}
            {drawerIcon && <div onClick={toggle}>{drawerIcon}</div>}
            <Drawer open={visible} onClose={toggle} anchor="top">
                {drawerContent}
            </Drawer>
        </div>
    );
};