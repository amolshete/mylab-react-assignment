import React from 'react'
import './style.css'
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

export const SideNav = () => {
    return (
        <div className="sideNav">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h1 className="sideNavTitle">LOGO</h1>
                    <ul className="sidebarlist">
                        <li className="sideBarListItems active">
                            <AddIcon />
                            <span>Lorem Ipsum</span>
                        </li>
                        <li className="sideBarListItems">
                            <InsertDriveFileIcon />
                            <span>Lorem Ipsum</span>
                        </li>
                        <li className="sideBarListItems">
                            <PlayArrowIcon />
                            <span>Lorem Ipsum</span>
                        </li>
                        <li className="sideBarListItems">
                            <AlignVerticalBottomIcon />
                            <span>Lorem Ipsum</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}