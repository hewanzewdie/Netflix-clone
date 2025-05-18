import './header.css'
import NetflixLogo from '../../assets/580b57fcd9996e24bc43c529.png';
import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Search, Bell, Contact, ChevronDown } from "lucide-react";

export default function Header(){
    return (
        <div className='header_outer_container'>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={NetflixLogo} alt="Logo" width={100} /></li>
                        <li>Home</li>
                        <li>TVShows</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by languages</li>
                    </ul>
                </div>
                <div className='header_right'>
                    <ul>
                        <li><Search /></li>
                        <li><Bell /></li>
                        <li><Contact/></li>
                        <li><ChevronDown /></li>
                    </ul>
                </div>
            </div>        
        </div>
    )
}