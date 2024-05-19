import { type Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/components/ui/calls/icons";
import JoinCallDialog from "@/components/call/join-call-dialog";
import InviteParticipantsDialog from "@/components/call/invite-participants-dialog";
import { type CardProps } from "@/components/layout/call-shell";
import CreateCallCard from "@/components/call/create-call-card";
import { Button } from "@/components/ui/button";
import { currentUser } from '@/lib/auth';

const cardsData: CardProps[] = [
  {
    title: "Create a call",
    description: "Create a call and invite others to join in conversation, discussion, or collaboration.",
    icon: <Icons.video color="white" width={24} height={14} />,
    buttonText: "Create",
    loadingIcon: <Icons.spinner color="#0F172A" width={14} height={14} />,
    buttonIcon: <Icons.add color="#0F172A" className="ml-2" width={16} height={16} />,
  },
  {
    title: "Join a call",
    description: "Join a call by to participate in a conversation, discussion, or collaboration.",
    icon: <Icons.add color="white" width={16} height={16} />,
    buttonText: "Join",
    loadingIcon: <Icons.spinner color="#0F172A" width={14} height={14} />,
    buttonIcon: <Icons.add color="#0F172A" className="ml-2" width={16} height={16} />,
  },
  {
    title: "Invite Participants",
    description: "Invite your friends or participants to join your call and engage in a conversation.",
    icon: <Icons.invite color="white" width={24} height={24} />,
    loadingIcon: <Icons.spinner color="#0F172A" width={14} height={14} />,
    buttonText: "Invite",
    buttonIcon: <Icons.add color="#0F172A" className="ml-2" width={16} height={16} />,
  }
];

export default async function CallsPage(){

  const user = await currentUser();

  return (
    <div className="w-full">
      <section className="container max-w-[1400px] space-y-6 mb-8 md:mb-12 lg:mb-16 mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[50px] font-semibold leading-none px-4 md:px-8">
              {`Welcome ${user?.name as string}`}
            </h1>
          </div>
        </div>
      </section>
      <section className="space-y-6 mx-auto">
        <div className="w-full text-center mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center lg:gap-5 px-4 md:px-8">
            <CreateCallCard {...cardsData[0] as CardProps} />
            <JoinCallDialog {...cardsData[1] as CardProps} />
            <InviteParticipantsDialog {...cardsData[2] as CardProps} />
          </div>
        </div>
      </section>
    </div>
  )
}