import EventType from "../types/EventType";

const events: EventType[] = [
  {
    name: 'Summer Social Gathering',
    description: 'Join us for a fun-filled summer social gathering!',
    id: '001',
    image: 'summer_social.jpg',
    qrCode: '123456789',
    type: 'social',
    date: '2023-07-15',
    location: 'Beachside Resort',
  },
  {
    name: 'Football Tournament',
    description: 'Participate in our annual football tournament and showcase your skills!',
    id: '002',
    image: 'football_tournament.jpg',
    qrCode: '987654321',
    type: 'sports',
    date: '2023-08-12',
    location: 'City Stadium',
  },
  {
    name: 'Web Development Workshop',
    description: 'Learn the latest web development techniques in this hands-on workshop.',
    id: '003',
    image: 'web_dev_workshop.jpg',
    qrCode: '456789123',
    type: 'workshop',
    date: '2023-09-05',
    location: 'Tech Hub',
  },
  {
    name: 'Charity Gala Dinner',
    description: 'Support a noble cause by attending our charity gala dinner.',
    id: '004',
    image: 'charity_gala.jpg',
    qrCode: '789123456',
    type: 'social',
    date: '2023-10-20',
    location: 'Grand Ballroom',
  },
  {
    name: 'Basketball Championship',
    description: 'Witness the ultimate basketball championship with intense matchups!',
    id: '005',
    image: 'basketball_championship.jpg',
    qrCode: '654321987',
    type: 'sports',
    date: '2023-11-15',
    location: 'Indoor Arena',
  },
];

export default events;