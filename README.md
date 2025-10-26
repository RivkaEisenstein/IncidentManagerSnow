# IncidentManagerSnow

IncidentManagerSnow is an **Incident Manager application for ServiceNow** designed to streamline the process of tracking, managing, and resolving IT incidents. Built primarily with JavaScript and TypeScript, it leverages modern web technologies to deliver a robust and user-friendly experience.

## Features

- **Incident Tracking**: Log, view, and update incidents with detailed information.
- **Status Management**: Assign, prioritize, and change statuses for incidents.
- **Customizable Workflows**: Adapt workflows to fit your organization's incident response process.
- **User Notifications**: Automated notifications for incident changes and updates.
- **Responsive Design**: Works across desktop and mobile devices.
- **Integration-ready**: Designed to integrate with ServiceNow and other ITSM systems.

## Tech Stack

- **JavaScript** (49.2%)
- **TypeScript** (38.3%)
- **CSS** (11.7%)
- **HTML** (0.8%)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RivkaEisenstein/IncidentManagerSnow.git
   cd IncidentManagerSnow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```plaintext
├── src/
│   ├── components/      # React components and UI elements
│   ├── services/        # API logic, integration modules
│   ├── utils/           # Helper functions and utilities
│   ├── styles/          # CSS stylesheets
│   └── index.tsx        # Entry point
├── public/              # Static HTML and assets
├── package.json         # Dependencies and scripts
```

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a pull request.

Please follow TypeScript/JavaScript conventions and optimize for maintainable, scalable code. Reference [ServiceNow documentation](https://docs.servicenow.com/) for integration guidelines.

## License

MIT

## References

- [ServiceNow Documentation](https://docs.servicenow.com/)
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
