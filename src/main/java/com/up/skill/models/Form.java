package com.up.skill.models;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;

/**
 * Created by JPMC-B2-PC03 on 09/05/2017.
 */

@Entity
@Table(name = "users")
public class Form {

    private static final String NOT_BLANK_MESSAGE = "{notBlank.message}";
    private static final String EMAIL_MESSAGE = "{emailNotBlank.message}";
    private static final String VALID_EMAIL_MESSAGE = "{emailValidation.message}";

    @Id
    @GeneratedValue
    private Long id;

    @NotBlank(message = Form.NOT_BLANK_MESSAGE)
    private String username;

    @NotBlank(message = Form.EMAIL_MESSAGE)
    @Email(message = Form.VALID_EMAIL_MESSAGE)
    private String email;
    private Instant created;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }

}
