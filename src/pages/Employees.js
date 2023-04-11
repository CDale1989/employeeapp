import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 10520,
      name: "Cory",
      role: "Developer",
      servicearea: "Hickory",
      img: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10521,
      name: "Rich",
      role: "Supervisor",
      servicearea: "Hickory",
      img: "https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10522,
      name: "Tom",
      role: "Manager",
      servicearea: "All",
      img: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10523,
      name: "Jorge",
      role: "Technician",
      servicearea: "Morganton",
      img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10524,
      name: "Josh",
      role: "Termite specialist",
      servicearea: "All",
      img: "https://images.pexels.com/photos/12895278/pexels-photo-12895278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10525,
      name: "John",
      role: "Technician",
      servicearea: "Lenoir",
      img: "https://images.pexels.com/photos/4667180/pexels-photo-4667180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);
  function updateEmployee(id, newName, newRole, newServiceArea) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return {
          ...employee,
          name: newName,
          role: newRole,
          servicearea: newServiceArea,
        };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, servicearea, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      servicearea: servicearea,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;

  return (
    <div className="">
      
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  name={employee.name}
                  role={employee.role}
                  servicearea={employee.servicearea}
                  id={employee.id}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  servicearea={employee.servicearea}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see employees</p>
      )}
    </div>
  );
}

export default Employees;
