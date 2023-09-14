import React, { createContext, useReducer } from "react";

const initialDocInfo = {
  content: "",
  version: 0,
  lastModified: "",
  shipName: "",
  status: "",
  createdAt: "",
  views: [""],
  createdBy: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  publishedBy: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  publishedOn: "",
  name: "",
  deleted: false,
  description: "",
  id: "",
  modifiedBy: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  },
  tags: [],
};

const initialState = {
  activeStep: 0,
  documentInfo: initialDocInfo,
  templateInfo: initialDocInfo,
  hideStepper: false,
  openSidebar: true,
  isDocContentDiffDetected: false,
  loadingState: {
    isLoading: false,
    loadingText: "",
  },
};

type DocumentInfoType = {
  content: string;
  version: number;
  lastModified: string;
  shipName: string;
  status: string;
  createdAt: string;
  views: Array<string>;
  createdBy: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  publishedBy: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  publishedOn: string;
  name: string;
  deleted: boolean;
  description: string;
  id: string;
  modifiedBy: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  tags: Array<string> | string;
};

interface InitialStateType {
  activeStep: number;
  documentInfo: DocumentInfoType;
  templateInfo: DocumentInfoType;
  hideStepper: boolean;
  openSidebar: boolean;
  isDocContentDiffDetected: boolean;
  loadingState: { isLoading: boolean; loadingText: string };
}

const globalReducer = (
  state: any,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case "OPEN_CLOSE_SIDE_BAR":
      return {
        ...state,
        openSidebar: action.payload,
      };
    case "ACTIVE_STEP":
      return {
        ...state,
        activeStep: action.payload,
      };
    case "UPDATE_DOCUMENT_DATA":
      console.log("UPDATE_DOCUMENT_DATA", action.payload);
      return {
        ...state,
        documentInfo:
          action.payload === undefined ? initialDocInfo : action.payload,
      };
    case "UPDATE_TEMPLATE_DATA":
      return {
        ...state,
        templateInfo:
          action.payload === undefined ? initialDocInfo : action.payload,
      };
    case "SHOW_AND_HIDE_STEPPER":
      return {
        ...state,
        hideStepper: action.payload,
      };
    case "DOC_CONTENT_DIFF_DETECTED":
      return {
        ...state,
        isDocContentDiffDetected: action.payload,
      };
    case "SET_LOADING":
      console.log("SET_LOADING", action.payload);
      return {
        ...state,
        loadingState: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalContextData = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const GlobalContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContextData.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContextData.Provider>
  );
};
