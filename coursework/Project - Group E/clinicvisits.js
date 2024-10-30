// creating a function
function manageClinicvisits(maxCapacity, patientsComingIn) {
    let currentPatients = 0; // initialising the current status at 0 or clinic is currently empty

    if (patientsComingIn > maxCapacity) { //checking if the clinic has exceeded its daily capacity
        console.log(`Too many patients! The clinic can only handle ${maxCapacity} patients today.`);
    } else { // attach record for the patients who come in
        while (currentPatients < patientsComingIn) {
            currentPatients++;
            console.log(`Patient ${currentPatients} have come in.`);
        }

        let remainingCapacity = maxCapacity - currentPatients;
        console.log(`All ${currentPatients} patients have been admitted.`);
        // attaching the remaining capacity spaces
        if (remainingCapacity > 0) {
            console.log(`There is still room for ${remainingCapacity} more patients.`);
        } else {
            console.log(`Clinic capacity reached. No more patients can be admitted.`);
        }
    }
}

// testing our function
manageClinicvisits(10,6); 
