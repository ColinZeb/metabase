import type {
  QueryBuilderLoadingControls,
  QueryBuilderQueryStatus,
  QueryBuilderUIControls,
} from "metabase-types/store";

export const DEFAULT_UI_CONTROLS: QueryBuilderUIControls = {
  dataReferenceStack: null,
  isModifiedFromNotebook: false,
  isShowingDataReference: false,
  isShowingTemplateTagsEditor: false,
  isShowingNewbModal: false,
  isRunning: false,
  isShowingSummarySidebar: false,
  isShowingChartTypeSidebar: false,
  isShowingChartSettingsSidebar: false,
  isShowingQuestionInfoSidebar: false,
  isShowingTimelineSidebar: false,
  isShowingAIQuestionAnalysisSidebar: false,
  isNativeEditorOpen: false,
  initialChartSetting: {},
  isShowingRawTable: false, // table/viz toggle
  queryBuilderMode: "view", // "view" | "notebook" | "dataset"
  previousQueryBuilderMode: false,
  snippetCollectionId: null,
  datasetEditorTab: "query", // "query" / "metadata"
  isShowingQuestionDetailsSidebar: false,
  isShowingSnippetSidebar: false,
  isShowingNotebookNativePreview: false,
  notebookNativePreviewSidebarWidth: null,
  showSidebarTitle: false,
  modal: null,
  modalContext: null,
  highlightedNativeQueryLineNumbers: [],
};

export const DEFAULT_LOADING_CONTROLS: QueryBuilderLoadingControls = {
  showLoadCompleteFavicon: false,
  documentTitle: "",
  timeoutId: "",
};

export const DEFAULT_DASHBOARD_STATE = {
  dashboardId: null,
  isEditing: false,
};

export const DEFAULT_QUERY_STATUS: QueryBuilderQueryStatus = "idle";

export const UI_CONTROLS_SIDEBAR_DEFAULTS: Partial<QueryBuilderUIControls> = {
  isShowingSummarySidebar: false,
  isShowingChartSettingsSidebar: false,
  isShowingChartTypeSidebar: false,
  isShowingAIQuestionAnalysisSidebar: false,
  isShowingTimelineSidebar: false,
  isShowingQuestionInfoSidebar: false,
  isShowingDataReference: false,
};

// this is used to close other sidebar when one is updated
export const CLOSED_NATIVE_EDITOR_SIDEBARS: Partial<QueryBuilderUIControls> = {
  isShowingTemplateTagsEditor: false,
  isShowingSnippetSidebar: false,
  isShowingDataReference: false,
  isShowingTimelineSidebar: false,
};
