import React from "react";
import {BsSearch} from "react-icons/bs"

export default function SearchBar() {
  return (
    <form className="search flex-fill d-flex align-items-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-end pe-5 border-success"
          placeholder="جستجوی فست فود..."
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3"/>
      </div>
    </form>
  );
}
