import PostCard from './post-card'
import { type Post } from '../types/posts'

export function PostsList({ posts }: { posts: Post[] | null }) {
  return (
    <>
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
    </>
  )
}
