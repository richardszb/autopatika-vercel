"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";

const servicesData = [
    {
        id: "gumik",
        title: "Gumik",
        menuImg: "/media/gumiabroncsok_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6 leading-loose">
                <strong className="text-brand-darkblue">Gumiabroncsok széles választékával </strong> rendelkezünk különböző típusú autókra, teherautókra, mezőgazdasági gépjárművekre illetve motorokra. Kínálatunkban megtalálhatók a legismertebb márkák:&nbsp;

                <a href="https://www.michelin.hu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/michelin.svg" alt="Michelin" width={105} height={28} className="w-26.25 h-7 object-contain" />
                </a>

                <a href="https://www.continental-tires.com/hu/hu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/continental.svg" alt="Continental" width={110} height={28} className="w-27.5 h-7 object-contain" />
                </a>

                <a href="https://www.bridgestone.hu/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/bridgestone.svg" alt="Bridgestone" width={110} height={28} className="w-27.5 h-7 object-contain" />
                </a>

                <a href="https://www.goodyear.eu/hu_hu/consumer.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/goodyear.svg" alt="Goodyear" width={100} height={28} className="w-25 h-7 object-contain" />
                </a>

                <a href="https://www.pirelli.com/tyres/hu-hu/szemelyauto/katalogus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/pirelli.svg" alt="Pirelli" width={95} height={28} className="w-23.75 h-7 object-contain" />
                </a>

                <a href="https://www.hankooktire.com/hu/hu/home.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/hankook.svg" alt="Hankook" width={105} height={24} className="w-26.25 h-6 object-contain" />
                </a>

                <a href="https://www.dunloptyres.com/hu/abroncsok" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/dunlop.svg" alt="Dunlop" width={105} height={24} className="w-26.25 h-6 object-contain" />
                </a>

                <a href="https://www.yokohama.eu/tyres/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/yokohama.svg" alt="Yokohama" width={110} height={24} className="w-27.5 h-6 object-contain" />
                </a>

                <a href="https://www.vredestein.hu/car-suv-tyres/products/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/vredestein.svg" alt="Vredestein" width={110} height={24} className="w-27.5 h-6 object-contain" />
                </a>

                <a href="https://www.point-s.hu/termekeink/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/points.svg" alt="Point S" width={85} height={28} className="w-21.25 h-7 object-contain" />
                </a>

                {/* A lebegő felirat */}
                <span className="relative group cursor-pointer text-brand-darkblue font-bold border-b-2 border-dotted border-brand-darkblue hover:text-blue-600 hover:border-blue-600 transition-colors inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 whitespace-nowrap">
                    és még sok más...
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block w-72 bg-brand-darkblue text-white text-sm font-normal p-4 rounded-xl shadow-2xl z-50 pointer-events-none before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-brand-darkblue whitespace-normal leading-relaxed">
                        Laufenn, Taurus, Tracmax, Falken, Uniroyal, Toyo Tires, Royal Black, Barum, Nokian Tyres, Kumho, Nexen.
                    </span>
                </span>
            </p>
        ),
        images: [
            { src: "/media/gumiabroncsok_1.png", alt: "Raktárkészlet – vegyes gumiabroncsok" },
            { src: "/media/gumiabroncsok_2.jpg", alt: "Személyautó gumiabroncsok" },
            { src: "/media/gumiabroncsok_3.jpg", alt: "Motor gumiabroncsok" },
        ],
    },
    {
        id: "alufelnik",
        title: "Alufelnik",
        menuImg: "/media/alufelnik_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6 leading-loose">
                Üzletünkben <strong className="text-brand-darkblue">különböző átmérőjű, különböző lyuk kiosztású felniket</strong> is megtalál, akár acél akár alufelniről legyen szó. Választékunkban 13-tól 20 colos méretig kínálunk felniket, és szükség esetén a megfelelő <em className="font-medium text-brand-navy">kerékcsavarokat, kerékanyákat </em> is megtalálja nálunk. Kínálatunkban megtalálhatók a legismertebb márkák:&nbsp;

                <a href="https://www.ozracing.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/ozracing.svg" alt="OZ Racing" width={110} height={28} className="w-27.5 h-7 object-contain" />
                </a>

                <a href="https://www.bbs.com/en/products" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/bbs.svg" alt="BBS" width={150} height={28} className="w-20 h-7 object-contain" style={{ width: 'auto', height: 'auto', maxHeight: '28px', maxWidth: '80px' }}/>
                </a>

                <a href="https://momo.com/en-gb/road-wheels/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/momo.svg" alt="Momo Italy" width={90} height={28} className="w-22.5 h-7 object-contain" />
                </a>

                <a href="https://www.makwheels.it/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/mak.png" alt="MAK Design & Passion" width={90} height={28} className="w-22.5 h-7 object-contain" />
                </a>

                <a href="https://jr-wheels.com/wheels" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/jr.svg" alt="Japan Racing" width={80} height={28} className="w-20 h-7 object-contain" />
                </a>

                <a href="https://vossenwheels.com/wheels/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 hover:scale-110 transition-transform">
                    <Image src="/media/logos/vossen.png" alt="Vossen" width={80} height={28} className="w-20 h-7 object-contain" />
                </a>

                {/* A lebegő felirat */}
                <span className="relative group cursor-pointer text-brand-darkblue font-bold border-b-2 border-dotted border-brand-darkblue hover:text-blue-600 hover:border-blue-600 transition-colors inline-flex items-center align-middle -translate-y-0.5 mx-2 my-1.5 whitespace-nowrap">
                    és még sok más...
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block w-72 bg-brand-darkblue text-white text-sm font-normal p-4 rounded-xl shadow-2xl z-50 pointer-events-none before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-brand-darkblue whitespace-normal leading-relaxed">
                        MSW, Platin Wheels, Reds by Momo, Ronal, Keskin, Rotiform.
                    </span>
                </span>
            </p>
        ),
        images: [
            { src: "/media/alufelnik_1.jpg", alt: "Alufelni választékunk" },
            { src: "/media/alufelnik_2.jpg", alt: "Alufelni raktárunk" },
            { src: "/media/alufelnik_3.jpg", alt: "Bemutatott alufelnik" },
        ],
    },
    {
        id: "gumihotel",
        title: "Gumihotel",
        menuImg: "/media/gumihotel_menu.png",
        content: (
            <p className="text-lg text-brand-slate mb-6">
                Nincs helye otthon a téli/nyári gumik tárolására? <strong className="text-brand-darkblue">Gumihotel szolgáltatásunkkal</strong> levesszük a terhet a válláról. Szakszerű körülmények között, napfénytől védve tároljuk abroncsait a következő szezonig, így azok megőrzik minőségüket és élettartamukat.
            </p>
        ),
        images: [
            { src: "/media/gumihotel_menu.png", alt: "Szakszerű gumiabroncs tárolás" },
            { src: "/media/gumihotel_2.png", alt: "Gumihotel raktárunk" },
            { src: "/media/gumihotel_3.png", alt: "Raktározott abroncsok" },
        ],
    },
    {
        id: "futomuallitas",
        title: "Futóműállítás",
        menuImg: "/media/futomualligas_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6">
                Személy és kisteher gépjárművekhez, <strong className="text-brand-darkblue">24&#34;-os kerékátmérőig</strong>, számítógép alapú, <em className="font-medium text-brand-navy">4 mérőfejes berendezés</em> a kerék geometriai jellemzőinek mérésére. A lézeres futómű-beállítás biztosítja az egyenletes gumiabroncs-kopást és a biztonságos menetdinamikát.
            </p>
        ),
        images: [
            { src: "/media/futomualligas_1.jpg", alt: "Gépjármű futóműállítása" },
            { src: "/media/futomualligas_2.jpg", alt: "Futóműállítás emelőn" },
            { src: "/media/futomualligas_3.jpg", alt: "Lézeres mérés futóműállításnál" },
        ],
    },
    {
        id: "gyors-szerviz",
        title: "Gyors szerviz",
        menuImg: "/media/gepjarmu_javitas_menu.jpg",
        content: (
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 text-brand-slate text-lg">
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-green">
                        <li>Személy és tehergépjárművek, mezőgazdasági és földmunkagépek, targonca és motorkerékpár <strong className="text-brand-darkblue"> gumiabroncsainak szerelése és centrírozása</strong></li>
                        <li>Alu- és lemezfelnik javítása</li>
                        <li>Akkumulátor bevizsgálás és csere</li>
                        <li>Klíma ellenőrzés, töltés és tisztítás</li>
                    </ul>
                </div>
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-brand-darkblue">
                        <h3 className="font-bold text-brand-darkblue mb-4 text-center text-xl">Várható időtartamok</h3>
                        <table className="w-full text-brand-slate">
                            <tbody>
                            <tr className="border-b border-brand-lightgray">
                                <td className="py-3">Gumiszerelés</td>
                                <td className="py-3 text-right font-bold text-brand-darkblue">30–60 perc</td>
                            </tr>
                            <tr className="border-b border-brand-lightgray">
                                <td className="py-3">Futómű beállítás</td>
                                <td className="py-3 text-right font-bold text-brand-darkblue">kb. 1 óra</td>
                            </tr>
                            <tr>
                                <td className="py-3">Klímatöltés</td>
                                <td className="py-3 text-right font-bold text-brand-darkblue">45 perc</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ),
        images: [],
    },
    {
        id: "kereskedelem",
        title: "Kereskedelem",
        menuImg: "/media/kereskedelem_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6">
                Üzletünkben az autófelszerelési termékek széles körét kínáljuk. Partnereink között megtalálható a <strong className="text-brand-darkblue">Castrol</strong>, az <strong className="text-brand-darkblue">Osram</strong> és a <strong className="text-brand-darkblue">Prevent</strong>. Ablaktörlők, akkumulátorok, autóápolási cikkek és kötelező tartozékok azonnal, raktárról.
            </p>
        ),
        images: [
            { src: "/media/kereskedelem_1.jpg", alt: "Autóápolási és kenőanyag kínálat" },
            { src: "/media/kereskedelem_2.jpg", alt: "Akkumulátor választékunk" },
            { src: "/media/kereskedelem_3.jpg", alt: "Autófelszerelés részlegünk" },
        ],
    }
];

export default function Szolgaltatasok() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentSlides, setCurrentSlides] = useState<{src: string, alt: string}[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openGallery = (images: {src: string, alt: string}[], index: number) => {
        setCurrentSlides(images.map(img => ({ src: img.src, alt: img.alt })));
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="flex flex-col min-h-screen">

            {/* 1. Képes Gyorsnavigáció */}
            <nav className="bg-brand-lightgray py-10 border-b border-brand-lilac shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {servicesData.map((service) => (
                            <Link
                                href={`#${service.id}`}
                                key={service.id}
                                className="group relative h-32 md:h-40 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 block"
                            >
                                <Image
                                    src={service.menuImg}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                                <span className="absolute bottom-3 left-0 w-full text-center text-white font-bold tracking-wide">
                                    {service.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* 2. Szolgáltatások szekciói */}
            <div>
                {servicesData.map((service, index) => (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`py-16 md:py-24 px-4 scroll-mt-20 md:scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-lightgray'}`}
                    >
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-8 border-l-4 border-brand-green pl-4">
                                {service.title}
                            </h2>

                            {service.content}

                            {/* Képgaléria */}
                            {service.images.length > 0 && (
                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {service.images.map((img, imgIndex) => (
                                        <figure
                                            key={imgIndex}
                                            className="group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all"
                                            onClick={() => openGallery(service.images, imgIndex)}
                                        >
                                            <div className="relative h-56 w-full">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute bottom-3 right-3 bg-brand-green text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                                                    <ZoomIn size={20} />
                                                </div>
                                            </div>
                                            <figcaption className="p-3 bg-white text-center text-sm text-brand-slate italic border-t border-brand-lightgray">
                                                {img.alt}
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={currentIndex}
                slides={currentSlides}
                controller={{ closeOnBackdropClick: true }}
            />
        </div>
    );
}