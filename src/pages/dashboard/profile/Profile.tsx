import UserProfileImg from "@/assets/images/user.svg"
import EditIcon from "@/components/SVG/EditIcon"
import RightArrowIcon from "@/components/SVG/RightArrowIcon"
import { NavLink } from "react-router-dom"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AlertIcon from "@/components/SVG/AlertIcon"
import { toast } from "sonner"
import { useForm, type FieldValues } from "react-hook-form"
import type { TUser } from "@/types"


// demo user data
const userInfo: TUser[] = [
    {
        fullName: "Sarah Lee",
        role: "Senior Booking Agent",
        date_of_birth: "12-09-20",
        email: "sarahlee@mail.com",
        phone_number: "+1 234 567 890",
        address: "245 Greenfield Avenue, Apartment 12B New York, 10001, United States"

    }
]

const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            current_password: "",
            new_password: "",
            confirm_new_password: ""
        },
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset(); // Clear form after submit
    };

    const handleLogout = () => {
        //TODO: use logout functionality
        toast("Log out successfully")
    }
    const handleDelete = () => {
        //TODO: use user delete functionality
        toast("Delete successfully")
    }


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
                <div className="flex justify-between items-center border-b border-[#DFE3E8]">
                    <h2 className="text-[#212B36] font-semibold text-[20px] ">Personal Information</h2>
                    <NavLink to={'/dashboard/settings'} className="flex items-center gap-1 text-[#2094F3] font-medium">
                        <EditIcon />
                        <span>Edit</span>
                    </NavLink>
                </div>
                {
                    userInfo?.map((user: TUser , index: number) => (
                        <div key={index} className="grid grid-cols-3 gap-6 mt-8">
                            <div className="flex-1">
                                <p className="text-[#637381]">Full Name</p>
                                <h2 className="text-[#37404A] text-[18px] font-semibold">{user?.fullName}</h2>
                            </div>
                            <div className="flex-1">
                                <p className="text-[#637381]">Role</p>
                                <h2 className="text-[#37404A] text-[18px] font-semibold">{user?.role}</h2>
                            </div>
                            <div className="flex-1">
                                <p className="text-[#637381]">Date of Birth</p>
                                <h2 className="text-[#37404A] text-[18px] font-semibold">{user?.date_of_birth}</h2>
                            </div>
                            <div className="flex-1">
                                <p className="text-[#637381]">Email</p>
                                <h2 className="text-[#37404A] text-[18px] font-semibold">{user?.email}</h2>
                            </div>
                            <div className="flex-1">
                                <p className="text-[#637381]">Phome Number</p>
                                <h2 className="text-[#37404A] text-[18px] font-semibold">{user?.phone_number}</h2>
                            </div>
                            <div className="flex-1">
                                <p className="text-[#637381]">Address</p>
                                <h2 className="text-[#37404A] text-[18px] font-semibold">{user?.address}</h2>
                            </div>
                        </div>
                    ))
                }
                <div className="mt-12">
                    <h2 className="text-[#212B36] font-semibold text-[20px] border-b border-[#DFE3E8] mb-8">Account Security</h2>
                    <div className="space-y-6">

                        {/* log out functionality */}
                        <Dialog>
                            <DialogTrigger className="w-full">
                                <div className="py-[18px]  px-6 shadow-[0 3px 50px 0 rgba(211, 211, 211, 0.20)] border hover:text-[#3f97ff] border-[#DFE3E8] hover:border-[#3f97ff] cursor-pointer flex justify-between items-center rounded-[12px]">
                                    <h2>Log Out</h2>
                                    <RightArrowIcon />

                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <div className="w-[56px] h-[56px] rounded-full bg-[#FEE4E2] border-[9px] border-[#FEF3F2] flex justify-center items-center mb-4">
                                        <AlertIcon />
                                    </div>
                                    <DialogTitle className="text-[24px] font-medium text-[#101828]">Log Out</DialogTitle>
                                    <DialogDescription className="text-[#667085]">
                                        Are you sure you want to Log out from this account?
                                    </DialogDescription>
                                    <div className="flex items-center justify-between gap-3">
                                        <DialogClose asChild>
                                            <button className="flex-1 bg-[#FFF]  cursor-pointer text-[#34405] font-medium px-10 py-3 rounded-[12px] hover:bg-opacity-90 mt-8 border border-[#D0D5DD] hover:border-[#3F97FF]"
                                            >

                                                Cancle
                                            </button>
                                        </DialogClose>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-[#3F97FF] flex-1 cursor-pointer text-white px-10 py-3 rounded-[12px] hover:bg-opacity-90 mt-8 font-semibold"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        {/* change password functionality */}
                        <Dialog>
                            <DialogTrigger className="w-full">
                                <div className="py-[18px]  px-6 shadow-[0 3px 50px 0 rgba(211, 211, 211, 0.20)] border hover:text-[#3f97ff] border-[#DFE3E8] hover:border-[#3f97ff] cursor-pointer flex justify-between items-center rounded-[12px]">
                                    <h2>Change Password</h2>
                                    <RightArrowIcon />

                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                {/* Use react hook form */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px] w-full mt-8">

                                    {/* Current Password Field */}
                                    <div>
                                        <label className="text-[#637381] block mb-2">Current Password</label>
                                        <input
                                            type="text"
                                            {...register("current_password", { required: "Current Password is required" },)} placeholder="Enter current password"
                                            className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                        />
                                        {errors.current_password && <p className="text-red-500 text-sm">{errors.current_password.message}</p>}
                                    </div>
                                    {/* New password Field */}
                                    <div>
                                        <label className="text-[#637381] block mb-2">New Password</label>
                                        <input
                                            type="text"
                                            {...register("new_password", { required: "New Password is required" })} placeholder="New password"
                                            className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                        />
                                        {errors.new_password && <p className="text-red-500 text-sm">{errors.new_password.message}</p>}
                                    </div>
                                    {/* Confirm new password Field */}
                                    <div>
                                        <label className="text-[#637381] block mb-2">Confirm New Password</label>
                                        <input
                                            type="text"
                                            {...register("confirm_new_password", { required: "Confirm New Password is required" })} placeholder="Confirm New Password"
                                            className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                        />
                                        {errors.confirm_new_password && <p className="text-red-500 text-sm">{errors.confirm_new_password.message}</p>}
                                    </div>
                                    <div className="bg-[#F4F6F8] p-6 rounded-[16px]">
                                        <h2 className="text-[#212B36] text-[18px]">Password Requirements</h2>
                                        <div className="text-[#637381] text-[14px] mb-1 flex items-center gap-2 ml-2 mt-2"><p className="w-[3px] h-[3px] rounded-full bg-[#637381]"></p> <span>At least 8 characters long</span></div>
                                        <div className="text-[#637381] text-[14px] mb-1 flex items-center gap-2 ml-2"> <p className="w-[3px] h-[3px] rounded-full bg-[#637381]"></p> <span>Contains uppercase and lowercase letters</span></div>

                                        <div className="text-[#637381] text-[14px] mb-1 flex items-center gap-2 ml-2 "><p className="w-[3px] h-[3px] rounded-full bg-[#637381]"></p> <span>Includes at least one number</span></div>
                                        <div className="text-[#637381] text-[14px] mb-1 flex items-center gap-2 ml-2"><p className="w-[3px] h-[3px] rounded-full bg-[#637381]"></p> <span>Contains at least one special character</span></div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="bg-[#3F97FF] cursor-pointer text-white px-10 py-3 rounded hover:bg-opacity-90 w-full text-center"
                                    >
                                        Update Password
                                    </button>
                                </form>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger className="w-full">
                                <div className="py-[18px]  px-6 shadow-[0 3px 50px 0 rgba(211, 211, 211, 0.20)] border hover:text-[#3f97ff] border-[#DFE3E8] hover:border-[#3f97ff] cursor-pointer flex justify-between items-center rounded-[12px]">
                                    <h2>Delete Account</h2>
                                    <RightArrowIcon />

                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <div className="w-[56px] h-[56px] rounded-full bg-[#FEE4E2] border-[9px] border-[#FEF3F2] flex justify-center items-center mb-4">
                                        <AlertIcon />
                                    </div>
                                    <DialogTitle className="text-[24px] font-medium text-[#101828]">Delete Account</DialogTitle>
                                    <DialogDescription className="text-[#667085]">
                                        Are you sure you want to delete this account? This action cannot be undone.
                                    </DialogDescription>
                                    <div className="flex items-center justify-between gap-3">
                                        <DialogClose asChild>
                                            <button className="flex-1 bg-[#FFF]  cursor-pointer text-[#34405] font-medium px-10 py-3 rounded-[12px] hover:bg-opacity-90 mt-8 border border-[#D0D5DD] hover:border-[#3F97FF]"
                                            >

                                                Cancle
                                            </button>
                                        </DialogClose>
                                        <button
                                            onClick={handleDelete}
                                            className="bg-[#3F97FF] flex-1 cursor-pointer text-white px-10 py-3 rounded-[12px] hover:bg-opacity-90 mt-8 font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile