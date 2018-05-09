package me.sjwarner.bullhack2018;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping(path="/bullhack2018/house")
public class HouseController {
    @Autowired
    private HouseRepository houseRepository;

    @RequestMapping("/add")
    public @ResponseBody String addNewHouse (@RequestParam String address,
                                             @RequestParam String photo,
                                             @RequestParam String description,
                                             @RequestParam double latitude,
                                             @RequestParam double longitude,
                                             @RequestParam double price) {
        House house = new House(address,
                                photo,
                                description,
                                latitude,
                                longitude,
                                price);

        houseRepository.save(house);
        return "Saved";
    }


    @GetMapping(path="/nice-house")
    public @ResponseBody
    List<House> getNiceHouse() {
        return houseRepository.getNiceHouse();
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<House> getAllHouses() {
        return houseRepository.findAll();
    }
}
