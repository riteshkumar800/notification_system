package com.demo.notification.controller;

import com.demo.notification.entity.Notification;
import com.demo.notification.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.demo.notification.dto.NotificationMessage;
@RestController
@RequestMapping("/notifications")
public class HomeController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public String home() {
        return "Spring Boot is running successfully!";
    }

    @PostMapping
    public Notification createNotification(@RequestBody Notification notification) {
        return notificationService.saveNotification(notification);
    }

    @GetMapping("/all")
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    @DeleteMapping("/{id}")
public String deleteNotification(@PathVariable Long id) {
    notificationService.deleteNotification(id);
    return "Notification deleted successfully!";
}

@PutMapping("/{id}")
public Notification updateNotification(
        @PathVariable Long id,
        @RequestBody Notification notification) {

    return notificationService.updateNotification(id, notification);
}


@PostMapping("/send")
public String sendNotification(
        @RequestBody NotificationMessage message
) {

    notificationService.sendRealtimeNotification(message);

    return "Notification sent!";
}
}