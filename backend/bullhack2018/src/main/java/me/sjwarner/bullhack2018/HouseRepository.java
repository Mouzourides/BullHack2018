package me.sjwarner.bullhack2018;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepository extends CrudRepository<House, Long> {
}
