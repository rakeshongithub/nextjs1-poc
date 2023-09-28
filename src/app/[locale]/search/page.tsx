import React from 'react'

function Search({params: {locale}}: {params: {locale: string}}) {
  console.log({search: locale});
  return (
    <div>Search Testing Page - {locale}</div>
  )
}

export default Search