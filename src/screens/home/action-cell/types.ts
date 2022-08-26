import { ContactByIdResponse } from "apis/contacts/types";

export interface ActionCellProps {
  id: string;
  firstName: string;
  initialState: {
    page: number;
    pageSize: number;
    currentPage: number;
  };
  row: {
    original: ContactByIdResponse;
  };
}
