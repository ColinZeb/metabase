import React from "react";

import { formatParameterValue } from "metabase/parameters/utils/formatting";
import { UiParameter, FieldFilterUiParameter } from "metabase/parameters/types";
import ParameterFieldWidgetValue from "metabase/parameters/components/widgets/ParameterFieldWidget/ParameterFieldWidgetValue/ParameterFieldWidgetValue";

type FormattedParameterValueProps = {
  parameter: UiParameter;
  value: any;
  placeholder?: string;
};

function FormattedParameterValue({
  parameter,
  value,
  placeholder,
}: FormattedParameterValueProps) {
  if (value == null) {
    return placeholder;
  }

  if (hasFields(parameter)) {
    return (
      <ParameterFieldWidgetValue fields={parameter.fields} value={value} />
    );
  }

  return <span>{formatParameterValue(parameter, value)}</span>;
}

function hasFields(
  parameter: UiParameter,
): parameter is FieldFilterUiParameter {
  return !!(parameter as FieldFilterUiParameter).fields;
}

export default FormattedParameterValue;
