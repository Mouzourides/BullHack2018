package me.sjwarner.bullhack2018;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface HouseRepository extends JpaRepository<House, UUID> {
    @Query(nativeQuery = true, value = "select * from house where description = 'nice house'")
    List<House> getNiceHouse();
}
