import React from "react"
import cn from "classnames"
import { Box, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import { useStyles } from "./styles"
import { Colors } from '../../../styles/Colors'

interface IProps {
    title?: string;
    link?: string;
    className?: string;
    disabled?: boolean;
    onClick: (e: any) => void;
    children?: any;
}

const defaultProps: IProps = {
    title: "",
    link: "",
    className: "",
    disabled: false,
    onClick: () => null,
    children: "",
}

const MenuItem: React.FC<IProps> = (props: IProps) => {
    const { title, link, className, disabled, onClick, children } = props
    const classes = useStyles()
    const classText = cn(
        className
    )
    
    return (
        <NavLink exact to={`${link}`} 
                 activeStyle={{background: Colors.yellow}}
                 className={classes.link}>
            <Typography noWrap className={classes.linkText}>
                {title}
            </Typography>
        </NavLink>
    )
}
//onClick={() => onClick(`${link}`)}
MenuItem.defaultProps = defaultProps

export default MenuItem