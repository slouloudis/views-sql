import Image from 'next/image'
import { sql } from '@vercel/postgres'

export default async function Home() {
  // Ensure that the column name 'Views' is correctly referenced with its case

  // Insert a row if the table is empty
  await sql`INSERT INTO views (Views) SELECT 0 WHERE NOT EXISTS (SELECT * FROM views)`;

  // Increment the Views count
  await sql`UPDATE views SET Views = Views + 1`;

  // Retrieve the updated Views count
  const result = await sql`SELECT Views FROM views`;

  console.log(result)

  // Check if the result is not empty and has the expected structure
  // const views = result.length > 0 ? result[0].Views : 0;

  return (
    <div>
      <h1>This is a views project!</h1>
      <p>This has been viewed {result.rows[0].views} times!</p>
    </div>
  )
}
