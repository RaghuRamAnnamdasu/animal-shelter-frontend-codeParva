import { Button } from "@mui/material";
import { AdoptPet } from "../AdoptPet";
import { AvailablePets } from "../AvailablePets";
import { GiveAwayPet } from "../GiveAwayPet";

import "./mainSection.css";

export function MainSection() {
    const adoptPet = () => {

    };

    const giveAwayPet = () => {

    };

    return (
        <div className="mainSection">
            <div className="adoptionContainer">
                <div className="adoptionSection">
                <div className="adoptionInfoWrapper">
                    <div className="welcomeText">Welcome to the Animal Shelter !</div>
                    <p className="adoptContent">Glad that you care for the animals so much. We make sure that you'll not repent your decision of adopting your favorite pet !!</p>
                </div>
                <div className="adoptionSectionImage">
                    <img src="./dogCatImage.png" />
                </div>
                </div>
                <div className="adoptButtonsSection">
                    <AdoptPet />
                    <AvailablePets />
                </div>
            </div>
            <div className="giveAwaySection">
                <div className="takeCareText">We do take in pets if you can't take care of them !</div>
                <p className="giveAwayContent">Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb</p>
                <GiveAwayPet />
                {/* <Button variant = "outlined"  className="giveAwayButton" onClick={giveAwayPet}>Give Away</Button> */}
            </div>
            <div className="thirdSection">
                <div className="leavesLogoContainer">
                    <img src="leavesLogo.png" alt="leaves" />
                </div>
                <p>Lorem epsum fbsdifcbij fkjebfkjebfkejbfewkjbfwkejbfwkefefb wef wef efnwekjfbkewjfb wkje febf weubfwef wiuefb ewfu webfuwe bfewufb efb ebf uewbfiuwefbwefweiuf wueibf iuwbefiu efewiufbwiuefbi euwbiuebfe bfe fejsdefsjnekdf ksjdnf kjsdnfkjesdnf kjsekdfjeskfjc fksdjfcekejsdfjkes efjebsf beskdb efkjebf kjbejk fbwekjsf bkewb</p>
            </div>
        </div>
    );
}
