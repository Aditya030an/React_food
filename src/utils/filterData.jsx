function filterdata(searchInput, restorent) {
    return restorent.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

export default filterdata;