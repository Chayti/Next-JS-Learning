import Link from "next/link";
import style from './Navbar.module.css';

export default function Navbar() {

    const auth = true;

    return (
        <div className={`${style.navContainer} px-11 py-4`}>
            <style jsx>
                {
                    `
                    .dash{
                        display: ${auth ? 'block' : 'none'};
                        color: red;
                    }
                    `
                }
            </style>
            <h1>dSkill</h1>
            <div className="flex gap-x-20">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/blogs'>Blogs</Link>
                <Link href='/dashboard'> <span className="dash">Dashboard</span></Link>
            </div>
        </div>
    )
}
