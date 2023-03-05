import "./dropdown.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { uid } from "uid";

export default function BasicMenu({ label, options }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
                sx={{
                    height: "1rem",
                    overflow: "hidden",
                    textTransform: "none",
                    fontSize: "1rem",
                    position: "relative",
                    marginBottom: "0.1rem",
                    color: "#000",
                }}
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
                        <MenuItem onClick={handleClose} key={uid()}>
                            <Link className="dropdown-link" to={el.href}>
                                {el.text}
                            </Link>
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
}
