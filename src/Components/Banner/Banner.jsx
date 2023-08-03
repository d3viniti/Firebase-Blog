
import {useEffect} from 'react'
import './Banner.css'
import { collection } from 'firebase/firestore'
import {db} from '../../config/firebaseConfig'

function Banner() {

    //get data when banner loads
    useEffect(()=>{

        //create variable to reference articles collection, first reference
        //database const and then the name of collection typed exactly the same
        const articlesRef = collection(db, 'Articles')

        //get the data now
        getDocs(articlesRef)
        .then(res=>console.log(res.docs[0]))
        .catch(err=>console.log(err))
    },[])

  return (
    <div>Banner</div>
  )
}

export default Banner