import React from 'react'

function Rating({ data, color }) {
    return (
        <div className="rating">
            {data.map((item) => (
                <div>
                    <div>
                        <span>
                            <h6>{item.name}</h6>
                            <i style={{ color }}
                                className={item.rating >= 1 ?
                                    'fas fa-star' : item.rating >= 0.5 ?
                                        'fas fa-star-half-alt' : 'far fa-star'}></i>
                        </span>
                        <span>
                            <i style={{ color }}
                                className={item.rating >= 1 ?
                                    'fas fa-star' : item.rating >= 0.5 ?
                                        'fas fa-star-half-alt' : 'far fa-star'}></i>
                        </span>
                        <span>
                            <i style={{ color }}
                                className={item.rating >= 2 ?
                                    'fas fa-star' : item.rating >= 1.5 ?
                                        'fas fa-star-half-alt' : 'far fa-star'}></i>
                        </span>
                        <span>
                            <i style={{ color }}
                                className={item.rating >= 3 ?
                                    'fas fa-star' : item.rating >= 2.5 ?
                                        'fas fa-star-half-alt' : 'far fa-star'}></i>
                        </span>
                        <span>
                            <i style={{ color }}
                                className={item.rating >= 4 ?
                                    'fas fa-star' : item.rating >= 3.5 ?
                                        'fas fa-star-half-alt' : 'far fa-star'}></i>
                        </span>
                        <span>
                            <i style={{ color }}
                                className={item.rating >= 5 ?
                                    'fas fa-star' : item.rating >= 4.5 ?
                                        'fas fa-star-half-alt' : 'far fa-star'}></i>
                        </span></div>
                    <div>
                        <p>{item.date}</p>
                        <p>{item.comments}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}
Rating.defaultProps = {
    color: "#f8e825"
}

export default Rating
