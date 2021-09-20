import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import StudentAttendenceDataTable from 'components/Admin/DataTables/StudentAttendenceDataTable'

const roles = [
  { name: 'Select User Role' },
  { name: 'Accountant' },
  { name: 'Teacher' },
  { name: 'Librain' },
]



export default function UserRoleDropDown() {
  const [selectedRole, setselectedRole] = useState(roles[0])

  return (
    <div className="">
        <div className="flex p-5 shadow-2lg justify-center ">
            <h1 className="text-center text-green-400 font-bold text-2xl underline">Add User</h1>
        </div>
        <div className ="flex justify-center">
        <div className="">
      <Listbox value={selectedRole} onChange={setselectedRole} className="flex">
        <div className="relative mt-1">
          <Listbox.Button className="relative  py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedRole.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-10 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute  py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {roles.map((userRole, userRoleIdx) => (
                <Listbox.Option
                  key={userRoleIdx}
                  className={({ active }) =>
                    `${active ? 'text-green-900 bg-green-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                   value={userRole}
                >
                  {({ selectedRole, active }) => (
                    <>
                      <span
                        className={`${
                          selectedRole ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {userRole.name}
                      </span>
                      {selectedRole ? (
                        <span
                          className={`${
                            active ? 'text-green-600' : 'text-green-600'
                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
        <div className="flex m-2 justify-center">
            <button className="bg-green-500  hover:bg-green-400 rounded-lg text-white px-4 py-2 my-2">
            Search
            </button> 
          </div>
      </div>
      </div>

    </div>
  )
}
