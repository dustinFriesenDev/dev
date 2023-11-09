package com.fullstack.studentregistry.service;

import com.fullstack.studentregistry.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
