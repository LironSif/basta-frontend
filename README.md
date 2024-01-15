
# BSTA Frontend Application

Welcome to the frontend repository of the BSTA application. In this project, our focus has been on crafting an intuitive design, implementing data fetching, and establishing a seamless connection with the backend application.

## Key Components

1. **Building Components:** We've meticulously designed various components including Navbar, Shop cards, Item cards, a recording mic, and a geolocation feature.

2. **Two-Party Interface:** The application provides distinct interfaces for users and BSTA owners. The home page features two buttons directing users to their respective routes:

   - *User/Consumer Interface:* Users are directed to the Shops page, displaying nearby shops in a grid/list style. Users can easily identify open BSTAs and freely explore each shop. Upon entering a specific shop, users can view listed items and access accurate booth locations through the Google Maps API.

   - *Booth Owner Interface:* BSTA owners are redirected to an instructional page with an infographic video on app usage. The process involves:

     - Clicking the mic to name the booth and list the number and prices of products for the day.
     - OpenAI plugin converts the spoken words into text, creating distinct cards for each item.
     - After hitting "stop recording," the app fetches the owner's location and adds it to the Booth page.
     - The owner is then directed to their dashboard for reviewing and verifying listed items (Simple CRUD page).

## Technology Stack

- **Material UI Libraries:** We utilized Material UI libraries for a consistent and visually appealing design.
- **Axios:** Data fetching was seamlessly handled using Axios.

## Screenshots

[Include Screenshots Here]

Feel free to explore the frontend application, and thank you for being a part of the BSTA community!