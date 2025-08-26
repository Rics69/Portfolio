import Link from "next/link";

const Hero = () => {
    return (
        <div>
            <img src="/avatar.jpg" alt="Данил Клементьев"/>
            <h1>Я Клементьев Данил</h1>
            <ul>
                <li><Link href='/'>Telegram</Link></li>
                <li><Link href='/'>Github</Link></li>
                <li><Link href='/'>Mail</Link></li>
            </ul>
        </div>
    );
};

export default Hero;