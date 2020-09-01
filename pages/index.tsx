import  {Microphone}  from  '../model/microphone'
import { openDB }  from  './OpendB'
import { GetStaticProps } from 'next'
import  Link  from  'next/link'

export  interface IndexProps{
  microphones:Microphone[];
}

export default function Index({ microphones }: IndexProps) {
return <div>
      {
                 microphones.map((microphone) => (
                  <Link href="/microphone/[id]" as={`/microphone/${microphone.id}`}>
                    <a>{microphone.brand +  microphone.model}</a>
                  </Link>
                ))
      }
   

  </div> 

}
export const getStaticProps: GetStaticProps = async (context) => {
  const db = await openDB()
  const microphones = await db.all('select * from microphone');
  console.log(microphones)
  return { props: { microphones } }; 
}
