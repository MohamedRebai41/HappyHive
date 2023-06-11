type EventType={
  name: string;
  description: string;
  id: string;
  image: string;
  qrCode: string;
  type: 'social' | 'sports' | 'workshop';
  date: string;
  location: string;
}

export default EventType;