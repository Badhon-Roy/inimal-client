/* eslint-disable @typescript-eslint/no-explicit-any */

import DeleteIcon from "@/components/SVG/DeleteIcon";
import PlusIcon from "@/components/SVG/PlusIcon";
import { useFieldArray } from "react-hook-form";

const StageScheduleFields = ({ stage, stageIndex, control, register, removeStage }: any) => {
    const {
        fields: scheduleFields,
        append: appendSchedule,
        remove: removeSchedule
    } = useFieldArray({
        control,
        name: `stage.${stageIndex}.schedule` as const
    });
    return (
        <div key={stage?.id}>
            <div className="flex justify-between items-center border-b border-[#DFE3E8] mb-6">
                <h2 className="text-[#212B36] font-semibold text-xl">{stage?.stage_name}</h2>
                <button
                    onClick={() => removeStage(stageIndex)}
                    className="cursor-pointer hover:text-red-500"
                ><DeleteIcon /></button>
            </div>
            < div className="max-w-[830px]" >
                {
                    scheduleFields?.map((item, index) => (
                        <div key={item?.id} className="grid grid-cols-5 gap-6 space-y-4" >
                            {/* Date Field */}
                            <div>
                                <label className="text-[#637381] block mb-2">Date</label>
                                <input
                                    type="text"
                                    {...register(`stage.${index}.schedule.${index}.date`, { required: "Date is required" })}
                                    className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                />
                            </div>
                            {/* From Field */}
                            <div>
                                <label className="text-[#637381] block mb-2">From</label>
                                <input
                                    type="text"
                                    {...register(`stage.${index}.schedule.${index}.from`, { required: "From is required" })}
                                    className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                />
                            </div>
                            {/* To Field */}
                            <div>
                                <label className="text-[#637381] block mb-2">To</label>
                                <input
                                    type="text"
                                    {...register(`stage.${index}.schedule.${index}.to`, { required: "To is required" })}
                                    className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                />
                            </div>
                            {/* Artist Name Field */}
                            <div>
                                <label className="text-[#637381] block mb-2">Artist Name</label>
                                <input
                                    type="text"
                                    {...register(`stage.${index}.schedule.${index}.artist_name`, { required: "Artist Name is required" })}
                                    className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                />
                            </div>
                            <button onClick={() => removeSchedule(index)} className="cursor-pointer text-red-500 block"> <DeleteIcon size={25} /></button>
                        </div>
                    ))
                }
                < div className="flex justify-end mr-42" >
                    <button
                        type="button"
                        onClick={() => appendSchedule({ date: "", from: "", to: "", artist_name: "" })}
                        className="text-[#3F97FF] text-[18px] cursor-pointer flex items-center justify-end gap-1"
                    >
                        <PlusIcon /> Add Artist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StageScheduleFields;