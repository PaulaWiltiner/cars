import  client  from "../config/dbprisma";

async function getCars() {
  const data = await client.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const result = await client.cars.findUnique({
    where: {
      id
    }
  })
  
  return result;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const result = await client.cars.findUnique({
    where: {
      licensePlate
    }
  })
  
  return result;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await client.cars.create({
    data:{ 
      model,
      licensePlate,
      year: year+"",
      color
    }
  });
}

async function deleteCar(id: number) {
  await client.cars.delete({
    where: {
      id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;