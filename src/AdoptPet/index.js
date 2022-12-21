import { Button, IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { petDetails } from "../petDetails";

import "./adoptPet.css";


export function AdoptPet(){

    const [open, setOpen] = useState(false);
    const [isDogSelected, setIsDogSelected] = useState(true);
    const [dogBreedArray, setDogBreedArray]  = useState([]);
    const [catBreedArray, setCatBreedArray]  = useState([]);
    const [adoptionFormObject, setAdoptionFormObject] = useState({});

    let db = null;

    useEffect(()=>{
        var dogsArray = [];
        var catsArray = [];
        petDetails.dog.forEach((dogObject)=>{
            if(!dogsArray.includes(dogObject.breed)){
                dogsArray.push(dogObject.breed);
            }
        });
        petDetails.cat.forEach((catObject)=>{
            if(!catsArray.includes(catObject.breed)){
                catsArray.push(catObject.breed);
            }
        });
        setDogBreedArray(dogsArray);
        setCatBreedArray(catsArray);
    },[]);


    useEffect(()=>{
        createRequest();
    },[adoptionFormObject]);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePetSelection = (e) => {
        e.target.value === "Cat" ? setIsDogSelected(false) : setIsDogSelected(true);
        setAdoptionFormObject({...adoptionFormObject, petType: e.target.value});
    };

    function createRequest(){
        const request = indexedDB.open("animalShelter",1);

        request.onupgradeneeded = (e)=>{
            db = e.target.result;
            const adoptionDetails = db.createObjectStore("Adoption Details",{keyPath : "email"});
            const giveAwayDetails = db.createObjectStore("Give Away Details",{keyPath : "email"});
            // alert("upgrade");
        }

        request.onsuccess = (e)=>{
            db = e.target.result;
            // alert("success");
        }

        request.onerror = (e)=>{
            alert("error!!!..."+e.target.error);
        }
    }

    const handleAdoptionSubmit = (e)=>{
        e.preventDefault();
        const tx = db.transaction("Adoption Details","readwrite");
        const adoptionDetails = tx.objectStore("Adoption Details");
        adoptionDetails.add(adoptionFormObject);
        handleClose();
    }


    return(
        <div>
            <Button variant = "outlined"  className="adoptButton" onClick={handleOpen}>Adopt</Button>
            <Modal
                open={open}
                // onClose={handleClose}
            >
                <Box className = "boxEnclosure">
                    <CloseIcon className = "closeIcon" onClick = {handleClose}/>
                    <form className = "adoptPetModalEnclosure" onSubmit={handleAdoptionSubmit}>
                        <div className = "adoptPetHeading">Adopt a Pet</div>
                        <div className = "petDetailsWrapper">
                            <div className = "petDetailsWrapperDescription">What pet do you want to adopt?</div>
                            <div className = "petTypeWrapper">
                                <label className = "petTypelabel" htmlFor="petType">Pet type <span>*</span></label>
                                <select className = "petTypeinput" name="petType" id="petType" onChange = {handlePetSelection}>
                                    <option>--Select Pet Type--</option>
                                    <option value = "Dog">Dog</option>
                                    <option value = "Cat">Cat</option>
                                </select>
                            </div>
                            <div className = "breedTypeWrapper">
                                <label className = "breedTypelabel" htmlFor="breedType">Breed <span>*</span></label>
                                {isDogSelected ?
                                    <select className = "breedTypeinput"name="breedType" id="breedType" onChange={(e)=>setAdoptionFormObject({...adoptionFormObject,breed:e.target.value})}> 
                                        <option>--Select Breed--</option>
                                        {dogBreedArray.map((breed, index)=>{return <option key={index} value = {breed}>{breed}</option>})}
                                    </select> : 
                                    <select className = "breedTypeinput"name="breedType" id="breedType" onChange={(e)=>setAdoptionFormObject({...adoptionFormObject,breed:e.target.value})}> 
                                        <option>--Select Breed--</option>
                                        {catBreedArray.map((breed, index)=>{return <option key={index} value = {breed}>{breed}</option>})}
                                    </select>
                                }
                            </div>
                        </div>
                        <div className = "adopteeDetailsWrapper">
                            <div className = "AdmiteeDetailsWrapperDescription">Please fill in your details</div>
                            <div className = "nameWrapper">
                                <label className = "fullNameLabel" htmlFor="fullName">Full Name <span>*</span></label>
                                <input className = "fullNameInput" type = "text" name="fullName" id="fullName" onBlur={(e)=>setAdoptionFormObject({...adoptionFormObject,fullName:e.target.value})} required/>
                            </div>
                            <div className = "emailWrapper">
                                <label className = "emailLabel" htmlFor="email">Email <span>*</span></label>
                                <input className = "emailInput" type = "email" name="email" id="email" onBlur={(e)=>setAdoptionFormObject({...adoptionFormObject,email:e.target.value})} required/>
                            </div>
                            <div className = "phoneNumberWrapper">
                                <label className = "phoneLabel" htmlFor="phone">Phone <span>*</span></label>
                                <input className = "phoneInput" type = "tel" name="phone" id="phone" pattern="[0-9]{10}" onBlur={(e)=>setAdoptionFormObject({...adoptionFormObject,phone:e.target.value})} required/>
                            </div>
                        </div>
                        <div className="adoptFooter">
                            <Button variant="contained" type = "submit" className = "adoptionModalButton">REQUEST FOR ADOPTION</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}