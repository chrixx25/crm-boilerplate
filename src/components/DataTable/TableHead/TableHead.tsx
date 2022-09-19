import { useId } from "react";

import TableCell from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

// eslint-disable-next-line import/extensions
import { useDataTableContext } from "../context";

const TableHead = (): React.ReactElement => {
  const { headerGroups } = useDataTableContext();
  const uniqueId = useId();

  return (
    <MuiTableHead>
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={uniqueId}>
            {headerGroup.headers.map((column: any) => (
              <TableCell
                {...(column.id === "selection"
                  ? column.getHeaderProps()
                  : column.getHeaderProps(column.getSortByToggleProps()))}
                key={column.id}
              >
                {column.render("Header")}
                {column.canSort && column.id !== "selection" && (
                  <TableSortLabel
                    key={column.id}
                    active={column.isSorted}
                    direction={column.isSortedDesc ? "desc" : "asc"}
                  />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
    </MuiTableHead>
  );
};

export default TableHead;
