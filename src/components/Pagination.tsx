import React, { useCallback, useMemo } from 'react'
import clsx from 'clsx'

interface PaginationProps {
  currentPage: number
  totalPages: number
  innerWindow?: number
  outerWindow?: number
  onChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, innerWindow = 2, outerWindow = 1, onChange }: PaginationProps) {
  const handleClick = useCallback((page: number | boolean) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof page === 'number') onChange(page)
  }, [onChange])

  const items = useMemo(() => {
    const leftInner = [], rightInner = [],
      leftOuter = [], rightOuter = []

    for (let i = 1; i <= innerWindow; i++) {
      const prevPage = currentPage - i
      const nextPage = currentPage + i
      if (prevPage > 0) leftInner.unshift(prevPage)
      if (nextPage <= totalPages) rightInner.push(nextPage)
    }

    for (let i = 1; i <= outerWindow; i++) {
      const startPage = 1
      const endPage = totalPages
      if (leftInner.length > 0 && !leftInner.includes(startPage)) leftOuter.push(startPage)
      if (rightInner.length > 0 && !rightInner.includes(endPage)) rightOuter.unshift(endPage)
    }

    const leftTruncated = leftOuter[leftOuter.length - 1] < leftInner[0] - 1
    const rightTruncated = rightInner[rightInner.length - 1] < rightOuter[0] - 1

    return [...leftOuter, leftTruncated, ...leftInner, currentPage, ...rightInner, rightTruncated, ...rightOuter]
  }, [outerWindow, innerWindow, totalPages, currentPage])

  return (
    <ul className='pagination'>
      {currentPage > 1 && (
        <li className='page-item'>
          <a
            className='page-link d-none d-md-block'
            href='#'
            onClick={handleClick(currentPage - 1)}
          >
            <i className='lni lni-arrow-left mr-1' />

          </a>
        </li>
      )}
      {items.map((item, idx) => {
        if (item === false) return null

        const isTruncate = item === true

        return (
          <li
            key={idx}
            className={clsx(
              'page-item',
              isTruncate && 'disabled',
              item === currentPage && 'active'
            )}
          >
            <a
              className='page-link'
              href='#'
              onClick={handleClick(item)}
            >
              {isTruncate ? '...' : item}
            </a>
          </li>
        )
      })}
      {currentPage < totalPages && (
        <li className='page-item'>
          <a
            className='page-link d-none d-md-block'
            href='#'
            onClick={handleClick(currentPage + 1)}
          >
            <i className='lni lni-arrow-right ml-1' />
          </a>
        </li>
      )}
    </ul>
  )
}