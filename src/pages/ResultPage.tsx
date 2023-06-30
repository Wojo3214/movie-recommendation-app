import React, {useRef, useState} from 'react';
import { 
  IonButton,
  IonContent, 
  IonFooter,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
} from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import './ResultPage.css';
import './HomePage.css';
import 'swiper/css';

const ResultPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const swiper = useSwiper();
  console.log(activeIndex);
  
  function slideIndex(e:any){
    const active = e.activeIndex;
    setActiveIndex(active);
  }

  function activeSlide(){
    const slides = document.querySelectorAll("SwiperSlide");
    console.log(slides);
    
    // for(let i = 0; i < slides.length; i++){
    //   if(slides[i] === i){
    //     slides[i].classList.toggle("active-slide");
    //   }
    // }
  }
  activeSlide();

  const results = [
    {
      text: "https://tickets.imagix.be/system/images/posters/000/000/905/medium.jpg?1684928515"
    },
    {
      text: "https://m.media-amazon.com/images/M/MV5BN2I2Yzc2OWMtMWQzYi00ZDcxLTgyOTMtNjBiNzA5Y2QxZDYxXkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg"
    },
    {
      text: "https://www.themoviedb.org/t/p/original/myvj6Slsv3wWtDKKS2IOmbqBTCa.jpg"
    }
  ];

  const swiperRef = useRef<any>(null);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Result Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding-horizontal'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Result Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding-vertical">Based on you preferences, we recommend you these movies.</div>
        <div className='results-container'>
          <Swiper 
            ref={swiperRef}
            className='slider'
            spaceBetween={16}
            slidesPerView={1.5}
            centeredSlides={true}
            scrollbar={{ draggable: true }}
            allowTouchMove={true}
            onSlideChange={(e) => slideIndex(e)}
          >
            {results.map((result, index) => (
              <SwiperSlide key={index}>
                <div className={`movie ${index === activeIndex && "active-movie"}`}>
                  <img src={result.text} alt='movie poster'/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton routerLink="/homePage" fill='solid' expand='block'>Done</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ResultPage;
