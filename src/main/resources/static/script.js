// // // const API_URL = "http://localhost:8081/notifications";

// // // async function loadNotifications() {

// // //     const response = await fetch(API_URL + "/all");

// // //     const data = await response.json();

// // //     const container = document.getElementById("notifications");

// // //     container.innerHTML = "";

// // //     data.forEach(notification => {

// // //         container.innerHTML += `
// // //             <div class="notification">
// // //                 <h3>${notification.title}</h3>
// // //                 <p>${notification.message}</p>

// // //                 <button onclick="deleteNotification(${notification.id})">
// // //                     Delete
// // //                 </button>
// // //             </div>
// // //         `;
// // //     });
// // // }

// // // async function addNotification() {

// // //     const title = document.getElementById("title").value;

// // //     const message = document.getElementById("message").value;

// // //     await fetch(API_URL, {

// // //         method: "POST",

// // //         headers: {
// // //             "Content-Type": "application/json"
// // //         },

// // //         body: JSON.stringify({
// // //             title,
// // //             message
// // //         })
// // //     });

// // //     loadNotifications();
// // // }

// // // async function deleteNotification(id) {

// // //     await fetch(API_URL + "/" + id, {
// // //         method: "DELETE"
// // //     });

// // //     loadNotifications();
// // // }

// // // loadNotifications();

// // let stompClient = null;

// // let currentUserId = null;

// // function connectUser() {

// //     currentUserId = document.getElementById("currentUser").value;

// //     const socket = new SockJS('/ws');

// //     stompClient = Stomp.over(socket);

// //     stompClient.connect({}, function () {

// //         console.log("Connected");

// //         document.getElementById("status").innerText =
// //             "WebSocket Connected";

// //         // stompClient.subscribe(
// //         //     '/topic/notifications/' + currentUserId,

// //         //     function (notification) {

// //         //         const data = JSON.parse(notification.body);

// //         //         showNotification(data.message);
// //         //     }
// //         // );
// //         stompClient.subscribe(
// //     '/topic/notifications/1',

// //     // function (notification) {

// //     //     const data = JSON.parse(notification.body);

// //     //     console.log("Notification Received:", data);

// //     //     showNotification(
// //     //         `${data.event} : ${data.supplierName}`
// //     //     );
// //     // }
// //     function(notification) {

// //     console.log(
// //         "NOTIFICATION RECEIVED"
// //     );

// //     console.log(
// //         notification.body
// //     );

// //     const data =
// //         JSON.parse(notification.body);

// //     console.log(data);

// // }
// // );
// //     });
// // }

// // function sendNotification() {

// //     const receiverId =
// //         document.getElementById("targetUserId").value;

// //     const message =
// //         document.getElementById("message").value;

// //     const notification = {

// //         senderId: currentUserId,

// //         receiverId: receiverId,

// //         message: message
// //     };

// //     stompClient.send(
// //         "/app/sendMessage",
// //         {},
// //         JSON.stringify(notification)
// //     );
// // }

// // function showNotification(message) {

// //     const container =
// //         document.getElementById("notifications");

// //     container.innerHTML += `

// //         <div class="notification">
// //             <h3>NEW MESSAGE</h3>
// //             <p>${message}</p>
// //         </div>

// //     `;
// // }
// // //     container.innerHTML += `

// // //         <div class="notification">
// // //             <h3>NEW MESSAGE</h3>
// // //             <p>${message}</p>
// // //         </div>

// // //     `;
// // // }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById("currentUser").value;

//     const socket =
//         new SockJS('/ws');

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect({}, function () {

//         console.log("Connected");

//         document.getElementById("status").innerText =
//             "WebSocket Connected";

//         stompClient.subscribe(
//             '/topic/notifications/1',

//             function(notification) {

//                 console.log(
//                     "NOTIFICATION RECEIVED"
//                 );

//                 console.log(
//                     notification.body
//                 );

//                 const data =
//                     JSON.parse(
//                         notification.body
//                     );

//                 console.log(data);

//                 showNotification(
//                     `${data.event} : ${data.supplierName}`
//                 );
//             }
//         );
//     });
// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById("targetUserId").value;

//     const message =
//         document.getElementById("message").value;

//     const notification = {

//         senderId: currentUserId,

//         receiverId: receiverId,

//         message: message
//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(notification)
//     );
// }

// function showNotification(message) {

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     container.innerHTML += `
//         <div class="notification">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//     `;
// }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById("currentUser").value;

//     const socket =
//         new SockJS('/ws');

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect({}, function () {

//         console.log("Connected");

//         document.getElementById("status").innerText =
//             "WebSocket Connected";

//         stompClient.subscribe(
//             "/topic/notifications/1",

//             function (notification) {

//                 console.log(
//                     "NOTIFICATION RECEIVED"
//                 );

//                 console.log(
//                     notification.body
//                 );

//                 const data =
//                     JSON.parse(
//                         notification.body
//                     );

//                 console.log(data);

//                 showNotification(
//                     `${data.event} : ${data.supplierName}`
//                 );
//             }
//         );
//     });
// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById("targetUserId").value;

//     const message =
//         document.getElementById("message").value;

//     const notification = {

//         senderId: currentUserId,

//         receiverId: receiverId,

//         message: message
//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(notification)
//     );
// }

// function showNotification(message) {

//     console.log(
//         "showNotification called"
//     );

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     console.log(
//         "Container:",
//         container
//     );

//     container.innerHTML += `
//         <div style="
//             background:#1e293b;
//             color:white;
//             padding:12px;
//             margin-top:10px;
//             border-radius:8px;
//             border-left:5px solid #22c55e;
//         ">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//     `;
// }
// let stompClient = null;

// let currentUserId = null;

// function connectUser() {

//     currentUserId =
//         document.getElementById("currentUser").value;

//     const socket =
//         new SockJS('/ws');

//     stompClient =
//         Stomp.over(socket);

//     stompClient.connect({}, function () {

//         console.log("Connected");

//         document.getElementById("status").innerText =
//             "WebSocket Connected";

//         stompClient.subscribe(
//             "/topic/notifications/1",

//             function (notification) {

//                 console.log(
//                     "NOTIFICATION RECEIVED"
//                 );

//                 console.log(
//                     notification.body
//                 );

//                 const data =
//                     JSON.parse(
//                         notification.body
//                     );

//                 console.log(data);

//                 // const entityName =
//                 //     data.supplierName ||
//                 //     data.storeName ||
//                 //     data.employeeName ||
//                 //     data.materialName ||
//                 //     data.manufacturerName ||
//                 //     "Unknown";

//                 // showNotification(
//                 //     `${data.event} : ${entityName}`
//                 // );
//                 const entityName =
//     data.employeeName ||
//     data.materialName ||
//     data.supplierName ||
//     data.storeName ||
//     "Unknown";

// const eventText =
//     data.event
//         .replaceAll("_", " ");

// showNotification(
//     `${eventText} : ${entityName}`
// );
//             }
//         );
//     });
// }

// function sendNotification() {

//     const receiverId =
//         document.getElementById("targetUserId").value;

//     const message =
//         document.getElementById("message").value;

//     const notification = {

//         senderId: currentUserId,

//         receiverId: receiverId,

//         message: message
//     };

//     stompClient.send(
//         "/app/sendMessage",
//         {},
//         JSON.stringify(notification)
//     );
// }

// function showNotification(message) {

//     console.log(
//         "showNotification called"
//     );

//     const container =
//         document.getElementById(
//             "notifications"
//         );

//     console.log(
//         "Container:",
//         container
//     );

//     container.innerHTML =
//         `
//         <div style="
//             background:#1e293b;
//             color:white;
//             padding:12px;
//             margin-top:10px;
//             border-radius:8px;
//             border-left:5px solid #22c55e;
//         ">
//             <h3>NEW EVENT</h3>
//             <p>${message}</p>
//         </div>
//         `
//         +
//         container.innerHTML;

//     // Keep only latest 10 notifications

//     const notifications =
//         container.children;

//     while (
//         notifications.length > 10
//     ) {
//         container.removeChild(
//             notifications[
//                 notifications.length - 1
//             ]
//         );
//     }
// }
let stompClient = null;

let currentUserId = null;

function connectUser() {

    currentUserId =
        document.getElementById(
            "currentUser"
        ).value;

    const socket =
        new SockJS("/ws");

    stompClient =
        Stomp.over(socket);

    stompClient.connect(
        {},
        function () {

            console.log(
                "Connected"
            );

            document.getElementById(
                "status"
            ).innerText =
                "WebSocket Connected";

            stompClient.subscribe(
                "/topic/notifications/1",

                function (
                    notification
                ) {

                    console.log(
                        "NOTIFICATION RECEIVED"
                    );

                    console.log(
                        notification.body
                    );

                    const data =
                        JSON.parse(
                            notification.body
                        );

                    console.log(
                        data
                    );

                    const entityName =

                        data.employeeName ||

                        data.materialName ||

                        data.manufacturerName ||

                        data.supplierName ||

                        data.storeName ||

                        "Unknown";

                    const eventText =
                        data.event
                            .replaceAll(
                                "_",
                                " "
                            );

                    showNotification(
                        `${eventText} : ${entityName}`
                    );

                }
            );

        }
    );

}

function sendNotification() {

    const receiverId =
        document.getElementById(
            "targetUserId"
        ).value;

    const message =
        document.getElementById(
            "message"
        ).value;

    const notification = {

        senderId:
            currentUserId,

        receiverId:
            receiverId,

        message:
            message

    };

    stompClient.send(
        "/app/sendMessage",
        {},
        JSON.stringify(
            notification
        )
    );

}

function showNotification(
    message
) {

    console.log(
        "showNotification called"
    );

    const container =
        document.getElementById(
            "notifications"
        );

    container.innerHTML =

        `
        <div style="
            background:#1e293b;
            color:white;
            padding:12px;
            margin-top:10px;
            border-radius:8px;
            border-left:5px solid #22c55e;
        ">
            <h3>NEW EVENT</h3>
            <p>${message}</p>
        </div>
        `

        +

        container.innerHTML;

    const notifications =
        container.children;

    while (
        notifications.length > 10
    ) {

        container.removeChild(
            notifications[
                notifications.length - 1
            ]
        );

    }

}