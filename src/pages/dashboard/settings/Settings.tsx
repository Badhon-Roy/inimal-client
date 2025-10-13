import UserProfileImg from "@/assets/images/user.svg"
import SaveIcon from "@/components/SVG/Save";
import { useForm, type FieldValues } from "react-hook-form";

const Settings = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "Sarah Lee",
            role: "Senior Booking Agent",
            date_of_birth: "12-09-20",
            email: "johndoe@example.com",
            phone_number: "+1 234 567 890",
            address: "245 Greenfield Avenue, Apartment 12B, New York, 10001, United States",
            city: "New York",
            state: "United States",
            postal_code: "10001"
        },
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset(); // Clear form after submit
    };
    return (
        <div>
            {/* Show user info */}
            <div className="flex items-center gap-8 mb-8">
                <div>
                    <img className="w-[148px] h-[150px]" src={UserProfileImg} alt="Profile Picture" />
                </div>
                <div>
                    <h2 className="text-[32px] font-semibold mb-2 text-[#37404A]">Sarah Lee</h2>
                    <p className="text-[#637381]">sarah.lee@inimal.com</p>
                </div>
            </div>
            <div>
                <h2 className="text-[#212B36] font-semibold text-[20px]">Personal Information</h2>
                {/* Use react hook form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px] w-full mt-8">
                    <div className="flex justify-between items-center gap-6">
                        {/* Name Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Full Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        {/* Role Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Role</label>
                            <input
                                type="text"
                                {...register("role", { required: "Role is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between items-center gap-6">
                        {/* Date of birth Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Date of Birth</label>
                            <input
                                type="text"
                                {...register("date_of_birth", { required: "Date of birth is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.date_of_birth && <p className="text-red-500 text-sm">{errors.date_of_birth.message}</p>}
                        </div>
                        {/* Email Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                                })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        {/* Phone Number Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Phone Number</label>
                            <input
                                type="text"
                                {...register("phone_number", { required: "Phone Number is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        {/* Address Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Address</label>
                            <input
                                type="text"
                                {...register("address", { required: "Address is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                        {/* City Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">City</label>
                            <input
                                type="text"
                                {...register("city", { required: "City is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                        </div>
                        {/* State Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">State</label>
                            <input
                                type="text"
                                {...register("state", { required: "State is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                        </div>
                        {/* Postal Code Field */}
                        <div className="flex-1">
                            <label className="text-[#637381] block mb-1">Postal Code</label>
                            <input
                                type="text"
                                {...register("postal_code", { required: "Postal Code is required" })}
                                className="w-full text-[#37404A] text-[18px] font-semibold border px-[18px] py-4 rounded-[8px] focus:outline-primary"
                            />
                            {errors.postal_code && <p className="text-red-500 text-sm">{errors.postal_code.message}</p>}
                        </div>
                    </div>



                    {/* Submit */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#3F97FF] cursor-pointer text-white px-10 py-3 rounded hover:bg-opacity-90 mt-8 flex items-center gap-2 "
                        >
                            <SaveIcon />
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Settings