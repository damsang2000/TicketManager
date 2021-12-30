export interface TicketFamily {
  key: number;
  STT: number;
  BookingCode: string;
  NumberTicket: number;
  UseStatus: string;
  UseDate: string;
  DateTicket: string;
  GateCheckIn: string;
}
export interface InvokeTickets {
  key: number;
  STT: number;
  NumberTicket: number;
  UseDate: string;
  NameTicket: string;
  GateCheckIn: string;
  Status: string;
}
export interface ServicePacks{
  key:number;
  STT:number;
  CodePack:string;
  NamePack:string;
  ApplicableDate:string;
  ExpirationDate:string;
  TicketPrice:string;
  ComboPrice:string;
  Status:string;
  Update:string;
}