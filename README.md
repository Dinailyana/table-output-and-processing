# table-output-and-processing
using papaparse and live server

## Technologies Used

- **[PapaParse](https://www.papaparse.com/) (https://cdnjs.com/libraries/PapaParse)** for reading and parsing the CSV file in the browser.
- **Live Server** (VS Code extension) for testing and previewing the website locally.
- **HTML, JavaScript, and GitHub Pages** for deployment.

## Features

- Table 1: Displays the original data from a CSV file (`Table_Input.csv`).
- Table 2: Shows processed data:
  - Alpha = A5 + A20
  - Beta = A15 / A7
  - Charlie = A13 * A12

## How to Run Locally

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Right-click `output_processing.html` and choose **"Open with Live Server"**.


## Files

- `index.html` – Main webpage
- `script.js` – JavaScript for loading and processing CSV
- `Table_Input.csv` – Data source
- `README.md` – info page

## Notes

- Make sure the CSV file stays in the same directory as `output_processing.html`.
- Tested only with modern browsers (Chrome recommended).

