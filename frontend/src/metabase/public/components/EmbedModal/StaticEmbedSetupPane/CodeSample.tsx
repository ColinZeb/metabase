import cx from "classnames";
import { type ChangeEvent, useMemo } from "react";

import type { CodeLanguage } from "metabase/common/components/CodeEditor";
import { CodeEditor } from "metabase/common/components/CodeEditor";
import { CopyButton } from "metabase/common/components/CopyButton";
import Select, { Option } from "metabase/common/components/Select";
import CS from "metabase/css/core/index.css";
import type { CodeSampleOption } from "metabase/public/lib/types";

import { CopyButtonContainer } from "./CodeSample.styled";
import { getHighlightedRanges } from "./utils";

interface CodeSampleProps {
  selectedOptionId: CodeSampleOption["id"];
  source: string;
  languageOptions: CodeSampleOption[];
  title?: string;
  language: CodeLanguage;
  highlightedTexts?: string[];

  dataTestId?: string;
  className?: string;

  onChangeOption: (optionName: string) => void;
  onCopy?: () => void;
}

export const CodeSample = ({
  selectedOptionId,
  source,
  title,
  languageOptions,
  highlightedTexts,
  dataTestId,
  language,
  className,
  onChangeOption,
  onCopy,
}: CodeSampleProps): JSX.Element => {
  const highlightRanges = useMemo(
    () => getHighlightedRanges(source, highlightedTexts),
    [source, highlightedTexts],
  );

  return (
    <div className={className} data-testid={dataTestId}>
      {(title || languageOptions.length > 1) && (
        <div className={cx(CS.flex, CS.alignCenter)}>
          {title && <h4>{title}</h4>}
          {languageOptions.length > 1 ? (
            <Select
              className={CS.mlAuto}
              value={selectedOptionId}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                onChangeOption(e.target.value)
              }
              buttonProps={{
                dataTestId,
              }}
            >
              {languageOptions.map((option) => (
                <Option key={option.id} value={option.id}>
                  {option.name}
                </Option>
              ))}
            </Select>
          ) : null}
        </div>
      )}
      <div
        className={cx(
          CS.bordered,
          CS.rounded,
          CS.shadowed,
          CS.relative,
          CS.mt2,
          CS.overflowHidden,
        )}
      >
        <CodeEditor
          className={CS.z1}
          language={language}
          highlightRanges={highlightRanges}
          readOnly
          value={source}
        />
        {source && (
          <CopyButtonContainer>
            <CopyButton className={CS.p1} value={source} onCopy={onCopy} />
          </CopyButtonContainer>
        )}
      </div>
    </div>
  );
};
