import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { CustomTextField } from "./CustomTextField";
import SearchModal from "../partials/header/SearchModal";
import { DataContext } from "../context/DataContext";
// Appointment By, Appointment Required
// Product Description
// Temperature
// Special Instruction

export const PickupForm = ({ }) => {
  const {  dataArray,dataObject, updateData, setDataObject} = useContext(DataContext);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [dateTimeOpen, setDateTimeOpen] = useState(false);

  const setOperation = (incoming) => {
   setDataObject({ ...dataObject, companyName: incoming });
  };
  return (
    <React.Fragment>
      <SearchModal
        id="search-modal"
        setSearch={setOperation}
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />

      <div className="grid grid-cols-2 xxs:grid-cols-1">
        {/* First Column */}
        <div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Shipper Number
            </label>
            <input
              placeholder="Type Here"
              value={dataObject.shipperNumber}
              onChange={(e) =>
               setDataObject({ ...dataObject, shipperNumber: e.target.value })
              }
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="companyName">
              Company Name
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={dataObject.companyName}
                onChange={(e) =>
                 setDataObject({ ...dataObject, companyName: e.target.value })
                }
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full  placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="companyName"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                className={`
                  ${
                    searchModalOpen && "bg-[#ebe5f7]"
                  }  outline outline-1 w-10  bg-[#F0E7FF] border-[#363F72] active:bg-[#b8a6d1] rounded`}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Contact Full Name
            </label>
            <input
              value={dataObject.contactFullName}
              onChange={(e) =>
               setDataObject({ ...dataObject, contactFullName: e.target.value })
              }
              placeholder="WEST-59"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Address
            </label>
            <input
              value={dataObject.address}
              onChange={(e) =>setDataObject({ ...dataObject, address: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              City
            </label>
            <input
              value={dataObject.city}
              onChange={(e) =>setDataObject({ ...dataObject, city: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-cols-2 gap-1">
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="state">
                State
              </label>
              <input
                value={dataObject.state}
                onChange={(e) =>setDataObject({ ...dataObject, state: e.target.value })}
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="state"
              />
            </div>
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="shipperNumber">
                Zip Code
              </label>
              <input
                placeholder="Type Here"
                value={dataObject.zipCode}
                onChange={(e) =>setDataObject({ ...dataObject, zipCode: e.target.value })}
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="shipperNumber"
              />
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Fault
            </label>
            <input
              value={dataObject.fault}
              onChange={(e) =>setDataObject({ ...dataObject, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Reason
            </label>
            <input
              value={dataObject.reason}
              onChange={(e) =>setDataObject({ ...dataObject, reason: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Pickup
            </label>
            <input
              value={dataObject.pickup}
              onChange={(e) =>setDataObject({ ...dataObject, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
        </div>
        {/*Second Column  */}
        <div>
          <div className="flex flex-col mr-4 ml-4">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Hours Of Operation
            </label>
            <input
              value={dataObject.hourOfOperation1}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation1: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation1"
            />
            <input
              value={dataObject.hourOfOperation2}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation2: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation2"
            />
            <input
              value={dataObject.hourOfOperation3}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation3: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation3"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Appointment By
            </label>
            <input
              value={dataObject.appointmentBy}
              onChange={(e) =>
               setDataObject({ ...dataObject, appointmentBy: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Appointment Required
            </label>
            <input
              value={dataObject.appointmentRequired}
              onChange={(e) =>
               setDataObject({ ...dataObject, appointmentRequired: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Product Description
            </label>
            <input
              value={dataObject.productDescription}
              onChange={(e) =>
               setDataObject({ ...dataObject, productDescription: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Temperature
            </label>
            <input
              value={dataObject.temperature}
              onChange={(e) =>
               setDataObject({ ...dataObject, temperature: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Special Instruction
            </label>
            <input
              value={dataObject.specialInstruction}
              onChange={(e) =>
               setDataObject({ ...dataObject, specialInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Pickup Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={dateTimeOpen}
                  onClose={() => setDateTimeOpen(false)}
                  value={dataObject.pickupDateTime}
                  onChange={(newValue) => {
                   setDataObject({ ...dataObject, pickupDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const DeliveryForm = ({ }) => {
 const {  dataArray,dataObject, updateData, setDataObject} = useContext(DataContext);
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const setOperation = (incoming) => {
   setDataObject({ ...dataObject, companyName: incoming });
  };
  return (
    <React.Fragment>
      <SearchModal
        id="search-modal"
        setSearch={setOperation}
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />
      <div className="grid grid-cols-2 xxs:grid-cols-1">
        {/* First Column */}
        <div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Shipper Number
            </label>
            <input
              placeholder="Type Here"
              value={dataObject.shipperNumber}
              onChange={(e) =>
               setDataObject({ ...dataObject, shipperNumber: e.target.value })
              }
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="companyName">
              Company Name
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={dataObject.companyName}
                onChange={(e) =>
                 setDataObject({ ...dataObject, companyName: e.target.value })
                }
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full  placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="companyName"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                className={`
                  ${
                    searchModalOpen && "bg-[#ebe5f7]"
                  }  outline outline-1 w-10  bg-[#F0E7FF] border-[#363F72] active:bg-[#b8a6d1] rounded`}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Contact Full Name
            </label>
            <input
              value={dataObject.contactFullName}
              onChange={(e) =>
               setDataObject({ ...dataObject, contactFullName: e.target.value })
              }
              placeholder="WEST-59"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Address
            </label>
            <input
              value={dataObject.address}
              onChange={(e) =>setDataObject({ ...dataObject, address: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              City
            </label>
            <input
              value={dataObject.city}
              onChange={(e) =>setDataObject({ ...dataObject, city: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-cols-2 gap-1">
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="state">
                State
              </label>
              <input
                value={dataObject.state}
                onChange={(e) =>setDataObject({ ...dataObject, state: e.target.value })}
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="state"
              />
            </div>
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="shipperNumber">
                Zip Code
              </label>
              <input
                placeholder="Type Here"
                value={dataObject.zipCode}
                onChange={(e) =>setDataObject({ ...dataObject, zipCode: e.target.value })}
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="shipperNumber"
              />
            </div>
          </div>
        </div>
        {/*Second Column  */}
        <div>
          <div className="flex flex-col mr-4 ml-4">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Hours Of Operation
            </label>
            <input
              value={dataObject.hourOfOperation1}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation1: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation1"
            />
            <input
              value={dataObject.hourOfOperation2}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation2: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation2"
            />
            <input
              value={dataObject.hourOfOperation3}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation3: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation3"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Delivery Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={dateTimeOpen}
                  onClose={() => setDateTimeOpen(false)}
                  value={dataObject.pickupDateTime}
                  onChange={(newValue) => {
                   setDataObject({ ...dataObject, pickupDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Fault
            </label>
            <input
              value={dataObject.fault}
              onChange={(e) =>setDataObject({ ...dataObject, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Reason
            </label>
            <input
              value={dataObject.reason}
              onChange={(e) =>setDataObject({ ...dataObject, reason: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Delivery
            </label>
            <input
              value={dataObject.pickup}
              onChange={(e) =>setDataObject({ ...dataObject, fault: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const IntermediaryForm = ({  }) => {
 const {  dataArray,dataObject, updateData, setDataObject} = useContext(DataContext);
  const [dateTimeOpen, setDateTimeOpen] = useState(false);
  const [departureDateTimeOpen, setDepartureDateTimeOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const setOperation = (incoming) => {
   setDataObject({ ...dataObject, companyName: incoming });
  };

  return (
    <React.Fragment>
      <SearchModal
        id="search-modal"
        setSearch={setOperation}
        searchId="search"
        modalOpen={searchModalOpen}
        setModalOpen={setSearchModalOpen}
      />

      <div className="grid grid-cols-2 xxs:grid-cols-1">
        {/* First Column */}
        <div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Shipper Number
            </label>
            <input
              placeholder="Type Here"
              value={dataObject.shipperNumber}
              onChange={(e) =>
               setDataObject({ ...dataObject, shipperNumber: e.target.value })
              }
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="companyName">
              Company Name
            </label>
            <div className="flex flex-row gap-2">
              <input
                value={dataObject.companyName}
                onChange={(e) =>
                 setDataObject({ ...dataObject, companyName: e.target.value })
                }
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full  placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="companyName"
              />
                 <button onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }} className={`
                  ${searchModalOpen && "bg-[#ebe5f7]"}  outline outline-1 w-10  bg-[#F0E7FF] border-[#363F72] active:bg-[#b8a6d1] rounded`}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Contact Full Name
            </label>
            <input
              value={dataObject.contactFullName}
              onChange={(e) =>
               setDataObject({ ...dataObject, contactFullName: e.target.value })
              }
              placeholder="WEST-59"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Address
            </label>
            <input
              value={dataObject.address}
              onChange={(e) =>setDataObject({ ...dataObject, address: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              City
            </label>
            <input
              value={dataObject.city}
              onChange={(e) =>setDataObject({ ...dataObject, city: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-cols-2 gap-1">
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="state">
                State
              </label>
              <input
                value={dataObject.state}
                onChange={(e) =>setDataObject({ ...dataObject, state: e.target.value })}
                placeholder="Type Here"
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="state"
              />
            </div>
            <div className="grid grid-rows-2">
              <label className="text-[#363F72]" htmlFor="shipperNumber">
                Zip Code
              </label>
              <input
                placeholder="Type Here"
                value={dataObject.zipCode}
                onChange={(e) =>setDataObject({ ...dataObject, zipCode: e.target.value })}
                className="-mt-2 rounded-lg w-full placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
                type="text"
                id="shipperNumber"
              />
            </div>
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Arrival Instruction
            </label>
            <input
              value={dataObject.arrivalInstruction}
              onChange={(e) =>
               setDataObject({ ...dataObject, arrivalInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Departure Instruction
            </label>
            <input
              value={dataObject.departureInstruction}
              onChange={(e) =>
               setDataObject({ ...dataObject, departureInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Ref Number
            </label>
            <input
              value={dataObject.refNumber}
              onChange={(e) =>setDataObject({ ...dataObject, refNumber: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
        </div>
        {/*Second Column  */}
        <div>
          <div className="flex flex-col mr-4 ml-4">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Hours Of Operation
            </label>
            <input
              value={dataObject.hourOfOperation1}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation1: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation1"
            />
            <input
              value={dataObject.hourOfOperation2}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation2: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation2"
            />
            <input
              value={dataObject.hourOfOperation3}
              onChange={(e) =>
               setDataObject({ ...dataObject, hourOfOperation3: e.target.value })
              }
              placeholder="Type Here"
              className=" rounded-lg mt-4 placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="hoursOfOperation3"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Phone
            </label>
            <input
              value={dataObject.phone}
              onChange={(e) =>setDataObject({ ...dataObject, phone: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Fax
            </label>
            <input
              value={dataObject.fax}
              onChange={(e) =>setDataObject({ ...dataObject, fax: e.target.value })}
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Payment Terms
            </label>
            <input
              value={dataObject.paymentTerms}
              onChange={(e) =>
               setDataObject({ ...dataObject, paymentTerms: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72]" htmlFor="shipperNumber">
              Special Instruction
            </label>
            <input
              value={dataObject.specialInstruction}
              onChange={(e) =>
               setDataObject({ ...dataObject, specialInstruction: e.target.value })
              }
              placeholder="Type Here"
              className="-mt-2 rounded-lg placeholder:text-[#363F7299]/[0.6] focus:border-[#363F72]  border-[#363F7266]/[0.4]"
              type="text"
              id="shipperNumber"
            />
          </div>

          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Arrival Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={dateTimeOpen}
                  onClose={() => setDateTimeOpen(false)}
                  value={dataObject.arrivalDateTime}
                  onChange={(newValue) => {
                   setDataObject({ ...dataObject, arrivalDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
          <div className="m-4 grid grid-rows-2">
            <label className="text-[#363F72] mt-4" htmlFor="shipperNumber">
              Departure Date & Time
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl variant="standard">
                <DesktopDateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      fullWidth
                      onClick={() => setDepartureDateTimeOpen(true)}
                      {...props}
                    />
                  )}
                  label="Date/Time"
                  open={departureDateTimeOpen}
                  onClose={() => setDepartureDateTimeOpen(false)}
                  value={dataObject.departureDateTime}
                  onChange={(newValue) => {
                   setDataObject({ ...dataObject, departureDateTime: newValue });
                  }}
                />
              </FormControl>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
