
import {useEffect, useState} from 'react'
import './Banner.css'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import {db} from '../../config/firebaseConfig'


function Banner() {

  const [mainArticle, setMainArticle] = useState({});
  const [otherArticles, setOtherArticles] = useState([]);

    //get data when banner loads
    useEffect(()=>{

        //create variable to reference articles collection, first reference
        //database const and then the name of collection typed exactly the same
        const articlesRef = collection(db, 'Articles')

        //setup query to filter responses
        //sort and then get first 5 articles
        const q = query(articlesRef, orderBy("createdAt", "desc"), limit(5));

        //get the data now
        getDocs(q, articlesRef)
        //use the .data() firebase function to access our data
        .then(res=>{
          // console.log(res.docs[0].data());

          const articles = res.docs.map(item => {
            return{
              id: item.id,
              ...item.data(),
            }
          })
          // console.log(articles)
          setMainArticle(articles[0])
          setOtherArticles(articles.splice(1));
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='banner-container'>

      <div className="main-article-container" style={{backgroundImage: `url(${mainArticle?.imageUrl})`}}>
        <div className="banner-info">
          <h2>{mainArticle?.title}</h2>
          <div className="main-article-info">
            <p>{mainArticle?.createdAt?.toDate().toDateString()}</p>
          </div>
        </div>
      </div>
      <div className="other-articles-container">
        {
          otherArticles.map(item => {
            return <div className="other-article-item" key={item?.id}
            style={{backgroundImage: `url(${item?.imageUrl})`}}>
              <div className="banner-info">
              <h3>{item?.title}</h3>
              <small>{item?.createdAt?.toDate().toDateString()}</small>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Banner