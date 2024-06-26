import { trackSchemaEvent } from "metabase/lib/analytics";
import * as Lib from "metabase-lib";

export const trackNewQuestionSaved = (
  draftQuestion,
  createdQuestion,
  isBasedOnExistingQuestion,
) => {
  trackSchemaEvent("question", "1-0-2", {
    event: "new_question_saved",
    question_id: createdQuestion.id(),
    database_id: createdQuestion.databaseId(),
    visualization_type: createdQuestion.display(),
    type: draftQuestion.creationType(),
    source: isBasedOnExistingQuestion ? "existing_question" : "from_scratch",
  });
};

export const trackTurnIntoModelClicked = question => {
  trackSchemaEvent("question", "1-0-2", {
    event: "turn_into_model_clicked",
    question_id: question.id(),
  });
};

export const trackNotebookNativePreviewShown = (question, isShown) => {
  trackSchemaEvent("question", "1-0-3", {
    event: isShown
      ? "notebook_native_preview_shown"
      : "notebook_native_preview_hidden",
    // question_id is not nullable in the schema, and we cannot change it
    question_id: question.id() ?? 0,
  });
};

export const trackColumnCombineViaShortcut = (query, question) => {
  trackSchemaEvent("question", "1-0-4", {
    event: "column_combine_via_shortcut",
    custom_expressions_used: ["concat"],
    database_id: Lib.databaseID(query),
    question_id: question?.id() ?? 0,
  });
};
