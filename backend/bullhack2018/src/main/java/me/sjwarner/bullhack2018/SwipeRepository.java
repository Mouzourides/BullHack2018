package me.sjwarner.bullhack2018;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SwipeRepository extends JpaRepository<Swipe, UUID> {
}
