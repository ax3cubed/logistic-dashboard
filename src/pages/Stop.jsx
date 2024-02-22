import Arrow from "../images/down-arrow-11 1.svg";
import SearchB from "../images/search-interface-symbol 1.svg";
import edit from "../images/edit-4.svg";
import trash from "../images/rubbish-bin1.svg";


const Stop = () =>{
    return (
        <div className="addStop border border-black rounded-3xl p-[.5vw] max-w-[1600px]">
            <img src={Arrow} className="w-[2vw]" />
            <div className="flex">
                <section className="mx-3 ml-10">
                    <div className="text-[#101828] text-[20px] font-bold">Add a Stop</div>
                    <div className="font-semibold my-[.5vw]">Choose the stop type</div>
                        <div className="grid col-1 gap-2 text-[#363F72]">
                            <button className="border border-[#363F72] p-[.5vw] text-left font-bold rounded-md">Pickup</button>
                            <button className="border p-[.5vw] text-left rounded-md">Intermediary - Transfer</button>
                            <button className="border p-[.5vw] text-left rounded-md">Intemediary - Cross Dock</button>
                            <button className="border p-[.5vw] text-left rounded-md">Intermediary - Bond Cancellation</button>
                            <button className="border p-[.5vw] text-left rounded-md">Intermediary - Customs</button>
                            <button className="border p-[.5vw] text-left rounded-md">Intermediary - Inspections</button>
                            <button className="border p-[.5vw] text-left rounded-md">Intermediary - Phyto</button>
                            <button className="border p-[.5vw] text-left rounded-md">Delivery</button>
                        </div>
                </section>
            
                <section className="border border-[#363F72] rounded-md text-[#363F72] mx-3 mt-[5vw] w-[50vw] max-w-[1400px]">
                    <div className="p-4 h-[27vw] overflow-y-scroll ">
                         <div className="font-bold">Pickup</div>
                        <div>
                            <form className="grid grid-cols-2 gap-2 p-3" action="" id="form_input">
                                <div>
                                    <label for="SNumber">
                                        <div className="mb-2">Shipper Number</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="SNumber" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <label for="Company Name">
                                        <div className="mb-2">Company Name</div>
                                        <input
                                            className="border py-2 pl-2 pr-14 rounded-xl mb-2"
                                            id="CName" type="text" placeholder="Type Here" maxlength="20" required />
                                        <button className="border border-[#363F72] bg-[#F0E7FF] rounded-lg p-[.3vw] mx-2"><img src={SearchB} alt="" /></button>
                                    </label>

                                    <label for="CFN">
                                        <div className="mb-2">Contact Full Name</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="CFN" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <label for="Address">
                                        <div className="mb-2">Address</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="Address" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <label for="City">
                                        <div className="mb-2">City</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="City" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>

                                    <div className="flex">
                                        <label  for="State">
                                            <div   className="mb-2">State</div>
                                            <input
                                                className="border py-2 pl-2 pr-2 w-[9vw] rounded-xl mb-2"
                                                id="State" type="text" placeholder="Type Here" maxlength="20" required />
                                        </label>

                                        <label for="ZipCode" className=" mx-8">
                                            <div className="mb-2">Zip Code</div>
                                            <input
                                                className="border py-2 pl-2 pr-2 w-[9vw] rounded-xl mb-2"
                                                id="ZipCode" type="text" placeholder="Type Here" maxlength="20" required />
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label for="HoP">
                                        <div className="mb-2">Hours of Operation</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="HoP" type="text" placeholder="Type Here" maxlength="20" required />
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="HoP" type="text" placeholder="Type Here" maxlength="20" required />
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="HoP" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>
                                    
                                    <div className="flex">
                                        <label for="Date">
                                            <div className="mb-2">Date</div>
                                            <input
                                                className="border py-2 pl-2 pr-4 rounded-xl mb-2 mr-2"
                                                id="Date" type="date" placeholder="DD-MM-YYYY" required />
                                        </label>

                                        <label for="Time">
                                            <div className="mb-2">Time</div>
                                            <input
                                                className="border py-2 pl-2 pr-9 rounded-xl mb-2"
                                                id="Time" type="time" placeholder="Type Here" maxlength="20" required />
                                        </label>
                                    </div>
                                    
                                    <label for="Fault">
                                        <div className="mb-2">Fault</div>
                                        <input
                                            className="border py-2 pl-2 pr-2 w-[11vw] rounded-xl mb-2"
                                            id="Fault" type="text" maxlength="20" required />
                                    </label>

                                    <label for="Reason">
                                        <div className="mb-2">Reason</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="Reason" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>
                                    <label for="Pickup">
                                        <div className="mb-2">Pickup #</div>
                                        <input
                                            className="border py-2 pl-2 pr-24 rounded-xl mb-2"
                                            id="Pickup" type="text" placeholder="Type Here" maxlength="20" required />
                                    </label>
                                </div>

                            </form>
                        </div>
                    </div> 
                </section>
            </div>
            <div className="flex justify-end my-4 mr-3">
                <button className="p-2 px-6 border-none rounded-lg bg-[#363F72] text-white absolute">Add Stop</button>
            </div>

            <section className="ml-10">
                <div className="font-semibold">Current Stops</div>
                <div className="border border-[#363F72] rounded-md text-[#363F72] mt-[1vw] w-[69vw] max-w-[1400px]">
                    <div className="grid grid-cols-6 mt-3" style={{gridTemplateColumns: "5vw 16vw 7vw 14vw 15vw 5vw"}}>
                        <div className=""></div>
                        <div className="">Stops</div>
                        <div>Shipper #</div>
                        <div>Company</div>
                        <div>Address</div>
                        <div></div>

                        <div className="mt-2 h-[5vw] w-[68.5vw] overflow-y-scroll">
                            <div className="grid grid-cols-6 gap-x-[1vw] w-[68vw]" style={{gridTemplateColumns: "4vw 15vw 6vw 13vw 20vw 2vw"}}>
                                <div className="pl-5">1</div>
                                <div className="font-bold">Pickup 1</div>
                                    <div className="font-bold">12345</div>
                                    <div className="font-bold">Company Name</div>
                                    <div className="font-bold">Address here, 123, NY, USA, 92112</div>
                                    <div className="flex w-[2vw]">
                                        <img src={edit} className="mx-[.5vw]" />
                                        <img src={trash} className="mx-[.5vw]" />
                                    </div>
                            </div>
                            
                            <div className="grid grid-cols-6 gap-x-[1vw] w-[68vw]" style={{gridTemplateColumns: "4vw 15vw 6vw 13vw 20vw 2vw"}}>
                                <div className="pl-5">2</div>
                                <div className="font-bold">Intermediary - Transfer</div>
                                    <div className="font-bold">12345</div>
                                    <div className="font-bold">Company Name</div>
                                    <div className="font-bold">Address here, 123, NY, USA, 92112</div>
                                    <div className="flex w-[2vw]">
                                        <img src={edit} className="mx-[.5vw]" />
                                        <img src={trash} className="mx-[.5vw]" />
                                    </div>
                            </div>

                            <div className="grid grid-cols-6 gap-x-[1vw] w-[68vw]" style={{gridTemplateColumns: "4vw 15vw 6vw 13vw 20vw 2vw"}}>
                                <div className="pl-5">3</div>
                                <div className="font-bold">Intermediary - Phyto</div>
                                    <div className="font-bold">12345</div>
                                    <div className="font-bold">Company Name</div>
                                    <div className="font-bold">Address here, 123, NY, USA, 92112</div>
                                    <div className="flex w-[2vw]">
                                        <img src={edit} className="mx-[.5vw]" />
                                        <img src={trash} className="mx-[.5vw]" />
                                    </div>
                            </div>

                            <div className="grid grid-cols-6 gap-x-[1vw] w-[68vw]" style={{gridTemplateColumns: "4vw 15vw 6vw 13vw 20vw 2vw"}}>
                                <div className="pl-5">4</div>
                                <div className="font-bold">Delivery</div>
                                    <div className="font-bold">12345</div>
                                    <div className="font-bold">Company Name</div>
                                    <div className="font-bold">Address here, 123, NY, USA, 92112</div>
                                    <div className="flex w-[2vw]">
                                        <img src={edit} className="mx-[.5vw]" />
                                        <img src={trash} className="mx-[.5vw]" />
                                    </div>
                            </div>
                        
                        </div>
                        
                    </div>
                        
                </div>
            </section>

        </div>
    )
}
export default Stop