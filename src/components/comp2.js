import React, { useState } from "react";
import axios from "axios";
import { Resizable, ResizableBox } from "react-resizable";

function Comp2() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  function addData() {
    let tempData = {
      id: id,
      name: name,
      email: email,
    };
    axios
      .post("http://localhost:8080/comp2/add", tempData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("hello");
      })
      .catch(() => {
        console.log("something went wrong");
      });
  }
  function updateData() {
    let tempData = {
      id: id,
      name: name,
      email: email,
    };
    axios
      .patch("http://localhost:8080/comp2/update", tempData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("hello");
      })
      .catch(() => {
        console.log("something went wrong");
      });
  }
  return (
    <ResizableBox
      className="container"
      width={980}
      height={400}
      maxConstraints={[800, 400]}
      handle={<i className="fa fa-car"></i>}
      resizeHandles={["se"]}
    >
      <div style={{ color: "black" }}>
        <h1>
          <b>Window-2</b>
        </h1>
        <form>
          <div className="form-group">
            <div style={{ margin: "4px" }}>
              <label>Your ID no.</label>
              <input type="number" className="form-control"  value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}></input>
            </div>
            <div style={{ margin: "4px" }}>
              <label>Your Email</label>
              <input type="email" className="form-control" value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}></input>
            </div>
            <div style={{ margin: "4px" }}>
              <label>Your Name</label>
              <input type="text" className="form-control"value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}></input>
            </div>
          </div>
        </form>
        <div className="content">
          <button type="button" className="btn btn-success" onClick={addData}>
            Add
          </button>
          <button type="button" className="btn btn-danger" onClick={updateData}>
            Update
          </button>
        </div>
      </div>
    </ResizableBox>
    // <div className="container2">
    //     <h1>Window-2</h1>
    //     <p>Component-2</p>
    // </div>
  );
}

export default Comp2;
