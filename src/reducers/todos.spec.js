import todos from './todos'

describe('todos reducer', () => {
    it('should handle initial state', () => {
        expect(
            todos(undefined, {})
        ).toEqual([])
    });

    it('should handle ADD_TODO', () => {
        expect(
            todos([], {
                type: 'ADD_TODO',
                text: 'Test text',
                id: 0
            })
        ).toEqual([
            {
                text: 'Test text',
                completed: false,
                id: 0
            }
        ])

        expect(
            todos([
                {
                    text: 'Test text',
                    completed: false,
                    id: 0
                }
            ], {
                type: 'ADD_TODO',
                text: 'Test text again',
                id: 1
            })
        ).toEqual([
            {
                text: 'Test text',
                completed: false,
                id: 0
            }, {
                text: 'Test text again',
                completed: false,
                id: 1
            }
        ])

        expect(
            todos([
                {
                    text: 'Test text',
                    completed: false,
                    id: 0
                }, {
                    text: 'Test text again',
                    completed: false,
                    id: 1
                }
            ], {
                type: 'ADD_TODO',
                text: 'And again ...',
                id: 2
            })
        ).toEqual([
            {
                text: 'Test text',
                completed: false,
                id: 0
            }, {
                text: 'Test text again',
                completed: false,
                id: 1
            }, {
                text: 'And again ...',
                completed: false,
                id: 2
            }
        ])
    })

    it('should handle TOGGLE_TODO', () => {
        expect(
            todos([
                {
                    text: 'Test text',
                    completed: false,
                    id: 1
                }, {
                    text: 'Test text again',
                    completed: false,
                    id: 0
                }
            ], {
                type: 'TOGGLE_TODO',
                id: 1
            })
        ).toEqual([
            {
                text: 'Test text',
                completed: true,
                id: 1
            }, {
                text: 'Test text again',
                completed: false,
                id: 0
            }
        ]);
    });
});
