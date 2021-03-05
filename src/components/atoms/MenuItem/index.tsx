import React, { SyntheticEvent } from "react"
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
    onClick: (e: string) => void;
}

const defaultProps: IProps = {
    title: "",
    link: "",
    className: "",
    disabled: false,
    onClick: () => null,
}

const MenuItem: React.FC<IProps> = (props: IProps) => {
    const { title, link, className, disabled, onClick } = props
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

MenuItem.defaultProps = defaultProps

export default MenuItem