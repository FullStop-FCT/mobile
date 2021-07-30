export const Token = {
    exp: number,
    iat: number,
    image: string,
    iss: string,
    role: string,
  }
  
  export const userProps = {
    birthday: string,
    email: string,
    name: string,
    profile: string,
    phoneNumber: string,
    mobileNumber: string,
    address: string,
    location: string,
    postalCode: string,
    gender: string,
    username: string,
    points: number,
    kind: string,
    image: string,
    followers: number,
    followings: number,
  }
  
  export const listuserProps = userProps[100];
  
  
  export const AtivitiesProps = {
    ID: string,
    title: string,
    description: string,
    date: string,
    location: string,
    participants: number,
    totalParticipants: number,
    activityOwner: string,
    category: string,
    lat: string,
    lon: string,
  }
  
  export const listAtivitiesProps = AtivitiesProps[100];
  
  export const activitytodoProps = {
    title: number,
    totalParticipants: string,
    activityOwner: string,
    ID: string,
  }
  
  export const listAtivitiesTodoProps = activitytodoProps[100];