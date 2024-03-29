import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { NAV_LINKS } from '../constants/index';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image src="/hikeassist-logo.svg" alt="logo" width={92} height={36} />
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map(({ href, key, label }) => (
                    <Link href={href} key={key} className="regular text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        <p>{label}</p>
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button type='button' title='Login' icon='/user.svg' variant='btn_dark_green' />
            </div>

            <Image src="menu.svg" alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden' />
        </nav>
    );
};

export default Navbar;
