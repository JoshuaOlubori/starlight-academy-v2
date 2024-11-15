"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import Image from "next/image";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  studentSchema,
  StudentSchema,
} from "@/lib/formValidationSchemas"; // Ensure studentSchema is updated to validate all fields
import {
  createStudent,
  updateStudent,
} from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import prisma from "@/lib/prisma";
// import { Class, Prisma, Subject, Teacher } from "@prisma/client";


const StudentForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentSchema>({
    resolver: zodResolver(studentSchema),
  });
 

  const [state, formAction] = useFormState(
    type === "create" ? createStudent : updateStudent,
    {
      success: false,
      error: false,
      errorMessage:''
          
    }
  );

  const onSubmit = handleSubmit((data) => {
    console.log("hello");
    console.log(data);

    formAction({ ...data, img: img?.secure_url });
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Student has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  

  const { grades, classes, parents } = relatedData;
 const departments = ['science','arts','commerce','none'];
  const DISABILITY = ['None', 'Visual', 'Hearing', 'Physical', 'Learning', 'Other'];

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new student" : "Update the student"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <CldUploadWidget
        uploadPreset="school"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          widget.close();
        }}
      >
        {({ open }) => (
          <div
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            onClick={() => open()}
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </div>
        )}
      </CldUploadWidget>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Last Name"
          name="surname"
          defaultValue={data?.surname}
          register={register}
          error={errors.surname}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        {/* <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        /> */}
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday.toISOString().split("T")[0]}
          register={register}
          error={errors.birthday}
          type="date"
        />


<div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Parent Id</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("parentId")}
            defaultValue={data?.parentId}
          >
            <option value="">Select Parent</option>
            {parents.map((parent) => (
              <option value={parent.id} key={parent.id}>
                {parent.id}
              </option>
            ))}
          </select>
          {errors.parentId?.message && (
            <p className="text-xs text-red-400">
              {errors.parentId.message.toString()}
            </p>
          )}
        </div>




        {/* <InputField
          label="Parent Id"
          name="parentId"
          defaultValue={data?.parentId}
          register={register}
          error={errors.parentId}
        />
        {data && (
          <InputField
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            error={errors?.id}
            hidden
          />
        )} */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Grade</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("gradeId")}
            defaultValue={data?.gradeId}
          >
            {grades.map((grade: { id: number; level: number }) => (
              <option value={grade.id} key={grade.id}>
                {grade.level}
              </option>
            ))}
          </select>
          {errors.gradeId?.message && (
            <p className="text-xs text-red-400">
              {errors.gradeId.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Department</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("department")}
            defaultValue={data?.department || ""}
          >
            {departments.map((dept) => (
              <option value={dept} key={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department?.message && (
            <p className="text-xs text-red-400">
              {errors.department.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Class</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("classId")}
            defaultValue={data?.classId}
          >
            {classes.map(
              (classItem: {
                id: number;
                name: string;
                capacity: number;
                _count: { students: number };
              }) => (
                <option value={classItem.id} key={classItem.id}>
                  ({classItem.name} -{" "}
                  {classItem._count.students + "/" + classItem.capacity}{" "}
                  Capacity)
                </option>
              )
            )}
          </select>
          {errors.classId?.message && (
            <p className="text-xs text-red-400">
              {errors.classId.message.toString()}
            </p>
          )}
        </div>

        {/* Additional Fields for the Student Model */}
        {type == "update" &&
        (<InputField
          label="Mental Health Score (0-10)"
          name="mental_health_score"
          type="number"
          defaultValue={data?.mental_health_score ? String(data.mental_health_score) : ""}
          register={register}
          error={errors.mental_health_score}
        />)
}
        <InputField
          label="Is Boarding"
          name="is_boarding"
          type="checkbox"
          defaultChecked={data?.is_boarding}
          register={register}
          error={errors.is_boarding}
        />
        <InputField
          label="Takes External Tutorship"
          name="takes_external_tutorship"
          type="checkbox"
          defaultChecked={data?.takes_external_tutorship}
          register={register}
          error={errors.takes_external_tutorship}
        />
        
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Disability</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("disability")}
            defaultValue={data?.disability}
          >
            {DISABILITY.map((disability) => (
              <option value={disability} key={disability}>
                {disability}
              </option>
            ))}
          </select>
          {errors.disability?.message && (
            <p className="text-xs text-red-400">
              {errors.disability.message.toString()}
            </p>
          )}
        </div>
      
        <InputField
          label="Number of Siblings"
          name="number_of_siblings"
          type="number"
          defaultValue={data?.number_of_siblings ? String(data.number_of_siblings) : ""}
          register={register}
          error={errors.number_of_siblings}
        />
        <InputField
          label="Internet Access at Home"
          name="internet_access_at_home"
          type="checkbox"
          defaultChecked={data?.internet_access_at_home}
          register={register}
          error={errors.internet_access_at_home}
        />

      </div>
      {state.error && (
       
       <span className="text-red-500">Something went wrong! {state.errorMessage || 'An error occurred'}:</span>
       
     
     )}
      {/* <button
        type="submit"
        className="self-start bg-blue-600 text-white p-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
      >
        {type === "create" ? "Create" : "Update"}
      </button> */}
    <button
  type="submit"
  className={`self-start cursor-pointer inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-md 
    bg-violet-500 hover:opacity-75 text-sm font-medium tracking-wide text-white transition 
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
    focus-visible:outline-violet-500 active:opacity-100 active:outline-offset-0 
    dark:bg-violet-400 dark:text-black dark:focus-visible:outline-violet-400 
    px-4 py-2`}
>
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`size-5 fill-white dark:fill-black`}
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
  {type === "create" ? "Create" : "Update"}
</button>
    </form>
  );
};

export default StudentForm;

{/* <button type="button" className="cursor-pointer inline-flex justify-center items-center gap-2 whitespace-nowrap rounded-none bg-violet-500 px-4 py-2 text-sm font-medium tracking-wide text-white transition hover:opacity-75 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:bg-violet-400 dark:text-black dark:focus-visible:outline-violet-400">
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5 fill-white dark:fill-black" fill="currentColor">
        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
    </svg>
    Create
</button> */}
