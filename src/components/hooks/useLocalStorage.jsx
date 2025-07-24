import { useState, useEffect } from 'react';
import { snippets } from '../../backend/snippets';
const LOCAL_STORAGE_KEY = 'searches';

const useLocalStorage = (initialValue = []) => {
    const [searches, setSearches] = useState(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : initialValue;
    });

    // Initialize current search from the last opened search
    const [currentSearch, setCurrentSearch] = useState(() => {
        const stored = localStorage.getItem('currentSearch');
        return stored ? JSON.parse(stored) : null;
    });

    // Sync state changes with localStorage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(searches));
    }, [searches]);

    // Sync currentSearch with localStorage
    useEffect(() => {
        localStorage.setItem('currentSearch', JSON.stringify(currentSearch));
    }, [currentSearch]);

    // Create a new search result and add it to the state
    const addSearchResult = (queryString) => {
    const randomZeroOrOne = Math.random() < 0.5 ? 0 : 1;
        const newResult = {
            id: queryString + Date.now().toString(),
            createDate: Date.now(),
            query: queryString,
            result: snippets[0].responseValue,
            components: snippets[0].components,
        };

        setSearches((prevSearches) => [...prevSearches, newResult]);
        setCurrentSearch(newResult);
    };
    // Remove a search result by its id
    const deleteSearchResult = (id) => {
        setSearches((prevSearches) =>
            prevSearches.filter((search) => search.id !== id)
        );

        // Reset the current search if you delete the current one. 
        if (currentSearch && currentSearch.id === id) {
            setCurrentSearch(null);
        }
    };

    // Set the current search result by id
    const selectSearchResult = (id) => {
        const search = searches.find((search) => search.id === id);
        if (search) {
            setCurrentSearch(search);
        }
    };

    return {
        currentSearch,
        searches,
        addSearchResult,
        deleteSearchResult,
        selectSearchResult,
    };
};

export default useLocalStorage;
