import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';

const links = [
  { href: '#', text: 'Timeline' },
  { href: '#', text: 'Overview' },
  { href: '#', text: 'FAQs' },
  { href: '#', text: 'Contact' },
];

function Nav() {
  return (
    <>
      <Navbar className='bg-transparent text-white'>
        <NavbarBrand>
          <Image
            src={'/images/getLinked.svg'}
            width={171}
            height={44}
            alt='getLinked'
          />
        </NavbarBrand>
        <NavbarContent
          className='hidden sm:flex gap-4 text-white'
          justify='center'
        >
          {links.map((link) => (
            <NavbarItem key={link.text}>
              <Link href={link.href}>{link.text}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <Link href='#'>Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color='primary' href='#' variant='flat'>
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default Nav;
