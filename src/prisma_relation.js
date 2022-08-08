import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function fetchCourseTableByTableId(deffered) {
  const table = await prisma.course_tables.findUnique({
    where: {
      id: 'a751cffd-9a58-4cf6-b670-125b5b3c13cc',
    },
    select: {
      id: true,
      name: true,
      semester: true,
      table_courses: {
        select: {
          courses: true
        }
      },
    }
  });

  deffered.resolve();

  return table;
}
