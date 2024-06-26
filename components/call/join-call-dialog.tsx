"use client"
import React, { useState } from 'react'
import CardShell, { type CardProps } from '../layout/call-shell';
import { useRouter } from 'next/navigation';
import { joinCallFormSchema } from '@/schemas/call';
import { type z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { extractId } from '@/lib/extract-id';
import { Icons } from '../ui/calls/icons';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import toast from 'react-hot-toast';
import { Input } from '../ui/input';
import { Label } from '../ui/label';


type FormData = z.infer<typeof joinCallFormSchema>

export default function JoinCallDialog (card: CardProps)  {
  const [isJoinCallLoading, setIsJoinCallLoading] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(joinCallFormSchema)
  });

 function previewCall(data: FormData) {

    setIsJoinCallLoading(true);
    const callName = extractId(data.meetingLink);
    setIsJoinCallLoading(false);
    router.push(`/preview/${callName}`)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='p-0 flex w-fit h-fit'>
          <CardShell card={card}/>
        </div>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-4'>
        <DialogHeader>
          <DialogTitle className='text-xl'>Join a call</DialogTitle>
          <DialogDescription className='text-sm text-muted-foreground'>
            Join a call by entering the meeting link or ID.
          </DialogDescription>
        </DialogHeader>
        <form className='pt-4' onSubmit={handleSubmit(previewCall)}>
          <div className='w-full space-y-1 mt-4'>
            <Label htmlFor="meeting-link">Meeting URL</Label>
            <Input
              {...register('meetingLink')}
              type="url"
              placeholder="Meeting link or ID"
              className="w-full"
              id='meeting-link'
            />
          </div>
          <DialogFooter className='flex flex-col-reverse md:flex-row pt-8'>
            <Button
              type='submit'
              className='rounded-md px-12 font-normal'
              disabled={isJoinCallLoading}
            >
              {isJoinCallLoading && <Icons.spinner color="#fff" width={14} height={14} className='mr-2' />}
              Join Call
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

