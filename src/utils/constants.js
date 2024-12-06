export const API_ROUTES = {
  LOGIN: `/admin/login`,
}
  
export const APP_ROUTES = {
  LOGIN: `/login`,
  ACCUEIL: `/`,
  CONTACT: `/contact`,
  RESSOURCES: `/ressources`,
  POMPE_THERMOHALINE: `/pompeThermohaline`,
  PHYTOPLANCTON: `/phytoplancton`,
  BIODIVERSITE: `/biodiversite`,
  CORAIL: `/corail`,
  BIOSPHERE: `/biosphere`,
  COURANTS: `/courants`
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
  LINK: `/objects/link.gltf`,
  INCOMING_ENVELOPE: `/objects/incoming_envelope.gltf`
}

export const PLACES = {
  HOUSE: `/places/house.gltf`
}

export const NATURE = {
  SUNRISE: `/nature/sunrise.gltf`
}

export const BODY_PARTS = {
  BLOOD: `/bodyparts/drop_of_blood.gltf`,
  EYES: `/bodyparts/eyes.gltf`,
  MOUTH: `/bodyparts/mouth.gltf`,
  LUNGS: `/bodyparts/lungs.gltf`,
  BONE: `/bodyparts/bone.gltf`,
  BRAIN: `/bodyparts/brain.gltf`,
  HEART: `/bodyparts/anatomical_heart.gltf`,
  DNA: `/bodyparts/dna.gltf`
}
