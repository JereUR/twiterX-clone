import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { Avatar } from '@nextui-org/react'

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  return (
    <form className="flex flex-row space-x-4 p-4 border-b border-white/20">
      <img
        className="rounded-full w-10 h-10 object-contain"
        src={userAvatarUrl}
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="post"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2"
          placeholder="¡¿Qué está pasando?!"
        ></textarea>
        <button className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end">
          Postear
        </button>
      </div>
    </form>
  )
}
