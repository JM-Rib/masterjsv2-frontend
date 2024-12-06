import React, {useState, useEffect} from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { Ripple } from 'primereact/ripple';
import { Avatar } from 'primereact/avatar';
import Models from './Models.tsx';
import { APP_ROUTES, BODY_PARTS, NATURE, OBJECTS, PLACES, SYMBOLS } from '../utils/constants';
import { Router, useNavigate } from 'react-router-dom'; 


export default function Navbar() {
    const navigate = useNavigate(); 
    const [loaded, setLoaded] = useState(null);

    const [isVisible, setIsVisible] = useState(true);  
    const [lastScrollY, setLastScrollY] = useState(0); 
    
    const handleHomeClick = () => {
        navigate("/"); 
    };
    
    const handleRessourcesClick = () => {
        navigate("/ressources"); 
    };
    
    const handleContactClick = () => {
        navigate("/contact"); 
    };

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          // Déterminer si on scrolle vers le haut ou vers le bas
          if (currentScrollY > lastScrollY) {
            // Scroll vers le bas
            setIsVisible(false);
          } else {
            // Scroll vers le haut
            setIsVisible(true);
          }
    
          setLastScrollY(currentScrollY); // Mettre à jour la dernière position de scroll
        };
    
        window.addEventListener("scroll", handleScroll); // Ajouter l'écouteur
        return () => {
          window.removeEventListener("scroll", handleScroll); // Nettoyer l'écouteur
        };
    }, [lastScrollY]); // Dépendance sur la position de scroll précédente

    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a
                    className="flex items-center cursor-pointer px-4 py-2 text-lg font-semibold uppercase relative rounded-full transition hover:bg-gray-200"
                    onClick={(e) => options.onClick && options.onClick(e)}
                >
                    <span className={item.icon} />
                    <span className="">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a
                    className="flex items-center p-3 mb-2 gap-3 cursor-pointer transition hover:bg-gray-100 rounded-lg"
                    onClick={(e) => options.onClick && options.onClick(e)}
                >
                    <span className="flex items-center justify-center bg-blue-500 text-white w-12 h-12 rounded-full">
                        <i className={`${item.icon} text-xl`} />
                    </span>
                    <span className="flex flex-col gap-1">
                        <span className="text-lg font-medium text-gray-800">{item.label}</span>
                        <span className="text-sm text-gray-500">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div
                    className="flex flex-col items-start gap-3 cursor-pointer"
                    onClick={(e) => options.onClick && options.onClick(e)}
                >
                    <img
                        alt="menu-item-demo"
                        src={item.image}
                        className="w-full object-cover rounded-lg"
                    />
                    <span className="text-gray-600">{item.subtext}</span>
                    <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
                        {item.label}
                    </button>
                </div>
            );
        }
    };

    const items = [
    ];



    const start = (
        <div className="flex items-center justify-center " >
            <div className="cursor-pointer" onClick={() => {navigate(APP_ROUTES.ACCUEIL)}}>
                <Models modelPath={PLACES.HOUSE} height={{x: "4rem", y : "3rem"}} style={{ padding:0, margin:0}} zoom={2}></Models>
            </div>
            <div className="cursor-pointer" onClick={() => {navigate(APP_ROUTES.RESSOURCES)}}>
                <Models modelPath={OBJECTS.LINK} height={{x: "4rem", y : "3rem"}} style={{ padding:0, margin:0}} zoom={2}></Models>
            </div>
            <div className="cursor-pointer" onClick={() => {navigate(APP_ROUTES.CONTACT)}}>
                <Models modelPath={OBJECTS.INCOMING_ENVELOPE} height={{x: "4rem", y : "3rem"}} style={{ padding:0, margin:0}} zoom={2}></Models>
            </div>
        </div>
    );

    const end = (
        <div className="flex items-center justify-center " >
            <div className="cursor-pointer" onClick={() => {navigate(APP_ROUTES.INFORMATION)}}>
                <Models modelPath={SYMBOLS.INFORMATION} height={{x: "4rem", y : "3rem"}} style={{ padding:0, margin:0}} zoom={2} lightIntensity={34}></Models>
            </div>
        </div>
    );

    return (
        <>
            <div className={`z-[100] fixed p-2 w-full text-white transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
              } 
            `}>
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="flex gap-x-4 p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} onLoad={()=>{setLoaded(true);}} />
            </div>
        </>
    );
}
               