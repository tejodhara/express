const { json } = require("express/lib/response");
const employeeModel = require("../models/employees.js");
const departmentModel = require("../models/department.js");
const addressModel = require("../models/empaddress.js");

const savEmployeeData = async (req, res, next) => {
  const { ename, salary, gender, department, address } = req.body;

  try {
    const emp = new employeeModel({
      ename,
      salary,
      gender,
      address: [],
    });

    const employeeData = await emp.save();

    const dept = new departmentModel({  
      depname: department.depname,
      depno: department.depno,
      empid: employeeData._id,
    });

    const departmentData = await dept.save();

    for (let i = 0; i < address.length; i++) {
      const add = new addressModel({
        drno: address[i].drno,
        street: address[i].street,
        area: address[i].area,
        pin: address[i].pin,
        empid: employeeData._id,
      });
       
      try {
        const addressData = await add.save();
        console.log(addressData);
        employeeModel.findOne(
          { _id: employeeData._id },
          async (err, employee) => {
            if (employee) {
              employee.address.push(addressData._id);
              await employee.save();
              console.log("i",i);
              console.log(address.length);
              if (i === address.length - 1) {
                res.json({
                  error: false,
                  message: "Employeed Data Addewdc Succefull",
                  data: employee,
                });
              }
            } else {
              res.json({
                error: true,
                message: "Employee Did not found",
                data: null,
              });
            }
          }
        );
      } catch (err) {
        next(err);
      }
    }
  } catch (err) {
    next(err);
  }
};

const fetchDataBasedOnDeparment = async (req, res, next) => {
  const { empid } = req.body;

  try {
    const employeeData = await departmentModel
      .findOne({ empid })
      .populate("empid");
    res.json({
      error: false,
      message: "Fetched Successfull",
      data: employeeData,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  savEmployeeData,
  fetchDataBasedOnDeparment,
};
