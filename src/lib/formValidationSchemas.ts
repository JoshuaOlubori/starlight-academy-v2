import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()), //teacher ids
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  capacity: z.coerce.number().min(1, { message: "Capacity name is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade name is required!" }),
  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  dateOfEmployment: z.coerce.date({ message: "Date of employment is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(), // subject ids
  yearsOfExperienceBeforeJoining: z.coerce.number().optional(), 
  teacherHighestEducationLevel: z.enum(
    [
      "Primary",
      "Secondary",
      "Vocational",
      "Diploma",
      "Bachelor",
      "Master",
      "Doctoral",
      "Unknown",
      "Other",
    ],
    {
      message:
        "allowable values are:  'Primary','Secondary','Vocational','Diploma','Bachelor','Master','Doctoral','Unknown','Other'",
    }
  ),
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

// export const studentSchema = z.object({
//   id: z.string().optional(),
//   username: z
//     .string()
//     .min(3, { message: "Username must be at least 3 characters long!" })
//     .max(20, { message: "Username must be at most 20 characters long!" }),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters long!" })
//     .optional()
//     .or(z.literal("")),
//   name: z.string().min(1, { message: "First name is required!" }),
//   surname: z.string().min(1, { message: "Last name is required!" }),
//   email: z
//     .string()
//     .email({ message: "Invalid email address!" })
//     .optional()
//     .or(z.literal("")),
//   phone: z.string().optional(),
//   address: z.string(),
//   img: z.string().optional(),
//   bloodType: z.string().min(1, { message: "Blood Type is required!" }),
//   birthday: z.coerce.date({ message: "Birthday is required!" }),
//   sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
//   gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),
//   classId: z.coerce.number().min(1, { message: "Class is required!" }),
//   parentId: z.string().min(1, { message: "Parent Id is required!" }),
//   department: z.string().min(1, { message: "Department is required!" }),
// });
export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),
  classId: z.coerce.number().min(1, { message: "Class is required!" }),
  parentId: z.string().min(1, { message: "Parent Id is required!" }),
  department: z.enum(
    [
      "science",
      "arts",
      "commerce",
      "none"
    ],
    {
      message:
        "allowable values are:  'science','arts','commerce','none'",
    }
  ),
  
  // New fields
  mental_health_score: z.coerce.number()
    .min(0, { message: "Mental health score must be at least 0." })
    .max(100, { message: "Mental health score must be at most 100." }),
  is_boarding: z.boolean().optional(),
  takes_external_tutorship: z.boolean().optional(),
  disability: z.string().optional(),
  number_of_siblings: z.coerce
    .number()
    .int({ message: "Number of siblings must be an integer." })
    .nonnegative({ message: "Number of siblings cannot be negative." }),
  internet_access_at_home: z.boolean().optional(),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: "Title name is required!" }),
  startTime: z.coerce.date({ message: "Start time is required!" }),
  endTime: z.coerce.date({ message: "End time is required!" }),
  lessonId: z.coerce.number({ message: "Lesson is required!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;


export const parentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
    password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string().min(1, { message: "Address is required!" }),
  income_level: z.enum(
    ['Below50k',
'Between50kTo100k',
'Between100kTo200k',
'Between200kTo500k',
'Between500kTo1m',
'Between1mTo2m',
'Between2mTo5m',
'Above5m'
    ], // Adjust the options based on your predefined IncomeLevel enum
    {
      message: "Income level must be one of 'Low', 'Medium', 'High', or 'Unknown'.",
    }
  ),
  parent_highest_education_level: z.enum(
    [
      "Primary",
      "Secondary",
      "Vocational",
      "Diploma",
      "Bachelor",
      "Master",
      "Doctoral",
      "Unknown",
      "Other",
    ],
    {
      message:
        "Allowable values are: 'Primary', 'Secondary', 'Vocational', 'Diploma', 'Bachelor', 'Master', 'Doctoral', 'Unknown', 'Other'.",
    }
  ),
  parent_support_index: z.coerce
  .number()
    .min(0, { message: "Support index must be at least 0!" })
    .max(100, { message: "Support index must be at most 100!" })
    .optional(),
});

export type ParentSchema = z.infer<typeof parentSchema>;
