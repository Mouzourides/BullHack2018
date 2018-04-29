package me.sjwarner.bullhack2018;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.UUID;

@Controller
@RequestMapping(path="/bullhack2018/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/add")
    public @ResponseBody String addNewUser (@RequestParam String name,
                                             @RequestParam String email,
                                             @RequestParam String password) {

        User user = new User(name, email, password);

        userRepository.save(user);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }
}
