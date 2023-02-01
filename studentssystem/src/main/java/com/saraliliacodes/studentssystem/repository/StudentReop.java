package com.saraliliacodes.studentssystem.repository;

import com.saraliliacodes.studentssystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentReop  extends JpaRepository<Student,Integer> {
}

