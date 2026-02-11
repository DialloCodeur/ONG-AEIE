function Footer() {
    return (
        <>
            <div className="flex justify-between h-100 bg-lime-600">
                <div className="flex flex-col justify-start gap-5 ml-16">
                    <img src="/logo-AEIE.svg" className="w-36 h-36 mt-7" />
                    <div className="flex justify-between gap-12">
                        <div>
                            <h1 className="font-bold text-white text-3xl">Nos projets</h1>
                            <p className="text-white">Réalisés</p>
                            <p className="text-white">En cours</p>
                            <p className="text-white">Futurs</p>
                        </div>
                        <div>
                            <h1 className="font-bold text-white text-3xl">Présentation</h1>
                            <p className="text-white">Qui sommes nous ?</p>
                            <p className="text-white">Notre équipe</p>
                            <p className="text-white">Mot du Directeur Général</p>
                        </div>
                    </div>
                </div>
                <div className="self-end mb-2">
                    <img src="/social-media-logo.svg" />
                </div>
                <div className="flex flex-col justify-items-start items-center gap-5 w-96 h-100 bg-gray-300">
                    <h1 className="font-bold text-5xl mt-7">Newsletter</h1>
                    <p className="ml-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas facere blanditiis</p>
                    <form className="flex flex-col">
                        <input className="h-8 px-1 bg-white" type="text" placeholder="diallo26@gmail.com"></input>
                        <button className="font-bold cursor-pointer text-white bg-lime-600">Soumettre</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer
