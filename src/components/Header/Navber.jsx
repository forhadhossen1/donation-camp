import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <div className="pt-14 px-5 md:flex justify-between items-center">
            <div>
                <img src="https://i.ibb.co/bLVM0wD/Logo.png" alt="Logo" />
            </div>

            <div>
                <ul className=" text-center py-4 md:flex gap-5 text-xl">
                    <li>
                        <NavLink to='/'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/donation'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/statistics'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;