"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type LinkItemType = {
  title: string;
  path: string;
  img: React.ReactElement;
  // img: string;
};

type LinkItemProps = {
  item: LinkItemType;
};

const LinkItem: React.FC<LinkItemProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link key={item.title} href={item.path} className={`${pathName === item.path ? 'bg-[#EFEBFF] text-[#633CFF]' : 'text-gray-700'} rounded py-[11px] px-[27px] flex items-center gap-2`}>
      {/* <span className="relative w-4 h-5 flex-shrink-0">
        <Image src={item.img} alt={item.title} layout="fill" objectFit="contain" />
      </span> */}
      <span>{item.img}</span>
      <span className='hidden md:block'>{item.title}</span>
    </Link>
  );
}

export default LinkItem;
