'use client';
import Annual from '@/components/Annual/Annual';
import Savings from '@/components/Savings/Savings';
import Targets from '@/components/Targets/Targets';
import Vaults from '@/components/Vaults/Vaults';
import Weekly from '@/components/Weekly/Weekly';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showWeek, setShowWeek] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="font-bold text-2xl text-blue-900 mb-4">Add Account</div>
      <div>
        <Tab.Group>
          <Tab.List className="flex gap-8 font-bold text-lg">
            <Tab className="active:underline decoration-4 decoration-orange-500 outline-none text-blue-900">
              Target
            </Tab>
            <Tab className="active:underline decoration-4 decoration-orange-500 outline-none  text-blue-900">
              Vault
            </Tab>
            <Tab className="active:underline decoration-4 decoration-orange-500 outline-none  text-blue-900">
              Savings
            </Tab>
            <Tab className="active:underline decoration-4 decoration-orange-500 outline-none  text-blue-900">
              <div className="relative flex flex-col items-center">
                <div
                  className="flex items-center"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Monthly
                  {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
                {isOpen && (
                  <div className="flex flex-col items-center justify-center   absolute top-7">
                    <ul className="">
                      <Tab onClick={() => setShow(false)}>Annual</Tab>
                      <Tab onClick={() => setShow(true)}>Weekly</Tab>
                    </ul>
                  </div>
                )}
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel>
              <Targets />
            </Tab.Panel>
            <Tab.Panel>
              <Vaults />
            </Tab.Panel>
            <Tab.Panel>
              <Savings />
            </Tab.Panel>
            {show ? (
              <Tab.Panel>
                <Weekly />
              </Tab.Panel>
            ) : (
              <Tab.Panel>
                <Annual />
              </Tab.Panel>
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default page;
