import entities from "../enums/entities";

export const currentEntity = "FSA";

export const isFSA = currentEntity === entities.FSA;

export const isLandingPage = false;

export const topLevelDomain = "com";

// We have only one EU entity, so we can use constant for all FSA related entities
export const entityToRedirect = "https://oqtima.eu";
