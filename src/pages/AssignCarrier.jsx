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
            
                <section className="text-[#363F72] mr-3 ml-14 mt-[2.5vw] w-[50vw] max-w-[1400px]">
                    <div className="p-4">
                        <div className="flex justify-between text-black">
                            <div className="font-semibold">Available Stops</div>
                            <div className="font-semibold mr-[14vw]">Selected Stops</div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 gap-1 pt-6" style={{gridTemplateColumns: "20vw 5vw 20vw"}} id="form_input">
                                <div>
                                    <input
                                        className="border border-[#363F72] py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="P1: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="P2: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="I1: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="I2: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="I3: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="I4: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="I5: Name Here" maxlength="20" required />

                                    <input
                                        className="border py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="D1: Name Here" maxlength="20" required />    
                                </div>

                                <div className="w-[2.5vw] mx-auto my-auto">
                                    <div className="border border-none bg-[#363F72] p-[1vw] mb-[4vw] rounded-lg">
                                        <button className="p-[3px] border-[#6C739F] border-solid border-r-[2px] border-b-[2px] flex" 
                                        style={{transform: "rotate(-45deg)", webkitTransform: "rotate(-45deg)"}}></button>
                                    </div>
                                    <div className="border border-none bg-[#363F72] p-[1vw] rounded-lg">
                                        <button className="p-[3px] border-[#6C739F] border-solid border-r-[2px] border-b-[2px] flex" 
                                        style={{transform: "rotate(135deg)", webkitTransform: "rotate(135deg)"}}></button>
                                    </div>
                                </div>

                                <div>
                                    <input
                                        className="border border-[#363F72] py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="P1: Name Here" maxlength="20" required />

                                    <input
                                        className="border border-[#363F72] py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="I3: Name Here" maxlength="20" required />

                                    <input
                                        className="border border-[#363F72] py-2 pl-2 pr-[4vw] rounded-xl mb-2"
                                        id="SNumber" type="text" placeholder="D1: Name Here" maxlength="20" required />
                                </div>

                            </div>
                        </div>
                    </div> 
                </section>
            </div>
            
            <section className="ml-10">
                <div className="font-semibold">Current Stops</div>
                <div className="border border-[#363F72] rounded-md text-[#363F72] mt-[1vw] w-[69vw] max-w-[1400px]">
                    <div className="grid grid-cols-4 mt-3" style={{gridTemplateColumns: "7vw 16vw 38.5vw 5vw"}}>
                        <div className="pl-5">No.</div>
                        <div className="">Carrier</div>
                        <div>Stops</div>
                        <div>Update</div>

                        <div className="mt-2 h-[5vw] w-[68.5vw] overflow-y-scroll">
                            <div className="grid grid-cols-4 gap-x-[1vw] w-[68vw]" style={{gridTemplateColumns: "6vw 15vw 37vw 2vw"}}>
                                <div className="pl-5">1</div>
                                <div className="font-bold">Carrier Name</div>
                                <div className="font-bold">P1: Name Here ~ D1: Name Here ~ I3: Name Here</div>
                                <div className="flex w-[2vw]">
                                    <img src={edit} className="mx-[.5vw]" />
                                    <img src={trash} className="mx-[.5vw]" />
                                </div>
                            </div>
                            
                            <div className="mt-2 h-[5vw] w-[68.5vw] overflow-y-scroll">
                                <div className="grid grid-cols-4 gap-x-[1vw] w-[68vw]" style={{gridTemplateColumns: "6vw 15vw 37vw 2vw"}}>
                                    <div className="pl-5">1</div>
                                    <div className="font-bold">Carrier Name</div>
                                    <div className="font-bold">I3: Name Here ~ D2: Name Here</div>
                                    <div className="flex w-[2vw]">
                                        <img src={edit} className="mx-[.5vw]" />
                                        <img src={trash} className="mx-[.5vw]" />
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>
                        
                </div>
            </section>
        </div>
    )
}
export default AssignCarrier