package me.sjwarner.bullhack2018;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.UUID;

@Entity
public class Swipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private UUID userId;
    private UUID houseId;
    private boolean match;

    public Swipe() {
        // for JPA
    }

    public Swipe(UUID userId, UUID houseId, boolean match) {
        this.userId = userId;
        this.houseId = houseId;
        this.match = match;
    }

    public UUID getId() {
        return id;
    }

    public UUID getUserId() {
        return userId;
    }

    public UUID getHouseId() {
        return houseId;
    }

    public boolean isMatch() {
        return match;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public void setHouseId(UUID houseId) {
        this.houseId = houseId;
    }

    public void setMatch(boolean match) {
        this.match = match;
    }
}
