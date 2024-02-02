'use client';
import Savings from '@/components/Savings/Savings';
import Target from '@/components/TargetIcon/Traget';
import Targets from '@/components/Targets/Targets';
import Vault from '@/components/VaultIcon/Vault';
import Vaults from '@/components/Vaults/Vaults';
import { Tab, Menu } from '@headlessui/react';
import { Fragment } from 'react';

function page() {
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
              Annual
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
            <Tab.Panel>content 4</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default page;
