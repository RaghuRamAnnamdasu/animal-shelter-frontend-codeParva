import "./header.css";

import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export function Header() {
    return (
        <div className="headerWrapper">
            <div className="logoWrapper">
                <img src="./animalShelterLogo.png" />
                <div className="shelterHeading">ANIMAL SHELTER</div>
            </div>
            <div className="navItems">
                <div className="home">Home</div>
                <div className="contactUs">Contact Us</div>
            </div>
            <div className="socialMediaIcons">
                <img src="linkedInIcon.png" alt="linkedInLogo"/>
                <img src="twitterIcon.png" alt="twitterIcon"/>
                <img src="instagramIcon.png" alt="instagramIcon"/>
            </div>
            <div className = "navIcon"><DensityMediumIcon /></div>
        </div>
    );
}
