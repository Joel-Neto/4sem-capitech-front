"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import api from "@/services/axios";
import { IUpdateTrail } from "@/types/Trail";
import useToast from "@/hooks/useToast";

const columns = [
  {
    key: "_id",
    label: "id",
  },
  {
    key: "name",
    label: "Nome",
  },
  {
    key: "actions",
    label: "Ações",
  },
];

export default function Admin() {
  const [trails, setTrails] = useState<IUpdateTrail[]>([]);

  const { showSuccessToast, showErrorToast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const trails = await api.get("/trilhas");

      setTrails(trails.data.data);
    } catch (error: any) {
      console.error(`Erro ao buscar trilhas: ${error.message}`);
    }
  };

  const deleteTrail = async (id: string) => {
    try {
      const result = await api.delete(`/trilhas/${id}`);

      if (result.data.success) {
        showSuccessToast(result.data.message);
        await fetchData();
      } else {
        showErrorToast(result.data.message);
      }
    } catch (error: any) {
      showErrorToast(error.message);
    }
  };

  const renderCell = useCallback(
    (trail: IUpdateTrail, columnKey: React.Key) => {
      const cellValue = trail[columnKey as keyof IUpdateTrail];

      switch (columnKey) {
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <HiOutlineDotsHorizontal size={20} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>
                    <Link href={`/admin/trilhas/atualizar/${trail._id}`}>
                      <div className="flex gap-1 items-center justify-center text-black">
                        <span>Editar</span>
                        <FaRegEdit />
                      </div>
                    </Link>
                  </DropdownItem>
                  <DropdownItem onClick={() => deleteTrail(trail._id)}>
                    <div className="flex gap-1 items-center justify-center">
                      <span>Deletar</span>
                      <MdDeleteOutline />
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <main className="container mx-auto max-w-5xl flex flex-col items-center justify-center gap-4 px-6 py-8 md:py-10">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className="text-medium bg-capi_purple text-white"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"Nenhuma trilha cadastrada."} items={trails}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
