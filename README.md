# Team Schedule Web Application for Mavericks Front Office

A team schedule web application specifically designed for the Mavericks front office executives. This React-based application presents a sleek, user-friendly interface to browse through the team's game schedule, offering detailed insights into each game with a focus on adaptability across various devices, including laptops, tablets, and phones.

Project Features:
Dynamic Schedule Viewing: The core of the application is a team schedule page that lists 3 key games. Users can interactively click on any game to navigate to a detailed page that offers in-depth information about the selected game.

Game Status Indication: Recognizing the importance of real-time updates, each game is marked with its current status: not started (1), in progress (2), or completed (3). This feature allows executives to quickly grasp the state of each game, with customized information displayed based on the game's status.

Material UI Integration: Leveraging Material UI components, the application boasts a modern and intuitive design. This choice ensures a responsive and accessible UI, enhancing the overall user experience.

Interactive Data Display: A notable functionality includes an input mechanism that alters displayed data. For instance, users can switch between season total stats and per game stats, providing flexibility in data analysis.

Scouting Report Management: Executives can add new scouting reports through a simple form. These reports are immediately reflected in the list of available scouting reports for the current session, encouraging active engagement with the application's content.

Data-Driven Architecture: At its heart, the application is built to be data-driven. The project simulates fetching data from an API by converting JSON data into an object within the project. This approach ensures that if the data source is swapped or updated, the application remains functional and relevant.
