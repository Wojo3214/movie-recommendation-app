import React, {useRef, useEffect, useState} from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonFooter,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonModal,
  IonAccordionGroup,
  IonAccordion,
  IonLabel,
  IonItem,
  IonIcon,
  IonChip,
} from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import './ResultPage.css';
import './HomePage.css';
import 'swiper/css';
import { star } from 'ionicons/icons';

const ResultPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const modal = useRef<HTMLIonModalElement>(null);
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
    if (!accordionGroup.current) {
      return;
    }
    accordionGroup.current.value = ['first', 'third'];
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  const swiper = useSwiper();
  console.log(activeIndex);
  
  function slideIndex(e:any){
    const active = e.activeIndex;
    setActiveIndex(active);
  }

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
    <IonPage ref={page}>
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
                <div id={index === activeIndex ? `open-modal${activeIndex}` : `open-modal`} className={`movie ${index === activeIndex && "active-movie"}`}>
                  <img src={result.text} alt='movie poster'/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <IonModal ref={modal} trigger={`open-modal${activeIndex}`} presentingElement={presentingElement!}>
          <IonHeader translucent>
            <IonToolbar>
              <IonTitle>Recommendation #1</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="ion-padding">
            <div className='modal-result-content'>
              <img 
                className="movie-poster" 
                src="https://tickets.imagix.be/system/images/posters/000/000/905/medium.jpg?1684928515" 
                alt='movie poster'
              />
              <h2>Movie title</h2>
              <div className='ratings'>
                <IonIcon slot="icon-only" size='small' icon={star}></IonIcon>
                9.5
              </div>
              <div className='movie-categories'>
               <IonChip outline={true}>Action</IonChip>
               <IonChip outline={true}>Animation</IonChip>
               <IonChip outline={true}>Horror</IonChip>
              </div>
              <div className='streaming-container'>
                <img src="https://logohistory.net/wp-content/uploads/2023/05/Netflix-Logo.svg" alt='movie poster'/>
              </div>
            </div>
            <IonAccordionGroup ref={accordionGroup} multiple={true}>
              <IonAccordion value="first">
                <IonItem slot="header" color="light">
                  <IonLabel>Description</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  Description
                </div>
              </IonAccordion>
              <IonAccordion value="second">
                <IonItem slot="header" color="light">
                  <IonLabel>Cast</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  Cast
                </div>
              </IonAccordion>
              <IonAccordion value="third">
                <IonItem slot="header" color="light">
                  <IonLabel>Reviews</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  Reviews
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </IonContent>
        </IonModal>
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
