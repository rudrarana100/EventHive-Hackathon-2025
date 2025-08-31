package com.example.EventManagementApplication.controller;

import com.example.EventManagementApplication.entity.User;
import com.example.EventManagementApplication.service.UserService;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    // Serve static HTML pages
    @GetMapping("/register")
    public String showRegisterPage() {
        return "register.html";
    }

    @GetMapping("/login")
    public String showLoginPage() {
        return "ogin.html";
    }

    @PostMapping("/registerUser")
    public RedirectView registerUser(@RequestParam String name,
                                     @RequestParam String email,
                                     @RequestParam String password,
                                     @RequestParam String role) throws Exception {
        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        user.setRole(role);
        userService.register(user);
        return new RedirectView("/auth/login");
    }

    @PostMapping("/loginUser")
    public ResponseEntity<String> loginUser(@RequestParam String email,
                                            @RequestParam String password) throws Exception {
        User user = userService.login(email, password);
        return ResponseEntity.ok("Welcome " + user.getName() + "! Your role is " + user.getRole());
    }

    @GetMapping("/qr")
    public ResponseEntity<byte[]> generateQRCode(@RequestParam String text) throws WriterException, IOException {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, 300, 300);

        ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutputStream);
        byte[] qrCodeImage = pngOutputStream.toByteArray();

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=qr.png")
                .contentType(MediaType.IMAGE_PNG)
                .body(qrCodeImage);
    }
}
