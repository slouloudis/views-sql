// import Image from 'next/image'
// import { sql } from '@vercel/postgres'

// // dont let it cache. (will disable.)
// export const dynamic = 'force-dynamic'

// export default async function Home() {

//   await sql`INSERT INTO views (Views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM views)`;
//   await sql`UPDATE views SET Views = Views + 1`;
//   const result = await sql`SELECT Views FROM views`;
  
//   // inesrt row if table is empty
//   // inc views
//   // get views

//   // checkout what we get back
//   console.log(result)



//   return (
//     <div>
//       <h1>This is a views project!</h1>
//       <p>This has been viewed {result.rows[0].views} times!</p>
//     </div>
//   )
// }


// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}
