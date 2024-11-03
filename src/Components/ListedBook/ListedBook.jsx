import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';

const ListedBook = () => {

    const [readList , setReadList] = useState([]);

    const allBooks = useLoaderData();

    useEffect( () => {

        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);

    } ,[])


    return (
        <div>
            <h3 className='text-3xl my-8'>Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List </Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                     <h2 className='text-2xl'>Book I Read {readList.length}</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center'>
                     {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                     }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>


        </div>

    );
};

export default ListedBook;