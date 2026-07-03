"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn } from "lucide-react";

const servicesData = [
    {
        id: "gumiabroncsok",
        title: "Gumiabroncsok",
        menuImg: "/media/gumiabroncsok_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6">
                <strong className="text-brand-darkblue">Gumiabroncsok széles választékával</strong> rendelkezünk különböző típusú autókra, teherautókra, mezőgazdasági gépjárművekre illetve motorokra. Kínálatunkban megtalálhatók a legismertebb márkák: <em className="font-medium text-brand-navy">Bridgestone, Continental, Michelin, Goodyear, Fulda, Sava</em> és még sok más.
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
            <p className="text-lg text-brand-slate mb-6">
                Üzletünkben <strong className="text-brand-darkblue">különböző átmérőjű, különböző lyuk kiosztású felniket</strong> is megtalál, akár acél akár alufelniről legyen szó. Választékunkban 13-tól 20 colos méretig kínálunk felniket, és szükség esetén a megfelelő <em className="font-medium text-brand-navy">kerékcsavarokat, kerékanyákat</em> is megtalálja nálunk.
            </p>
        ),
        images: [
            { src: "/media/alufelnik_1.jpg", alt: "Alufelni választékunk" },
            { src: "/media/alufelnik_2.jpg", alt: "Alufelni raktárunk" },
            { src: "/media/alufelnik_3.jpg", alt: "Bemutatott alufelnik" },
        ],
    },
    {
        id: "olajcsere",
        title: "Olajcsere",
        menuImg: "/media/olajcsere_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6">
                Telephelyünkön a <strong className="text-brand-darkblue">minőségi Castrol olaj</strong> mellett, magát az olajcserét is elvégezzük <em className="font-medium text-brand-navy">kedvezményes áron</em>. Munkatársaink elvégzik a levegő- és pollenszűrő cseréjét is, ezzel gondoskodva járműve optimális teljesítményéről.
            </p>
        ),
        images: [
            { src: "/media/olajcsere_1.jpg", alt: "Castrol motorolaj kínálatunk" },
            { src: "/media/olajcsere_2.jpg", alt: "Olajcsere folyamatban" },
            { src: "/media/olajcsere_3.jpg", alt: "Olajcsere folyamatban alulról" },
        ],
    },
    {
        id: "futomuallitas",
        title: "Futóműállítás",
        menuImg: "/media/futomualligas_menu.jpg",
        content: (
            <p className="text-lg text-brand-slate mb-6">
                Személy és kisteher gépjárművekhez, <strong className="text-brand-darkblue">21&#34;-os kerékátmérőig</strong>, számítógép alapú, <em className="font-medium text-brand-navy">4 mérőfejes berendezés</em> a kerék geometriai jellemzőinek mérésére. A lézeres futómű-beállítás biztosítja az egyenletes gumiabroncs-kopást és a biztonságos menetdinamikát.
            </p>
        ),
        images: [
            { src: "/media/futomualligas_1.jpg", alt: "Gépjármű futóműállítása" },
            { src: "/media/futomualligas_2.jpg", alt: "Futóműállítás emelőn" },
            { src: "/media/futomualligas_3.jpg", alt: "Lézeres mérés futóműállításnál" },
        ],
    },
    {
        id: "javitas",
        title: "Gépjármű Javítás",
        menuImg: "/media/gepjarmu_javitas_menu.jpg",
        content: (
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 text-brand-slate text-lg">
                    <ul className="list-disc pl-5 space-y-2 marker:text-brand-green">
                        <li>Személy és tehergépjárművek, mezőgazdasági és földmunkagépek, <strong className="text-brand-darkblue">targonca és motorkerékpár gumiabroncsainak szerelése és centrírozása</strong></li>
                        <li>Alu- és lemezfelnik javítása</li>
                        <li>Futómű állítás</li>
                        <li>Akkumulátor bevizsgálás és csere</li>
                        <li>Olajcsere, levegő- és pollenszűrő csere</li>
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
                            <tr className="border-b border-brand-lightgray">
                                <td className="py-3">Klímatöltés</td>
                                <td className="py-3 text-right font-bold text-brand-darkblue">45 perc</td>
                            </tr>
                            <tr>
                                <td className="py-3">Olajcsere</td>
                                <td className="py-3 text-right font-bold text-brand-darkblue">30 perc</td>
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