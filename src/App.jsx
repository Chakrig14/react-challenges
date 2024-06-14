import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css'
// import Accordian from './components/Accordian'
import axios from 'axios'
// import DataCounter from './components/DataCounter';

export default function App() {
  const [accordianPosts, setAccordianPosts] = useState([]);
  async function fetchAccordianData() {
    const response = await axios.get('https://dummyjson.com/posts');
    const data = response?.data?.posts;
    setAccordianPosts(data);
  }

  const LazyProductList = lazy(() => import('./components/ProductsList'))

  // useEffect(() => {
  //   fetchAccordianData();
  // },[])

  return (
    <main>
      {/* <Accordian fetchedData={accordianPosts}/> */}
      {/* <DataCounter /> */}
      <div>
        <Suspense fallback={<div>Loading Products...</div>}>
          <LazyProductList />
        </Suspense>
      </div>
    </main>
  )
}
