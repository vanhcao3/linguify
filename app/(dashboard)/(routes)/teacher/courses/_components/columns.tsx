'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Course } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import {
  ArrowUpDown,
  MoreHorizontal,
  Pencil,
  Trash,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ConfirmModal } from '@/components/modals/confirm-modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price') || '0');
      const formatted = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'isPublished',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          Published
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isPublished = row.getValue('isPublished') || false;

      return (
        <Badge
          className={cn('bg-slate-500', isPublished && 'bg-sky-700')}
        >
          {isPublished ? 'Published' : 'Draft'}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { id } = row.original;

      /* const onDelete = async () => {
        try {
          await axios.delete(`/api/courses/${id}`);
          toast.success('Course deleted successfully');
        } catch {
          toast.error('Something went wrong!');
        }
      }; */

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/teacher/courses/${id}`}>
              <DropdownMenuItem>
                <Pencil className="h-4 w-4 mr-2" />
                Edit
              </DropdownMenuItem>
            </Link>

            {/* <DropdownMenuItem onClick={onDelete}>
              <Trash className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
