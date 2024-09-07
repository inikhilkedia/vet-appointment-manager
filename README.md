# Vet Appointment Manager

This is a **Vet Appointment Manager** app built with React. It helps users manage veterinary appointments for pets by adding, searching, sorting, and deleting appointments. The data includes details about the pet, its owner, the appointment time, and notes.

![Screenshot from the PayInfo Page](/vet-appt-manager-screenshot.png)

## Features

- **Add Appointments**: Users can add new appointments with details like owner name, pet name, appointment date, time, and notes.
- **Search Appointments**: Users can search through appointments by pet name, owner name, or appointment notes.
- **Sort Appointments**: Appointments can be sorted by pet name, owner name, or appointment date in ascending or descending order.
- **Delete Appointments**: Users can delete appointments that are no longer needed.

## Project Structure

```
├── public/
│   ├── data.json               # Sample appointment data
├── src/
│   ├── components/
│   │   ├── AddAppointment.js   # Component for adding new appointments
│   │   ├── AppointmentInfo.js  # Component for displaying appointment details
│   │   ├── Search.js           # Component for searching and sorting appointments
│   ├── App.js                  # Main App component
│   ├── index.js                # Main entry point for React app
└── craco.config.js             # CRACO configuration for handling Webpack and Babel
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/vet-appointment-manager.git
   cd vet-appointment-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Add an Appointment**:
   - Click on the "Add Appointment" button.
   - Fill out the form with details like the pet name, owner name, appointment date, and notes.
   - Submit the form to add the appointment.

2. **Search Appointments**:
   - Use the search bar to filter appointments by pet name, owner name, or notes.

3. **Sort Appointments**:
   - Click on the "Sort By" button to sort by pet name, owner name, or appointment date.
   - Choose whether to sort in ascending or descending order.

4. **Delete Appointments**:
   - Click the trash icon next to an appointment to delete it.

## Sample Data

The app uses sample data from the `public/data.json` file to load pre-existing appointments. Here's an example of an appointment from the file:

```json
{
  "id": "0",
  "petName": "Pepe",
  "ownerName": "Reggie Tupp",
  "aptNotes": "It's time for this rabbit's post spaying surgery checkup",
  "aptDate": "2018-11-28 13:30"
}
```

## Dependencies

- **React**: Frontend library for building user interfaces.
- **Tailwind CSS**: For styling the components.
- **Lodash**: Used for debouncing the search input.
- **Date-fns**: For handling date formatting and parsing.
- **React Icons**: For icons in the app.

## Configuration

- The app is configured using **CRACO** (Create React App Configuration Override) for Webpack and Babel customizations.

## Contributions

Feel free to fork this project and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License.

## Full Disclosure

This app was build while learning on Linkedin Learning.
