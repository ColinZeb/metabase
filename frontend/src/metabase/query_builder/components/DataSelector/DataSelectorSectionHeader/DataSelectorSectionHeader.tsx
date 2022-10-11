import React from "react";

import {
  DataSelectorSectionHeaderContainer as Container,
  DataSelectorSectionHeading as Heading,
} from "./DataSelectorSectionHeader.styled";

export type DataSelectorSectionHeaderProps = {
  header?: React.ReactElement;
};

const DataSelectorSectionHeader = ({
  header,
}: DataSelectorSectionHeaderProps) => (
  <Container>
    <Heading>{header}</Heading>
  </Container>
);

export default DataSelectorSectionHeader;
