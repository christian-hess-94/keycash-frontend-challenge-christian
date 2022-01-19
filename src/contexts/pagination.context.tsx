import React, {useContext} from 'react';
import {createContext, useState} from 'react';
import {Housing} from '../interfaces/housing.interfaces';

interface PaginationContextData {
  itemsPerPage: '5' | '10' | '15';
  currentPage: number;
  lastPage: number;
  nextPage: () => void;
  previousPage: () => void;
  calculateNumberOfPages: (arr: Housing[]) => void;

  setItemsPerPage: React.Dispatch<React.SetStateAction<'5' | '10' | '15'>>;
}

const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData,
);

export const PaginationProvider: React.FC = ({children}) => {
  const [itemsPerPage, setItemsPerPage] = useState<'5' | '10' | '15'>('5');
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const calculateNumberOfPages = (housingArray: Housing[]) => {
    const numberOfPages = housingArray.length / parseInt(itemsPerPage, 10);
    setLastPage(numberOfPages - 1);
    setCurrentPage(0);
  };

  const nextPage = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage !== 0) {
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
