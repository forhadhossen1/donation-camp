import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";

const DonationsDetails = () => {

    const [donation, setDonation] = useState();

    const donations = useLoaderData();
    // console.log(donations);
    const {id} = useParams();

    useEffect(()=>{
        const findDonations = donations.find(donation => donation.id === id)
        setDonation(findDonations);
    },[id, donations])
    return (
        <div>
          <DonationCard donation = {donation}></DonationCard>  
        </div>
    );
};

export default DonationsDetails;