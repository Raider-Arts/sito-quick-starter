import {Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {TeamPageComponent} from "./pages/team-page/team-page.component";
import {FeedbackPageComponent} from "./pages/feedback-page/feedback-page.component";
import {QuickstartPageComponent} from "./pages/quickstart-page/quickstart-page.component";
import {CharacterCreatorPageComponent} from "./pages/character-creator-page/character-creator-page.component";
import {DownloadPageComponent} from "./pages/download-page/download-page.component";
import {GalaxyMapPageComponent} from "./pages/galaxy-map-page/galaxy-map-page.component";
import {LoreEventPageComponent} from "./pages/lore-event-page/lore-event-page.component";
import {SendYourIdeaPageComponent} from "./pages/send-your-idea-page/send-your-idea-page.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'feedback',
    component: FeedbackPageComponent
  },
  {
    path: 'quickstart',
    component: QuickstartPageComponent
  },
  {
    path: 'characterCreator',
    component: CharacterCreatorPageComponent
  },
  {
    path: 'resources',
    component: DownloadPageComponent
  },
  {
    path: 'galaxy',
    component: GalaxyMapPageComponent
  },
  {
    path: 'loreEvents',
    component: LoreEventPageComponent
  },
  {
    path: 'shareIdea',
    component: SendYourIdeaPageComponent
  },
];
