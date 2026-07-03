"use client";

import { useState, useEffect } from "react";
import type { SyntheticEvent } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, CreditCard, Banknote } from "lucide-react";

export default function Elerhetoseg() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [captchaAnswer, setCaptchaAnswer] = useState("");
    const [captchaError, setCaptchaError] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const initTimer = setTimeout(() => {
            setNum1(Math.floor(Math.random() * 10) + 1);
            setNum2(Math.floor(Math.random() * 10) + 1);
            setMounted(true);
        }, 0);

        return () => clearTimeout(initTimer);
    }, []);

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (parseInt(captchaAnswer) !== num1 + num2) {
            setCaptchaError(true);
            return;
        }

        setCaptchaError(false);
        setStatus("loading");

        const formData = new FormData(e.currentTarget);

        // ACCESS KEY!!!!
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
                setCaptchaAnswer("");
                setNum1(Math.floor(Math.random() * 10) + 1);
                setNum2(Math.floor(Math.random() * 10) + 1);
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Hiba történt az üzenet küldésekor:", error);
            setStatus("error");
        }
    };

    return (
        <div className="bg-brand-lightgray min-h-screen py-16">

            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-brand-darkblue mb-4 tracking-tight">
                    Lépjen velünk <span className="text-brand-sage drop-shadow-sm">kapcsolatba!</span>
                </h1>
                <p className="text-lg text-brand-slate max-w-2xl mx-auto">
                    Kérdése van szolgáltatásainkkal kapcsolatban, vagy árajánlatot szeretne kérni? Keressen minket bizalommal az alábbi elérhetőségeken, vagy küldjön üzenetet az űrlapon keresztül!
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md border border-brand-lilac/30 h-full flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-brand-darkblue mb-8 border-b border-brand-lightgray pb-4">
                            Elérhetőségeink
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-sage/20 p-3 rounded-full text-brand-green">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-slate uppercase tracking-wider mb-1">Címünk</p>
                                    <a
                                        href="https://maps.app.goo.gl/yRVyPaFHxvdVjaUN6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-brand-darkblue font-bold text-lg md:text-xl hover:text-brand-green transition-colors underline decoration-brand-lilac underline-offset-4"
                                    >
                                        Zalaegerszeg, Zrínyi Miklós utca 34/A
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-sage/20 p-3 rounded-full text-brand-green">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-slate uppercase tracking-wider mb-1">Telefonszám</p>
                                    <a href="tel:+36309467857" className="text-brand-darkblue font-bold text-lg md:text-xl hover:text-brand-green transition-colors">
                                        06-30 / 946-7857
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-sage/20 p-3 rounded-full text-brand-green">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-slate uppercase tracking-wider mb-1">E-mail cím</p>
                                    <a href="mailto:autopatikazeg@gmail.com" className="text-brand-darkblue font-bold text-lg md:text-xl hover:text-brand-green transition-colors">
                                        autopatikazeg@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-navy p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

                        <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Írjon nekünk!</h2>
                        <p className="text-brand-lilac mb-8 relative z-10">Minden megkeresésre igyekszünk rövid időn belül válaszolni.</p>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <input type="hidden" name="subject" value="Új üzenet az Autópatika weboldalról!" />
                            <input type="hidden" name="from_name" value="Autópatika Weboldal" />

                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent transition-all"
                                    placeholder="Teljes Név"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent transition-all"
                                        placeholder="E-mail cím"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent transition-all"
                                        placeholder="Telefonszám (opcionális)"
                                    />
                                </div>
                            </div>

                            <div>
                <textarea
                    name="message"
                    rows={3}
                    required
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:border-transparent transition-all resize-none"
                    placeholder="Miben segíthetünk?"
                ></textarea>
                            </div>

                            {mounted && (
                                <div>
                                    <label htmlFor="captcha" className="block text-sm font-bold text-brand-lilac mb-2">
                                        Biztonsági ellenőrzés: Mennyi {num1} + {num2}?
                                    </label>
                                    <input
                                        type="text"
                                        id="captcha"
                                        required
                                        value={captchaAnswer}
                                        onChange={(e) => {
                                            setCaptchaAnswer(e.target.value);
                                            setCaptchaError(false);
                                        }}
                                        className={`w-full bg-white/10 border ${captchaError ? 'border-red-500 ring-1 ring-red-500' : 'border-white/20'} text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sage transition-all`}
                                        placeholder="Eredmény..."
                                    />
                                    {captchaError && <p className="text-red-400 text-sm mt-2 font-medium">Helytelen válasz, kérjük próbálja újra!</p>}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg ${
                                    status === "success" ? "bg-brand-sage text-brand-darkblue" :
                                        status === "error" ? "bg-red-500 text-white hover:bg-red-600" :
                                            "bg-brand-sage text-brand-darkblue hover:bg-white hover:text-brand-green"
                                } ${status === "loading" ? "opacity-75 cursor-wait" : ""}`}
                            >
                                {status === "idle" && <><Send size={20} /> Üzenet küldése</>}
                                {status === "loading" && "Küldés folyamatban..."}
                                {status === "success" && <><CheckCircle size={20} /> Sikeres küldés!</>}
                                {status === "error" && <><AlertCircle size={20} /> Hiba történt, próbálja újra!</>}
                            </button>
                        </form>
                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow-md border border-brand-lilac/30 overflow-hidden h-100 mb-12">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&height=600&hl=hu&q=Aut%C3%B3patika,%20Zalaegerszeg,%20Zr%C3%ADnyi%20Mikl%C3%B3s%20utca%2034/A&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="bg-white p-8 rounded-2xl shadow-md border border-brand-lilac/30 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-brand-darkblue mb-6 border-b border-brand-lightgray pb-4">
                            Fizetési lehetőségek
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-6 mb-6">
                            <div className="flex items-center gap-3">
                                <Banknote size={32} className="text-brand-green" />
                                <span className="text-lg font-medium text-brand-slate">Készpénz</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CreditCard size={32} className="text-brand-green" />
                                <span className="text-lg font-medium text-brand-slate">Bankkártya</span>
                            </div>
                        </div>

                        <div className="relative h-14 md:h-16 w-full max-w-62.5 mb-4">
                            <Image
                                src="/media/bankkartya.png"
                                alt="Elfogadott bankkártyák: Visa, Mastercard, Maestro"
                                fill
                                sizes="250px"
                                className="object-contain object-left"
                            />
                        </div>

                        <p className="mt-2 text-sm text-brand-slate italic">
                            Üzletünkben készpénzzel és a leggyakoribb bankkártyákkal (MasterCard, Visa, Maestro) is kiegyenlítheti a számláját.
                        </p>
                    </div>

                    <div className="bg-linear-to-br from-brand-green to-brand-darkblue p-8 rounded-2xl shadow-lg text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <Clock size={120} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">
                                Nyitvatartás
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="font-medium">Hétfő – Péntek:</span>
                                    <span className="font-bold">8:00 – 16:30</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span className="font-medium">Szombat:</span>
                                    <span className="font-bold">8:00 – 12:00</span>
                                </div>
                                <div className="flex justify-between items-center text-lg text-brand-sage">
                                    <span className="font-medium">Vasárnap:</span>
                                    <span className="font-bold">Zárva</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}