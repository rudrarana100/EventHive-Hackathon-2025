package com.example.EventManagementApplication.service;

import com.example.EventManagementApplication.entity.User;
import com.example.EventManagementApplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User register(User user) throws Exception {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new Exception("Email already exists");
        }
        return userRepository.save(user);
    }

    public User login(String email, String password) throws Exception {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        throw new Exception("Invalid email or password");
    }
}
