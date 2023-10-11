package hu.progmatic.chat.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@AllArgsConstructor
public class PageController {

    @GetMapping({"","/","/home"})
    public String getHome(){
        return "home";
    }
}
