import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationsCards = ({ donation }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color } = donation;


    return (
        <Link to={`/donations/${id}`}>
            <div>
                <div style={{ background: card_bg_color }} className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-[500px]">
                    <div className="overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img className="h-[250px] w-full"
                            src={picture}
                            alt="img-blur-shadow"
                        />
                    </div>

                    <div className="px-6 pt-8">
                        <button style={{ background: category_bg_color, color: text_button_bg_color, padding: '7px', borderRadius: '7px' }}>
                            {category}
                        </button>
                    </div>

                    <div className="px-6 pt-8">
                        <h5 style={{ color: text_button_bg_color, fontSize: '32px', fontWeight: 'bold' }}>
                            {title}
                        </h5>
                    </div>
                </div>
            </div>
        </Link>
    );
};

DonationsCards.propTypes = {
    donation: PropTypes.any
  };

export default DonationsCards;