import Link from "next/link";

const Hero = () => {
    return (
        <div>
            <img src="/avatar.jpg" alt="Данил Клементьев"/>
            <h1>Я Клементьев Данил</h1>
            <ul>
                <li><Link href='https://t.me/sstarweb'>Telegram</Link></li>
                <li><Link href='https://github.com/Rics69'>Github</Link></li>
                <li><Link href='mailto:danil.klementev.29@gmail.com'>Mail</Link></li>
            </ul>
        </div>
    );
};

export default Hero;