const API_URL = "http://localhost:8081/notifications";

async function loadNotifications() {

    const response = await fetch(API_URL + "/all");

    const data = await response.json();

    const container = document.getElementById("notifications");

    container.innerHTML = "";

    data.forEach(notification => {

        container.innerHTML += `
            <div class="notification">
                <h3>${notification.title}</h3>
                <p>${notification.message}</p>

                <button onclick="deleteNotification(${notification.id})">
                    Delete
                </button>
            </div>
        `;
    });
}

async function addNotification() {

    const title = document.getElementById("title").value;

    const message = document.getElementById("message").value;

    await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title,
            message
        })
    });

    loadNotifications();
}

async function deleteNotification(id) {

    await fetch(API_URL + "/" + id, {
        method: "DELETE"
    });

    loadNotifications();
}

loadNotifications();