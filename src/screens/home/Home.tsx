import React, { useState, useMemo } from "react";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useModal } from "mui-modal-provider";

import DataTable from "@/components/DataTable";
import { useGetContacts } from "@/react-query/queries";
import PageHeader from "@/components/PageHeader";

import ActionCell from "./action-cell";
import AddUserModal from "./add-user-modal";

const Home = (): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const userData = useGetContacts({ page, pageSize });
  const { showModal } = useModal();

  const columns = useMemo(
    () => [
      {
        Header: "#",
        id: "id",
        accessor: (_row, index) => index + 1,
      },
      {
        Header: "Fullname",
        id: "fullname",
        accessor: (row) =>
          `${row.firstName} ${row.middleName} ${row.lastName}`.trim(),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Mobile No.",
        accessor: "mobileNo",
      },
      {
        Header: "Actions ",
        id: "action",
        sticky: "right",
        disableSortBy: true,
        Cell: ActionCell,
      },
    ],
    []
  );

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (newPageSize: number): void => {
    setPage(1);
    setPageSize(newPageSize);
  };

  return (
    <>
      <Stack spacing={3}>
        <PageHeader
          title="Users"
          RefreshProps={{
            onClick: userData.refetch,
            disabled: userData.isRefetching,
          }}
        >
          <Button
            sx={{ ml: 2 }}
            startIcon={<AddIcon />}
            onClick={() => showModal(AddUserModal)}
          >
            Add New
          </Button>
        </PageHeader>
        <DataTable
          data={userData.data.results}
          columns={columns}
          currentPage={userData.data.page}
          pageSize={userData.data.size}
          totalPages={userData.data.pages}
          totalRecords={userData.data.total}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Stack>
    </>
  );
};

export default Home;
