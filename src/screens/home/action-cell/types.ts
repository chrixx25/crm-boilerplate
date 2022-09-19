import { ContactByIdResponse } from "apis/contacts/types";

export interface ActionCellProps {
  id: string;
  firstName: string;
  initialState: {
    // [x: string]: any;
    page: number;
    pageSize: number;
    currentPage?: number;
    pageIndex?: number;
  };
  row: {
    original: ContactByIdResponse;
  };
}
