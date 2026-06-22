// package com.demo.notification.service;

// import com.demo.notification.dto.SupplierEvent;
// import com.fasterxml.jackson.databind.ObjectMapper;

// import org.springframework.amqp.rabbit.annotation.RabbitListener;
// import org.springframework.stereotype.Service;

// @Service
// public class RabbitMQConsumer {

//     private final ObjectMapper mapper =
//         new ObjectMapper();

//     @RabbitListener(
//         queues = "notification_queue"
//     )
//     public void receiveMessage(
//         String message
//     ) throws Exception {

//         SupplierEvent event =
//             mapper.readValue(
//                 message,
//                 SupplierEvent.class
//             );

//         System.out.println(
//             "Received Event: "
//                 + event.getEvent()
//         );

//         System.out.println(
//             "Supplier: "
//                 + event.getSupplierName()
//         );
//     }
// }
package com.demo.notification.service;

import com.demo.notification.dto.SupplierEvent;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQConsumer {

    private final ObjectMapper mapper =
            new ObjectMapper();

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @RabbitListener(
            queues = "notification_queue"
    )
    public void receiveMessage(
            String message
    ) throws Exception {

        SupplierEvent event =
                mapper.readValue(
                        message,
                        SupplierEvent.class
                );

        System.out.println(
                "Received Event: "
                        + event.getEvent()
        );

        System.out.println(
    "Sending to WebSocket..."
);

messagingTemplate.convertAndSend(
    "/topic/notifications/1",
    event
);

        // messagingTemplate.convertAndSend(
        //         "/topic/notifications",
        //         event
        // );
//         messagingTemplate.convertAndSend(
//     "/topic/notifications/1",
//     event
// );
    }
}