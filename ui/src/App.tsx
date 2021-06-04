import React, {useEffect, useState} from 'react';
import './App.css';

interface Thing {
    id: string,
    title: string,
    body: string
}


function App(props: any) {
    const {getThings} = props;
    const [things, setThings] = useState<Thing[]>([]);

    useEffect(() => {
        getThings().then((data: Thing[]) => setThings(data))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                {things?.map(thing => <li key={thing.id} aria-label={thing.title}>{thing.body}</li>)}
            </header>
        </div>
    );
}

export default App;
