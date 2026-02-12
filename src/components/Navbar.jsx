import { Link, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex justify-evenly items-center gap-56 h-44">
                <img src="/logo-AEIE.svg" className="w-36 h-36" />
                <div>
                    <div className="flex justify-end gap-12">
                        <img src="/search-symbol.svg" />
                        <img src="/social-media-logo.svg" />
                    </div>
                    <div className="flex items-center w-full h-10">
                        <img src="/Line-1.svg" className="w-full h-0 top-14 left-80 border rotate-180" />
                    </div>

                    <div className="flex justify-between items-center gap-20 h-10">
                        <Link to="/presentation" className="cursor-pointer font-bold text-[19px]">Présentation</Link>
                        <Link to="/areas" className="cursor-pointer font-bold text-[19px]">Domaines d'intervention</Link>
                        <Link to="/news" className="cursor-pointer font-bold text-[19px]">Actualités</Link>
                        <div className="flex justify-around  bg-lime-600">
                            <button className="w-44 h-16 top-28 left-96 cursor-pointer font-bold text-[19px]" onClick={() => navigate('/contribute')}>Contribuer</button>
                            <img src="/Charity.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar