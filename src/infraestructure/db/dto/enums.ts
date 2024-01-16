

export enum NetworkName {
    FACEBOOK = 'Facebook',
    LINKEDIN = 'LinkedIn',
    GITHUB = 'Github',
    INSTAGRAM = 'Instagram',
  }

  export interface SocialNetwork {
    networkName: NetworkName;
    URL: string;
  }

  export enum GameType {
    FPS = 'FPS',
    MOBA = 'MOBA',
    STRATEGY = 'STRATEGY',
    SPORT = 'SPORT',
    CARD = 'CARD',
    ADVENTURE = 'ADVENTURE',
  }
  
  export enum Role {
    JUGADOR = 'player',
    ADMIN = 'admin',
    MODERADOR = 'mod',
  }
  
  export enum Mode {
    ONLINE = 'ONLINE',
    PRESENCIAL = 'PRESENCIAL',
  }