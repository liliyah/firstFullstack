package com.saraliliacodes.studentssystem.service;

import com.saraliliacodes.studentssystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> studentsList();

}
