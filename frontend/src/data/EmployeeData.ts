import Employee from "../types/EmployeeType";
export const employees: Employee[] = [
  {
    photo: 'employee.jpg',
    fullName: 'John Doe',
    id: '001',
    score: 100,
    currency: 'USD',
    email: 'johndoe@example.com',
    post: 'Software Developer',
  },
  {
    photo: 'employee2.jpg',
    fullName: 'Jane Smith',
    id: '002',
    score: 95,
    currency: 'EUR',
    email: 'janesmith@example.com',
    post: 'Product Manager',
  },
  {
    photo: 'employee.jpg',
    fullName: 'Michael Johnson',
    id: '003',
    score: 80,
    currency: 'GBP',
    email: 'michaeljohnson@example.com',
    post: 'Marketing Specialist',
  },
  {
    photo: 'employee.jpg',
    fullName: 'Emily Davis',
    id: '004',
    score: 50,
    currency: 'USD',
    email: 'emilydavis@example.com',
    post: 'Graphic Designer',
  },
  {
    photo: 'employee.jpg',
    fullName: 'David Wilson',
    id: '005',
    score: 10,
    currency: 'CAD',
    email: 'davidwilson@example.com',
    post: 'Data Analyst',
  },
];

export default employees;