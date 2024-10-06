import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const jsonFiles = [
  "starlight_club.json",
  "starlight_grade.json",
  "starlight_parent.json",

  "starlight_teacher.json",
  "starlight_class.json",

  "starlight_subject.json",
  "starlight_student.json",
  "starlight_disciplinary_record.json",
  "starlight_lesson.json",
  "starlight_exam.json",

  "starlight_assignments.json",

  "starlight_result.json",
  "starlight_attendance.json",
  "starlight_event.json",

  "starlight_annoucement.json",
];

async function loadJsonData(filename: string) {
  const filePath = path.join(__dirname, "data", filename);
  console.log(`Loading data from: ${filePath}`);
  try {
    const rawData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error(`Error loading file ${filename}:`, error);
    return null;
  }
}

async function main() {
  console.log("Starting seed...");

  for (const file of jsonFiles) {
    const data = await loadJsonData(file);
    if (!data) continue;

    const modelName = file.replace("starlight_", "").replace(".json", "");
    try {
      switch (modelName) {
        case "club":
          await seedClubs(data);
          break;
        case "grade":
          await seedGrades(data);
          break;
        case "parent":
          await seedParents(data);
          break;
        case "teacher":
          await seedTeachers(data);
          break;
        case "class":
          await seedClasses(data);
          break;
        case "subject":
          await seedSubjects(data);
          break;

        case "student":
          await seedStudents(data);
          break;

        case "disciplinary_record":
          await seedDisciplinaryRecords(data);
          break;
        case "lesson":
          await seedLessons(data);
          break;

        case "exam":
          await seedExams(data);
          break;
        case "assignments":
          await seedAssignments(data);
          break;

        case "result":
          await seedResults(data);
          break;

        case "attendance":
          await seedAttendance(data);
          break;

        case "event":
          await seedEvents(data);
          break;

        case "annoucement":
          await seedAnnouncements(data);
          break;

        default:
          console.log(`No seeding function for ${modelName}`);
      }
    } catch (error) {
      console.error(`Error seeding ${modelName}:`, error);
    }
  }

  console.log("Seeding completed.");
}

async function seedClubs(data: any[]) {
  console.log(`Seeding ${data.length} club`);
  for (const item of data) {
    await prisma.club.create({
      data: {
        id: item.id,
        name: item.name,
        description: item.description,
        category: item.category,
      },
    });
  }
}

async function seedGrades(data: any[]) {
  console.log(`Seeding ${data.length} grade`);
  for (const item of data) {
    await prisma.grade.create({
      data: {
        level: item.level,
      },
    });
  }
}

async function seedParents(data: any[]) {
  console.log(`Seeding ${data.length} parent`);
  for (const item of data) {
    await prisma.parent.create({
      data: {
        id: item.id,
        username: item.username,
        name: item.name,
        surname: item.surname,
        email: item.email,
        phone: item.phone,
        address: item.address,
        income_level: item.income_level,
        parent_highest_education_level: item.parent_highest_education_level,
        parent_support_index: item.parent_support_index,
      },
    });
  }
}

async function seedTeachers(data: any[]) {
  console.log(`Seeding ${data.length} teacher`);
  for (const item of data) {
    await prisma.teacher.create({
      data: {
        id: item.id,
        username: item.username,
        name: item.name,
        surname: item.surname,
        email: item.email,
        phone: item.phone,
        address: item.address,
        img: item.img,
        bloodType: item.bloodType,
        sex: item.sex,
        birthday: new Date(item.birthday),
        teacher_highest_education_level: item.teacher_highest_education_level,
        date_of_employment: new Date(item.date_of_employment),
        years_of_experience_before_joining:
          item.years_of_experience_before_joining,
      },
    });
  }
}

async function seedClasses(data: any[]) {
  console.log(`Seeding ${data.length} class`);
  for (const item of data) {
    await prisma.class.create({
      data: {
        name: item.name,
        capacity: item.capacity,
        supervisorId: item.supervisorId,
        gradeId: item.gradeId,
      },
    });
  }
}

async function seedSubjects(data: any[]) {
  console.log(`Seeding ${data.length} subject`);
  for (const item of data) {
    await prisma.subject.create({
      data: {
        name: item.name,
      },
    });
  }
}

async function seedStudents(data: any[]) {
  console.log(`Seeding ${data.length} student`);
  for (const item of data) {
    await prisma.student.create({
      data: {
        id: item.id,
        username: item.username,
        name: item.name,
        surname: item.surname,
        email: item.email,
        phone: item.phone,
        address: item.address,
        img: item.img,
        bloodType: item.bloodType,
        mental_health_score: item.mental_health_score,
        is_boarding: item.is_boarding,
        department: item.department,
        sex: item.sex,
        parentId: item.parentId,
        classId: item.classId,
        gradeId: item.gradeId,
        birthday: item.birthday,
        takes_external_tutorship: item.takes_external_tutorship,
        disability: item.disability,
        number_of_siblings: item.number_of_siblings,
        internet_access_at_home: item.internet_access_at_home,
      },
    });
  }
}

async function seedDisciplinaryRecords(data: any[]) {
  console.log(`Seeding ${data.length} disciplinary_record`);
  for (const item of data) {
    await prisma.disciplinary_record.create({
      data: {
        studentId: item.student_id,
        incidentDate: item.incidentDate,
        incidentDescription: item.incidentDescription,
        infraction: item.infraction,
        consequence: item.consequence,
        consequenceDetails: item.consequenceDetails,
        reportedBy: item.reportedBy,
        reportedDate: item.reportedDate,
      },
    });
  }
}

async function seedLessons(data: any[]) {
  console.log(`Seeding ${data.length} lesson`);
  for (const item of data) {
    await prisma.lesson.create({
      data: {
        name: item.name,
        day: item.day,
        startTime: item.startTime,
        endTime: item.endTime,
        subjectId: item.subjectId,
        classId: item.classId,
        teacherId: item.teacherId,
      },
    });
  }
}

async function seedExams(data: any[]) {
  console.log(`Seeding ${data.length} exam`);
  for (const item of data) {
    await prisma.exam.create({
      data: {
        title: item.title,
        startTime: new Date(item.startTime),
        endTime: new Date(item.endTime),
        lessonId: item.lessonId,
      },
    });
  }
}

async function seedAssignments(data: any[]) {
  console.log(`Seeding ${data.length} assignment`);
  for (const item of data) {
    await prisma.assignment.create({
      data: {
        title: item.title,
        startDate: new Date(item.startDate),
        dueDate: new Date(item.dueDate),
        lessonId: item.lessonId,
      },
    });
  }
}

async function seedResults(data: any[]) {
  console.log(`Seeding ${data.length} result`);
  for (const item of data) {
    await prisma.result.create({
      data: {
        score: item.score,
        examId: item.examId,
        assignmentId: item.assignmentId,
        studentId: item.studentId,
      },
    });
  }
}

async function seedAttendance(data: any[]) {
  console.log(`Seeding ${data.length} attendance`);
  for (const item of data) {
    await prisma.attendance.create({
      data: {
        date: new Date(item.date),
        present: item.present,
        studentId: item.studentId,
        lessonId: item.lessonId,
      },
    });
  }
}

async function seedEvents(data: any[]) {
  console.log(`Seeding ${data.length} event`);
  for (const item of data) {
    await prisma.event.create({
      data: {
        title: item.title,
        description: item.description,
        startTime: new Date(item.startTime),
        endTime: new Date(item.endTime),
        classId: item.classId,
      },
    });
  }
}

async function seedAnnouncements(data: any[]) {
  console.log(`Seeding ${data.length} announcements`);
  for (const item of data) {
    await prisma.announcement.create({
      data: {
        title: item.title,
        description: item.description,
        date: new Date(item.date),
        classId: item.classId,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// import { Day, PrismaClient, UserSex } from "@prisma/client";
// const prisma = new PrismaClient();

// async function main() {
//   // ADMIN
//   await prisma.admin.create({
//     data: {
//       id: "admin1",
//       username: "admin1",
//     },
//   });
//   await prisma.admin.create({
//     data: {
//       id: "admin2",
//       username: "admin2",
//     },
//   });

//   // GRADE
//   for (let i = 1; i <= 6; i++) {
//     await prisma.grade.create({
//       data: {
//         level: i,
//       },
//     });
//   }

//   // CLASS
//   for (let i = 1; i <= 6; i++) {
//     await prisma.class.create({
//       data: {
//         name: `${i}A`,
//         gradeId: i,
//         capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
//       },
//     });
//   }

//   // SUBJECT
//   const subjectData = [
//     { name: "Mathematics" },
//     { name: "Science" },
//     { name: "English" },
//     { name: "History" },
//     { name: "Geography" },
//     { name: "Physics" },
//     { name: "Chemistry" },
//     { name: "Biology" },
//     { name: "Computer Science" },
//     { name: "Art" },
//   ];

//   for (const subject of subjectData) {
//     await prisma.subject.create({ data: subject });
//   }

//   // TEACHER
//   for (let i = 1; i <= 15; i++) {
//     await prisma.teacher.create({
//       data: {
//         id: `teacher${i}`, // Unique ID for the teacher
//         username: `teacher${i}`,
//         name: `TName${i}`,
//         surname: `TSurname${i}`,
//         email: `teacher${i}@example.com`,
//         phone: `123-456-789${i}`,
//         address: `Address${i}`,
//         bloodType: "A+",
//         sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
//         subjects: { connect: [{ id: (i % 10) + 1 }] },
//         classes: { connect: [{ id: (i % 6) + 1 }] },
//         birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30)),
//       },
//     });
//   }

//   // LESSON
//   for (let i = 1; i <= 30; i++) {
//     await prisma.lesson.create({
//       data: {
//         name: `Lesson${i}`,
//         day: Day[
//           Object.keys(Day)[
//             Math.floor(Math.random() * Object.keys(Day).length)
//           ] as keyof typeof Day
//         ],
//         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//         endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
//         subjectId: (i % 10) + 1,
//         classId: (i % 6) + 1,
//         teacherId: `teacher${(i % 15) + 1}`,
//       },
//     });
//   }

//   // PARENT
//   for (let i = 1; i <= 25; i++) {
//     await prisma.parent.create({
//       data: {
//         id: `parentId${i}`,
//         username: `parentId${i}`,
//         name: `PName ${i}`,
//         surname: `PSurname ${i}`,
//         email: `parent${i}@example.com`,
//         phone: `123-456-789${i}`,
//         address: `Address${i}`,
//       },
//     });
//   }

//   // STUDENT
//   for (let i = 1; i <= 50; i++) {
//     await prisma.student.create({
//       data: {
//         id: `student${i}`,
//         username: `student${i}`,
//         name: `SName${i}`,
//         surname: `SSurname ${i}`,
//         email: `student${i}@example.com`,
//         phone: `987-654-321${i}`,
//         address: `Address${i}`,
//         bloodType: "O-",
//         sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
//         parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`,
//         gradeId: (i % 6) + 1,
//         classId: (i % 6) + 1,
//         birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
//       },
//     });
//   }

//   // EXAM
//   for (let i = 1; i <= 10; i++) {
//     await prisma.exam.create({
//       data: {
//         title: `Exam ${i}`,
//         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//         endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
//         lessonId: (i % 30) + 1,
//       },
//     });
//   }

//   // ASSIGNMENT
//   for (let i = 1; i <= 10; i++) {
//     await prisma.assignment.create({
//       data: {
//         title: `Assignment ${i}`,
//         startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
//         dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
//         lessonId: (i % 30) + 1,
//       },
//     });
//   }

//   // RESULT
//   for (let i = 1; i <= 10; i++) {
//     await prisma.result.create({
//       data: {
//         score: 90,
//         studentId: `student${i}`,
//         ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
//       },
//     });
//   }

//   // ATTENDANCE
//   for (let i = 1; i <= 10; i++) {
//     await prisma.attendance.create({
//       data: {
//         date: new Date(),
//         present: true,
//         studentId: `student${i}`,
//         lessonId: (i % 30) + 1,
//       },
//     });
//   }

//   // EVENT
//   for (let i = 1; i <= 5; i++) {
//     await prisma.event.create({
//       data: {
//         title: `Event ${i}`,
//         description: `Description for Event ${i}`,
//         startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
//         endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
//         classId: (i % 5) + 1,
//       },
//     });
//   }

//   // ANNOUNCEMENT
//   for (let i = 1; i <= 5; i++) {
//     await prisma.announcement.create({
//       data: {
//         title: `Announcement ${i}`,
//         description: `Description for Announcement ${i}`,
//         date: new Date(),
//         classId: (i % 5) + 1,
//       },
//     });
//   }

//   console.log("Seeding completed successfully.");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
