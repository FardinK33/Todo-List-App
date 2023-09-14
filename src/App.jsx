import { useEffect, useState } from 'react';

import axios from 'axios';
import Todo from './components/todo-container/todo-container.component';

import './App.scss';
import wallpaper from './assets/bg.avif';

function App() {

  const [photo, setPhoto] = useState('');

  useEffect(()=>{

    const getPhoto = async () => {
      const {data} = await axios.get('https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=MpMjWW_TdG2y_ODxPcUqb_V5ylRF1iQ1azgGjPhYDv0')
      // console.log(data);
      setPhoto(data.urls.regular);
    }
    getPhoto();

  },[])

  return (
    <div style={{
      backgroundImage: (photo!=='') ? `url(${photo})` : `url(${wallpaper})`
    }} className='body-container'>

      <Todo />

    </div>
  )
}

export default App;


// https://api.unsplash.com/search/photos/random?query=office
