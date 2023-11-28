import Image from 'next/image'
import { sql } from '@vercel/postgres'

// dont let it cache. (will disable.)
export const dynamic = 'force-dynamic'

export default async function Home() {

  await sql`INSERT INTO views (Views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM views)`;
  await sql`UPDATE views SET Views = Views + 1`;
  const result = await sql`SELECT Views FROM views`;
  
  // inesrt row if table is empty
  // inc views
  // get views

  // checkout what we get back
  console.log(result)



  return (
    <div>
      <h1>This is a views project!</h1>
      <p>This has been viewed {result.rows[0].views} times!</p>
    </div>
  )
}


// app/page.tsx

