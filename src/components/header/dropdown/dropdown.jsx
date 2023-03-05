import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Dropdown = ({ label, options }) => {
    const [anchorEl, setAnchorEl] =
        (React.useState < null) | (HTMLElement > null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {label}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {options.map((el) => {
                    return (
                        <MenuItem onClick={handleClose}>
                            <Link to={el.href}>{el.text}</Link>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};

export default Dropdown;
