import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";

export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  // TODO: Hay que corregir el queryString que lo llega el key correcto
  const query = queryString.parse(location.search);
  const { searchText, formState, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  console.log(query);
  const onSearch = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    navigate(`?=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* <HeroCard /> */}

          <div className="alert alert-primary">Hero information</div>
          <div className="alert alert-danger">
            Not hero <b> {query.q}</b>
          </div>
        </div>
      </div>
    </>
  );
};
