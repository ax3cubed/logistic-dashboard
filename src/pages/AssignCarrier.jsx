import Arrow from "../images/down-arrow-11 1.svg";
import SearchB from "../images/search-interface-symbol 1.svg";
import edit from "../images/edit-4.svg";
import trash from "../images/rubbish-bin1.svg";

const AssignCarrier = () =>{
    return (
        <div className="addStop border border-black rounded-3xl p-[.5vw] max-w-[1600px]">
            <img src={Arrow} className="w-[2vw]" />
            <div className="flex">
                <section className="mx-3 ml-10">
                    <div className="text-[#101828] text-[20px] font-bold">Assign a Carrier</div>
                    <div className="font-semibold my-[1.5vw]">Carrier</div>
                        <div className="text-[#363F72]">
                            <div className="font-bold text-[.8vw]">Select from Carriers for the Deal</div>
                            <select name="deal-carrier" id="" className="border border-[#dbdbdb] rounded-lg text-[#a2a2a2] text-[.8vw] p-[.3vw] pr-14">
                                <option value="deal-carrier" className="">Please Select One</option>
                            </select>
                        </div>
                        <div className="flex justify-start my-4">
                            <button className="p-2 px-6 mt-2 border-none rounded-lg bg-[#363F72] text-[.8vw] text-white absolute">Add/Update</button>
                        </div>
                </section>
            
                <section className="text-[#363F72] mx-3 ml-14 mt-[2.5vw] w-[50vw] max-w-[1400px]">
                    <div className="p-4">
                        <div className="flex justify-between text-black">
                            <div className="font-semibold">Available Stops</div>
                            <div className="font-semibold">Selected Stops</div>
                        </div>
                        <div>
                            <form className="grid grid-cols-2 gap-2 p-3" action="" id="form_input">
                                <div>
                                    <label for="SNumber">
                                        <div className="mb-2">Shipper Number</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="SNumber" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <label for="Company Name">
                                        <div className="mb-2">Company Name</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-14 rounded-xl mb-2"
                                            id="CName" type="text" placeholder="Type Here" maxlength="20" required />
                                        <button className="border border-[#363F72] bg-[#F0E7FF] rounded-lg p-[.3vw] mx-2"><img src={SearchB} alt="" /></button>
                                    </label>

                                    <label for="CFN">
                                        <div className="mb-2">Contact Full Name</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="CFN" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <label for="Address">
                                        <div className="mb-2">Address</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="Address" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <label for="City">
                                        <div className="mb-2">City</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="City" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <div className="flex">
                                        <label  for="State">
                                            <div   className="mb-2">State</div>
                                            <input
                                                className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-2 w-[9vw] rounded-xl mb-2"
                                                id="State" type="text" placeholder="Type Here" maxlength="20" required />
                                        </label>

                                        <label for="ZipCode" className=" mx-8">
                                            <div className="mb-2">Zip Code</div>
                                            <input
                                                className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-2 w-[9vw] rounded-xl mb-2"
                                                id="ZipCode" type="text" placeholder="Type Here" maxlength="20" required />
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label for="HoP">
                                        <div className="mb-2">Hours of Operation</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="HoP" type="text" placeholder="Type Here" maxlength="20" required />
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="HoP" type="text" placeholder="Type Here" maxlength="20" required />
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="HoP" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>
                                    
                                    <div className="flex">
                                        <label for="Date">
                                            <div className="mb-2">Date</div>
                                            <input
                                                className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-4 rounded-xl mb-2 mr-2"
                                                id="Date" type="date" placeholder="DD-MM-YYYY" required />
                                        </label>

                                        <label for="Time">
                                            <div className="mb-2">Time</div>
                                            <input
                                                className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-9 rounded-xl mb-2"
                                                id="Time" type="time" placeholder="Type Here" maxlength="20" required />
                                        </label>
                                    </div>
                                    
                                    <label for="Fault">
                                        <div className="mb-2">Fault</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-2 w-[11vw] rounded-xl mb-2"
                                            id="Fault" type="text" maxlength="20" required />
                                    </label>

                                    <label for="Reason">
                                        <div className="mb-2">Reason</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="Reason" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>
                                    <label for="Pickup">
                                        <div className="mb-2">Pickup #</div>
                                        <input
                                            className=" outline-1 ring-1 ring-gray-300 outline-green-500 py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="Pickup" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>
                                </div>

                            </form>
                        </div>
                    </div> 
                </section>
            </div>
            
            <section className="ml-10">
                <div className="font-semibold">Current Stops</div>
                <div className="border border-[#363F72] rounded-md text-[#363F72] mt-[1vw] w-[69vw] max-w-[1400px]">
                    <div className="flex my-3 justify-between">
                        <div className="ml-[3.5vw]">Stops</div>
                        <div className="ml-[9vw]">Shipper #</div>
                        <div className="mr-[4vw]">Company</div>
                        <div className="mr-[23vw]">Address</div>
                    </div>
                    <div className="h-[5vw] overflow-y-scroll">
                        <div className="flex ml-5">
                            <div>1</div>
                            <div className="mr-[12vw] ml-5">Pickup 1</div>
                            <div className="mr-[3vw]">12345</div>
                            <div className="mr-[3.5vw] ml-7">Company Name</div>
                            <div className="mr-[3vw] ml-5">Address here, 123, NY, USA, 92112</div>
                            <div className="flex">
                                <img src={edit} className="mx-[.5vw]" />
                                <img src={trash} className="mx-[.5vw]" />
                            </div>
                        </div>
                        <div className="flex ml-5">
                            <div>2</div>
                            <div className="mr-[4vw] ml-5">Intermediary - Transfer</div>
                            <div className="mr-[3vw] ml-2">12345</div>
                            <div className="mr-[3.5vw] ml-7">Company Name</div>
                            <div className="mr-[3vw] ml-5">Address here, 123, NY, USA, 92112</div>
                            <div className="flex">
                                <img src={edit} className="mx-[.5vw]" />
                                <img src={trash} className="mx-[.5vw]" />
                            </div>
                        </div><div className="flex ml-5">
                            <div>3</div>
                            <div className="mr-[5.7vw] ml-5">Intermediary - Phyto</div>
                            <div className="mr-[3vw]">12345</div>
                            <div className="mr-[3.5vw] ml-7">Company Name</div>
                            <div className="mr-[3vw] ml-5">Address here, 123, NY, USA, 92112</div>
                            <div className="flex">
                                <img src={edit} className="mx-[.5vw]" />
                                <img src={trash} className="mx-[.5vw]" />
                            </div>
                        </div><div className="flex ml-5">
                            <div>4</div>
                            <div className="mr-[12vw] ml-6">Delivery</div>
                            <div className="mr-[3vw]">12345</div>
                            <div className="mr-[3.5vw] ml-7">Company Name</div>
                            <div className="mr-[3vw] ml-5">Address here, 123, NY, USA, 92112</div>
                            <div className="flex">
                                <img src={edit} className="mx-[.5vw]" />
                                <img src={trash} className="mx-[.5vw]" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
export default AssignCarrier