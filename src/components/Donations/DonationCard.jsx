import swal from "sweetalert";

const DonationCard = ({ donation }) => {
    const { id, picture, title, text_button_bg_color, description, price } = donation || {}

    const handleDonate = () => {
        swal("Good job!", "You are successfully donate!", "success");

        const addDonateItems = [];
        const donateItems = JSON.parse(localStorage.getItem('donates'))
        if (!donateItems) {
            addDonateItems.push(donation);
            localStorage.setItem('donates', JSON.stringify(addDonateItems));
            
        }
        else {

            const isExits = donateItems.find(donates => donates.id === id)

            if (!isExits) {
                addDonateItems.push(...donateItems, donation)
                localStorage.setItem('donates', JSON.stringify(addDonateItems));
            }
            else{
                swal("Oops!", "Alredy donate!", "error");
            }


        }
    }
    // console.log(donation);
    return (
        <div className=" py-12">
            <div className="relative flex  flex-col rounded-md bg-white bg-clip-border text-gray-700 ">
                <div className="relative  overflow-hidden rounded-md bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <div>
                        <img className="w-full h-full lg:h-[600px]"
                            src={picture}
                        />

                        <div
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                height: '25%',
                                background: 'rgba(0, 0, 0, 0.7)', // Adjust the color and opacity of the overlay
                            }}
                        >
                            <div className="py-6 pt-2 md:pt-10 px-5">
                                <button onClick={handleDonate}
                                    style={{ background: text_button_bg_color }}
                                    className="select-none rounded-md py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all  hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Donate {price}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="py-6">
                    <h5 className="mb-2 block text-xl font-bold leading-snug tracking-normal">
                        {title}
                    </h5>
                    <p className="block font-light leading-relaxed text-inherit antialiased">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;