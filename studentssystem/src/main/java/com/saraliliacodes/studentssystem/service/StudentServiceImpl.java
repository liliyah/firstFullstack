package com.saraliliacodes.studentssystem.service;

import com.saraliliacodes.studentssystem.model.Student;
import com.saraliliacodes.studentssystem.repository.StudentReop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl  implements  StudentService{
    @Autowired
    private StudentReop studentReop;


    @Override
    public Student saveStudent(Student student) {
        return studentReop.save(student);
    }

    @Override
    public List<Student> studentsList() {
        return studentReop.findAll();
    }
}
