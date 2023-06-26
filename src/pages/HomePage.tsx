import React, {useState, useRef} from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonFooter, 
  IonHeader, 
  IonIcon, 
  IonModal,
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { closeCircleOutline, informationCircleOutline } from 'ionicons/icons';
import './HomePage.css';

const HomePage: React.FC = () => {
  const getPersonalizedRecommendation = "Get personalized recommendation";
  const getInstantRecommendation = "Get instant recommendation";

  const infoModal = useRef<HTMLIonModalElement>(null);

  const [infoModalMessage, setInfoModalMessage] = useState(
    'This product uses the TMDB API but is not endorsed or certified by TMDB.'
  );

  function dismiss() {
    infoModal.current?.dismiss();
  }

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
