import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./list.style.css";
const List = () => {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const [items, setItems] = useState([]);
  const history = useHistory();

  const getData = async () => {
    const res = await fetch(
      `https://swapi.dev/api/species/?page=${page}&limit=3`
    );
    const data = await res.json();
    console.log(data);
    const total = res.headers.get("x-total-count");
    console.log(total);
    setItems(data.results);
  };
  useEffect(() => {
    getData();
  }, [page]);

  console.log(items);

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    setPage(currentPage);
  };

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  const val = items.filter((item) => {
    return Object.keys(item)?.some(
      (key) =>
        item[key]
          ?.toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      //
      //
    );
  });
  console.log("value", val);

  console.warn(filter);

  return (
    <div className="container">
      <div className="col-12 mb-5">
        <div className="mb=3 col-4 mx-auto text-center">
          <label className="form-label h3">Search</label>
          <input
            className="form-control"
            type="text"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </div>
      </div>
      <div className="row m-2">
        {val.map((item, ind) => {
          return (
            <div key={ind} className="col-sm-6 col-md-4 v my-2">
              <div className="card-big-shadow">
                <div
                  className="card card-just-text"
                  data-background="color"
                  data-color="purple"
                  data-radius="none"
                >
                  <div className="content">
                    <h2 className="category">{item.classification}</h2>
                    <h3 className="title">{item.name}</h3>
                    <Button
                      variant=""
                      onClick={() => history.push("/details", { item })}
                    >
                      View More Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={4}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default List;
