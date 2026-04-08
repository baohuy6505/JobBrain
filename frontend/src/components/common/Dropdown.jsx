import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { HiChevronDown, HiCheck } from "react-icons/hi";

const Dropdown = ({ options = [], value, onChange, icon }) => {
  const selectedItem =
    options.find((item) => item.value === value) || options[0];

  return (
    <div className="relative flex items-center flex-1 px-3 md:px-4 w-full min-w-0">
      {icon && (
        <div className="text-blue-400 text-xl md:text-2xl shrink-0 mr-1">
          {icon}
        </div>
      )}

      <Listbox value={value} onChange={onChange}>
        <div className="relative w-full">
          <ListboxButton className="relative w-full p-3 md:p-4 text-left text-gray-800 text-sm md:text-base cursor-pointer bg-transparent focus:outline-none flex justify-between items-center select-none border-none">
            <span className="block truncate">
              {selectedItem?.label || "Chọn..."}
            </span>
            <HiChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-200 ui-open:rotate-180" />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-2xl ring-1 ring-black/5 focus:outline-none z-50 transition duration-200 ease-in-out data-[closed]:opacity-0 data-[closed]:scale-95"
          >
            {options.map((item) => (
              <ListboxOption
                key={item.value}
                value={item.value}
                className="group relative cursor-pointer select-none py-3 px-4 data-[focus]:bg-blue-50 data-[focus]:text-blue-600 text-gray-900 transition-colors"
              >
                {({ selected }) => (
                  <div className="flex justify-between items-center">
                    <span
                      className={`block truncate ${selected ? "font-bold text-blue-600" : "font-normal"}`}
                    >
                      {item.label}
                    </span>
                    {selected && <HiCheck className="w-4 h-4 text-blue-600" />}
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
