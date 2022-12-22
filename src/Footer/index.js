import "./footer.css";
import EastIcon from '@mui/icons-material/East';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from "@mui/material";
import { AdoptPet } from "../AdoptPet";

export function Footer () {
    return (
        <div className="footerWrapper">
            <div className="footerDetails">
                <div className="footerAnimalShelterWrapper">
                    <div className="footerAnimalShelter">
                        <img src="./animalShelterLogoFooter.png" />
                        <div className="animalShelter">ANIMAL SHELTER</div>
                    </div>
                    <p className="bestAnimalShelter">One of the best animal shelter places in India. We ar recognized by the government. Please take a pledge to take care of these lovely pets!</p>
                    <AdoptPet isFooter = {true}/>
                    {/* <Button variant = "contained" className="adoptButtonFooter">Adopt<EastIcon className = "eastIcon"/></Button> */}
                </div>
                <div className="getInTouchWrapper">
                    <div className="getInTouch">GET IN TOUCH</div>
                    <div className="addressWrapper">
                        <div className="locationWrapper">
                            <img src="locationIcon.png" />
                            <div className="address">llesfnee cnu efoin eoifn oewifnewo inf sdc csdcneno ie woiwemfwokm fwew ecen cloenwo we - 355233</div>
                        </div>
                        <div className="mailWrapper">
                            <img src="mailIcon.png" />
                            <div className="gmail">cisubdcusb@gmail.com</div>
                        </div>
                        <div className="followUs">FOLLOW US</div>
                        <div className = "footerIconWrapper">
                            <img src="twitterIconFooter.png" alt="twitterIconFooter"/>
                            <FacebookRoundedIcon className = "facebookIconFooter"/>
                            <LinkedInIcon className = "linkedInIconFooter"/>
                        </div>
                    </div>
                </div>
                <div className="quickLinksWrapper">
                    <div className="quickLinks">QUICK LINKS</div>
                    <div className="home">Home</div>
                    <div className="contactUs">Contact Us</div>
                </div>
            </div>
            <div className="copyRightDetails">
                <div className="copyRightText">Copyright @2023. Animal Shelter</div>
                <div>
                    <div className="privacyDetails">
                        <a>Privacy Policy</a>
                        <a>Terms of Service</a>
                        <a>Cookies Settings</a>
                    </div>
                </div>
            </div>
        </div>
    );
}