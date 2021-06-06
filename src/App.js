import TinderCard from 'react-tinder-card'
import {useState} from 'react';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://im0-tub-com.yandex.net/i?id=8e8f0b3f84771f02b85e4605275db2a2&n=13'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTa4_S-VJYKdOcNJgiGklVfsP1-T12Xv0mGnb0zYEArexNJp3VXX2BgAtA5fadkjjGN8&usqp=CAU'
  },
  {
    name: 'Monica Hall',
    url: 'https://im0-tub-com.yandex.net/i?id=054e0306402821369f71f0c85c361a9f&n=13'
  },
  {
    name: 'Jared Dunn',
    url: 'https://im0-tub-com.yandex.net/i?id=3e78581f78028e2b31fa1b57d3e26bc5&n=13'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://im0-tub-com.yandex.net/i?id=a852a2695f3a54f38bc0a07a631af9f7&n=13'

  },
  {
    name:'Danny',
    url: 'https://im0-tub-com.yandex.net/i?id=8be0a01f615ca8b842312766ef0b3a07&n=13'
  },
  {
    name:'Manny',
    url: 'https://im0-tub-com.yandex.net/i?id=714637a524742bbfba31231baf7d8681&n=13'
  },
  {
    name:'Ranny',
    url: 'https://thumbs.dreamstime.com/b/little-girl-21029548.jpg'
  },
  
  {
    name:'Wanny',
    url: 'https://im0-tub-com.yandex.net/i?id=2fbbc06f3c30ea6fb2330d15c20aafd6&n=13'
  },
  {
    name:'Lanny',
    url: 'https://im0-tub-ru.yandex.net/i?id=50bc9dc5c840721c4348af5a1e5b3a3b&ref=rim&n=33&w=150&h=150'
  }
]



export default function App(){
  const characters = db;
  const [count, setCount] = useState(0);
  const onScreenLeft = (direction) =>{
    setCount(count=>count+1);
    setTimeout(alert(`You swiped ${direction}`), 4000);
  }

  return (
    <>
    <div className="App">
      <div>
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name}  preventSwipe={['up', 'down']} onCardLeftScreen = {(dir)=>{onScreenLeft(dir)}}>
            <div style={{height:'200px',width:'200px', backgroundImage: 'url(' + character.url + ')' ,position:'absolute',top:'200px',left:'200px'}} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
    </div>
    <p>You have swiped {count} time(s)</p>
    </div>

    </>

  );
}
