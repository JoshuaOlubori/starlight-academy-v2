import FormContainer from "@/components/FormContainer";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Class, Prisma, Student } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { auth } from "@clerk/nextjs/server";

import { useEffect, useState } from "react";
import { query } from "../lib/db";

const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Example query to fetch data from your Neon PostgreSQL database
        const result = await query("SELECT * FROM your_table_name WHERE condition = $1", ['some_value']);
        
        setData(result.rows); // assuming `result.rows` contains the data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
// type StudentList = Student & { class: Class };

const DisTable = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const columns = [
    {
      header: "student_id",
      accessor: "student_id",
    },
    {
      header: "% risk of failure",
      accessor: "failure_risk_percentage"
    },
  ];

  const renderRow = (item: StudentList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
     
      <td className="hidden md:table-cell">{item.id}</td>
      <td className="hidden md:table-cell">{item.failure_risk_percentage}</td>
    
    </tr>
  );

//   const { page, ...queryParams } = searchParams;

//   const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

//   const query: Prisma.StudentWhereInput = {};

//   if (queryParams) {
//     for (const [key, value] of Object.entries(queryParams)) {
//       if (value !== undefined) {
//         switch (key) {
//           case "teacherId":
//             query.class = {
//               lessons: {
//                 some: {
//                   teacherId: value,
//                 },
//               },
//             };
//             break;
//           case "search":
//             query.name = { contains: value, mode: "insensitive" };
//             break;
//           default:
//             break;
//         }
//       }
//     }
//   }

//   const [data, count] = await prisma.$transaction([
//     prisma.student.findMany({
//       where: query,
//       include: {
//         class: true,
//       },
//       take: ITEM_PER_PAGE,
//       skip: ITEM_PER_PAGE * (p - 1),
//     }),
//     prisma.student.count({ where: query }),
//   ]);

const count = 3;

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormContainer table="student" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default DisTable;
