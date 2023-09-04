package com.swapnild.Employee.services;

import com.swapnild.Employee.entity.EmployeeEntity;
import com.swapnild.Employee.model.Employee;
import com.swapnild.Employee.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    private final EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
     List<EmployeeEntity> employeeEntities
             = employeeRepository.findAll();

     List<Employee> employees;
        employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                         emp.getId(),
                         emp.getFirstName(),
                         emp.getLastName(),
                         emp.getEmailId()))
                .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
                return true;
    }


}


