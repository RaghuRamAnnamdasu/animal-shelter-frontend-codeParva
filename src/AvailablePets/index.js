import { useState } from "react";
import { Button, IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { petDetails } from "../petDetails";

import "./availablePets.css";

export function AvailablePets() {
    const [open, setOpen] = useState(false);
    const [selectedPet, setPetType] = useState("dog");
    const [selectedPetList, updatePetList] = useState(petDetails.dog);

    const onPetSelection = (petType) => {
        setPetType(petType);
        updatePetList(petDetails[petType]);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant = "outlined"  className="petsButton" onClick={handleOpen}>What all pets do we have ?</Button>
            <Modal
                open={open}
                // onClose={handleClose}
            >
                <Box className = "avialblePetsBoxEnclosure">
                    <CloseIcon className = "closeIcon" onClick = {handleClose}/>
                    <div className = "availablePetsHeading">What all pets do we have ?</div>
                    <div className="petTypeSelectionWrapper">
                        <div className={selectedPet === "dog" ? "dogHeading hightlightDog" : "dogHeading"} onClick={() => onPetSelection("dog")}>DOGS</div>
                        <div className="border"/>
                        <div className={selectedPet === "cat" ? "catHeading hightlightCat" : "catHeading"} onClick={() => onPetSelection("cat")}>CATS</div>
                    </div>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} size="small" stickyHeader aria-label="sticky table">
                            <TableHead>
                            <TableRow>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Breed</TableCell>
                                    <TableCell align="left">Age (Months)</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {selectedPetList.map((petInfo) => (
                                <TableRow
                                key={petInfo.name}
                                sx={{ 'td, th': { border: 0 } }}
                                >
                                    <TableCell align="left">{petInfo.name}</TableCell>
                                    <TableCell align="left">{petInfo.breed}</TableCell>
                                    <TableCell align="left">{petInfo.age}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
        </div>
    );
}