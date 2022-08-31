/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Edited News', href: '#', current: false },
    { name: 'Uploaded News', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
    // { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '/login' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {


    const n = 8;

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <button
                                                type="button"
                                                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="relative ml-3">
                                                <div>
                                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {userNavigation.map((item) => (
                                                            <Menu.Item key={item.name}>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={item.href}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100' : '',
                                                                            'block px-4 py-2 text-sm text-gray-700'
                                                                        )}
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pt-4 pb-3">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-3 space-y-1 px-2">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>
                <main>
                    <div className="grid grid-cols-3 my-10 mx-[10vw] 2xl:grid-cols-4 2xl:mx-[7vw] gap-10">
                        {/* Replace with your content */}
                        {[...Array(n)].map((user) =>
                            // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                                <div className=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                                    <img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="" />
                                    <div className="p-5">
                                        <h1 className="text-2xl font-bold">El poder de la lampara</h1>
                                        <p className="mt-2 text-lg font-semibold text-gray-600">by John Smith</p>
                                        <p className="mt-1 text-gray-500 font-">Lorem ipsum carrots, enhanced undergraduate developer,
                                            but they do occaecat time and vitality, Lorem ipsum carrots,
                                            enhanced undergraduate developer, but they do occaecat time
                                            and vitality</p>
                                    </div>
                                </div>
                            // </div>
                        )
                        }
                        {/* /End replace */}
                    </div>
                </main>
            </div>
        </>
    )
}