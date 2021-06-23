import React from 'react'
import './Sidebar.css'
import SideRow from './SideRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <SideRow src="" title="Imran" />
        <SideRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
        <SideRow Icon={EmojiFlagsIcon} title="Pages" />
        <SideRow Icon={PeopleIcon} title="Friends" />
        <SideRow Icon={ChatIcon} title="Messenger" />
        <SideRow Icon={StorefrontIcon} title="Marketplace" />
        <SideRow Icon={VideoLibraryIcon} title="Videos" />
        <SideRow Icon={ExpandMoreIcon} title="See More" />
      </div>
    </div>
  )
}

export default Sidebar
