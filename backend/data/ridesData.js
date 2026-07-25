const ridesData = [
  // OLA
  { provider: 'Ola', color: '#00c6ff', icon: '🚗', type: 'car',  name: 'Ola Prime Sedan', basePrice: 180, pricePerKm: 14, eta: 3, surge: false },
  { provider: 'Ola', color: '#00c6ff', icon: '🛺', type: 'auto', name: 'Ola Auto',         basePrice: 40,  pricePerKm: 9,  eta: 5, surge: false },
  { provider: 'Ola', color: '#00c6ff', icon: '🏍️', type: 'bike', name: 'Ola Bike',         basePrice: 25,  pricePerKm: 6,  eta: 2, surge: false },
  { provider: 'Ola', color: '#00c6ff', icon: '🚙', type: 'car',  name: 'Ola Share',        basePrice: 60,  pricePerKm: 8,  eta: 8, surge: false },

  // UBER
  { provider: 'Uber', color: '#ffffff', icon: '🚗', type: 'car',  name: 'UberGo',       basePrice: 170, pricePerKm: 13,   eta: 4, surge: false },
  { provider: 'Uber', color: '#ffffff', icon: '🚗', type: 'car',  name: 'Uber Premier', basePrice: 220, pricePerKm: 17,   eta: 6, surge: false },
  { provider: 'Uber', color: '#ffffff', icon: '🏍️', type: 'bike', name: 'Uber Moto',    basePrice: 22,  pricePerKm: 5.5,  eta: 2, surge: false },
  { provider: 'Uber', color: '#ffffff', icon: '🛺', type: 'auto', name: 'Uber Auto',    basePrice: 38,  pricePerKm: 8.5,  eta: 4, surge: true  },

  // RAPIDO
  { provider: 'Rapido', color: '#ffcc00', icon: '🏍️', type: 'bike', name: 'Rapido Bike', basePrice: 18,  pricePerKm: 5,  eta: 1, surge: false },
  { provider: 'Rapido', color: '#ffcc00', icon: '🛺', type: 'auto', name: 'Rapido Auto', basePrice: 35,  pricePerKm: 8,  eta: 3, surge: false },
  { provider: 'Rapido', color: '#ffcc00', icon: '🚗', type: 'car',  name: 'Rapido Cab',  basePrice: 160, pricePerKm: 12, eta: 5, surge: false },
];

module.exports = ridesData;