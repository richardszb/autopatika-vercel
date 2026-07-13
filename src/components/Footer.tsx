import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-darkblue text-brand-lilac py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Cím és Elérhetőségek */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Autópatika</h3>
                        <address className="not-italic flex flex-col gap-2">
                            <p>
                                <a
                                    href="https://maps.app.goo.gl/yRVyPaFHxvdVjaUN6"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="hover:text-brand-green transition-colors"
                                >
                                    Zalaegerszeg, Zrínyi Miklós utca 34/A
                                </a>
                            </p>
                            <p>
                                <a href="tel:+36309467857" className="hover:text-brand-green transition-colors">
                                    06-30 / 946-7857
                                </a>
                            </p>
                            <p>
                                <a href="tel:+3692510345" className="hover:text-brand-green transition-colors">
                                    06-92 / 510-345
                                </a>
                            </p>
                            <p>
                                <a href="mailto:autopatikazeg@gmail.com" className="hover:text-brand-green transition-colors">
                                    autopatikazeg@gmail.com
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Nyitvatartás */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Nyitvatartás</h3>
                        <div className="flex flex-col gap-2">
                            <p>Hétfő–Péntek: <strong>8:00–16:30</strong></p>
                            <p>Szombat: <strong>8:00–12:00 (érdeklődjön telefonon)</strong></p>
                            <p>Vasárnap: <strong>Zárva</strong></p>
                        </div>
                    </div>

                    {/* Gyors linkek */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Gyors linkek</h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link href="/" className="hover:text-brand-green transition-colors">Kezdőlap</Link>
                            </li>
                            <li>
                                <Link href="/szolgaltatasok" className="hover:text-brand-green transition-colors">Szolgáltatások</Link>
                            </li>
                            <li>
                                <Link href="/elerhetoseg" className="hover:text-brand-green transition-colors">Elérhetőség</Link>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/p/Aut%C3%B3patika-100054547295102/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr className="border-brand-slate my-8" />

                <p className="text-center text-sm text-brand-lilac opacity-80">
                    © 2026 Autópatika Bt. – Minden jog fenntartva.
                </p>
            </div>
        </footer>
    );
}