import DonationsCards from "./DonationsCards";

const Donations = ({donations}) => {
    return (
        <div className="grid gap-5 py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                donations.map(donation => <DonationsCards key={donation.id} donation = {donation}></DonationsCards>)
            }
        </div>
    );
};

export default Donations;