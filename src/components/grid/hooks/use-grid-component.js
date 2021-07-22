import { useMemo } from 'react'

/**
 * @description get number of columns and rows
 * @param {number} cards number of cards to display
 * @typedef {number} Columns
 * @typedef {number} Rows
 * @returns {{Columns, Rows}} grid size
 */
export function useGridComponent (cards) {

    const { columns, rows } = useMemo (() => {

        const columns = Math.round (Math.sqrt (cards))
        const rows = Math.ceil (cards / columns)

        return {
            columns,
            rows,
        }

    }, [cards])

    return {
        columns,
        rows,
    }

}
