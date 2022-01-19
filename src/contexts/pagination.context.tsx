import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import {Housing} from '../interfaces/housing.interfaces';

export enum ItemsPerPageOptions {
  FIVE = '5',
  TEN = '10',
  FIFTEEN = '15',
}
interface PaginationContextData {
  itemsPerPage: ItemsPerPageOptions;
  currentPage: number;
  lastPage: number;
  nextPage: () => void;
  previousPage: () => void;
  calculateNumberOfPages: (arr: Housing[], ipp?: ItemsPerPageOptions) => void;

  setItemsPerPage: React.Dispatch<React.SetStateAction<ItemsPerPageOptions>>;
}

const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData,
);

export const PaginationProvider: React.FC = ({children}) => {
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPageOptions>(
    ItemsPerPageOptions.FIVE,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  const calculateNumberOfPages = (
    housingArray: Housing[],
    ipp?: ItemsPerPageOptions,
  ) => {
    const numberOfPages = Math.ceil(
      housingArray.length / parseInt(ipp || itemsPerPage, 10),
    );
    setLastPage(numberOfPages);
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <PaginationContext.Provider
      value={{
        setItemsPerPage,
        calculateNumberOfPages,
        itemsPerPage,
        lastPage,
        currentPage,
        nextPage,
        previousPage,
      }}>
      {children}
    </PaginationContext.Provider>
  );
};

const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within PaginationContext');
  }
  return context;
};

export default usePagination;
