/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFieldArray, useForm, type FieldValues } from "react-hook-form"
import StageScheduleFields from "../stageScheduleFields/StageScheduleFields";
import PlusIcon from "@/components/SVG/PlusIcon";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const RunningOrder = () => {
    const [newStageName, setNewStageName] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm({
        defaultValues: {
            stage: [
                {
                    stage_type: "main_stage",
                    stage_name: "Main Stage",
                    schedule: [
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "Lumi" },
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "Lumi" },
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "DJ Nova" }]
                },
                {
                    stage_type: "secondary_stage",
                    stage_name: "Secondary Stage",
                    schedule: [
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "Lumi" },
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "Lumi" },
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "DJ Nova" }
                    ]
                },
                {
                    stage_type: "third_stage",
                    stage_name: "Third Stage",
                    schedule: [
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "Lumi" },
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "Lumi" },
                        { date: "25 July", from: "22:00", to: "22:00", artist_name: "DJ Nova" }
                    ]
                }
            ]
        },
    });
    const { fields: stageFields, append: appendStage, remove: removeStage } = useFieldArray({
        control,
        name: "stage"
    })

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset(); // Clear form after submit
    };
    return (

        <div>
            <div>
                {/* Use react hook form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-[24px] w-full mt-8 ">
                    <div>
                        {
                            stageFields?.map((stage, index) => (
                                <StageScheduleFields
                                    key={stage.id}
                                    stage={stage}
                                    removeStage={removeStage}
                                    stageIndex={index}
                                    control={control}
                                    register={register}
                                />
                            ))
                        }
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <div className="flex justify-start">
                                <button
                                    type="button"
                                    className="text-[#3F97FF] text-[18px] cursor-pointer flex items-center justify-end gap-1"
                                >
                                    <PlusIcon /> Add Stage
                                </button>
                            </div>
                        </DialogTrigger>

                        <DialogContent>
                            <div className="space-y-[24px] w-full mt-4">
                                <label className="text-[#637381] block mb-2">Stage Name</label>
                                <input
                                    type="text"
                                    value={newStageName}
                                    onChange={(e) => setNewStageName(e.target.value)}
                                    placeholder="Enter Stage Name"
                                    required={true}
                                    className="w-full text-[#37404A] text-[18px] font-semibold border px-4 py-2 rounded-[8px] focus:outline-primary"
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!newStageName.trim()) return;
                                        appendStage({
                                            stage_type: newStageName.toLowerCase().replace(/\s+/g, "_"),
                                            stage_name: newStageName,
                                            schedule: [
                                                { date: "", from: "", to: "", artist_name: "" },
                                                { date: "", from: "", to: "", artist_name: "" },
                                                { date: "", from: "", to: "", artist_name: "" }
                                            ],
                                        });
                                        setNewStageName("");
                                        setIsDialogOpen(false);
                                    }}
                                    className="bg-[#3F97FF] cursor-pointer text-white px-10 py-3 rounded hover:bg-opacity-90 w-full text-center"
                                >
                                    Add Stage
                                </button>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#3F97FF] cursor-pointer text-white px-10 py-3 rounded hover:bg-opacity-90 text-center font-semibold"
                        >
                            Mark as Complete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RunningOrder;