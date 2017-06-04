package com.up.skill.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by JPMC-B2-PC03 on 09/05/2017.
 */
public interface FormInterface extends JpaRepository<Form, Long>{
    Form findByEmail(String email);
    Form findByUsername(String username);
}
