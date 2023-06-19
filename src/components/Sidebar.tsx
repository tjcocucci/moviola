'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@/components/Icons';
import clsx from 'clsx';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800 bg-gray-800">
      {/* Logo + Name */}
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <h3 className="font-semibold tracking-wide group-hover:text-gray-50">
            Moviola
          </h3>
        </Link>
      </div>
      {/* Menu button when screen too narrow */}
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? <XIcon /> : <MenuAlt2Icon />}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white dark:bg-black':
            isOpen,
          hidden: !isOpen,
        })}
      >
        {/* Menu items */}
        <nav className="space-y-6 px-2 py-5">
          <GlobalNavItem
            key={'discover'}
            path={'/'}
            name={'Discover'}
            close={close}
          />
          <GlobalNavItem
            key={'list'}
            path={'/list'}
            name={'List'}
            close={close}
          />
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  path,
  name,
  close,
}: {
  path: string;
  name: string;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = path === segment;

  return (
    <Link
      onClick={close}
      href={path}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white underline': isActive, // Estilo para elementos activos
        }
      )}
    >
      {name}
    </Link>
  );
}
