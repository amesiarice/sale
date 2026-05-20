import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navlink = ({ href, children }) => {
    const pathName = usePathname();
    const isActive = pathName === href;
  return (
    <div>
      <Link href={href} className={isActive ? 'text-gold-400' : 'text-white'}>
        {children}
      </Link>
    </div>
  )
}

export default Navlink
