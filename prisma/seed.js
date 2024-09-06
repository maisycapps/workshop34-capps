const prisma = require("../prisma");

const seed = async () => {
  // Customers x 4
  const createCustomers = async () => {
    const customers = [
      { name: "Pringle" },
      { name: "Gary" },
      { name: "Shard Stevens" },
      { name: "Big Dave" },
    ];
    await prisma.customer.createMany({ data: customers });
    };

  // Restaurants x 3
  const createRestaurants = async () => {
    const restaurants = [
      { name: "Musso & Frank" },
      { name: "Dan Sung Sa" },
      { name: "La Playita" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
    };

  // Reservations x 3
  const createReservations = async () => {
    const reservations = [
      { customerId: 1, restaurantId: 1, date: new Date("2024-07-01"), partyCount: 4 },
      { customerId: 2, restaurantId: 2, date: new Date("2024-07-02"), partyCount: 2 },
      { customerId: 3, restaurantId: 3, date: new Date("2024-07-03"), partyCount: 6 },
    ];
    await prisma.reservation.createMany({ data: reservations });
    };

    await createCustomers()
    await createRestaurants()
    await createReservations()
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });