import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Restaurants from './Restaurants'
import SearchAddress from "./SearchAddress";
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantAction'


function Home() {
  const dispatch = useDispatch();
  const restaurantReducer = useSelector(state => state.restaurantReducer)
  const { loading, error, restaurants } = restaurantReducer
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(listRestaurants())
  }, [dispatch]);

  return (
    <>
      {/* <SearchAddress /> */}
      {loading ? null : error ? <h4>Error!</h4> :
        <Row>
          <input value={filter}
            placeholder="Search a place here"
            type="text"
            onChange={event => setFilter(event.target.value)} />

          {restaurants ?
            (restaurants.filter(item => {
              if (filter === "") {
                return item
              }
              else if (item.neighborhood.toLowerCase().includes(filter.toLowerCase())) {
                return item
              }
            })
              .map(item => (
                <Col sm={12} md={8} lg={6} xl={3}>
                  <Restaurants item={item} />
                </Col>
              ))
            ) : ("Error")}
        </Row>
      }
    </>
  );
}

export default Home
