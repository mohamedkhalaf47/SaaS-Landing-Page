import logo from "@/assets/images/logo.svg";
import Image from "next/image";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div>
                        <Image src={logo} alt="layers logo" />
                    </div>
                    <div>
                        <nav className="flex gap-4">
                            {footerLinks.map((link, index) => (
                                <a href={link.href} key={index} className="text-white/50 text-sm">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
