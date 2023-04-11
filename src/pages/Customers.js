import "../index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddCustomer from "../components/AddCustomer";
import Customer from "../components/Customer";
import EditCustomer from "../components/EditCustomer";

function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "James Peach",
      address: "109 east point dr, Hickory",
      services: "Pest control",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Samantha Patton",
      address: "3108 summerville ln, Hickory",
      services: "Moisture control",
      img: "https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Jesse Smith",
      address: "111 turnip dr, Hickory",
      services: "Sentricons",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Dave Alexander",
      address: "106 windy city rd, Hickory",
      services: "Mosquito control",
      img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Alex Mcdonald",
      address: "901 windy city rd, Hickory",
      services: "Fire ant control",
      img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "John jacobs",
      address: "4465 jacksonville ct, Hickory",
      services: "Pest control",
      img: "https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=400",
    },
  ]);
  function updateCustomer(id, newName, newAddress, newServices) {
    const updatedCustomers = customers.map((customer) => {
      if (id === customer.id) {
        return {
          ...customer,
          name: newName,
          services: newServices,
          address: newAddress,
        };
      }

      return customer;
    });
    setCustomers(updatedCustomers);
  }

  function newCustomer(name, address, services, img) {
    const newCustomer = {
      id: uuidv4(),
      name: name,
      address: address,
      services: services,
      img: img,
    };
    setCustomers([...customers, newCustomer]);
  }

  const showCustomers = true;

  return (
    <div className="App bg-gray-300 min-h-screen ">
      {showCustomers ? (
        <>
          <div className="flex flex-wrap justify-center">
            {customers.map((customer) => {
              const editCustomer = (
                <EditCustomer
                  name={customer.name}
                  address={customer.address}
                  services={customer.services}
                  id={customer.id}
                  updateCustomer={updateCustomer}
                />
              );
              return (
                <Customer
                  key={customer.id}
                  id={customer.id}
                  name={customer.name}
                  services={customer.services}
                  address={customer.address}
                  img={customer.img}
                  editCustomer={editCustomer}
                />
              );
            })}
          </div>
          <AddCustomer newCustomer={newCustomer} />
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default Customers;

