import { useState } from "react";
import swal from "sweetalert";
import DonationCard from "./DonationCard";


const Donation = () => {

  const [donations, setDonations] = useState([]);
  const [noDonate, setNoDonate] = useState(false);
  const [moreShow, setMoreShow] = useState(false);

  useState(() => {
    const donateItems = JSON.parse(localStorage.getItem('donates'))
    if (donateItems) {
      setDonations(donateItems);

    } else {
      swal("Oops!", "No donate!", "error");
      setNoDonate();
    }
  }, [])
  return (
    <div>
      {
        noDonate ? <p>{noDonate}</p> :
          <div>
            <div className="grid gap-6 lg:grid-cols-2 py-12">
              {
                moreShow ? donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                :
                donations.slice(0, 4).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
              }
            </div>

            <div>
              <div className='flex justify-center'>
                {donations.length >= 4 && <button onClick={() => setMoreShow(!moreShow)} className='bg-orange-200 p-3 rounded-lg my-4'>{moreShow ? 'See less' : 'See more'} </button>}
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default Donation;