package me.sjwarner.bullhack2018;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/bullhack2018")
public class MainController {
    @Autowired
    private HouseRepository houseRepository;

    @GetMapping(path="/add")
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

    @GetMapping(path="/all")
    public @ResponseBody Iterable<House> getAllUsers() {
        return houseRepository.findAll();
    }
}
