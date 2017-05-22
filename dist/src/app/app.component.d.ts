import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
export declare class IonicDogeDemoApp {
    nav: Nav;
    rootPage: any;
    pages: Array<{
        title: string;
        component: any;
    }>;
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen);
    openPage(page: any): void;
}
