export const API_ROUTES = {
  LOGIN: `/admin/login`,
}
  
export const APP_ROUTES = {
  LOGIN: `/login`,
  ACCUEIL: `/`,
}
  
/*usage :  
  import { APP_ROUTES } from '../utils/constants';
  puis
  API_ROUTES.LOGIN , route de login 
  */

/*
  Chemin vers les modèles 3D de l'app:
*/

export const BALLS = {
  Scale: 0.7,
  FOOTBALL: `/balls/soccer_ball.gltf`,
}

export const OBJECTS = {
  GOAL: `/objects/goal_net.gltf`,
}
