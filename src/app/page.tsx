import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthButtonServer } from './components/auth-button-server'
import PostCard from './components/post-card'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name,user_name,avatar_url)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {posts?.map((post) => {
        const { user, content, id } = post

        const {
          avatar_url: avatarUrl,
          name: userFullName,
          user_name: userName
        } = user
        return (
          <PostCard
            avatarUrl={avatarUrl}
            content={content}
            key={id}
            userFullName={userFullName}
            userName={userName}
          />
        )
      })}
    </main>
  )
}
