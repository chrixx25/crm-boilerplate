import type { TablePaginationActionsProps } from "./types";

import Pagination from "@mui/material/Pagination";

const TablePaginationActions = (
  props: TablePaginationActionsProps
): React.ReactElement => {
  const { count, page, rowsPerPage, onPageChange } = props;
  const totalPages = Math.ceil(count / rowsPerPage);
  const currentPage = page + 1;

  return (
    <Pagination
      color="primary"
      shape="rounded"
      count={totalPages}
      page={currentPage}
      onChange={onPageChange}
    />
  );
};

export default TablePaginationActions;
