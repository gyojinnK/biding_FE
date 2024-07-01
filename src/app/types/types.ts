declare global {
  interface Window {
    daum: any;
  }
}

export type TAddr = {
  address: string;
  zonecode: string;
};

export enum CardType {
  LARGE,
  SMALL,
}
