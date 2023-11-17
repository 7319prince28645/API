import Search from './search-filter/Search'
import Filter from './search-filter/Filter'

function SearchFilter() {
  return (
    <section className="flex flex-col gap-3 sm:flex sm:flex-row sm:justify-between mx-8 lg:mx-16">
    <Search />
    <Filter />
    </section>
  )
}

export default SearchFilter;