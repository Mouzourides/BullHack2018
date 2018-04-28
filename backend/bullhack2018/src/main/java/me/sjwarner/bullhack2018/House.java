package me.sjwarner.bullhack2018;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.UUID;

@Entity
public class House implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String address;
    private String photo;
    private String description;
    private double latitude;
    private double longitude;
    private double price;

    protected House() {}

    public House(String address, String photo, String description, double latitude, double longitude, double price) {
        this.address = address;
        this.photo = photo;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.price = price;
    }

    public UUID getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public String getPhoto() {
        return photo;
    }

    public String getDescription() {
        return description;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public double getPrice() {
        return price;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%s, address='%s', photo='%s', description='%s', latitude=%s, longitude=%s, price=%s]",
                id, address, photo, description, latitude, longitude, price
        );
    }

}
