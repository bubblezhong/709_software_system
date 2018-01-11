package org.activiti;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Applicant {

    @Id
    @GeneratedValue
    private Long id;

	private String name;

    private String type;

    private String phoneNumber;

    public Applicant() {

    }

    public Applicant(String name, String type, String phoneNumber) {
        this.name = name;
        this.type = type;
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}