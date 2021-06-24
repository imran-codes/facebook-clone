import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="https://www.cnet.com/a/img/6u2kmEm0RJUfcSgupFaBkEsKeK4=/940x0/2020/02/13/ae1b9b28-ac0f-4b16-90c7-1f232b6633e4/press00-model-x-rear-three-quarter-with-doors-open.jpg" title="Elon Musk" profileSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE" />
      <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajRyAwV3NiHKuj6nMMymQhdWT4AHMocxtzxsVZ6EKiOJtfcf9kLx3U7VDBSUmLNT2crE&usqp=CAU" title="Jeff Bazos" profileSrc="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D524%26cropX2%3D1824%26cropY1%3D185%26cropY2%3D1486" />
      <Story image="https://www.sportbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.sportbible.com%2Fs3%2Fcontent%2F9d16b2395f00dba754a7ca5e02a37f70.png" title="Cristiano Ronaldo" profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" />
      <Story image="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale" title="Lionel Messi" profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCz_R96dMImgSX9GaiZoI9othIY4JF2H1FiJ878VxCieaz4Y23D7uwobPG0h8tkSZ7ajg&usqp=CAU" />
      <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3wN7SIyiIEL384GWIB-k6QgCyRZlnaRGHtHNZx-0i-0f-Z-ffzV62D0u7WjiRqKDbCk&usqp=CAU" title="Bill Gates" profileSrc="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
    </div>
  )
}

export default StoryReel
