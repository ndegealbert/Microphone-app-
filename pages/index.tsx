import  {Microphone}  from  '../model/microphone'
import { openDB }  from  './OpendB'
import { GetStaticProps } from 'next'

export  interface IndexProps{
  microphones:Microphone[];
}


export default function Index({ microphones }: IndexProps) {
return <div>
  <pre>{JSON.stringify(microphones,null,4)}</pre>
  <p>Hello Word from next.js</p>

  </div> 

}



export const getStaticProps: GetStaticProps = async (context) => {
  const db = await openDB()
  const microphones = await db.all('select * from microphone');
  console.log(microphones)
  return { props: { microphones } };
}
