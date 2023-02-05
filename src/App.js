import "./App.css";
// Lib imports
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

// Components imports
import NavigationBar from "./components/NavigationBar";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import ListBody from "./components/ListBody";
import PaginationBar from "./components/PaginationBar";

// Constant imports
import { URL_BY_DATE, URL_BY_RELEVENCE } from "./Utils/constant";

function App() {
  //States
  const [newsData, setNewsData] = useState();
  const [popularity, setPopularity] = useState("Popularity");
  const [stories, setStories] = useState("Stories");
  const [date, setDate] = useState("All");
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [url, setUrl] = useState(URL_BY_RELEVENCE);

  //UseEffect
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(url, {
        params: {
          page: currentPage,
          query,
        },
      });
      const { hits, nbPages } = data;
      setTotalPages(nbPages);
      setLoading(false);
      setNewsData(hits);
    };
    fetchData();
  }, [currentPage, date, query, url, stories]);

  //Handler Functions
  const onInputChangeHandler = (event) => {
    // Debouncing implementation
    const identifier = setTimeout(() => {
      setQuery(event.target.value);
      console.log(event.target.value);
    }, 500);

    return () => clearTimeout(identifier);
  };

  const onStoriesOptionChangeHandler = (event) => {
    setStories(event.target.value);
  };

  const onDateOptionChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const onPopularityOptionChangeHandler = (event) => {
    if (event.target.value === "Date") {
      setUrl(URL_BY_DATE);
    } else {
      setUrl(URL_BY_RELEVENCE);
    }
    setPopularity(event.target.value);
  };
  const onPageChangeHandler = (event) => {
    setCurrentPage(event.selected);
  };
  // JSX Implementation
  return (
    <div className="container lg bg-orange-50">
      <NavigationBar onInputChange={onInputChangeHandler} />
      <FilterBar
        onStoriesOptionChangeHandler={onStoriesOptionChangeHandler}
        onDateOptionChangeHandler={onDateOptionChangeHandler}
        onPopularityOptionChangeHandler={onPopularityOptionChangeHandler}
      />

      {!loading && <ListBody data={newsData} />}
      {loading && (
        <div
          style={{
            marginLeft: "41.5rem",
            marginRight: "41.5rem",
          }}
        >
          <ColorRing
            visible={true}
            height="200"
            width="200"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#b8c480", "#B2A3B5", "#F4442E", "#51E5FF", "#429EA6"]}
          />
        </div>
      )}

      <PaginationBar
        handlePageChange={onPageChangeHandler}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}

export default App;
