import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

test('renders data from api', async () => {
    const things = [{id: '1', title: 'foo', body: 'thing1'}, {id: '2', title: 'bar', body: 'thing2'}]
    const getThings = jest.fn(() => Promise.resolve(things));

    render(<App getThings={getThings}/>);

    await waitFor(() => {
        expect(screen.getByText('thing1')).toBeInTheDocument();
        expect(screen.getByText('thing2')).toBeInTheDocument();
    })

});
