import React from 'react';
import usePagination from '../../contexts/pagination.context';
import {
  PaginationHeaderButton,
  PaginationHeaderContainer,
  PaginationHeaderText,
} from './styles';

interface PaginationHeaderProps {}

const PaginationHeader: React.FunctionComponent<
  PaginationHeaderProps
> = ({}) => {
  const {previousPage, nextPage, currentPage, lastPage} = usePagination();
  return (
    <PaginationHeaderContainer>
      <PaginationHeaderButton title="Back" onPress={previousPage} />
      <PaginationHeaderText>
        {currentPage} / {lastPage}
      </PaginationHeaderText>
      <PaginationHeaderButton title="Next" onPress={nextPage} />
    </PaginationHeaderContainer>
  );
};

export default PaginationHeader;
