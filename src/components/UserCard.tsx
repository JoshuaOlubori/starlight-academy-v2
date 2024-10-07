import prisma from "@/lib/prisma";
import Image from "next/image";
import { space_mono } from '@/app/fonts';

const UserCard = async ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "parent";
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent,
  };

  const data = await modelMap[type].count();

  return (
    <div className="rounded-none border border-black bg-neutral-50 text-black dark:border-neutral-300 dark:bg-neutral-800 dark:text-neutral-200  p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full border border-black text-neutral-500">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className=" text-2xl font-semibold my-4">{data}</h1>
      <h2 className="tfont capitalize text-sm font-medium text-violet-800 dark:border-neutral-300 dark:bg-neutral-800 dark:text-neutral-200">{type}s</h2>
    </div>
  );
};

export default UserCard;
