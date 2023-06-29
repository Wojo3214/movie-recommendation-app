import React, {useState, useRef} from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonFooter, 
  IonHeader, 
  IonIcon,
  IonList,
  IonItem,
  IonLabel, 
  IonModal,
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonSearchbar
} from '@ionic/react';
import { closeCircleOutline, informationCircleOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import './HomePage.css';
import 'swiper/css';
import CheckboxButton from '../components/checkboxButton/checkboxButton';

const HomePage: React.FC = () => {
  const getPersonalizedRecommendation = "Get personalized recommendation";
  const getInstantRecommendation = "Get instant recommendation";

  const infoModal = useRef<HTMLIonModalElement>(null);
  const preferencesModal = useRef<HTMLIonModalElement>(null);
  const searchModal = useRef<HTMLIonModalElement>(null);
  
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const swiper = useSwiper();
  console.log(activeIndex);
  
  function slideIndex(e:any){
    const active = e.activeIndex;
    setActiveIndex(active);
  }

  const swiperRef = useRef<any>(null);

  const [infoModalMessage, setInfoModalMessage] = useState(
    'This product uses the TMDB API but is not endorsed or certified by TMDB.'
  );

  const showTypesInputConfig = [
    {
      id: "tv-show",
      title: "TV Show",
      inputName: "show-type",
      value: "tv-show",
    },
    {
      id: "movie",
      title: "Movie",
      inputName: "show-type",
      value: "movie",
    }
  ];

  const showCategoriesInputConfig = [
    {
      id: "action",
      title: "Action",
      inputName: "show-category",
      value: "Action",
    },
    {
      id: "horror",
      title: "Horror",
      inputName: "show-category",
      value: "horror",
    },
    {
      id: "fiction",
      title: "Fiction",
      inputName: "show-category",
      value: "fiction",
    },{
      id: "animation",
      title: "Animation",
      inputName: "show-category",
      value: "animation",
    }
  ];

  const showProvidersConfig = [
    {
      id: "netflix",
      title: "Netflix",
      inputName: "streaming-provider",
      value: "netflix",
    },
    {
      id: "disney-plus",
      title: "Disney +",
      inputName: "streaming-provider",
      value: "disney",
    },
    {
      id: "apple",
      title: "Apple TV +",
      inputName: "streaming-provider",
      value: "apple",
    },
  ];

  function dismiss() {
    infoModal.current?.dismiss();
  }

  const handleNextSlideClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      console.log('Next slide');
    }
  };

  const toolBarButton = (
    activeIndex >=2 ?
      <IonButton onClick={handleNextSlideClick} fill="solid" expand="block">
        Get recommendation
      </IonButton> : 
    <IonButton onClick={handleNextSlideClick} fill="solid" expand="block">
      Next
    </IonButton>
  );
    
  const preferencesToolBarHeader = 
  activeIndex === 1 ? "Movie category" 
  : activeIndex === 2 ? "Streaming provider" 
  : "Movie type";

  const heroContainer = (
    <>
      <div className='hero-container'>
        <img className="logo" src='./assets/logo/logo.png' alt='logo'/>
        <h1>Lights, Camera, Discover!</h1>
        <p>Find your perfect movie match and elevate your cinema experience with personalized recommendations at your fingertips.</p>
        <p className='foot-note'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </div>
    </>
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar-home'>
          <IonButtons slot="end">
            <IonButton id='open-info-modal'>
              <IonIcon slot="icon-only" icon={informationCircleOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding-horizontal'>
        {heroContainer}
        <IonModal ref={infoModal} trigger="open-info-modal" onWillDismiss={() => dismiss()} className='info-modal'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Information</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => infoModal.current?.dismiss()}>
                  <IonIcon slot="icon-only" icon={closeCircleOutline}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <div className='info-modal-container'>
              <img className="logo" src='./assets/logo/tmdb-logo.svg' alt='tmdb logo'/>
              {infoModalMessage}
            </div>
          </IonContent>
        </IonModal>

        {/* PREFERENCES MODAL */}
        <IonModal ref={preferencesModal} trigger="open-preferences-modal" onWillDismiss={() => dismiss()} className='preferences-modal'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{preferencesToolBarHeader}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => preferencesModal.current?.dismiss()}>
                  <IonIcon slot="icon-only" icon={closeCircleOutline}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="ion-padding-horizontal">
            <IonHeader collapse="condense">
              <IonToolbar className='preferences-modal-toolbar'>
                <IonTitle size="large">{preferencesToolBarHeader}</IonTitle>
              </IonToolbar>
            </IonHeader>
            <form>
            <Swiper 
              ref={swiperRef}
              className='slider'
              spaceBetween={16}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              allowTouchMove={true}
              onSlideChange={(e) => slideIndex(e)}
            >
              <SwiperSlide>
                <div className="ion-padding-vertical">Choose movie or TV show</div>
                <div className='form-group-1'>
                  {showTypesInputConfig.map((showType, index) => (
                    <CheckboxButton 
                      key={index} 
                      id={showType.id} 
                      title={showType.title} 
                      inputName={showType.inputName} 
                      value={showType.value}
                    />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ion-padding-vertical">Choose categories that you are looking for.</div>
                <div className='form-group-1'>
                  {showCategoriesInputConfig.map((showCategory, index) => (
                    <CheckboxButton 
                      key={index} 
                      id={showCategory.id} 
                      title={showCategory.title} 
                      inputName={showCategory.inputName} 
                      value={showCategory.value}
                      size='xs'
                    />
                  ))}
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>
                <IonHeader collapse="condense">
                  <IonToolbar className='preferences-modal-toolbar'>
                    <IonTitle size="large">Actor/Actress</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <div className="ion-padding-vertical">Choose an actor or actress whom you want to watch.</div>
                <div className='form-group-1'>
                <IonList inset={true}>
                  <IonItem button={true} detail={false} id="select-actors">
                    <IonLabel>Favorite Fruits</IonLabel>
                    <div slot="end" id="select-actors">
                      ddddd
                    </div>
                  </IonItem>
                </IonList>
                <IonList inset={true}>
                  <IonItem button={true} detail={false} id="select-actors">
                    <IonLabel>Favorite Fruits</IonLabel>
                    <div slot="end" id="select-actors">
                      ddddd
                    </div>
                  </IonItem>
                </IonList>
                </div>
              </SwiperSlide> */}
              <SwiperSlide>
                <div className="ion-padding-vertical">Choose a streaming provider that you are interested of.</div>
                <div className='form-group-1'>
                  {showProvidersConfig.map((showProvider, index) => (
                    <CheckboxButton 
                      key={index} 
                      id={showProvider.id} 
                      title={showProvider.title} 
                      inputName={showProvider.inputName} 
                      value={showProvider.value}
                    />
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
            </form>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              {toolBarButton}
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton id="open-preferences-modal" fill='solid' expand='block'>{getPersonalizedRecommendation}</IonButton>
          <IonButton fill='clear' expand='full'>{getInstantRecommendation}</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default HomePage;
