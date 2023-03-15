import React from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'


export default function ProfileMenuBtn() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton sx={{ padding: '0vw' }} aria-label='Profile-Dropdown-Button' onClick={handleClick}><ArrowDropDownOutlinedIcon sx={{ fontSize: '1.5rem' }} /></IconButton>
            <Menu id="profile-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'profile-button', }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}
