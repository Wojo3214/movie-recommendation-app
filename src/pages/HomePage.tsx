import React from 'react';
import { 
  IonButton,
  IonButtons,
  IonContent, 
  IonFooter, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { informationCircleOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './HomePage.css';

const HomePage: React.FC = () => {
  const getPersonalizedRecommendation = "Get personalized recommendation";
  const getInstantRecommendation = "Get instant recommendation";

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
            <IonButton>
              <IonIcon slot="icon-only" icon={informationCircleOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding-horizontal'>
        {heroContainer}
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
