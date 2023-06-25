import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'movie-recommendation-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
