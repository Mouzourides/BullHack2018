package me.sjwarner.bullhack2018;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.UUID;

@Controller
@RequestMapping(path="/bullhack2018/swipe")
public class SwipeController {
    @Autowired
    private SwipeRepository swipeRepository;

    @RequestMapping("/add")
    public @ResponseBody String addNewSwipe (@RequestParam UUID userId,
                                             @RequestParam UUID houseId,
                                             @RequestParam boolean match) {
        Swipe swipe = new Swipe(userId,
                                houseId,
                                match);

        swipeRepository.save(swipe);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Swipe> getAllUsers() {
        return swipeRepository.findAll();
    }
}
