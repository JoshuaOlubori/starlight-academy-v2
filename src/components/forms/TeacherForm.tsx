import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { teacherSchema, TeacherSchema } from "@/lib/formValidationSchemas";
import { useFormState } from "react-dom";
import { createTeacher, updateTeacher } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";

const TeacherForm = ({
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
  } = useForm<TeacherSchema>({
    resolver: zodResolver(teacherSchema),
  });

  const [img, setImg] = useState<any>();
  
  const [state, formAction] = useFormState(
    type === "create" ? createTeacher : updateTeacher,
    {
      success: false,
      error: false,
      errorMessage: '',
    }
  );

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction({ ...data, img: img?.secure_url });
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Teacher has been ${type === "create" ? "created" : "updated"}!`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  const { subjects } = relatedData;

  const educationLevels = [
    "Primary",
    "Secondary",
    "Vocational",
    "Diploma",
    "Bachelor",
    "Master",
    "Doctoral",
    "Other",
  ];

  const bloodtypelist = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new teacher" : "Update the teacher"}
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
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Blood Type</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("bloodType")}
            defaultValue={data?.bloodType}
          >
            {bloodtypelist.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.bloodType?.message && (
            <p className="text-xs text-red-400">
              {errors.bloodType.message.toString()}
            </p>
          )}
        </div>
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday?.toISOString().split("T")[0]}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <InputField
          label="Date of Employment"
          name="dateOfEmployment"
          defaultValue={data?.dateOfEmployment?.toISOString().split("T")[0]}
          register={register}
          error={errors.dateOfEmployment}
          type="date"
        />
        <InputField
          label="Years of Experience Before Joining"
          name="yearsOfExperienceBeforeJoining"
          defaultValue={data?.yearsOfExperienceBeforeJoining}
          register={register}
          error={errors.yearsOfExperienceBeforeJoining}
          type="number"
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
        )}
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
          <label className="text-xs text-gray-500">Subjects (Hold down the Ctrl (windows) or Command (Mac) button to select multiple options)</label>
          <select
            multiple
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("subjects")}
            defaultValue={data?.subjects}
          >
            {subjects.map((subject: { id: number; name: string }) => (
              <option value={subject.id} key={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
          {errors.subjects?.message && (
            <p className="text-xs text-red-400">
              {errors.subjects.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Highest Education Level</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("teacherHighestEducationLevel")}
            defaultValue={data?.teacherHighestEducationLevel}
          >
            {educationLevels.map((level) => (
              <option value={level} key={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.teacherHighestEducationLevel?.message && (
            <p className="text-xs text-red-400">
              {errors.teacherHighestEducationLevel.message.toString()}
            </p>
          )}
        </div>
        <CldUploadWidget
          uploadPreset="starlight"
          onSuccess={(result, { widget }) => {
            setImg(result.info);
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <div
                className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                onClick={() => open()}
              >
                <Image src="/upload.png" alt="" width={28} height={28} />
                <span>Upload a photo</span>
              </div>
            );
          }}
        </CldUploadWidget>
      </div>
      {state.error && (
       
        <span className="text-red-500">Something went wrong! {state.errorMessage || 'An error occurred'}:</span>
        
      
      )}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import InputField from "../InputField";
// import Image from "next/image";
// import { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { teacherSchema, TeacherSchema } from "@/lib/formValidationSchemas";
// import { useFormState } from "react-dom";
// import { createTeacher, updateTeacher } from "@/lib/actions";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { CldUploadWidget } from "next-cloudinary";

// const TeacherForm = ({
//   type,
//   data,
//   setOpen,
//   relatedData,
// }: {
//   type: "create" | "update";
//   data?: any;
//   setOpen: Dispatch<SetStateAction<boolean>>;
//   relatedData?: any;
// }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<TeacherSchema>({
//     resolver: zodResolver(teacherSchema),
//   });

//   const [img, setImg] = useState<any>();

//   const [state, formAction] = useFormState(
//     type === "create" ? createTeacher : updateTeacher,
//     {
//       success: false,
//       error: false,
//     }
//   );

//   const onSubmit = handleSubmit((data) => {
//     console.log(data);
//     formAction({ ...data, img: img?.secure_url });
//   });

//   const router = useRouter();

//   useEffect(() => {
//     if (state.success) {
//       toast(`Teacher has been ${type === "create" ? "created" : "updated"}!`);
//       setOpen(false);
//       router.refresh();
//     }
//   }, [state, router, type, setOpen]);

//   const { subjects } = relatedData;

//   return (
//     <form className="flex flex-col gap-8" onSubmit={onSubmit}>
//       <h1 className="text-xl font-semibold">
//         {type === "create" ? "Create a new teacher" : "Update the teacher"}
//       </h1>
//       <span className="text-xs text-gray-400 font-medium">
//         Authentication Information
//       </span>
//       <div className="flex justify-between flex-wrap gap-4">
//         <InputField
//           label="Username"
//           name="username"
//           defaultValue={data?.username}
//           register={register}
//           error={errors?.username}
//         />
//         <InputField
//           label="Email"
//           name="email"
//           defaultValue={data?.email}
//           register={register}
//           error={errors?.email}
//         />
//         <InputField
//           label="Password"
//           name="password"
//           type="password"
//           defaultValue={data?.password}
//           register={register}
//           error={errors?.password}
//         />
//       </div>
//       <span className="text-xs text-gray-400 font-medium">
//         Personal Information
//       </span>
//       <div className="flex justify-between flex-wrap gap-4">
//         <InputField
//           label="First Name"
//           name="name"
//           defaultValue={data?.name}
//           register={register}
//           error={errors.name}
//         />
//         <InputField
//           label="Last Name"
//           name="surname"
//           defaultValue={data?.surname}
//           register={register}
//           error={errors.surname}
//         />
//         <InputField
//           label="Phone"
//           name="phone"
//           defaultValue={data?.phone}
//           register={register}
//           error={errors.phone}
//         />
//         <InputField
//           label="Address"
//           name="address"
//           defaultValue={data?.address}
//           register={register}
//           error={errors.address}
//         />
//         <InputField
//           label="Blood Type"
//           name="bloodType"
//           defaultValue={data?.bloodType}
//           register={register}
//           error={errors.bloodType}
//         />
//         <InputField
//           label="Birthday"
//           name="birthday"
//           defaultValue={data?.birthday.toISOString().split("T")[0]}
//           register={register}
//           error={errors.birthday}
//           type="date"
//         />
//         {data && (
//           <InputField
//             label="Id"
//             name="id"
//             defaultValue={data?.id}
//             register={register}
//             error={errors?.id}
//             hidden
//           />
//         )}
//         <div className="flex flex-col gap-2 w-full md:w-1/4">
//           <label className="text-xs text-gray-500">Sex</label>
//           <select
//             className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
//             {...register("sex")}
//             defaultValue={data?.sex}
//           >
//             <option value="MALE">Male</option>
//             <option value="FEMALE">Female</option>
//           </select>
//           {errors.sex?.message && (
//             <p className="text-xs text-red-400">
//               {errors.sex.message.toString()}
//             </p>
//           )}
//         </div>
//         <div className="flex flex-col gap-2 w-full md:w-1/4">
//           <label className="text-xs text-gray-500">Subjects</label>
//           <select
//             multiple
//             className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
//             {...register("subjects")}
//             defaultValue={data?.subjects}
//           >
//             {subjects.map((subject: { id: number; name: string }) => (
//               <option value={subject.id} key={subject.id}>
//                 {subject.name}
//               </option>
//             ))}
//           </select>
//           {errors.subjects?.message && (
//             <p className="text-xs text-red-400">
//               {errors.subjects.message.toString()}
//             </p>
//           )}
//         </div>
//         <CldUploadWidget
//           uploadPreset="starlight"
//           onSuccess={(result, { widget }) => {
//             setImg(result.info);
//             widget.close();
//           }}
//         >
//           {({ open }) => {
//             return (
//               <div
//                 className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
//                 onClick={() => open()}
//               >
//                 <Image src="/upload.png" alt="" width={28} height={28} />
//                 <span>Upload a photo</span>
//               </div>
//             );
//           }}
//         </CldUploadWidget>
//       </div>
//       {state.error && (
//         <span className="text-red-500">Something went wrong!</span>
//       )}
//       <button className="bg-blue-400 text-white p-2 rounded-md">
//         {type === "create" ? "Create" : "Update"}
//       </button>
//     </form>
//   );
// };

// export default TeacherForm;
