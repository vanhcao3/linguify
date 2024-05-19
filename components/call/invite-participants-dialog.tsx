"use client"
import React, { useState } from 'react'
import { Icons } from '../ui/calls/icons';
import CardShell, { type CardProps } from '../layout/call-shell';
import { useForm } from 'react-hook-form';
import { inviteSchema } from '@/schemas/invite';
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from 'zod';
import { useCallId } from '@/context/call-id-context';
import useClipboard from '@/hooks/use-copy';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import toast from 'react-hot-toast';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { getSession } from 'next-auth/react';

type FormData = z.infer<typeof inviteSchema>

export default function InviteParticipantsDialog (card: CardProps)  {

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(inviteSchema)
  });
  const { callId } = useCallId();
  const { isCopied, copyToClipboard } = useClipboard();


  async function onSubmit(data: FormData){
    setIsLoading(true);
    const session = await getSession();
    const user = session!.user;

    if (user) {
      const recipientUsername = data.email.split('@')[0];

      try {

        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recipient: data.email,
            link: `localhost:3000/call/${callId}`,
            recipientUsername,
            senderImage: user.image,
            invitedByUsername: user.name,
            invitedByEmail: user.email,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send email');
        }

        setIsLoading(false);
        return toast.success('Your invite has been sent successfully'
        );

      } catch (error) {
        setIsLoading(false);
        return toast.error('There was an error sending your invite. Please try again later.');
      }
    }
  }

return (
  <Dialog>
    <DialogTrigger asChild>
      <div className='p-0 flex w-fit h-fit'>
        <CardShell card={card}/>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader className='mb-4'>
        <DialogTitle className='text-xl'>Invite participants</DialogTitle>
        <DialogDescription className='text-sm text-muted-foreground'>
          Copy the link below and invite participants to this call.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col md:flex-row justify-between items-end'>
          <div className='w-full space-y-1'>
            <Label htmlFor="email">Email</Label>
            <Input
              {...register('email')}
              type="email"
              id="email"
              placeholder="Email address"
              className='w-full'
            />
          </div>
          <Button
            type="submit"
            className='rounded-md font-normal mt-2 md:mt-0 md:ml-2 w-full md:w-fit whitespace-nowrap'
            size='lg'
          >
            {isLoading && <Icons.spinner width="16" height="16" className='mr-3' color="#fff"/>}
            Send invite
          </Button>
        </div>
        {errors.email && typeof errors.email.message === 'string' && <p className='mt-2 text-sm text-red-500'>{errors.email.message}</p>}
      </form>
      <div className='bg-slate-200 w-full h-[1px] my-4'></div>
      <DialogFooter className='w-full'>
        <div className='w-full flex flex-col md:flex-row justify-between items-end mb-2'>
          <div className='w-full space-y-1'>
            <Label htmlFor="link">Link</Label>
            <Input
              disabled
              placeholder={`localhost:3000/call/${callId}`}
              required
              id="link"
              className='w-full'
            />
          </div>
          <Button
            variant='secondary'
            size='lg'
            className="rounded-md font-normal flex mt-2 md:mt-0 md:ml-2 ml-auto w-full md:w-fit"
            onClick={async() =>{
              await copyToClipboard(`localhost:3000/call/${callId}`);
              if(isCopied){
                toast.success('The invite link has been copied to your clipboard.');
              }
            }}
          >
            Copy
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
}