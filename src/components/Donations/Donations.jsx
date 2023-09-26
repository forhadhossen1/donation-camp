import PropTypes from 'prop-types';
import DonationsCards from "./DonationsCards";

const Donations = ({ donations, selectedCategory }) => {

    const filteredDonations = selectedCategory
        ? donations.filter((donation) => donation.category.toLowerCase() === selectedCategory.toLowerCase())
        : donations;

    return (
        <div className="grid gap-5 py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {filteredDonations.map((donation) => (
                <DonationsCards key={donation.id} donation={donation} />
            ))}
        </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.any,
    selectedCategory: PropTypes.any
  };

export default Donations;