import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest, } from 'msw';
import { setupServer } from 'msw/node';
import RickandMorty from './RandMFN';
import mockData from '../services/mockData.json'
import { MemoryRouter } from 'react-router';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
            return res(
                    ctx.json(mockData)
            );
        }
    )
);

describe('Rick and Morty Character container', async() => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('fetches a list of Rick and Morty characters', async () => {
        render(
            <MemoryRouter>
                <RickandMorty />           
            </MemoryRouter>
        );

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'characters'})
        expect(ul).not.toBeEmptyDOMElement();
        expect(ul).toMatchSnapshot();
    });

});
