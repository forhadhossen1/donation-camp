import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {
    const { picture, price, category, card_bg_color, category_bg_color, text_button_bg_color, title } = donation || {}

    return (
        <div>
            <div style={{ background: card_bg_color }} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">

                    <div className="">
                        <button style={{ background: category_bg_color, color: text_button_bg_color, padding: '7px', borderRadius: '7px' }}>
                            {category}
                        </button>
                    </div>

                    <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased">
                        {title}
                    </h4>

                    <h4 style={{ color: text_button_bg_color }} className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased">
                        {price}
                    </h4>
                    <p className="mb-8 block  font-normal leading-relaxed text-gray-900 antialiased">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>
                    <a className="inline-block" href="#">
                        <button style={{ background: text_button_bg_color }}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;