import { useForm, type FieldValues } from "react-hook-form";


const TravelInformation = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            travel_in: [
                { from: "London [LHR]", to: "Los Angeles [LAX]", date: "14:20 -  25 July", flight: "Flight BA269" }
            ],
            travel_out: [
                { from: "London [LHR]", to: "Los Angeles [LAX]", date: "14:20 -  25 July", flight: "Flight BA269" }
            ],
            traveling_party: [
                { name: "Celina Aoun", phone_number: "+971553594146", role: "Tour Manager" },
                { name: "Celina Aoun", phone_number: "+971553594146", role: "Tour Manager" },
                { name: "Celina Aoun", phone_number: "+971553594146", role: "Tour Manager" },
            ],
            artist_contact: [
                { name: "DJ Nova", phone_number: "+971553594146", email: "djnova@mail.com" }
            ]
        },
    });
    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset(); // Clear form after submit
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px] w-full mt-8">
                <h2 className="text-[#212B36] text-[20px] font-semibold border-b border-[#DFE3E8]"> Traveling Party</h2>
                <div>
                    {/* Name Field */}
                    <div>
                        <label className="text-[#637381] block mb-2">Name</label>
                        <input
                            type="text"
                            {...register("traveling_party.0.name", { required: "Name is required" })} placeholder="Enter Name"
                            className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                        />
                        {/* {errors.traveling_party.0.name && <p className="text-red-500 text-sm">{errors.traveling_party.0.name.message}</p>} */}
                    </div>
                    <div>
                        <label className="text-[#637381] block mb-2">Phone Number</label>
                        <input
                            type="text"
                            {...register("traveling_party.0.phone_number", { required: "Phone number is required" })} placeholder="Enter Phone number"
                            className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                        />
                        {/* {errors.traveling_party.0.name && <p className="text-red-500 text-sm">{errors.traveling_party.0.name.message}</p>} */}
                    </div>
                    <div>
                        <label className="text-[#637381] block mb-2">Role</label>
                        <input
                            type="text"
                            {...register("traveling_party.0.role", { required: "Role is required" })} placeholder="Enter Role"
                            className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                        />
                        {/* {errors.traveling_party.0.name && <p className="text-red-500 text-sm">{errors.traveling_party.0.name.message}</p>} */}
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-[#3F97FF] cursor-pointer text-white px-10 py-3 rounded hover:bg-opacity-90 w-full text-center"
                >
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default TravelInformation;