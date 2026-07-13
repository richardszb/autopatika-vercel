import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full">

            {/* 1. Hero szekció (Banner) */}
            <section className="relative w-full h-100 md:h-125">
                <Image
                    src="/media/uzlet.jpg"
                    alt="Autópatika zalaegerszegi üzlete"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />

                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                    <div className="max-w-7xl mx-auto text-white">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                            Autópatika
                        </h1>
                        <p className="text-lg text-brand-lightgray max-w-2xl">
                            Professzionális gumi- és autószerviz Zalaegerszegen, 1992 óta.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Időpontfoglalás szekció */}
            <section className="relative py-12 md:py-16 px-4 bg-[url('/media/feherhatter.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                <div className="relative max-w-5xl mx-auto">
                    <div className="bg-brand-darkblue rounded-2xl shadow-xl p-6 md:p-10 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-green"></div>
                        <div className="max-w-3xl relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                Foglaljon időpontot online!
                            </h2>
                            <p className="text-brand-lilac mb-6 text-base md:text-lg leading-relaxed opacity-90">
                                Foglaljon időpontot kényelmesen, online, külső partnerünkön keresztül! Nincs várakozás, nincs telefonálgatás – egyszerűen válasszon időpontot pár kattintással.
                            </p>
                            <a
                                href="https://gumiszervizem.hu/szervizek/autopatika/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-brand-green/30 hover:-translate-y-1 hover:bg-[#009800]"
                            >
                                Időpontfoglalás
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. App szekció (Letöltő gombokkal) */}
            <section className="bg-white py-16 md:py-24 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                            <Image
                                src="/media/app_ikon.png"
                                alt="Autópatika mobilalkalmazás ikonja"
                                fill
                                sizes="(max-width: 768px) 50vw, 20vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-darkblue mb-4">
                            Töltse le mobilalkalmazásunkat!
                        </h2>
                        <p className="text-brand-slate text-lg mb-8 max-w-2xl leading-relaxed">
                            Töltse le ingyenes mobilalkalmazásunkat a személyre szabott kiszolgálásért, kényelmes időpontfoglalásért.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">

                            {/* App Store Gomb */}
                            <a
                                href="https://apps.apple.com/us/app/mypoint-s/id1455197785"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-56 bg-white border border-brand-lilac/60 px-4 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-brand-green hover:-translate-y-1 transition-all group"
                            >
                                <svg className="w-10 h-10 black transition-transform duration-300 group-hover:scale-105" viewBox="0 0 384 512" fill="currentColor">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                </svg>

                                <div className="text-left">
                                    <span className="block text-[10px] uppercase font-bold text-brand-slate tracking-wider group-hover:text-brand-green/80 transition-colors">Letöltés</span>
                                    <span className="block text-xl font-bold text-brand-darkblue group-hover:text-brand-green transition-colors">App Store</span>
                                </div>
                            </a>

                            {/* Google Play Gomb */}
                            <a
                                href="https://play.google.com/store/apps/details?id=hu.codevision.points"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-56 bg-white border border-brand-lilac/60 px-4 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-brand-green hover:-translate-y-1 transition-all group"
                            >
                                <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 512 512">
                                    <path fill="#4285F4" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                                    <path fill="#EA4335" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                                    <path fill="#FBBC05" d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                                    <path fill="#34A853" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>

                                <div className="text-left">
                                    <span className="block text-[10px] uppercase font-bold text-brand-slate tracking-wider group-hover:text-brand-green/80 transition-colors">Letöltés</span>
                                    <span className="block text-xl font-bold text-brand-darkblue group-hover:text-brand-green transition-colors">Google Play</span>
                                </div>
                            </a>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}