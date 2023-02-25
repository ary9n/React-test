import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import dataLog from "./components/data" 

const cards = dataLog.map((data1) => <Card
                                        openSpots={data1.openSpots}
                                        title={data1.title}
                                        coverImg={data1.coverImg}
                                        rating={data1.stats.rating}
                                        reviewCount={data1.stats.reviewCount}
                                        location={data1.location}
                                        description={data1.description}
                                        price={data1.price} />)
                                        
export default function App(){
    return(
        <div>
            <Header />
            <Hero />
            <div className="d-flex mb-3">
                {cards}
            </div>
        </div>
    )
}