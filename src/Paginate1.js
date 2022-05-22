    import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import arrow from './Images/arrow_left.svg'
import './App.css';
import emptyRep from './Images/emptyRep.svg'


function requestData(i, username) {
    console.log("https://api.github.com/users/" + username + "/repos?sort=created&per_page=4&page=" + i )
    return fetch("https://api.github.com/users/" + username + "/repos?sort=created&per_page=4&page=" + i)
        .then(response => { return response.json() })
}

const Items = ({ currentItems }) => {
    return (
        <div className="listContainer">
            {currentItems &&
                currentItems.map((item) => (
                    <div className="repContainer">
                        <a href={item.html_url} target="_blank"> {item.name} </a>
                        <p> {item.description} </p>
                    </div>
                ))}
        </div>
    );
}

const PaginatedItems = ({ itemsPerPage, profData }) => {
    let pageNum = 0;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    let activeNum = (document.getElementsByClassName("activeClassName").length) ? parseInt(document.getElementsByClassName("activeClassName")[0].innerHTML) : 1;
    useEffect(() => {
        setItemOffset(0);
        setPageCount(profData.public_repos);
        requestData(activeNum, profData.login).then(data => { console.log(data); setCurrentItems(data) });
    }, [profData]);

    const handlePageClick = (event) => {
        console.log(event.selected);
         requestData(event.selected+1, profData.login)
        .then(data => { console.log(data);setCurrentItems(data)})
    const newOffset = (event.selected * itemsPerPage) % pageCount;
        setItemOffset(newOffset);
       
    };
    if (currentItems != []) pageNum = currentItems.length;
    if (pageCount)
        return (
            <div className="pagTitle">
                <div className="reposies"> Repositories({pageCount}) </div>
            <div className="paginateContainer">
               
            <Items currentItems={currentItems} />
            <div className="counter"> {itemOffset + 1} - {itemOffset + pageNum} of {pageCount}
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                    pageCount={pageCount / 4}
                    renderOnZeroPageCount={null}
                previousLabel="<"
                containerClassName="containerClassName"
                pageClassName="pageClassName"
                pageLinkClassName="pageLinkClassName"
                previousClassName=" previousClassName"
                previousLinkClassName="previousLinkClassName"
                nextClassName=" nextClassName"
                nextLinkClassName="nextLinkClassName"
                activeClassName="activeClassName"
                />
            </div>
                </div>
                </div>
        );
    else if (profData.message != "Not Found") return (<div className="emptyRepList">  <img src={emptyRep} /> <br /> Repository list is empty </div>)
}

export default PaginatedItems