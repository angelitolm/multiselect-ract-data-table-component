import React from "react";
import "./styles.css";
import data from "./sampleMovieData";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Director",
    selector: "director",
    sortable: true
  },
  {
    name: "Year",
    selector: "year",
    sortable: true
  }
];

export default function App() {
  return (
    <div className="App">
        <DataTable
          title="Arnold Movies"
          columns={columns}
          data={data}
          selectableRows
          pagination
        />
    </div>
  );
}
