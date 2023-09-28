import React from 'react'

export const revalidate = 3600;

function Search({params: {locale}}: {params: {locale: string}}) {
  return (
    <div>Search {locale}</div>
  )
}

export default Search