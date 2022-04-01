import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

export default function Dropdown ({ title, components }) {
    const Title = title;
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
            {
                typeof title === "string" ? 
                (
                    <Menu.Button>
                        { title }
                    </Menu.Button>
                ) :
                <Title />
            }
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
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg border-2 border-red-400 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {
                            components.map((Item, index) => (
                                <Menu.Item key={index}>
                                    <div className="group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                        <Item key={index} />
                                    </div>
                                </Menu.Item>
                                ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
)}