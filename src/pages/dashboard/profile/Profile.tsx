import UserProfileImg from "@/assets/images/user.svg"
import EditIcon from "@/components/SVG/EditIcon"
import RightArrowIcon from "@/components/SVG/RightArrowIcon"
import { NavLink } from "react-router-dom"

const Profile = () => {
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
                    <NavLink to={'/settings'} className="flex items-center gap-1 text-[#2094F3] font-medium">
                        <EditIcon/>
                        <span>Edit</span>
                    </NavLink>
                </div>
                <div className="flex justify-between items-center gap-6 mt-8">
                    <div className="flex-1">
                        <p className="text-[#637381]">Full Name</p>
                        <h2 className="text-[#37404A] text-[18px] font-semibold">Sarah Lee</h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#637381]">Role</p>
                        <h2 className="text-[#37404A] text-[18px] font-semibold">Senior Booking Agent</h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#637381]">Date of Birth</p>
                        <h2 className="text-[#37404A] text-[18px] font-semibold">12-09-20</h2>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-6 mt-6">
                    <div className="flex-1">
                        <p className="text-[#637381]">Email</p>
                        <h2 className="text-[#37404A] text-[18px] font-semibold">sarahlee@mail.com</h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#637381]">Phome Number</p>
                        <h2 className="text-[#37404A] text-[18px] font-semibold">+1 234 567 890</h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-[#637381]">Address</p>
                        <h2 className="text-[#37404A] text-[18px] font-semibold">245 Greenfield Avenue, Apartment 12B
                            New York, 10001, United States</h2>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-[#212B36] font-semibold text-[20px] border-b border-[#DFE3E8] mb-8">Account Security</h2>
                    <div className="space-y-6">
                        <div className="py-[18px] px-6 shadow-[0 3px 50px 0 rgba(211, 211, 211, 0.20)] border border-[#DFE3E8] flex justify-between items-center rounded-[12px]">
                            <h2>Log Out</h2>
                            <RightArrowIcon />
                        </div>
                        <div className="py-[18px] px-6 shadow-[0 3px 50px 0 rgba(211, 211, 211, 0.20)] border border-[#DFE3E8] flex justify-between items-center rounded-[12px]">
                            <h2>Change Password</h2>
                            <RightArrowIcon />
                        </div>
                        <div className="py-[18px] px-6 shadow-[0 3px 50px 0 rgba(211, 211, 211, 0.20)] border border-[#DFE3E8] flex justify-between items-center rounded-[12px]">
                            <h2>Delete Account</h2>
                            <RightArrowIcon />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile