import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ImageRenderer from "./ImageRenderer";

const PokemonList = ({ pokemons }) => {
  const [columnDefs] = useState([
    {
      field: "Name",
      sortable: true,
    },
    {
      field: "Image",
      cellRenderer: ImageRenderer,
    },
    {
      field: "Type",
    },
    {
      field: "HP",
      sortable: true,
    },
    {
      field: "Attack",
      sortable: true,
    },
    {
      field: "Deffense",
      sortable: true,
    },
    {
      field: "Speed",
      sortable: true,
    },
  ]);

  const [rowData, setRowData] = useState("");
  useEffect(() => {
    setRowData(
      pokemons.map((item) => ({
        Name: item.name,
        Image: item.sprites.front_default,
        Type: item.types[0].type.name,
        HP: item.stats[0].base_stat,
        Attack: item.stats[1].base_stat,
        Deffense: item.stats[2].base_stat,
        Speed: item.stats[5].base_stat,
      }))
    );
  }, [pokemons]);

  return (
    <>
      {!pokemons ? (
        ""
      ) : (
        <div>
          <div className="pokemon-table">Pokemon Comapre</div>
          <div className="ag-theme-alpine">
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              rowHeight={100}
            ></AgGridReact>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonList;
